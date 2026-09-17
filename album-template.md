---
# ── Copy this file to src/content/albums/<year>-<slug>.md ──────────────────
# The <year>- prefix only sorts files on disk; the URL becomes /albums/<slug>
# (year stripped), so slugs must be unique across years.
# Site order + chapter numerals come from releaseDate (or orderingDate,
# if set) — nothing to set here.

title: "Album Title"
# Optional second line under the title (discography tile + album page):
# a continuation ("The Kinetic Infinite") or a specifier ("Live", "Remasters"):
# subtitle: "Live"
releaseDate: 2008-07-11
# Optional: overrides releaseDate for site order + chapter numerals only —
# never displayed (e.g. to slot a re-recording where it belongs in the story):
# orderingDate: 2008-07-12
# Drop the cover into public/albums/ first. One field drives the header art,
# the discography tile, the zoom popup, AND the page's ambient backdrop.
# Export ~1600×1600 WebP or JPEG (q75–80), aiming under ~500 KB — files in
# public/ ship as-is, no build-time optimization:
coverArt: "/albums/<year>-<slug>.jpg"
# Optional: use a different image for this page's ambient backdrop only
# (header art, discography tile, and zoom popup still use coverArt):
# backdropArt: "/albums/<year>-<slug>-backdrop.jpg"

# A track is a plain title string, or a mapping for extra data.
# Gotchas: once a track has any extra field it needs `title:` on the dash
# line, with every other field aligned exactly under the `t` of `title`.
# Lyric lines must all be indented deeper than `lyrics:` itself (pasting
# strips indentation — select the pasted lines and indent them together).
tracks:
    - title: "First Song"
      initiated: "Barr" # or `written:` — never both; the label matches the field
      lyricsBy: "Barr" # credit shown inside the lyrics popup
      lyrics: |
          line breaks are kept
          a blank line starts a new stanza
    - title: "Second Song"
      written: "McMaster"
      # provisional: href of a tab (file under public/ or a page) — shows a
      # "Tab" link beside the title. Final tab UX is still undecided.
      tab: "/tabs/second-song.pdf"
    - "Third Song (no credits or lyrics — plain string is fine)"

# Optional signature under the release notes, right-aligned, italic; the em
# dash is added on render ("— NM"). Only shown when the body has notes:
# byline: "NM"

# Free text, rendered whitespace-as-typed: line breaks and multiple spaces
# are kept, a blank line starts a new paragraph. Recording info + assorted
# credits (artwork, logo, etc). Double space between sentences to taste.
engineering: |
    recorded, mixed, mastered at Studio by Person in month year.  Artwork by Person.  Logo by Person.

# One entry per member, "Name | instruments".
# The pipe is the parse separator; display formatting lives in [slug].astro.
lineup:
    - "Mick Barr | guitar, bass, voice"
# Or, for a record with more than one lineup (two EPs on one release), a list
# of groups — each gets a small header above its members:
# lineup:
#     - heading: "1–4 · First EP"
#       members:
#           - "Mick Barr | guitar, vocals"
#     - heading: "5–8 · Second EP"
#       members:
#           - "Mick Barr | guitar, vocals"

# Paste the full Bandcamp embed snippet to light up the player:
# bandcampEmbed: '<iframe style="border:0;width:100%;height:472px;" src="https://bandcamp.com/EmbeddedPlayer/album=XXXXXXXXX/size=large/..." seamless></iframe>'
# Ampwall: paste the full embed snippet (the <iframe ...> from Ampwall's
# share/embed dialog) for a second player directly under the Bandcamp one.
# It must go in ampwallEmbed — ampwallUrl only accepts a bare URL.
# ampwallEmbed: '<iframe src="https://ampwall.com/..." ...></iframe>'
# Or, with no embed, ampwallUrl renders a plain link instead:
# ampwallUrl: "https://ampwall.com/a/krallice"
---

<!-- Optional release notes (markdown). Bare-bones only: pressings, reissues,
     context, corrections. Leave empty and the page skips the section. -->
