---
# ── Copy this file to src/content/albums/<year>-<slug>.md ──────────────────
# The <year>- prefix only sorts files on disk; the URL becomes /albums/<slug>
# (year stripped), so slugs must be unique across years.
# Site order + chapter numerals come from releaseDate — nothing to set here.

title: "Crystalline Exhaustion"
releaseDate: 2022-01-28
# Drop the cover into public/albums/ first. One field drives the header art,
# the discography tile, the zoom popup, AND the page's ambient backdrop.
# Export ~1600×1600 WebP or JPEG (q75–80), aiming under ~500 KB — files in
# public/ ship as-is, no build-time optimization:
coverArt: "/albums/2022-crystalline-exhaustion.webp"
# backdropArt: "/albums/2012-years-past-matter-background.jpg"

# A track is a plain title string, or a mapping for extra data.
# Gotchas: once a track has any extra field it needs `title:` on the dash
# line, with every other field aligned exactly under the `t` of `title`.
# Lyric lines must all be indented deeper than `lyrics:` itself (pasting
# strips indentation — select the pasted lines and indent them together).
tracks:
    - title: "Frost"
      initiated: "Marston"
      lyricsBy: "Barr" # credit shown inside the lyrics popup
      lyrics: |
          meant to rest longer still
          preserved and frozen  
          brought to warmth in the deep fires
          where animals burn

          atop the pierced peaks
          cutting through the atmosphere
          there spread the frost and spores
          that announce the arrival of life

          life that must kill to survive
          an evil form of life, if such things exist
    - title: "Telos"
      initiated: "McMaster"
      lyricsBy: "McMaster"
      lyrics: |
          Manifold marvels and terrors of the earth
          Tropical swamp under rapturous sky
          Luxuriant and monstrous
          Wondrously formless trees
          Green-shadowed pools
          Eyes of the lurking beast

          Hearts pounding with horror and mysterious desire
          Enslaved sensitivity’s revenge
          Sudden strange expansions of your inner space

          Devastating invasion of passion
          Destruction of a mastered life
          Degraded by an unfamiliar god and thrust into the absurd
          Skepticism in the face of artistic power
          Confession of the hero who is already marked by death
    - title: "Heathen Swill"
      initiated: "Barr"
      lyricsBy: "Barr"
      lyrics: |
          pleading with them, begging, dying
          their derision inconceivable
          starve on sand
          subsist on cess and heathen swill
          hateful prayers of the arrogant
          god killing energy

          forced prayer fulfillment
          with a knee on the neck of god

          clogging divine arteries
          choking the presence

    - title: "Archlights"
      initiated: "McMaster"
      lyricsBy: "McMaster"
      lyrics: |
          Psychagogue
          Memory of words, memory of flesh
          The last remnant memory destroys
          Ghostly, choral, anachronistic
          And so they are always returning to us, the dead

          A vertiginous sense that the past has erupted
          That the dead are with us
          An invisible twin, the reverse of a shadow

          Printed on the eye
          Stored in the brain
          Coded over skin
          Transmitted by blood

          The lasciviousness of ruin, moving from melancholy to mourning
          Continuous motion of the spirit

          Mythopathic moment, the ground possessed
          Twin obsessions of death and peace

          The god now directs four horses, fire-breathing, day by day through the chamber of heaven
          Blue of the ether, divine form

          “As for my own dreams, the ones I lost would make it through. I should’ve known, some things just follow until they take”*

          Twin obsessions of death and peace

          * Michael Herr, “Dispatches”
    - title: "Dismal Entity"
      initiated: "Barr"
      lyricsBy: "Barr"
      lyrics: |
          dilated breath
          wandering through crystal webbing
          vast arctic air forms

          vapor clouds of the pure
          silently seeping
          separating cell matter
          dehydrating bodies
          flaking flesh apart

          unfrozen pristine anger awakens 
          a dismal entity entwined within us
    - title: "Crystalline Exhaustion"
      initiated: "Marston"
      lyricsBy: "Marston"
      lyrics: |
          teeming emptiness erases all time

          endless distance, utter void
          subsurface quartzite hive
          lattice sentience overthrown
          dismantled sand

          questioned life, assured death
          estimated existence

          unique natures
          them all enraptured
          reassemble all fundament
          reshaped empyrean

# Free text, rendered whitespace-as-typed: line breaks and multiple spaces
# are kept, a blank line starts a new paragraph. Recording info + assorted
# credits (artwork, logo, etc). Double space between sentences to taste.
engineering: |
    recorded, mixed, mastered in December 2021 by Colin at Menegroth, The Thousandth Cave

# One entry per member, "Name | instruments".
# The pipe is the parse separator; display formatting lives in [slug].astro.
lineup:
    - "Lev Weinstein | Drums"
    - "Colin Marston | Guitars, Keyboards, Bass"
    - "Mick Barr | Vocals"
    - "Nicholas McMaster | Bass"
    # Mick Barr - bass, vocals
    # Colin Marston - keyboards, additional drums, vocals
    # Nicholas McMaster - guitar, vocals
    # Lev Weinstein - drums

# Paste the full Bandcamp embed snippet to light up the player:
bandcampEmbed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=277456685/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://krallice.bandcamp.com/album/crystalline-exhaustion">Crystalline Exhaustion by Krallice</a></iframe>'

ampwallEmbed: '<iframe src="https://ampwall.com/services/PlayerCard/v1/content?albumId=019b0b1e-295d-73c2-9bed-9589b8186912&controlStyle=horizontal&playerWidth=650&tracklist=false&borderRadius=0" style="width: 100%; max-width: 650px; height: 145px; border: 0; border-radius: 0px;" loading="lazy" title="Listen to Crystalline Exhaustion on Ampwall"></iframe>'
# Or, with no embed, ampwallUrl renders a plain link instead:
# ampwallUrl: "https://ampwall.com/a/krallice"
---
