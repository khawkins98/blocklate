# Blocklate

Blocklate is a small browser tool for translating XLIFF files exported from Drupal's translation tab (TMGMT), where the page body is Gutenberg block markup.

Translators see only the readable text. HTML tags, Gutenberg block comments and layout code stay hidden, and are put back unchanged when the translated file is downloaded.

Everything runs in the browser. Files are never uploaded anywhere.

**Use it:** https://khawkins98.github.io/blocklate/

## For translators

1. Open the `.xlf` file you were sent, or drag it onto the page.
2. Type your translation next to each English line.
3. Small orange markers like `{1}…{/1}` mark links or bold text inside a sentence. Keep them around the words that should stay linked or bold. Click a marker on the English side to insert it.
4. Your work is saved in your browser as you type. When you're done, press **Download translated file** and send it back.

## Getting a file out of Drupal

1. Open the page's **Translate** tab.
2. Tick the target language and press **Request translation**.
3. Scroll down and press the blue button to submit the job.
4. Follow the "here" link to download the `.xlf` file.

When the translated file comes back, upload it on the job's review page in Drupal.

## Examples

The **Examples** menu loads files from [`examples/`](examples/):

| File | What it shows |
| --- | --- |
| `gutenberg-block-markup_en_es.xlf` | A short synthetic example page written for this project, in the format Drupal uses when processing is off: raw HTML with `<!-- wp:… -->` block comments. Default file loaded on start. |
| `undrr-homepage_en_fr.xlf` | A real UNDRR homepage export with "extended XLIFF processing" on. |
| `undrr-homepage_en_fr_partial.xlf` | The same file with a few lines already translated into French, to show reopening work in progress. |

Link straight to one with `?example=1` (counting from 0), or open a blank editor with `?blank`.

## What it handles

- XLIFF 1.2 as exported by Drupal TMGMT, in both modes:
  - "Extended XLIFF processing" on: markup arrives as `<bpt>`, `<ept>`, `<ph>` and `<x>` elements.
  - Processing off: raw HTML and `<!-- wp:… -->` block comments inside CDATA.
- Lines are split at block boundaries (headings, paragraphs, buttons, list items and so on). Inline tags (`a`, `strong`, `em`, `br`…) become numbered markers.
- Image alt text is offered for translation.
- Technical fields (domain IDs, langcodes, path aliases) are hidden and copied as they are.
- Markers are checked before download, so a broken tag can't reach Drupal.
- Live page preview, autosave in the browser, and reopening a partly translated file.

## Known limits

- With "extended XLIFF processing" on, Drupal removes Gutenberg block comments and `<style>` contents during export. Blocklate cannot restore them, so the imported page may show as a single classic block. Turn the option off in the TMGMT XLIFF translator settings to keep the Gutenberg markup.
- Text stored only inside block comment attributes (the JSON in `<!-- wp:… {…} -->`) is not offered for translation.
- XLIFF 2 files are not supported.

## Development

The whole app is `index.html`, with no build step. Serve the folder with any static server (for example `python3 -m http.server`) so the Examples menu can load files; opening `index.html` straight from disk works but the examples won't load.

To add an example, put the file in `examples/` and add it to the `EXAMPLES` list near the end of `index.html`.

### Commit messages

This repo keeps AI attribution trailers (such as `Co-Authored-By: Claude …`) out of commit messages. Turn on the hook once per clone:

```sh
git config core.hooksPath .githooks
```

Record changes in [CHANGELOG.md](CHANGELOG.md).

## License

[MIT](LICENSE)
