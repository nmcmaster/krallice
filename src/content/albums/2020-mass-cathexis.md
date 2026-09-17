---
# ── Copy this file to src/content/albums/<year>-<slug>.md ──────────────────
# The <year>- prefix only sorts files on disk; the URL becomes /albums/<slug>
# (year stripped), so slugs must be unique across years.
# Site order + chapter numerals come from releaseDate — nothing to set here.

title: "Mass Cathexis"
releaseDate: 2020-08-07
# Drop the cover into public/albums/ first. One field drives the header art,
# the discography tile, the zoom popup, AND the page's ambient backdrop.
# Export ~1600×1600 WebP or JPEG (q75–80), aiming under ~500 KB — files in
# public/ ship as-is, no build-time optimization:
coverArt: "/albums/2020-mass-cathexis.webp"
# backdropArt: "/albums/2012-years-past-matter-background.jpg"

# A track is a plain title string, or a mapping for extra data.
# Gotchas: once a track has any extra field it needs `title:` on the dash
# line, with every other field aligned exactly under the `t` of `title`.
# Lyric lines must all be indented deeper than `lyrics:` itself (pasting
# strips indentation — select the pasted lines and indent them together).
tracks:
    - title: "Feed on the Blood of Rats"
      initiated: "Barr"
      lyricsBy: "Barr" # credit shown inside the lyrics popup
      lyrics: |
          Hail brief devastation
          fulfillment of the word
          Brevity be thy sakeness
          Bent over shivering
          blend fast with this silver
          ‘fore it changes

          Foul change
          seething its worst

          Dripping through pavement
          pooling in the tunnels beneath
          Festering seepage, breeding ground 
          For insects who feed on the blood of rats
    - title: "Set"
      initiated: "McMaster"
      lyricsBy: "McMaster"
      lyrics: |
          The brutality of archaic deities
          behind the mask of prosaic power
          visions of supremacy
          foul passions

          Dissociate 
          Trauma cleaves the mind into shards
          Compartments formed in self defense
          systematic implantation
          world control
    - title: "The Wheel"
      initiated: "McMaster"
      lyricsBy: "McMaster"
      lyrics: |
          I care not from whence you came
          gift, vessel— I drink your pain

          All I’ve won, all this enlightened life,
          the black thread.
          And now, in kitsch rites from another era

          I complete the circle.

    - title: "Aspherance"
      initiated: "Barr"
      lyricsBy: "Marston"
      lyrics: |
          Leaden drop    into aspherance
          Be the collectors     of mass
          In the collection     of stars
          Overhead

          Yet places the nuisance with the divine

          On the pedestal, a scale
          Vessel of human’s ash and dust 
                On one side
          The other holding the flame
    - title: "The Myth"
      initiated: "McMaster"
      lyricsBy: "McMaster"
      lyrics: |
          grand debt of love and rage
          conspiracy of invisibilities

          Egypt stretches out before you
          Building on the broken bodies of slaves

          Implant a new persona to do your work
          Split the mind of your firstborn

          Without the cult
          Would I even know your name
    - title: "Mass Cathexis"
      initiated: "Marston"
      lyricsBy: "Edwardson"
      lyrics: |
          Unnatural obsession
          Sublimated aggression
          Societal misanthropy

          We’ve sown the seeds
          To feed the need
          To cede to greed
          Commit savage deeds

          Mass Cathexis

          Feelings buried inside
          Override our bounds of distinction
          Empathy is crushed

          Psychic focus
          Damaged reasons
          Self betrayal
          Unconscious subversion

          Distorted thoughts: Brainwashed
    - title: "The Form"
      initiated: "McMaster"
      lyricsBy: "McMaster"
      lyrics: |
          The black thread 
          Bind present in every weave

          The form
          For the gift from our master
          Feast, for the chosen.

          Loki Bound
          And the Earth shakes
    - title: "The Formed"
      initiated: "Barr"
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
    - title: "All and Nothing"
      initiated: "McMaster"

# Free text, rendered whitespace-as-typed: line breaks and multiple spaces
# are kept, a blank line starts a new paragraph. Recording info + assorted
# credits (artwork, logo, etc). Double space between sentences to taste.
engineering: |
    recorded October 2019 and March 2020 at Menegroth, The Thousand Caves, Queens NY, as well as mixed/mastered by Colin Marston.

    Dave Ed vocals recorded July 30, 2020 at the Kicker space by Matt "Mauz" Parrillo

# One entry per member, "Name | instruments".
# The pipe is the parse separator; display formatting lives in [slug].astro.
lineup:
    - "Nicholas McMaster | bass, vocals"
    - "Mick Barr | guitar, vocals"
    - "Lev Weinstein | Drums"
    - "Colin Marston | guitar, keyboards, bass"
    - "Dave Edwardson | vocals"

# Paste the full Bandcamp embed snippet to light up the player:
bandcampEmbed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=941453581/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://krallice.bandcamp.com/album/mass-cathexis">Mass Cathexis by Krallice</a></iframe>'
Ampwall: '<iframe src="https://ampwall.com/services/PlayerCard/v1/content?albumId=019b1560-9bc3-7653-8d5e-638bbdf64420&controlStyle=horizontal&playerWidth=650&tracklist=false&borderRadius=0" style="width: 100%; max-width: 650px; height: 145px; border: 0; border-radius: 0px;" loading="lazy" title="Listen to Mass Cathexis on Ampwall"></iframe>'
# the Bandcamp one (collapsed by default; loads nothing until expanded).
ampwallEmbed: '<iframe src="https://ampwall.com/services/PlayerCard/v1/content?albumId=019b1560-9bc3-7653-8d5e-638bbdf64420&controlStyle=horizontal&playerWidth=650&tracklist=false&borderRadius=0" style="width: 100%; max-width: 650px; height: 145px; border: 0; border-radius: 0px;" loading="lazy" title="Listen to Mass Cathexis on Ampwall"></iframe>'
# Or, with no embed, ampwallUrl renders a plain link instead:
# ampwallUrl: "https://ampwall.com/a/krallice"
byline: "NM"
---

This album was recorded in two halves, which each session handling 4/5 songs. There was a third session planned with an additional four songs. This session was cancelled because of the 2020 pandemic & lockdown. These songs were eventually recorded and released as "Mass Cathexis 2." Dave Edwardson only appears on the song "Mass Cathexis."

<!-- Optional release notes (markdown). Leave empty for none. -->
