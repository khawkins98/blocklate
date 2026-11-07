# Translate with AI

Start by [opening your XLIFF file in Blocklate](README.md#for-translators).
Download a copy first if you want to keep the current translations separately.

1. Choose **Translate with AI…**. In **Setup**, select the tone, optionally add
   **Custom Terminology & Brand Rules**, and choose whether to include only
   untranslated lines.
2. Choose **Next: Generate Prompt →**. In **Prompt**, inspect the text and edit it
   if needed. Use **Copy Prompt** or **Download .txt**. If clipboard copying fails,
   select and copy the prompt text manually.
3. Choose **Next: Open AI Tool →**, open your preferred assistant and paste the
   prompt. This sends its text and custom rules to that external service;
   Blocklate does not call an AI API. Keep the `[ID]` line prefixes and
   `{1}…{/1}` / `{br}` formatting markers in the response. Copy the translated response or save it as text, then return
   to Blocklate.
4. Choose **Next: Paste Translation →** and paste into **Paste Back**, or drop a
   `.txt` response. Use the **Missing** and **Issues only** filters to review the
   reconciliation table. For a continued response, use
   **+ Append Chunk (for long AI outputs)** and **Append Lines**. A later chunk can replace an earlier response for the
   same line ID.
5. Keep **Preserve existing manual translations in the editor** checked to protect
   filled lines, including translations loaded from the file. Choose
   **Apply Translations to Editor →**, then **Review in Editor**. Check the wording
   and formatting beside the source; an **AI Draft** badge is a review cue.
6. Fix marker issues and fill missing translations, then choose
   **Download translated file**. [Return it to the site editor](README.md#getting-a-file-out-of-drupal)
   for upload and review in Drupal. Empty lines retain their source text.

**Undo AI Import** restores the snapshot from just before the latest import in
this session. It also replaces edits made after that import, so download a copy
first if you need to keep those edits. Reloading or opening a file clears the
in-memory undo snapshot; browser draft recovery is a separate mechanism.

The reconciliation table checks line matching and markers. It does not establish
translation accuracy. Missing or invalid lines still need review even when the
rest of a response matched.
