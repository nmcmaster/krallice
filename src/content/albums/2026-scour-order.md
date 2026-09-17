---
# ── Copy this file to src/content/albums/<year>-<slug>.md ──────────────────
# The <year>- prefix only sorts files on disk; the URL becomes /albums/<slug>
# (year stripped), so slugs must be unique across years.
# Site order + chapter numerals come from releaseDate — nothing to set here.

title: "Scour Order"
releaseDate: 2026-07-18
# Drop the cover into public/albums/ first. One field drives the header art,
# the discography tile, the zoom popup, AND the page's ambient backdrop.
# Export ~1600×1600 WebP or JPEG (q75–80), aiming under ~500 KB — files in
# public/ ship as-is, no build-time optimization:
coverArt: "/albums/2026-scour-order.webp"
# backdropArt: "/albums/2012-years-past-matter-background.jpg"

# A track is a plain title string, or a mapping for extra data.
# Gotchas: once a track has any extra field it needs `title:` on the dash
# line, with every other field aligned exactly under the `t` of `title`.
# Lyric lines must all be indented deeper than `lyrics:` itself (pasting
# strips indentation — select the pasted lines and indent them together).
tracks:
    - title: "Agonal Shining"
      initiated: "Marston"
      lyricsBy: "Barr / McMaster"
      lyrics: |
          Song of sorrow, like some great wave, to burst at last upon the shining of this agony.
          twin throned, twin sceptered, in twofold power of kings from god
          once again the pain of grim, true prophecy shivers my whirling brain in a storm of things foreseen.
          sweet hope shining from the flames beats back the pitiless pondering of sorrow that eats my heart

    - title: "Grievous Corrector"
      initiated: "McMaster"
      lyricsBy: "McMaster"
      lyrics: |
          Under the fig tree my warrior lies
          who died for me, under the sound of the wind.

          Heroes all die, in one way or another.
          Some astonished in the bloodsoaked field,
          wearing the armor of the king.
          Others, in torment and bewilderment,
          By their own hand, compelled by heaven.

          Things all go wrong when He takes hold of one of us.

          ---
           “Grievous Corrector” is an interpolation of “Mnemosyne part 3” by Friedrich Hölderlin, translated by David Ferry

    - title: "Kill the Guardian"
      initiated: "Barr"
      lyricsBy: "Barr / Marston / McMaster"
      lyrics: |
          All those fires like resurrections
          Surrendered to the other sphere
          A vigilant and sensitive particle
          Its discreet, silently passing spirit
          Fantasy drives truth into darkness
          Wishes do not displace mountains

          Siphon useless antiphona
          Concealed remnant, obfuse cost

          Derail essential seepage
          Eroded self, soulless blaspheme

          Embody questionable
          Radiate somewhat

          All!
          Enter that void shaken, unprepared
          Time’s prison fact

          Grant that some future king destroy the portal
          Or that a god obliterate the name of my companion
          On our journey to violate the forest and kill the guardian
    - title: "Unceasing Path"
      initiated: "McMaster"
      lyricsBy: "McMaster"
      lyrics: |
          All those fires like resurrections
          The asymptotic nature of dreams 
          My feet caught in a pit
          The cabin on the shore 
          My hands grasping air
          Surrendered to some great sphere
          One step after another, churning
          Like some great wave
          Unceasing path, churning
          Falling to a knee
          The house draws no nearer
          The picture static, unchanging
          Unceasing path

    - title: "Living Useless Ritual"
      initiated: "McMaster"
      lyricsBy: "Barr / Marston / McMaster"
      lyrics: |
          Ancient cup of tears / pastoral legend
          Hid in the dark wood in which we find ourselves
          The pool into which we cannot look now
          Nor drink from the dark freshness of that source

          Silence for scripture
          Pressurized holy one
          Enough!

          Living useless ritual

          From which the pure words sprang
          Spoken to utter a sorrow as impersonal as legend

    - title: "Indecipherable Divinity"
      initiated: "Barr"
      lyricsBy: "Barr / McMaster"
      lyrics: |
          The light of reason / the handmaid of faith / the light of grace / the bride of faith
          The taste of the sun in our mouths
          Cold and silent passion
          even on the edge of the tomb
          slowly sinking beneath the waves

          Sceptered death drained his ranks manless
          Ascent is not so easy
          like some hound upon the trail of blood that leads to discovered death.

    - title: "Her Green Arms"
      initiated: "Barr"
      lyricsBy: "Barr / McMaster"
      lyrics: |
          Who had weathered so many storms and become as gentle as water
          The room at once became bright, as if his soul had been fully illuminated…

          Murmur their old music
          My coil is cunning
          Envy, malice, pity, contemplation

          Lace me around with her green arms, come tide
          Come evening, and i will be gone

          I am that sea. What i cast up is mine.
          Far inland bears my legend

    - title: "Scour Order"
      initiated: "Marston"
      lyricsBy: "Marston"
      lyrics: |
          Arc eraser 
          Presence rested interstitial
          Scour order
          Reinstated horror ladder

          Terse evolution
          Biome symbiotic enslavement
          Cursed revelation
          Crippled psychic broadcast

          Cursed eraser
          Obtuse gesture river
          Reminder antiquated
          A porous resonance excitation

          Worried remainders astray
          Grasp cyclic as a reflex
          Treacherous depth
          Mind erase through the vacuum

# Free text, rendered whitespace-as-typed: line breaks and multiple spaces
# are kept, a blank line starts a new paragraph. Recording info + assorted
# credits (artwork, logo, etc). Double space between sentences to taste.
engineering: |
    cover painting by Barr
    logo by Holland
    recorded, mixed, and mastered by Marston at the new Menegroth, The Thousand Caves

    the music for this album was commissioned by and first performed at Roadburn 2026. 
    many thanks to Walter & Becky

    Colin lyrics by Colin
    McMaster and Barr lyrics by McMaster
    McMaster lyrics contain selections from the works of David Ferry & Aeschylus’ Oresteia

# One entry per member, "Name | instruments".
# The pipe is the parse separator; display formatting lives in [slug].astro.
lineup:
    - "Mick Barr | guitar, vocals"
    - "Colin Marston | guitar, vocals"
    - "Nicholas McMaster | bass, vocals"
    - "Lev Weinstein | drums"

# Paste the full Bandcamp embed snippet to light up the player:
bandcampEmbed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=361258239/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://krallice.bandcamp.com/album/scour-order">Scour Order by Krallice</a></iframe>'

# ampwallEmbed: ''
# Or, with no embed, ampwallUrl renders a plain link instead:
# ampwallUrl: "https://ampwall.com/a/krallice"
byline: "NM"
---

The first record made since the return to the original instrumentation. This album was comissioned by Roadburn festival in the Netherlands. They asked for roughly an hour's worth of completely new music to debut at the festival. In addition, we played two other sets: one of pre-2019 material and another of music from 2020-2024, that being the synth-driven lineup.

A new songwriting process was used for "Grievous Corrector," "Unceasing Path," and "Living Useless Ritual" in that original guitar parts were composed by Nick then learned and adapted by Mick. For "Grievous" and "Living," Mick then wrote the bass that Nick plays. Colin wrote his guitar parts for these in accordance with the usual "initiation" practice, but also wrote the main riffs for the middle section in "Living" which he does vocals over.

<!-- Optional release notes (markdown). Leave empty for none. -->
