---
# ── Copy this file to src/content/albums/<year>-<slug>.md ──────────────────
# The <year>- prefix only sorts files on disk; the URL becomes /albums/<slug>
# (year stripped), so slugs must be unique across years.
# Site order + chapter numerals come from releaseDate — nothing to set here.

title: "No Hope"
releaseDate: 2025-10-23
# Drop the cover into public/albums/ first. One field drives the header art,
# the discography tile, the zoom popup, AND the page's ambient backdrop.
# Export ~1600×1600 WebP or JPEG (q75–80), aiming under ~500 KB — files in
# public/ ship as-is, no build-time optimization:
coverArt: "/albums/2025-no-hope.jpg"
# backdropArt: "/albums/2012-years-past-matter-background.jpg"

# A track is a plain title string, or a mapping for extra data.
# Gotchas: once a track has any extra field it needs `title:` on the dash
# line, with every other field aligned exactly under the `t` of `title`.
# Lyric lines must all be indented deeper than `lyrics:` itself (pasting
# strips indentation — select the pasted lines and indent them together).
tracks:
    - title: "Inner Peace"
      initiated: "McMaster"
      lyricsBy: "Barr"
      lyrics: |
          Violent wind
          Soundless without
          And within
          Deeper into this void
          Where distance exists not
          Grappling with forces
          Of blood and matter

          The shifting sands and slowest water
          Drop off into endless formlessness

          Recover senses of place
          And evaporate again
          Walk freely towards dusk
          And our embrace

          Root blocking spaces between
          Under this natural filth

          Those sheer cliffs
          Gazed off into solitude
          Before the tides erupted

          Witching our way through the water shadows
          While the angels flicker on the surface
          And slowly shriek in terror and ecstacy

          The shriek lasts for days
          While the light spins past
          Shadows race into the ocean of night

    - title: "Protean Pulse"
      initiated: "McMaster"

# Free text, rendered whitespace-as-typed: line breaks and multiple spaces
# are kept, a blank line starts a new paragraph. Recording info + assorted
# credits (artwork, logo, etc). Double space between sentences to taste.
engineering: |
    recorded, mixed, and mastered by Marston
    at the new Menegroth, The Thousand Caves,
    Pocono Mountains, Pennsylvania

    music initiated by McMaster
    arranged by Krallice
    lyrics and cover by Barr

# One entry per member, "Name | instruments".
# The pipe is the parse separator; display formatting lives in [slug].astro.
lineup:
    - "McMaster | guitar"
    - "Barr | bass, vocals"
    - "Weinstein | drums"
    - "Marston | 2nd drums, synths"

# Paste the full Bandcamp embed snippet to light up the player:
bandcampEmbed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=81903150/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://krallice.bandcamp.com/album/no-hope">No Hope by Krallice</a></iframe>'

ampwallEmbed: '<iframe src="https://ampwall.com/services/PlayerCard/v1/content?albumId=019b0b36-f1cd-7051-9032-6533614c6b00&controlStyle=horizontal&playerWidth=650&tracklist=false&borderRadius=0" style="width: 100%; max-width: 650px; height: 145px; border: 0; border-radius: 0px;" loading="lazy" title="Listen to No Hope on Ampwall"></iframe>'
# Or, with no embed, ampwallUrl renders a plain link instead:
# ampwallUrl: "https://ampwall.com/a/krallice"
---

<!-- Optional release notes (markdown). Leave empty for none. -->
