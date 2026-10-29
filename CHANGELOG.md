# Changelog

All notable changes to Blocklate are listed here. The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [Unreleased]

### Added

- AI bulk translation stepper workflow ("Translate with AI…") to export translatable lines into an LLM-friendly prompt format and paste translated responses back.
- Expandable Custom Terminology & Brand Rules in Step 1, injecting project-specific rules into Section 4 of the generated AI prompt.
- Estimated token & context comfort indicator in Step 1 showing model fit (free ChatGPT, Claude, and Gemini).
- Expanded tone guidance options in Step 1 (Standard, Formal, Direct, Technical, Friendly).
- Editable prompt textarea in Step 2 with "Reset to default" button and clear copy feedback.
- Air-gap bridge enhancements in Step 3: persistent prompt clipboard confirmation card, secondary quick drop/paste area, and global paste event listener that automatically populates the translation and advances to Step 4.
- Interactive Reconciliation Inspector in Step 4 with filter pills (`All`, `Issues only`, `Missing`) and segment table displaying matched source text, translation, and marker validation status.
- "+ Append Chunk" feature in Step 4 to seamlessly append continued responses from AI without overwriting earlier lines.
- Safe editor handoff with pre-AI snapshot and prominent notice banner with "Undo AI Import" option.
- `ai-draft` badge (`data-ai="draft"`) marking AI-imported segments in the editor, automatically cleared when edited.
- Smart tag wrapping on chip click: selecting text in a target textarea and clicking `{1}` wraps the selected words into `{1}selected text{/1}`.
- Clear dashed error styling (`.xe-seg.bad`) in the live page preview for segments with marker issues.
- Keyboard shortcuts: `Cmd+Shift+A` (or `Ctrl+Shift+A`) to open AI dialog, and `Cmd+Enter` (or `Ctrl+Enter`) inside the dialog to advance or apply.
- HTML block context annotations (`<!-- Context: Heading -->`, `Button`, `Paragraph`, etc.) in exported prompts to give AI models layout awareness without exposing Gutenberg comments or XML tags.
- Resilient response reconciliation engine that maps `[ID]` lines back to segments, validates `{1}` formatting markers, filters conversational intro/outro remarks, and highlights marker fixes.
- Accessibility enhancements: `aria-current="step"` on stepper navigation, `aria-live="polite"` on reconciliation announcements.

### Changed

- Inverted overwrite behavior in Step 4: existing manual translations in the editor are preserved by default (`Preserve existing manual translations in the editor`).
- Default example is now the synthetic Gutenberg block markup file (`gutenberg-block-markup_en_es.xlf`) rather than the UNDRR homepage export.

## [0.1.0] - 2026-10-29

### Added

- Browser-only editor for XLIFF 1.2 files exported by Drupal TMGMT, hosted as a single `index.html`.
- Reads both TMGMT export modes: "extended XLIFF processing" on (`bpt`/`ept`/`ph`/`x` elements) and off (raw HTML with Gutenberg block comments in CDATA).
- Splits the page into translatable lines at block boundaries, labelled by kind (heading, paragraph, button, list item, caption, image description).
- Inline links, bold, italics and line breaks shown as numbered markers (`{1}…{/1}`, `{br}`), with checks that block download when a marker is missing, duplicated or out of order.
- Image alt text offered for translation.
- Technical fields (domain IDs, langcodes, path aliases) hidden and copied automatically; langcodes that match the source language are set to the target language.
- Live page preview; click a line in the preview to jump to it.
- Autosave in the browser, and reopening of partly translated files.
- Filters (all, to translate, needs fixing), search, and character counts for fields with a maximum length.
- Example files in `examples/`, loadable from the Examples menu.
- MIT license, and a `commit-msg` hook that rejects AI attribution trailers.
