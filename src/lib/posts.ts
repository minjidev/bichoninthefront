import { getCollection, type CollectionEntry } from "astro:content";

export type Post = CollectionEntry<"blog">;

/** Published posts, pinned first, then newest first. */
export async function getPosts(): Promise<Post[]> {
    const posts = await getCollection("blog", ({ data }) => import.meta.env.DEV || !data.draft);
    return posts.sort(
        (a, b) =>
            Number(b.data.pinned) - Number(a.data.pinned) ||
            b.data.date.valueOf() - a.data.date.valueOf(),
    );
}

/** Published posts by date only (for archive, RSS, prev/next). */
export async function getPostsByDate(): Promise<Post[]> {
    const posts = await getPosts();
    return [...posts].sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
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

export const formatDate = (date: Date) =>
    date.toLocaleDateString("ko-KR", { year: "numeric", month: "long", day: "numeric", timeZone: TIME_ZONE });

export const formatMonthDay = (date: Date) =>
    date.toLocaleDateString("ko-KR", { month: "2-digit", day: "2-digit", timeZone: TIME_ZONE });

export const yearOf = (date: Date) =>
    Number(date.toLocaleDateString("en-US", { year: "numeric", timeZone: TIME_ZONE }));
