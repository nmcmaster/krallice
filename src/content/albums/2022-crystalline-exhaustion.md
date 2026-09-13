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
coverArt: ""
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

    - title: "Mass for the Strangled"
      initiated: "Marston / Weinstein"
      lyricsBy: "Barr"
      lyrics: |
          Too bright to be…
          the former judgement of space 
          Strangled freedom has no place in this life
          Be it granted physical or mental
          In a passage of pain
          this crowning shall push the usage back
            
          Be it granted physical or mental
          In a passage of pain
          Hiding without reason
          and leaving without either

          A mass for the strangled
          without the redness of a putrid forgiveness
          the lakes flood out of understanding
          of quieter times

          with the eyes of the dead sloth
          and the piles of burned bears
          trading their likeness
          for the betrayal of this suffering bloodline    

          The magnitude of sanctity
          shouldn’t betray these moments of thought
          Counting back 
          one still finds the faces little changed
    - title: "Sapphire"
      initiated: "Marston / Weinstein"
      lyricsBy: "McMaster"
      lyrics: |
          To brighten this sinking wisdom
          in flights of yearning

          Like the sapphire
          undiscovered as a life source

          The sound envelopes
          destroy and create 
          in a wicked mimicry
          of the one called man.
    - title: "Disgust Patterns"
      initiated: "Marston / Weinstein"
      lyricsBy: "Barr"
      lyrics: |
          Messengers of light
          lame their followers with words 
          of unforgiving merciless stress
          claim distinction for glowing
          challenge the unblinking eye
          tears streaming forth
          in disgust patterns

          Shout back through time
          to speak a withered idea 
          in a withered language
          just to finish

          Force a word to be more
          until the tongue leaks poison
    - title: "Demonic Wealth"
      initiated: "Marston / Weinstein"
      lyricsBy: "Barr"
      lyrics: |
          The elk moans
          bending under the weight of cells
          years before the passing
          of demonic wealth

          the leaves wail the sadness of
          those stricken silent   

          To be of the growth and of the end
          To be of the growth and of the end

          Solid be the fragments of heart
          and its continued diminishment
          Judged and remembered time and again
          as one to underestimate and ever feel
          time’s cold push cannot disintegrate
          such longing and such regret
    - title: "Resistant Strains"
      initiated: "Marston / Weinstein"
      lyricsBy: "Barr"
      lyrics: |
          Tributary of infest
          Seeds of transplanted doubt
          Root rot endless
          In visions countless

          Chained to chimneys
          Of the infinite inferno
          Blanched white bone radiance
          The only moving thing

          Scenes of the serene
          summon themselves
          Endorphinol blotting
          Delused into peace and nightmare

          Larynx of the former
          one who forms
          Blend in amongst the formed

# Free text, rendered whitespace-as-typed: line breaks and multiple spaces
# are kept, a blank line starts a new paragraph. Recording info + assorted
# credits (artwork, logo, etc). Double space between sentences to taste.
engineering: |
    All songs initiation: Lev
    All songs songwriting: Colin
    All songs words: Mick

    Isolation recording sessions: Drums recorded at the Mouth 3 on a phone
    Vocals recorded in the car by the swamp
    Bass recorded.
    Guitars, keyboards, other bass, reamping, mixing, mastering at Menegroth the thousands cave.

# One entry per member, "Name | instruments".
# The pipe is the parse separator; display formatting lives in [slug].astro.
lineup:
    - "Lev Weinstein | Drums"
    - "Colin Marston | Guitars, Keyboards, Bass"
    - "Mick Barr | Vocals"
    - "Nicholas McMaster | Bass"

# Paste the full Bandcamp embed snippet to light up the player:
bandcampEmbed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=1683545580/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://krallice.bandcamp.com/album/demonic-wealth">Demonic Wealth by Krallice</a></iframe>'

ampwallEmbed: '<iframe src="https://ampwall.com/services/PlayerCard/v1/content?albumId=019b1535-fd31-7330-8511-dadc9847e2c6&controlStyle=horizontal&playerWidth=650&tracklist=false&borderRadius=0" style="width: 100%; max-width: 650px; height: 145px; border: 0; border-radius: 0px;" loading="lazy" title="Listen to Demonic Wealth on Ampwall"></iframe>'
# Or, with no embed, ampwallUrl renders a plain link instead:
# ampwallUrl: "https://ampwall.com/a/krallice"
---

<!-- Optional release notes (markdown). Leave empty for none. -->
