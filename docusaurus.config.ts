import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
    title: "bichoninthefront",
    tagline: "Frontend Devloper Kimbichon's Blog",
    favicon: "img/favichon.ico",

    url: "https://bichoninthefront.vercel.",
    baseUrl: "/",

    // GitHub pages deployment config.
    organizationName: "minjidev",
    projectName: "bichonIntheFront",

    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",

    i18n: {
        defaultLocale: "ko",
        locales: ["ko", "en"],
    },

    presets: [
        [
            "classic",
            {
                docs: {
                    sidebarPath: "./sidebars.ts",
                    routeBasePath: "/docs",
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    // editUrl:
                    //     "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
                },
                blog: {
                    routeBasePath: "/",
                    showReadingTime: true,
                    feedOptions: {
                        type: ["rss", "atom"],
                        xslt: true,
                    },

                    blogSidebarTitle: "All posts",
                    blogSidebarCount: "ALL",
                    // Please change this to your repo.
                    // // Remove this to remove the "edit this page" links.
                    // editUrl:
                    //     "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
                    // Useful options to enforce blogging best practices
                    onInlineTags: "warn",
                    onInlineAuthors: "warn",
                    onUntruncatedBlogPosts: "warn",
                },
                theme: {
                    customCss: "./src/css/custom.css",
                },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
        // Replace with your project's social card
        image: "img/docusaurus-social-card.jpg",
        docs: {
            sidebar: {
                hideable: true,
            },
        },
        navbar: {
            title: "BichonIntheFront",
            // logo: {
            //     alt: "BichonIntheFront logo",
            //     src: "img/b-logo.svg",
            // },
            items: [
                { to: "/aboutme", label: "About Me", position: "left" },
                // { to: "/", label: "Blog", position: "left" },
                {
                    href: "https://www.linkedin.com/in/kimbision",
                    label: "LinkedIn",
                    position: "right",
                },
            ],
        },
        colorMode: {
            defaultMode: "dark",
            disableSwitch: false,
            respectPrefersColorScheme: false,
        },
        tableOfContents: {
            minHeadingLevel: 2,
            maxHeadingLevel: 4,
        },
        footer: {
            style: "dark",
            links: [
                // {
                //     title: "Docs",
                //     items: [
                //         {
                //             label: "Tutorial",
                //             to: "/docs/intro",
                //         },
                //     ],
                // },
                // {
                //     title: "Community",
                //     items: [
                //         {
                //             label: "Stack Overflow",
                //             href: "https://stackoverflow.com/questions/tagged/docusaurus",
                //         },
                //         {
                //             label: "Discord",
                //             href: "https://discordapp.com/invite/docusaurus",
                //         },
                //         {
                //             label: "Twitter",
                //             href: "https://twitter.com/docusaurus",
                //         },
                //     ],
                // },
                // {
                //     title: "More",
                //     items: [
                //         {
                //             label: "Blog",
                //             to: "/blog",
                //         },
                //         {
                //             label: "GitHub",
                //             href: "https://github.com/minjidev",
                //         },
                //     ],
                // },
            ],
            copyright: `Copyright © 2024 BichonInthFront. Built with Docusaurus.`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
            additionalLanguages: ["bash"]
        },
    } satisfies Preset.ThemeConfig,
};

export default config;
