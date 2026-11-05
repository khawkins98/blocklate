# Blocklate

Blocklate is a small browser tool for translating XLIFF files exported from Drupal's translation tab (TMGMT), where the page body is Gutenberg block markup.

Translators see only the readable text. HTML tags, Gutenberg block comments and layout code stay hidden, and are put back unchanged when the translated file is downloaded.

Everything runs in the browser. Blocklate does not upload your XLIFF file.

**[Use Blocklate](https://khawkins98.github.io/blocklate/)**

## For translators

The app starts with an example. Choose **Open file…** for your own work; changes
to examples are not saved.

1. Open the `.xlf` file you were sent, or drag it onto the page.
2. Type your translation next to each source line.
3. Orange markers like `{1}…{/1}` mark links or bold text. Keep them around the
   corresponding translated words. Click a marker on the source side to insert
   it; select translated words first to wrap them with the marker pair.
4. Choose **Download translated file** and send that `.xlf` back to the site editor.
   Marker problems block download; use **Needs fixing** to find them. Empty lines
   keep the source text if you choose **Download anyway**.

For your own files, drafts are saved in this browser. Reopen the same original
file here to recover them. Browser storage can be cleared or unavailable; download
a copy to keep or share your work. You can reopen a downloaded, partly translated
file to continue on another browser or computer.

**Ctrl+Enter** (**⌘+Enter** on Mac) jumps to the next line needing translation.

## Translate with AI

Choose **Translate with AI…** to prepare a prompt, use your preferred AI assistant,
then bring its response back for review. Pasting the prompt into that assistant
sends the included text and custom rules to its service.

The [AI translation guide](AI_TRANSLATION.md) covers prompt copying, continued
responses, preserving manual translations, review and undo. **Ctrl+Shift+A**
(**⌘+Shift+A** on Mac) opens the dialog.

## Getting a file out of Drupal

1. Open the page's **Translate** tab.
2. Tick the target language and press **Request translation**.
3. Submit the translation job.
4. Follow the "here" link to download the `.xlf` file and send it to the translator.

When the translated file comes back, upload it on that job's review page in Drupal
and check the page there. Blocklate's preview does not include your site's styling;
marker validation checks formatting, not translation quality or the Drupal import.

## Supported files and limits

- XLIFF 1.2 from Drupal TMGMT, with extended processing on or off. XLIFF 2 is not supported.
- With **extended XLIFF processing** on, Drupal removes Gutenberg block comments
  and `<style>` contents during export. Blocklate cannot restore them, so the
  imported page may show as a single classic block. Turn the option off in the
  TMGMT XLIFF translator settings to keep the Gutenberg markup.
- Text stored only in block-comment JSON attributes is not offered for translation.
  Image alt text is offered. Technical fields are copied automatically; source
  language-code fields are set to the target language.

## Examples

The **Examples** menu loads files from [examples/](examples/):

| File | What it shows |
| --- | --- |
| `gutenberg-block-markup_en_es.xlf` | Synthetic page with raw HTML and Gutenberg comments; processing off. Default example. |
| `undrr-homepage_en_fr.xlf` | Real UNDRR homepage export; extended processing on. |
| `undrr-homepage_en_fr_partial.xlf` | The same export with some French translations already filled in. |

Link to an example with `?example=1` (counting from 0), or start an empty editor
with `?blank`.

## Development

[Contributing](CONTRIBUTING.md) covers local serving, tests, examples and PRs.
There is no build step.

## License

[MIT](LICENSE)
