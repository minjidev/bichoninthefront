# BichonIntheFront

[한국어](#한국어) · [English](#english)

---

## 한국어

프론트엔드 엔지니어 김민지의 기술 블로그입니다. 웹 플랫폼, JavaScript, 프론트엔드 개발 중 마주친 문제와 그 과정에서 배운 것을 기록합니다.

🔗 **https://bichoninthefront.vercel.app**

### 기술 스택

- [Docusaurus 3](https://docusaurus.io/) (블로그 전용 모드)
- React 18, TypeScript
- [giscus](https://giscus.app/) 댓글 (GitHub Discussions 기반)
- pnpm
- Vercel 배포

### 시작하기

Node.js 18 이상과 pnpm이 필요합니다. pnpm 버전은 `package.json`의 `packageManager`에 고정되어 있습니다.

```bash
pnpm install   # 의존성 설치 (pre-push 훅도 함께 설치됩니다)
pnpm start     # 로컬 개발 서버 실행
pnpm build     # build/ 디렉터리에 정적 파일 생성
pnpm serve     # 빌드 결과를 로컬에서 확인
pnpm typecheck # 타입 검사
```

### 글 작성하기

`blog/` 아래에 `YYYY-MM-DD-slug/index.mdx` 형식으로 폴더를 만들고, 이미지는 같은 폴더에 둡니다.

```mdx
---
slug: my-post
title: "글 제목"
authors: MinjiKim
tags: [frontend, javascript]
comments: true
---

목록에 보일 요약

<!-- truncate -->

본문
```

- 작성자는 `blog/authors.yml`, 태그는 `blog/tags.yml`에 정의되어 있습니다.
- 코드 블록에서 `// highlight-next-line`으로 강조, `// error-next-line`으로 에러 라인을 표시할 수 있습니다.

### 배포

`main` 브랜치에 push하면 Vercel이 자동으로 빌드·배포합니다. push 전에 pre-push 훅이 `pnpm install --frozen-lockfile`로 lockfile과 `package.json`의 일치 여부를 확인합니다.

---

## English

The tech blog of Minji Kim, a frontend engineer. It covers the web platform, JavaScript, and lessons learned from real problems in frontend development.

🔗 **https://bichoninthefront.vercel.app**

### Tech stack

- [Docusaurus 3](https://docusaurus.io/) (blog-only mode)
- React 18, TypeScript
- [giscus](https://giscus.app/) comments (backed by GitHub Discussions)
- pnpm
- Deployed on Vercel

### Getting started

Requires Node.js 18+ and pnpm. The pnpm version is pinned via `packageManager` in `package.json`.

```bash
pnpm install   # install dependencies (also installs the pre-push hook)
pnpm start     # start the local dev server
pnpm build     # generate static files into build/
pnpm serve     # preview the production build locally
pnpm typecheck # run the type checker
```

### Writing a post

Create a folder under `blog/` named `YYYY-MM-DD-slug/` with an `index.mdx` inside, and keep images in the same folder.

```mdx
---
slug: my-post
title: "Post title"
authors: MinjiKim
tags: [frontend, javascript]
comments: true
---

Summary shown in the post list

<!-- truncate -->

Body
```

- Authors are defined in `blog/authors.yml` and tags in `blog/tags.yml`.
- In code blocks, use `// highlight-next-line` to highlight a line and `// error-next-line` to mark an error line.

### Deployment

Pushing to `main` triggers an automatic build and deploy on Vercel. Before each push, a pre-push hook runs `pnpm install --frozen-lockfile` to make sure the lockfile matches `package.json`.
