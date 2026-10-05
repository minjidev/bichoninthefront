import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

/** Frontmatter dates without an offset are written in KST (e.g. `2024-10-27T10:00`). */
const kstDate = z.preprocess((value) => {
    if (typeof value !== "string" || /(Z|[+-]\d{2}:?\d{2})$/.test(value)) return value;
    return value.includes("T") ? `${value}+09:00` : `${value}T00:00+09:00`;
}, z.coerce.date());

const blog = defineCollection({
    // Korean: `<folder>/index.mdx`, English translation: `<folder>/index.en.mdx`.
    // The frontmatter `slug` becomes the id (so existing URLs are preserved); English ids get an `en/` prefix.
    loader: glob({
        pattern: ["**/index.mdx", "**/index.en.mdx"],
        base: "./src/content/blog",
        generateId: ({ entry, data }) => {
            const slug = typeof data.slug === "string" ? data.slug.replace(/^\/+/, "") : entry.split("/")[0];
            return entry.endsWith(".en.mdx") ? `en/${slug}` : slug;
        },
    }),
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            description: z.string().optional(),
            date: kstDate,
            tags: z.array(z.string()).default([]),
            image: image().optional(),
            comments: z.boolean().default(true),
            /** Show this post at the top of the list. */
            pinned: z.boolean().default(false),
            category: z.string().optional(),
            draft: z.boolean().default(false),
        }),
});

export const collections = { blog };
