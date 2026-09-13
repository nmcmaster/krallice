---
# ── Copy this file to src/content/albums/<year>-<slug>.md ──────────────────
# The <year>- prefix only sorts files on disk; the URL becomes /albums/<slug>
# (year stripped), so slugs must be unique across years.
# Site order + chapter numerals come from releaseDate — nothing to set here.

title: "Orphan of Sickness"
releaseDate: 2011-07-21
# Drop the cover into public/albums/ first. One field drives the header art,
# the discography tile, the zoom popup, AND the page's ambient backdrop.
# Export ~1600×1600 WebP or JPEG (q75–80), aiming under ~500 KB — files in
# public/ ship as-is, no build-time optimization:
coverArt: "/albums/2011-orphan-of-sickness.jpg"

# A track is a plain title string, or a mapping for extra data.
# Gotchas: once a track has any extra field it needs `title:` on the dash
# line, with every other field aligned exactly under the `t` of `title`.
# Lyric lines must all be indented deeper than `lyrics:` itself (pasting
# strips indentation — select the pasted lines and indent them together).
tracks:
    - title: "BBH"
      written: "Brown/Majewski" # or `written:` — never both; the label matches the field

    - title: "Fetus in Fetu"
      written: "Brown/Majewski"

    - title: "Boat Driver"
      written: "Brown/Majewski"

    - title: "Traditional"
      written: "Rorschach"

    - title: "Trippin Balls Intro"
      written: "Jasta 14"

# Free text, rendered whitespace-as-typed: line breaks and multiple spaces
# are kept, a blank line starts a new paragraph. Recording info + assorted
# credits (artwork, logo, etc). Double space between sentences to taste.
engineering: |
    tracks 1-3 in tribute to Brendan Majewski, RIP.  track 5 in tribute to TZ and Budzy, RIP

# One entry per member, "Name | instruments".
# The pipe is the parse separator; display formatting lives in [slug].astro.
lineup:
    - "Mick Barr | guitar, vocals"
    - "Colin Marston | Guitar"
    - "Nick McMaster | Bass"
    - "Lev Weinstein | Drums"

# Paste the full Bandcamp embed snippet to light up the player:
bandcampEmbed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=3719279702/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://krallice.bandcamp.com/album/orphan-of-sickness">Orphan of Sickness by Krallice</a></iframe>'
# Ampwall: paste the full embed snippet for a click-to-expand player below
# the Bandcamp one (collapsed by default; loads nothing until expanded).
# ampwallEmbed: '<iframe src="https://ampwall.com/..." ...></iframe>'
# Or, with no embed, ampwallUrl renders a plain link instead:
# ampwallUrl: "https://ampwall.com/a/krallice"
---

<!-- Optional release notes (markdown). Leave empty for none. -->
