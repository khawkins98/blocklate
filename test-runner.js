const http = require("http");
const fs = require("fs");
const path = require("path");
const { spawn } = require("child_process");

const PORT = 8999;
let testCompleted = false;

const server = http.createServer((req, res) => {
  if (req.method === "POST" && req.url === "/__test_done__") {
    let body = "";
    req.on("data", chunk => { body += chunk; });
    req.on("end", () => {
      res.writeHead(200);
      res.end("OK");
      testCompleted = true;

      try {
        const results = JSON.parse(body);
        console.log("\n========================================================");
        console.log(`Blocklate AI Translation & Reconciliation Test Suite`);
        console.log(`Results: ${results.passed} / ${results.total} passed (${results.failed} failed)`);
        console.log("========================================================\n");

        results.tests.forEach((t) => {
          const status = t.pass ? "PASS" : "FAIL";
          console.log(`  [${status}] ${t.desc}`);
        });

        if (results.failed === 0) {
          console.log("\n✓ All tests passed successfully!\n");
          cleanup(0);
        } else {
          console.error(`\n✗ ${results.failed} test(s) failed!\n`);
          cleanup(1);
        }
      } catch (e) {
        console.error("Error parsing test results payload:", e);
        cleanup(1);
      }
    });
    return;
  }

  let reqPath = req.url.split("?")[0];
  if (reqPath === "/") reqPath = "/test-runner.html";
  const filePath = path.join(__dirname, reqPath);

  if (!fs.existsSync(filePath)) {
    res.writeHead(404);
    res.end("Not found: " + reqPath);
    return;
  }

  const ext = path.extname(filePath);
  let contentType = "text/plain";
  if (ext === ".html") contentType = "text/html";
  else if (ext === ".xlf") contentType = "application/xml";
  else if (ext === ".js") contentType = "application/javascript";
  else if (ext === ".css") contentType = "text/css";

  res.writeHead(200, { "Content-Type": contentType });
  fs.createReadStream(filePath).pipe(res);
});

let chromeProcess = null;

function cleanup(exitCode) {
  if (chromeProcess) {
    try { chromeProcess.kill("SIGKILL"); } catch (e) {}
  }
  server.close(() => {
    process.exit(exitCode);
  });
  setTimeout(() => process.exit(exitCode), 1000);
}

server.listen(PORT, () => {
  const chromePath = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
  chromeProcess = spawn(chromePath, [
    "--headless=new",
    "--disable-gpu",
    "--remote-allow-origins=*",
    `http://127.0.0.1:${PORT}/test-runner.html`
  ]);

  chromeProcess.on("error", (err) => {
    console.error("Failed to start Chrome:", err);
    cleanup(1);
  });

  // 15 second safety timeout
  setTimeout(() => {
    if (!testCompleted) {
      console.error("Timeout waiting for tests to finish!");
      cleanup(1);
    }
  }, 15000);
});
