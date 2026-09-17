# krallice.com

Band site for Krallice. The user is Nicholas McMaster, bassist of the band.
Never fabricate band facts. This repo is the austere successor to an earlier
"memoir" version of the site (kept separately by Nick); the memoir layer was
stripped in the first pass here.

**Code is the source of truth for all styling values.** Nick hand-tweaks CSS
(sizes, spacing, colors, opacities, separators, visibility of elements) between
sessions. This file records architecture, intent, and gotchas only — if it and
the code disagree on a value, the code is right and deliberate. Never "restore"
styling to match this doc. **One exception:** the backdrop/scrim system (see
that section) is documented with exact values and Nick does NOT hand-tweak it —
there, doc and code should always match; drift means a bug or an unrecorded
change worth flagging.

## The concept

Two jobs, in priority order:

1. **Tablature distribution.** Most visitors will come for the Tablatures
   section — Nick's transcriptions of the band's music, collected over years.
   The transcription files are not ready yet; hosting format is undecided.
2. **The discography, in chronological order.** The homepage is a single
   word — "Begin" in blackletter — that drops you into the first album.
   Each album page is a record page: art, tracklist (with per-track Lyrics and
   Tab links), a Bandcamp player, compact credits, and an optional block of
   bare-bones release notes. Prev/next footers walk the discography in order.

The register is austere: reference material, not narrative.

## Stack

- Astro 6.3, static output, `@astrojs/netlify`, deployed to Netlify
- Tailwind CSS 4.3 via `@tailwindcss/vite`
- TypeScript, Node 22+
- **No JS frameworks.** Vanilla TS in Astro `<script>` blocks only.

## Structure

```
src/
  pages/            index (Begin), discography, about, tablatures, albums/[slug]
  layouts/          BaseLayout.astro — head, nav, fixed backdrop layer
  components/       Nav.astro
  content/albums/   One markdown file per album — THE content organization
                    (frontmatter = all structured data; body = optional notes)
  data/albums.ts    getSortedAlbums(): albums oldest-first (canonical order)
  styles/           global.css (@theme fonts, .notes prose), CloisterBlack.ttf
public/
  albums/           Cover art files
  logo.png          Black sigil on transparent, full-res (3041×2155), alpha-cropped
  og.png            1200×630 social card — black logo on TRANSPARENT (Nick's call;
                    dark-mode clients like iMessage/Discord composite it on dark)
  krallicetour_final.webp   Tour poster — default site backdrop (1080×2772)
```

## Adding an album (the one-by-one workflow)

1. Drop the cover into `public/albums/`.
2. Copy `album-template.md` (project root — annotated with every frontmatter
   form and the YAML gotchas) to `src/content/albums/<year>-<slug>.md` and
   fill it in. The `<year>-` prefix only
   keeps files chronologically sorted on disk — URLs drop it via
   `albumSlug()` in `data/albums.ts` (`/albums/<slug>`), so slugs must be
   unique across years. Frontmatter schema
   (`src/content.config.ts`): `title`, `subtitle` (optional — a second
   line under the title on the discography tile and album page, in the
   small uppercase chrome register; for continuations like "The Kinetic
   Infinite" or specifiers like "Live" / "Remasters"), `releaseDate`, `orderingDate` (optional —
   overrides `releaseDate` in `getSortedAlbums()` for site order and chapter
   numerals; never displayed), `coverArt`, `tracks[]`,
   `engineering` (free-text string rendered whitespace-as-typed: line breaks
   and multiple spaces are kept, blank lines split paragraphs — holds
   recording info and assorted credits), `synth` (optional free text in the
   same form — keyboards/synths used, for the synthesizer-era records;
   rendered as a third block of the credits panel under the lineup, with a
   small "Keyboards / Synthesizers" label),
   `lineup` (list of `"Name | instruments"` strings — the pipe is the parse
   separator, display formatting lives in `[slug].astro`; rendered under
   the engineering text two members per line, each member kept unwrapped.
   For a release with more than one lineup — two EPs on one record — it's
   instead a list of `{ heading, members }` groups, each rendered with a
   small chrome-register header naming its tracks; `[slug].astro`
   normalizes both forms to groups), `bandcampEmbed` (full iframe HTML),
   `ampwallEmbed` (full iframe HTML — rendered as a second, always-visible
   player directly under the Bandcamp one; both are independent cross-origin
   iframes, so a listener can run them simultaneously, which is intended),
   `ampwallUrl` (plain URL — fallback link form, used when no `ampwallEmbed`). A `tracks`
   entry is either a plain title string or
   `{ title, initiated?|written?, note?, lyrics?, lyricsBy? }` — `initiated`
   and `written` are mutually exclusive credit fields shown under the title,
   and the label matches whichever is used ("initiated" is the band's term
   for the collaborative process; "written" for the conventional case).
   `note` is free text rendered in that same slot and style, after the
   credit if both exist — for compilations and archival releases ("Tracks
   1-6", "recorded: 5/2/2011"). `lyrics`
   (multiline string) gets a Lyrics link opening a native `<dialog>` popup;
   `lyricsBy` is the lyrics credit shown in that popup's header. `tab`
   (string href — a file under `public/` or a page) renders a "Tab" link
   beside the title, next to Lyrics, opening in a new tab. **Provisional:**
   the tab UX is undecided and no tabs exist yet; the field is a hook so
   the tracklist has somewhere to point once files land.
3. Optionally write release notes in the markdown body (pressings, reissues,
   context). Plain markdown, rendered in `.notes` (global.css) with a
   blackletter drop cap on the opening paragraph (the `dropcap` modifier —
   album notes only, not About). `byline` (string, e.g. "NM") renders
   right-aligned in italic serif after the notes, em dash prefixed at
   render time; shown only when the body has notes. An empty body — HTML
   comments don't count — skips the section, byline included.
   `2008-krallice.md` has annotated comments showing every frontmatter form.

**`coverArt` is a single source of truth**: it drives the album-page header art,
the discography grid tile, the zoom popup, AND that page's ambient backdrop.
The one sanctioned override is optional `backdropArt`, which swaps the ambient
backdrop only — every other surface always uses `coverArt`. Don't add further
art fields.

The discography grid's subtitle ("In chronological order ↓") is a toggle:
clicking it crossfades the grid while reversing the DOM order, flips the
label and arrow via `aria-pressed` (Tailwind `group-aria-pressed:`
variants), and remembers the choice in `localStorage`. The album pages'
numerals and prev/next footers are unaffected — canonical order is always
oldest-first.

Chapter numbers (the roman numerals under album titles) come from position in
`getSortedAlbums()` — nothing to set manually.

## The backdrop system (BaseLayout.astro)

Backgrounds are a **fixed, viewport-sized layer** (`fixed inset-0 -z-10`,
`bg-cover`), NOT a body background. The image paints exactly once and content
scrolls over it — no tiling/seams on long pages, and it works on iOS where
`background-attachment: fixed` doesn't.

- Default (`backdrop` prop unset): the tour poster, sharp, `bg-top` (it's a very
  tall image; top-aligned shows the artwork, center would show a middle slice).
**Exception to "code is source of truth": this section is exact and Nick does
not hand-tweak it.** All values live on two divs in BaseLayout's body: the
backdrop image div (the art's filter/opacity classes) and the content wrapper
div (the scrim's inline gradient).

- Album pages pass `backdrop={album.data.backdropArt ?? album.data.coverArt}`
  → "ambient" mode:
  `bg-center scale-110 opacity-70 blur brightness-150 saturate-150`. The
  brightness/saturate boost is load-bearing: dark cover art dimmed under the
  dark scrim compounds to invisible without it (measured ~RGB 6,6,5 on the
  debut's cover before the boost). Blur is deliberately light (`blur` = 8px)
  so the art reads as an image, not just palette — which means low-res covers
  may show pixelation (heavy blur would mask it; check new art). `scale-110`
  hides the blur's soft edges.
- The content wrapper carries the scrim, an inline horizontal gradient:
  `linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,0.82) 25%,
  rgba(0,0,0,0.82) 75%, rgba(0,0,0,0.5))` — darkest (0.82) over the ~48rem
  reading column, lighter (0.5) at the margins. The ramps show mild banding
  on low-bit-depth external monitors; Nick A/B'd a smoothstep-eased variant
  and chose to keep the linear one. The eased gradient is preserved in a
  commented-out div right below the live scrim div — leave that comment in
  place; it's the starting point if banding is ever revisited. (An
  feTurbulence dither layer was also tried and rejected: obscured the art.)

**Paint-order gotcha (caused a real bug):** the backdrop layer has negative
z-index, and an in-flow element's own background paints *over* negative-z
descendants. So `background-color` may live on `html` only — putting it on
`body` (or any full-size wrapper) silently hides the backdrop.

## Typography

Three faces, all self-hosted (Fontsource packages imported in BaseLayout, plus
CloisterBlack.ttf via `@font-face`):

- `font-display` — **Cormorant Garamond** (400/500/600): page + album titles.
  Set mixed-case, medium weight, large. Display face only — too delicate for
  body text.
- `font-serif` — **EB Garamond** (400/400-italic/600): all reading material —
  `.notes` prose (sized in global.css), tracklist song titles, engineering
  notes.
- `font-blackletter` — **Cloister Black**: "Begin" on the homepage and the
  drop cap opening each album's notes. The site's signature; use sparingly,
  don't spread it.

The deliberate contrast: bookish serif for titles and reading material vs.
utilitarian chrome (uppercase tracked sans labels, tabular mono numbers/dates).
Keep new UI in the chrome register, new content in serif.

## Album page anatomy (order matters — it was chosen deliberately)

1. Cover art + tracklist side-by-side (`items-center`; stacks on mobile).
   Tracklist has no heading — the numbered list is self-evident.
2. Title + chapter marker ("II · 2009", centered).
3. Players: Bandcamp, then Ampwall beneath it, each under a small uppercase
   label. Both sit in one centered column capped at 650px (the Ampwall
   player's own max width) so their edges align; both visible and playable
   at once. Ampwall has no compact player, so its iframe is CSS-scaled
   (`.embed-scaled` in global.css, 0.83) to Bandcamp's 120px height — the
   snippet is untouched, pointer events map through the transform, and the
   wrapper clips the iframe's inflated layout box so nothing scrolls
   sideways. Simultaneous playback of both players is a feature; when both
   embeds exist, a small "Disable simultaneous play" toggle (right-aligned
   on the Bandcamp label row, remembered in `localStorage`) opts out. Mechanism: the
   players are cross-origin iframes with no pause API, but a click inside
   one moves `document.activeElement` to that iframe, so while the toggle is
   on a 200ms poll watches for that and reloads the *other* iframe
   (`src = src`) if it's been interacted with since its last reset — which
   stops its audio. Crude but the only lever available; position in the
   reset player is lost. Without an `ampwallEmbed`, a right-aligned
   "Also on Ampwall →" link instead (new tab, so the Bandcamp player isn't
   killed). Gotcha: Ampwall sits behind a Cloudflare bot check, so curl and
   headless Chrome get a challenge page (broken frame) — verify the player
   in a real browser only.
4. Recording/engineering panel: free-text credits, then the lineup paragraph,
   then (synth-era records) the synthesizer list — kept compact and
   centered; the panel itself is heading-less, only the synth block
   carries a small label since bare model names need one.
5. Release notes (`.notes`, drop cap) then the byline — only when the
   markdown body has content.
6. Prev / next release footer ("Previous release" / "Next release"; the last
   page links back to the discography).
7. Lyrics `<dialog>`s (one per track with lyrics; opened from the tracklist).

Known trade-off: with 8+ tracks the list grows taller than the cover and the
art floats centered with gaps. If a real record makes this ugly, options are
`items-start` or a two-column tracklist — decide when real content exists.

## Astro gotchas already learned

1. `<style>` blocks are scoped; runtime-created elements and JS-assigned
   `@keyframes` need `<style is:global>`.
2. Component `<script>` tags become deferred ES modules — no ordering
   guarantees between components.
3. Tailwind `hidden` is `display:none` — measure layout only after making the
   element visible.
4. The paint-order/backdrop gotcha above.
5. Content-layer cache staleness (`.astro/data-store.json`): an entry is
   re-parsed only when its file's content digest changes. If a file is
   edited to use a frontmatter field *before* the running dev server has
   picked up the schema change that adds it, Zod strips the field, the
   stripped result is cached, and a restart does NOT help (same digest).
   Symptom: the field renders as unset in dev while `astro build` is
   correct. Fix: make any content change to that file (even a trailing
   newline) so it re-parses, or delete `.astro/data-store.json` with the
   dev server stopped.

## User preferences

- **Don't start the dev server.** `npm run dev` is already running at
  `http://localhost:4321`. Verify with curl (or browser tools if connected).
  Gotcha: that port may be serving the *old* memoir checkout
  (`../krallice-dot-com-astro`) — check the process cwd before trusting it.
  `astro preview` doesn't work with the Netlify adapter; to eyeball a build,
  serve `dist/` statically on a spare port instead.
- Terse responses, no chatty narration, no emojis.
- No premature abstractions or unrequested refactors.
- Verify UI changes before declaring them done.
- Confirm before destructive or shared-state actions (deploys, force-pushes).

## Open / not yet decided

- **Tablatures — the primary open item.** No transcription files yet; hosting
  format undecided (PDF/Guitar Pro/embedded viewer/page per song). Two touch
  points to wire once decided: the Tablatures page itself, and the per-track
  `tab` link in album tracklists (currently a bare href hook).
- Remaining discography entries and embeds; release-notes bodies are empty.
- `public/logo.png` (black on transparent) was derived from `logo_white.png`:
  its alpha channel filled black, alpha-cropped. `public/og.png` is that logo
  scaled to fit 1200×630 with 12% padding, centered, transparent background.
  Every page shares the one og.png — album pages deliberately don't use
  their cover art. Regenerate both the same way (PIL) if the logo changes.
- Uncommitted work in progress — ask before committing.
