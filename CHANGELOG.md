# Changelog

All notable changes to Blocklate are listed here. The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [Unreleased]

### Changed

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
