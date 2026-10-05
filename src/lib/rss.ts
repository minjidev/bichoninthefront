import rss from "@astrojs/rss";
import type { APIContext } from "astro";

import { SITE } from "../consts";
import { t, type Locale } from "../i18n/ui";
import { getPostsByDate, postUrl } from "./posts";

export async function feed(context: APIContext, locale: Locale) {
    const posts = await getPostsByDate(locale);
    return rss({
        title: t(locale, "rssTitle"),
        description: SITE.description,
        site: context.site!,
        trailingSlash: false,
        customData: `<language>${locale}</language>`,
        items: posts.map((post) => ({
            title: post.data.title,
            description: post.data.description,
            pubDate: post.data.date,
            categories: post.data.tags,
            link: postUrl(post),
        })),
    });
}
