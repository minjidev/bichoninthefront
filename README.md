# BichonIntheFront

[한국어](#한국어) · [English](#english)

---

## 한국어

프론트엔드 엔지니어 김민지의 기술 블로그입니다. 웹 플랫폼, JavaScript, 프론트엔드 개발 중 마주친 문제와 그 과정에서 배운 것을 기록합니다.

🔗 **https://bichoninthefront.vercel.app**

### 기술 스택

- [Astro 7](https://astro.build/) (버전 고정: 7.3.5), MDX
- TypeScript
- [giscus](https://giscus.app/) 댓글 (GitHub Discussions 기반)
- pnpm
- Vercel 배포

### 시작하기

Node.js 22 (22.13 이상)와 pnpm이 필요합니다. `.nvmrc`에 버전이 지정되어 있습니다. pnpm 버전은 `package.json`의 `packageManager`에 고정되어 있습니다.

```bash
pnpm install   # 의존성 설치 (pre-push 훅도 함께 설치됩니다)
pnpm dev       # 로컬 개발 서버 실행 (http://localhost:4321)
pnpm build     # dist/ 디렉터리에 정적 파일 생성
pnpm preview   # 빌드 결과를 로컬에서 확인
pnpm check     # 타입·Astro 진단
```

### 글 작성하기

`src/content/blog/` 아래에 `YYYY-MM-DD-slug/index.mdx` 형식으로 폴더를 만들고, 이미지는 같은 폴더에 둡니다.

```mdx
---
slug: my-post            # URL: /my-post
title: "글 제목"
description: "검색 결과와 목록에 보일 요약"
date: 2026-10-05
tags: [frontend, javascript]
pinned: false            # true면 목록 맨 위에 고정
draft: false             # true면 배포에서 제외
comments: true
---

본문
```

- frontmatter 스키마는 `src/content.config.ts`, 태그 표시 이름은 `src/consts.ts`에 있습니다.
- `:::note[제목]` ... `:::` 형식의 안내 박스(note, tip, info, warning, danger)를 쓸 수 있습니다.
- 코드 블록에서 `// highlight-next-line`으로 강조, `// error-next-line` 또는 `# error-start` ~ `# error-end`로 에러 라인을 표시할 수 있습니다.

### 영어 글

번역본은 같은 폴더에 `index.en.mdx`로 두면 `/en/<slug>`에 게시되고, 원문과 번역본이 서로 링크됩니다. 번역 원칙과 용어집은 [`docs/translation-guide.md`](docs/translation-guide.md)에 있습니다.

### 배포

`main` 브랜치에 push하면 Vercel이 자동으로 빌드·배포합니다. push 전에 pre-push 훅이 `pnpm install --frozen-lockfile`로 lockfile과 `package.json`의 일치 여부를 확인합니다.

---

## English

The tech blog of Minji Kim, a frontend engineer. It covers the web platform, JavaScript, and lessons learned from real problems in frontend development.

🔗 **https://bichoninthefront.vercel.app**

### Tech stack

- [Astro 7](https://astro.build/) (pinned to 7.3.5), MDX
- TypeScript
- [giscus](https://giscus.app/) comments (backed by GitHub Discussions)
- pnpm
- Deployed on Vercel

### Getting started

Requires Node.js 22 (22.13+) and pnpm. The version is set in `.nvmrc`. The pnpm version is pinned via `packageManager` in `package.json`.

```bash
pnpm install   # install dependencies (also installs the pre-push hook)
pnpm dev       # start the local dev server (http://localhost:4321)
pnpm build     # generate static files into dist/
pnpm preview   # preview the production build locally
pnpm check     # run type and Astro diagnostics
```

### Writing a post

Create a folder under `src/content/blog/` named `YYYY-MM-DD-slug/` with an `index.mdx` inside, and keep images in the same folder.

```mdx
---
slug: my-post            # URL: /my-post
title: "Post title"
description: "Summary for search results and the post list"
date: 2026-10-05
tags: [frontend, javascript]
pinned: false            # true pins the post to the top of the list
draft: false             # true excludes it from production builds
comments: true
---

Body
```

- The frontmatter schema lives in `src/content.config.ts`; tag display names live in `src/consts.ts`.
- Admonitions use `:::note[Title]` ... `:::` (note, tip, info, warning, danger).
- In code blocks, use `// highlight-next-line` to highlight a line, and `// error-next-line` or `# error-start` … `# error-end` to mark error lines.

### English posts

Put a translation next to the original as `index.en.mdx`; it is published at `/en/<slug>` and linked with the Korean post. See [`docs/translation-guide.md`](docs/translation-guide.md) for the style guide and glossary.

### Deployment

Pushing to `main` triggers an automatic build and deploy on Vercel. Before each push, a pre-push hook runs `pnpm install --frozen-lockfile` to make sure the lockfile matches `package.json`.
