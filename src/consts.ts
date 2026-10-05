export const SITE = {
    title: "BichonIntheFront",
    description: "Frontend Developer Kimbichon's Blog",
    author: "Minji Kim",
    locale: "ko",
    defaultImage: "/img/myPic/bichon-p1.png",
} as const;

export const SOCIALS = {
    linkedin: "https://www.linkedin.com/in/kimbision/",
    github: "https://github.com/minjidev",
} as const;

export const GISCUS = {
    repo: "minjidev/bichoninthefront",
    repoId: "R_kgDOM-VoyQ",
    category: "Comments",
    categoryId: "DIC_kwDOM-Voyc4CjUIh",
} as const;

/** Display labels for tags (migrated from Docusaurus tags.yml). */
export const TAG_LABELS: Record<string, string> = {
    frontend: "FrontEnd",
    retrospective: "Retrospective",
    career: "Career",
    javascript: "JavaScript",
    "three.js": "Three.js",
    animation: "Animation",
    svg: "SVG",
    build: "Build",
    workflow: "Workflow",
    "github-actions": "GitHub Actions",
    troubleshooting: "Troubleshooting",
    http: "HTTP",
    web: "Web",
    network: "Network",
    "ci-cd": "CI/CD",
};

export const tagLabel = (tag: string) => TAG_LABELS[tag] ?? tag;
