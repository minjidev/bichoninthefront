export const LOCALES = ["ko", "en"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "ko";

export const LOCALE_META: Record<Locale, { htmlLang: string; ogLocale: string; dateLocale: string; label: string }> = {
    ko: { htmlLang: "ko", ogLocale: "ko_KR", dateLocale: "ko-KR", label: "한국어" },
    en: { htmlLang: "en", ogLocale: "en_US", dateLocale: "en-US", label: "English" },
};

/** Path for a locale; Korean stays at the root to keep existing URLs. */
export function localePath(locale: Locale, path = "/"): string {
    if (locale === DEFAULT_LOCALE) return path;
    return path === "/" ? `/${locale}` : `/${locale}${path}`;
}

const strings = {
    ko: {
        skipToContent: "본문으로 건너뛰기",
        mainNav: "주요 메뉴",
        externalLinks: "외부 링크",
        themeToggle: "다크 모드",
        tagsDescription: "태그별로 글 모아보기",
        allTags: "← 모든 태그",
        archiveDescription: "전체 글 목록",
        toc: "목차",
        postNav: "이전/다음 글",
        prev: "이전 글",
        next: "다음 글",
        comments: "댓글",
        pinned: "고정",
        rssTitle: "BichonIntheFront",
    },
    en: {
        skipToContent: "Skip to content",
        mainNav: "Main menu",
        externalLinks: "External links",
        themeToggle: "Dark mode",
        tagsDescription: "Browse posts by tag",
        allTags: "← All tags",
        archiveDescription: "All posts",
        toc: "Contents",
        postNav: "Previous and next posts",
        prev: "Previous",
        next: "Next",
        comments: "Comments",
        pinned: "Pinned",
        rssTitle: "BichonIntheFront (English)",
    },
} satisfies Record<Locale, Record<string, string>>;

export type UIKey = keyof (typeof strings)["ko"];
export const t = (locale: Locale, key: UIKey): string => strings[locale][key];

export const minRead = (locale: Locale, minutes: number) =>
    locale === "ko" ? `${minutes}분 읽기` : `${minutes} min read`;

export const tagPageDescription = (locale: Locale, label: string, count: number) =>
    locale === "ko" ? `${label} 태그가 달린 글 ${count}편` : `${count} ${count === 1 ? "post" : "posts"} tagged ${label}`;
