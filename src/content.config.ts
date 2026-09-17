import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const albums = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/albums' }),
  schema: z.object({
    title: z.string(),
    /** optional qualifier shown under the title on the discography tile and
        album page — a second title line ("The Kinetic Infinite") or a
        specifier ("Live", "Remasters") */
    subtitle: z.string().optional(),
    releaseDate: z.coerce.date(),
    orderingDate: z.coerce.date().optional(),
    coverArt: z.string().optional(),
    backdropArt: z.string().optional(),
    tracks: z
      .array(
        z
          .union([
            z.string(),
            z
              .object({
                title: z.string(),
                initiated: z.string().optional(),
                written: z.string().optional(),
                lyrics: z.string().optional(),
                lyricsBy: z.string().optional(),
                /** provisional: href of a tablature (file or page) — renders a
                    "Tab" link in the tracklist. Shape may change once real
                    tabs exist. */
                tab: z.string().optional(),
              })
              .refine((t) => !(t.initiated && t.written), {
                message: 'A track takes either `initiated` or `written`, not both',
              }),
          ])
          .transform((t) => (typeof t === 'string' ? { title: t } : t)),
      )
      .default([]),
    engineering: z.string().optional(),
    /** signature under the release notes, e.g. "NM"; em dash added on render */
    byline: z.string().optional(),
    /** Either a flat list of "Name | instruments" strings, or — for a release
        with more than one lineup (e.g. two EPs on one record) — a list of
        `{ heading, members }` groups, where `heading` labels the tracks the
        group played on. */
    lineup: z
      .union([
        z.array(z.string()),
        z.array(z.object({ heading: z.string(), members: z.array(z.string()) })),
      ])
      .default([]),
    bandcampEmbed: z.string().optional(),
    ampwallEmbed: z.string().optional(),
    ampwallUrl: z.string().url().optional(),
  }),
});

export const collections = { albums };
