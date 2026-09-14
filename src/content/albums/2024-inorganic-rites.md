---
# ── Copy this file to src/content/albums/<year>-<slug>.md ──────────────────
# The <year>- prefix only sorts files on disk; the URL becomes /albums/<slug>
# (year stripped), so slugs must be unique across years.
# Site order + chapter numerals come from releaseDate — nothing to set here.

title: "Inorganic Rites"
releaseDate: 2024-07-05
# Drop the cover into public/albums/ first. One field drives the header art,
# the discography tile, the zoom popup, AND the page's ambient backdrop.
# Export ~1600×1600 WebP or JPEG (q75–80), aiming under ~500 KB — files in
# public/ ship as-is, no build-time optimization:
coverArt: ""
# backdropArt: "/albums/2012-years-past-matter-background.jpg"

# A track is a plain title string, or a mapping for extra data.
# Gotchas: once a track has any extra field it needs `title:` on the dash
# line, with every other field aligned exactly under the `t` of `title`.
# Lyric lines must all be indented deeper than `lyrics:` itself (pasting
# strips indentation — select the pasted lines and indent them together).
tracks:
    - title: "Porous Resonance Abyss part I"
      initiated: "Marston"
      lyricsBy: ""
      lyrics: |

    - title: "Porous Resonance Abyss part I"
      initiated: "Marston"
      lyricsBy: ""
      lyrics: |

    - title: "Porous Resonance Abyss part I"
      initiated: "Marston"
      lyricsBy: ""
      lyrics: |

    - title: "Porous Resonance Abyss part I"
      initiated: "Marston"
      lyricsBy: ""
      lyrics: |

# Free text, rendered whitespace-as-typed: line breaks and multiple spaces
# are kept, a blank line starts a new paragraph. Recording info + assorted
# credits (artwork, logo, etc). Double space between sentences to taste.
engineering: |
    final caves album.
    recorded, mixed and mastered by Colin at Menegroth, The Thousand Caves
    released with P2 loggia omerta
    Menegroth trees mural and krallice logo by Karlynn Holland
    mural photos by Justina Villanueva
# One entry per member, "Name | instruments".
# The pipe is the parse separator; display formatting lives in [slug].astro.
lineup:
    - "Nicholas McMaster | guitar, vocals"
    - "Colin Marston | synthesizers, guitar, vocals"
    - "Mick Barr | bass, guitar, vocals"
    - "Lev Weinstein | drums"

# Paste the full Bandcamp embed snippet to light up the player:
bandcampEmbed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=2172080205/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://krallice.bandcamp.com/album/inorganic-rites">Inorganic Rites by Krallice</a></iframe>'

ampwallEmbed: '<iframe src="https://ampwall.com/services/PlayerCard/v1/content?albumId=019b0a61-d360-71b0-9800-c6626515c700&controlStyle=horizontal&playerWidth=650&tracklist=false&borderRadius=0" style="width: 100%; max-width: 650px; height: 145px; border: 0; border-radius: 0px;" loading="lazy" title="Listen to Inorganic Rites on Ampwall"></iframe>'
# Or, with no embed, ampwallUrl renders a plain link instead:
# ampwallUrl: "https://ampwall.com/a/krallice"
---

<!-- Optional release notes (markdown). Leave empty for none. -->
