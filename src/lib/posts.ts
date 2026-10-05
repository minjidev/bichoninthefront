import { getCollection, type CollectionEntry } from "astro:content";

import { LOCALE_META, localePath, type Locale } from "../i18n/ui";

export type Post = CollectionEntry<"blog">;

/** English posts live in `index.en.mdx` and get an `en/` id prefix (see content.config.ts). */
export const localeOf = (post: Post): Locale => (post.id.startsWith("en/") ? "en" : "ko");
export const slugOf = (post: Post) => post.id.replace(/^en\//, "");
export const postUrl = (post: Post) => localePath(localeOf(post), `/${slugOf(post)}`);

/** Published posts in one locale, pinned first, then newest first. */
export async function getPosts(locale: Locale = "ko"): Promise<Post[]> {
    const posts = await getCollection(
        "blog",
        (post) => localeOf(post) === locale && (import.meta.env.DEV || !post.data.draft),
    );
    return posts.sort(
        (a, b) =>
            Number(b.data.pinned) - Number(a.data.pinned) ||
            b.data.date.valueOf() - a.data.date.valueOf(),
    );
}

/** Published posts by date only (for archive, RSS, prev/next). */
export async function getPostsByDate(locale: Locale = "ko"): Promise<Post[]> {
    const posts = await getPosts(locale);
    return [...posts].sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

/** The same post in the other locale, if it has been translated. */
export async function getTranslation(post: Post): Promise<Post | undefined> {
    const other: Locale = localeOf(post) === "ko" ? "en" : "ko";
    const posts = await getPosts(other);
    return posts.find((p) => slugOf(p) === slugOf(post));
}

export function getTags(posts: Post[]): Map<string, Post[]> {
    const tags = new Map<string, Post[]>();
    for (const post of posts) {
        for (const tag of post.data.tags) {
            tags.set(tag, [...(tags.get(tag) ?? []), post]);
        }
    }
    return new Map([...tags].sort(([a], [b]) => a.localeCompare(b)));
}

/** Korean-aware estimate: ~500 Hangul characters or ~200 other words per minute. */
export function readingMinutes(body = ""): number {
    const text = body.replace(/```[\s\S]*?```/g, " ").replace(/<[^>]+>/g, " ");
    const hangul = (text.match(/[\uAC00-\uD7A3]/g) ?? []).length;
    const words = text.replace(/[\uAC00-\uD7A3]/g, " ").split(/\s+/).filter((w) => /[\p{L}\p{N}]/u.test(w)).length;
    return Math.max(1, Math.ceil(hangul / 500 + words / 200));
}

const TIME_ZONE = "Asia/Seoul";

export const formatDate = (date: Date, locale: Locale = "ko") =>
    date.toLocaleDateString(LOCALE_META[locale].dateLocale, {
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: TIME_ZONE,
    });

export const formatMonthDay = (date: Date, locale: Locale = "ko") =>
    date.toLocaleDateString(LOCALE_META[locale].dateLocale, { month: "2-digit", day: "2-digit", timeZone: TIME_ZONE });

export const yearOf = (date: Date) =>
    Number(date.toLocaleDateString("en-US", { year: "numeric", timeZone: TIME_ZONE }));
