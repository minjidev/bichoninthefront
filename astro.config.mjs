// @ts-check
import { defineConfig } from "astro/config";
import { unified } from "@astrojs/markdown-remark";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import remarkDirective from "remark-directive";

import { remarkAdmonitions } from "./src/plugins/remark-admonitions.mjs";
import { rehypeContent } from "./src/plugins/rehype-content.mjs";
import { transformerLineMarkers } from "./src/plugins/shiki-line-markers.mjs";

export default defineConfig({
    site: "https://bichoninthefront.vercel.app",
    // Keep Docusaurus-era URLs (no trailing slash), e.g. /fire-and-forget
    trailingSlash: "never",
    markdown: {
        // Astro 7 defaults to the Sätteri processor; remark plugins need the unified pipeline.
        processor: unified({
            remarkPlugins: [remarkDirective, remarkAdmonitions],
            rehypePlugins: [rehypeContent],
            // Docusaurus left quotes and dashes as written.
            smartypants: false,
        }),
        shikiConfig: {
            themes: { light: "github-light", dark: "dracula" },
            defaultColor: false,
            transformers: [transformerLineMarkers()],
        },
    },
    integrations: [
        mdx(),
        sitemap({
            filter: (page) => !page.includes("/404"),
            i18n: { defaultLocale: "ko", locales: { ko: "ko-KR", en: "en-US" } },
        }),
    ],
});
