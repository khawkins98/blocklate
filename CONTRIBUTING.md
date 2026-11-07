# Contributing

## Serve the app

The app is `index.html`; there are no package dependencies or build step.
From the repository root, use Python 3 or another static HTTP server:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Open <http://127.0.0.1:8000/>. Keep the server running while using the app; stop it
with Ctrl+C when finished. Opening `index.html` directly works for your own files,
but the Examples menu needs HTTP to fetch [examples/](examples/).

To add an example, put it in `examples/` and add it to `EXAMPLES` near the end of
`index.html`. Use the synthetic example for disposable test edits.

## Test changes

Tests need Node.js, Google Chrome at
`/Applications/Google Chrome.app/Contents/MacOS/Google Chrome`, and port 8999 free.
No `npm install` is needed. In another terminal, run:

```sh
npm test
```

This launches the browser suite through `test-runner.js`.
On another platform, serve the folder and open `/test-runner.html` in your browser
instead. Wait for its final summary. Tests cover markers, AI-response parsing,
prompt generation and example-file serialization; they do not call real AI tools
or import into Drupal.

For editor/AI changes, also try opening a file, entering a translation, downloading
and reopening it. Check preservation of existing translations and formatting.
Report which paths were checked and any missing browser or Drupal validation.

## Commits and pull requests

This repo keeps AI attribution trailers (such as `Co-Authored-By: Claude …`) out of
commit messages. Enable its hook once per clone with:

```sh
git config core.hooksPath .githooks
```

PR titles become squash-merge subjects on `main`: use an imperative title under
72 characters, without prefixes such as `feature/` or `WIP:`. Record changes in
[CHANGELOG.md](CHANGELOG.md).

## Maintain the documentation

Keep the initial translation/Drupal handoff and export limits in README, the full
AI round trip in [AI_TRANSLATION.md](AI_TRANSLATION.md), and contributor commands
here. Keep in-app help and control labels consistent with those paths. Preserve
the product introduction and dated changelog; update the relevant guide instead
of appending detailed implementation or feature recaps to README.
