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
coverArt: "/albums/2024-inorganic-rites.webp"
# backdropArt: "/albums/2012-years-past-matter-background.jpg"

# A track is a plain title string, or a mapping for extra data.
# Gotchas: once a track has any extra field it needs `title:` on the dash
# line, with every other field aligned exactly under the `t` of `title`.
# Lyric lines must all be indented deeper than `lyrics:` itself (pasting
# strips indentation — select the pasted lines and indent them together).
tracks:
    - title: "Parataxis"
      initiated: "McMaster"
      lyricsBy: "McMaster"
      lyrics: |
          From the faith of the most devout
          a new aspect of consciousness was born

          Parataxis, flat reality
          gave way to doubt, emotions left unexpressed 
          one with their tragic fates

          His god’s voice tells him to kill his son
          An exiled scholar writes his life’s work
          An aristocrat’s propaganda opens a door to the other realm
    - title: "Flatlines Encircled Residue"
      initiated: "Marston"
      lyricsBy: "Barr"
      lyrics: |
          Chaptered, quartered, and left to rot
          liquified tissue runs down the arms
          carrying this carrion back to the living
          for their psychological well-being
          ceremonial closure

          Each chuck of the pick sends shivers
          one known since the beginning
          anticipation of the unavoidable

          Botched ground, ice and stone
          rising sea levels
          burial above ground in a stone pod
          cemented shut and left to rot
          so the civilized can rest in peace
    - title: "Irdischen"
      initiated: "McMaster"
      lyricsBy: "McMaster"
      lyrics: |
          A silent progress through the indeterminate 
          Heavy with the implications of extending into 
          the depths of time, space, and consciousness
    - title: "Here Forever"
      initiated: "Barr"
      lyricsBy: "Barr"
      lyrics: |
          Bewildered I am
          seen ghost walking through the crowded woods
          chattering at nothing with the other ghosts
          Sun and dust in lung and eye
          fearful still be here
          Here amongst forever
          Feeling time begin again and again
          growing still
          Eternally dying and birthing the same
          burning the memories of earth
    - title: "Feel Time Begin"
      initiated: "Barr / McMaster"

    - title: "Faustian Bargain"
      initiated: "McMaster"
      lyricsBy: "McMaster"
      lyrics: |
          Asked for a sign and found only chaos
          Prophet of last things, bearer of a truth still veiled to him

          Beloved, come forth as a revelation of the perfect order 
          Earthly particularity held fast in the mirror of a timeless eye
    - title: "Universe Ancestral Talisman"
      initiated: "Marston"

    - title: "Death By Misadventure"
      initiated: "McMaster"
      lyricsBy: "McMaster"
      lyrics: |
          You retreated into your shell long before I was born
          to an impenetrable interior
          And surely there were moments of peace, domestic love, 
          and the fulfillment of communal artistry

          But the darkness must be reckoned with
          The people you kept close
          The people you pushed away
    - title: "Fatestorm Sanctuary"
      initiated: "Marston"
      lyricsBy: "Marston"
      lyrics: |
          oldest web
          frozen thought insists false autonomy

          longest thread
          enabled through instincts unfurl

          ancient shadowed pointless portrayal

          smolder long shut
          action defined

          endless silence secretion

          life succumb to inorganic rites
    - title: "Hinderer"
      initiated: "Barr"
      lyricsBy: "Barr"
      lyrics: |
          and when they asked me “are you ready?”
          I truly was
          and when they changed the shape upon me
          I could follow it forever without pause

          This thing has existed
          without name before
          uncountable sources outward
          lessen its purpose

          and you can sense its presence
          without it making a sound

          I can only summon its offenses
          when I am not myself   
          I can only seethe from it
          the last drops of what went wrong
# Free text, rendered whitespace-as-typed: line breaks and multiple spaces
# are kept, a blank line starts a new paragraph. Recording info + assorted
# credits (artwork, logo, etc). Double space between sentences to taste.
engineering: |
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

# Keyboards/synths used, free text like engineering (line breaks kept):
synth: |
    ARP Omni mk1,  ARP Odyssey,  ARP 2600m,  Korg Lambda,  Roland Paraphonic 505

# Paste the full Bandcamp embed snippet to light up the player:
bandcampEmbed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=2172080205/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://krallice.bandcamp.com/album/inorganic-rites">Inorganic Rites by Krallice</a></iframe>'

ampwallEmbed: '<iframe src="https://ampwall.com/services/PlayerCard/v1/content?albumId=019b0a61-d360-71b0-9800-c6626515c700&controlStyle=horizontal&playerWidth=650&tracklist=false&borderRadius=0" style="width: 100%; max-width: 650px; height: 145px; border: 0; border-radius: 0px;" loading="lazy" title="Listen to Inorganic Rites on Ampwall"></iframe>'
# Or, with no embed, ampwallUrl renders a plain link instead:
# ampwallUrl: "https://ampwall.com/a/krallice"
byline: "NM"
---

The last Krallice album recorded at Menegroth, the Thousand Caves in Woodhaven, Queens.

<!-- Optional release notes (markdown). Leave empty for none. -->
