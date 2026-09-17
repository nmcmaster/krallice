---
# ── Copy this file to src/content/albums/<year>-<slug>.md ──────────────────
# The <year>- prefix only sorts files on disk; the URL becomes /albums/<slug>
# (year stripped), so slugs must be unique across years.
# Site order + chapter numerals come from releaseDate — nothing to set here.

title: "Mass Cathexis 2"
subtitle: "The Kinetic Infinite"
releaseDate: 2023-12-01
# Drop the cover into public/albums/ first. One field drives the header art,
# the discography tile, the zoom popup, AND the page's ambient backdrop.
# Export ~1600×1600 WebP or JPEG (q75–80), aiming under ~500 KB — files in
# public/ ship as-is, no build-time optimization:
coverArt: "/albums/2023-mass-cathexis-2-the-kinetic-infinite.jpg"
# backdropArt: "/albums/2012-years-past-matter-background.jpg"

# A track is a plain title string, or a mapping for extra data.
# Gotchas: once a track has any extra field it needs `title:` on the dash
# line, with every other field aligned exactly under the `t` of `title`.
# Lyric lines must all be indented deeper than `lyrics:` itself (pasting
# strips indentation — select the pasted lines and indent them together).
tracks:
    - title: "Empyrean"
      initiated: "McMaster"
      lyricsBy: "McMaster"
      lyrics: |
          Sublime heights of the empyrean
          monsters which server both as guardians and heraldic symbols
          Purifying fire
          in the white rose of the empyrean

          (after Erich Auerbach)
    - title: "Absorption"
      initiated: "Barr"
      lyricsBy: "Barr"
      lyrics: |
          crowded seafoam
          carries a wisp of movement
          guided and thoughtful

          a pew of sound gatherers
          combing the land
          drowning in quantity

          existing as absorption
          cellular distribution
          of the massless cathartic production

          and the wisps pile onward
          choking oceans of thought
          marching through the infinite empty
    - title: "Theriantrophy"
      initiated: "McMaster"
      lyricsBy: "McMaster"
      lyrics: |
          Shadow bodies, the possibility of pleasure and pain
          Enabled to stand in sensuous concreteness before him
          Before us
          Not the leveling (semi-) existence of shades
          of the realm of shades
          The guide did not disclose ultimate destinies
          destroying the christian drama of a unique term of life
          in which the decision must be made

          (after Erich Auerbach)
    - title: "Liquid-Remembered Vessels"
      initiated: "Marston"
      lyricsBy: "Marston"
      lyrics: |
          hail sacred sublimination of the fabric-foaming swirl

          passages succumb to spacetime
          thread connects all pain and substance

          suppress the holy ground
          ignore the warning of time

          all shiver through the void
          pathos theos glide descend

          restrove ascension
          the will sickens toward death

          absorbing the pointless
          redistribute the useless

          the weight of years, the height of thought form
          courses through liquid-remembered vessels
          circulating terror
          limitless eternal none.

          slaves to the sphere
          cast out all that was divine
    - title: "Let the Wind Take Them"
      initiated: "Barr"
      lyricsBy: "Barr"
      lyrics: |
          Planning what growth, sheer not in hand
          forevering through it all, like the rest
          where life fades, its beginning stages
          study and remain, as is

          Crossing less land, than amount
          sand does evaporate, when counted
          boat promises, food gathering, time delay
          centuries forth and laying back the bread

          For not the mist
          intrinsic alignment
          Disfreedom, way west, sand judgements in self-conscious plans
          don’t mend broken plants, let the wind take them

          Nestle deeper, for the sun shall evaporate your blood
          nestle deeper, hibernate from the heat
    - title: "Never Create Another"
      initiated: "Barr"
      lyricsBy: "Barr"
      lyrics: |
          Think of the never been
          The wastes outward
          Infinity
          Shapeless enveloping infinity

          Let this time take hold
          And bear arms and fruit
          In fear

          Take away the castings
          Never brought enough
          To distribute

          Reinstated for stacking and stating
          Never create another
    - title: "The Blatancy of Fulfillment"
      initiated: "Barr"
      lyricsBy: "Barr"
      lyrics: |
          Cracks, sordid away
          lay with them down
          secure all

          Sound the anchors, lord knows
          forsent these, did I
          list them
          I crown the passenger

          With shallow dismay
          With shallow dismay

          Residence in true vacuums
          forlorn in triumph and envy
          sheer cliffs drop full of thorny stone pride

          Red wept in pools

          Right where I’ve been
          in familiar lands and different times
          all saken and respected forgotten
          in turn for the blatancy of fulfillment

          Overwhelmed with mental stench and sickness of sound
          dredging and wading through skullections
    - title: "...And Then Erase Existence"
      initiated: "Barr"
      lyricsBy: "Barr"
      lyrics: |
          Relinquish all suffer
          Goaded into dictatorship
          So long as land still ours

          Forecast so, assess not
          A reach of mighty centuries
          Stood for the truth
          Even when known to be false

          Everknown
          Religious chores
          Sitting home shaking away
          7 years past matter

          Glazing over fades recede
          Pulsing machinery avoidance
          Sulking humanity

          Cough and release, purge the resources
          Finish whats left and evolve...
# Free text, rendered whitespace-as-typed: line breaks and multiple spaces
# are kept, a blank line starts a new paragraph. Recording info + assorted
# credits (artwork, logo, etc). Double space between sentences to taste.
engineering: |
    recorded/mixed/mastered at Menegroth, The Thousand Caves, Queens NY by Colin Marston

    Dave Edwardson vocals recorded by Matt "Mauz" Parrillo

# Two lineups (two EPs on one record): a list of groups, each with a
# heading naming the tracks it covers and its own "Name | instruments" list.
lineup:
    - heading: "1–4 · Mass Cathexis 2"
      members:
          - "McMaster | bass, vocals"
          - "Weinstein | drums"
          - "Barr | guitar, vocals"
          - "Marston | guitar, vocals"
          - "Edwardson | vocals"
    - heading: "5–8 · The Kinetic Infinite"
      members:
          - "Barr | guitar, vocals"
          - "Weinstein | drums"
          - "Marston | synth bass, synth regular"
          - "McMaster | clean guitar"

# Keyboards/synths used, free text like engineering (line breaks kept):
synth: |
    for Kinetic Infinite: ARP 2600m (all bass)
    ARP Omni mk1,  ARP Odyssey,  Korg Lambda
# Paste the full Bandcamp embed snippet to light up the player:
bandcampEmbed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=2415332396/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://krallice.bandcamp.com/album/mass-cathexis-2-the-kinetic-infinite">Mass Cathexis 2 - The Kinetic Infinite by Krallice</a></iframe>'

ampwallEmbed: '<iframe src="https://ampwall.com/services/PlayerCard/v1/content?albumId=019b14fb-c1c5-75b0-8c74-b2daa92cddb4&controlStyle=horizontal&playerWidth=650&tracklist=false&borderRadius=0" style="width: 100%; max-width: 650px; height: 145px; border: 0; border-radius: 0px;" loading="lazy" title="Listen to Mass Cathexis 2 - The Kinetic Infinite on Ampwall"></iframe>'
# Or, with no embed, ampwallUrl renders a plain link instead:
# ampwallUrl: "https://ampwall.com/a/krallice"
byline: "NM"
---

Mass Cathexis 2 was the result of a session to finally record the four songs intended for Mass Cathexis (2020). As such, it is the original instrumentation, not the synth-driven lineup of the previous three records. Dave Edwardson appears on "Liquid Remembered Vessels." The Kinetic Infinite is the only recording (so far) with the lineup of Colin on synth bass (in addition to other synth parts), Mick and Nick on guitar, and Lev on drums. No bass guitar at all on The Kinetic Infinite.

<!-- Optional release notes (markdown). Leave empty for none. -->
