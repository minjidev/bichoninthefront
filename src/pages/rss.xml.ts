import rss from "@astrojs/rss";
import type { APIContext } from "astro";

import { SITE } from "../consts";
import { getPostsByDate } from "../lib/posts";

export async function GET(context: APIContext) {
    const posts = await getPostsByDate();
    return rss({
        title: SITE.title,
        description: SITE.description,
        site: context.site!,
        trailingSlash: false,
        items: posts.map((post) => ({
            title: post.data.title,
            description: post.data.description,
            pubDate: post.data.date,
            categories: post.data.tags,
            link: `/${post.id}`,
        })),
    });
}
