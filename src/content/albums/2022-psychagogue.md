---
# ── Copy this file to src/content/albums/<year>-<slug>.md ──────────────────
# The <year>- prefix only sorts files on disk; the URL becomes /albums/<slug>
# (year stripped), so slugs must be unique across years.
# Site order + chapter numerals come from releaseDate — nothing to set here.

title: "Psychagogue"
releaseDate: 2022-06-17
# Drop the cover into public/albums/ first. One field drives the header art,
# the discography tile, the zoom popup, AND the page's ambient backdrop.
# Export ~1600×1600 WebP or JPEG (q75–80), aiming under ~500 KB — files in
# public/ ship as-is, no build-time optimization:
coverArt: "/albums/2022-psychagogue.webp"
# backdropArt: "/albums/2012-years-past-matter-background.jpg"

# A track is a plain title string, or a mapping for extra data.
# Gotchas: once a track has any extra field it needs `title:` on the dash
# line, with every other field aligned exactly under the `t` of `title`.
# Lyric lines must all be indented deeper than `lyrics:` itself (pasting
# strips indentation — select the pasted lines and indent them together).
tracks:
    - title: "Psychagogue"
      initiated: "McMaster"
      lyricsBy: "McMaster" # credit shown inside the lyrics popup
      lyrics: |
          Run away from home to erase the past
          in exile awaken and feel nothing
          a dull disgust for the shriveled ecstasy that has outlived their hope

          Beauty and death have become neighbors
          Dissolve into the vast sea of human suffering and the diffuse guilt of the life-process itself
          Try to abolish the past and capture the future
          To become earthly, the better to suffer
          To feel death’s threat


          (Mcmaster)
          (after Rachel Bespaloff)
    - title: "Deliberate Fog"
      initiated: "Barr"
      lyricsBy: "Barr"
      lyrics: |
          heed them
          leave a paper trail
          explaining the darkness

          the lack
          the deliberate fog
          called forth by trees
          and listlessness

          disinterest in the present
          suspicion of the past
          indifference to the coming days

          discipline i call on thee
          this stagnant pool grows dim
          the algae chokes
          the insects have hatched
          i remain
          watching time do its thing

          explain the darkness
          deliberate fog

    - title: "Arrokoth Trireme"
      initiated: "Marston"
      lyricsBy: "Marston"
      lyrics: |
          fabric rended
          distance extinguished
          blood of dimensional access
          radiant shores

          irreversible nonsensical plague
          disrespect shown to the creation

          life silence edict
          enacted doctrine overrode

          deleted sphere program
          ululate, be gone

    - title: "Reprisals of Destiny"
      initiated: "McMaster"
      lyricsBy: "McMaster"
      lyrics: |
          War devours all difference
          Shows no respect for the unique
          Ares is just
          He kills those who kill

          In the cosmic womb does the destroyer prolong endlessly the victim’s flight

          Conquerors drunk with cruelty
          There are no covenants between men and lions

          Recourse to myth in the face of reason’s paradox
          A promise of immortality in the supreme detachment of poetry

          (after Rachel Bespaloff)

# Free text, rendered whitespace-as-typed: line breaks and multiple spaces
# are kept, a blank line starts a new paragraph. Recording info + assorted
# credits (artwork, logo, etc). Double space between sentences to taste.
engineering: |
    Colin Menegroth Cave record/mix/master May 2022

# One entry per member, "Name | instruments".
# The pipe is the parse separator; display formatting lives in [slug].astro.
lineup:
    - "McMaster | guitar, vocals"
    - "Barr | bass, vocals"
    - "Marston | keys and drums, vocals"
    - "Weinstein | drums"

# Keyboards/synths used, free text like engineering (line breaks kept):
synth: |
    Casio CTK-650,  ARP Odyssey,  GForce Mellotron

# Paste the full Bandcamp embed snippet to light up the player:
bandcampEmbed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=3887269681/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://krallice.bandcamp.com/album/psychagogue-3">Psychagogue by Krallice</a></iframe>'

ampwallEmbed: '<iframe src="https://ampwall.com/services/PlayerCard/v1/content?albumId=019b0ebd-d4fb-7601-b1e5-cfddda22cb22&controlStyle=horizontal&playerWidth=650&tracklist=false&borderRadius=0" style="width: 100%; max-width: 650px; height: 145px; border: 0; border-radius: 0px;" loading="lazy" title="Listen to Psychagogue on Ampwall"></iframe>'
# Or, with no embed, ampwallUrl renders a plain link instead:
# ampwallUrl: "https://ampwall.com/a/krallice"
---

<!-- Optional release notes (markdown). Leave empty for none. -->
