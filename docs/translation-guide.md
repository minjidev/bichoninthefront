# Translation guide (Korean → English)

How to turn a Korean post on this blog into an English post that reads as if it were written in English. Not a word-for-word copy: same argument, same code, same evidence, natural English.

The rules below come from these references, adapted for a personal tech blog:

- [Google developer documentation style guide](https://developers.google.com/style) — [highlights](https://developers.google.com/style/highlights), [voice and tone](https://developers.google.com/style/tone), [active voice](https://developers.google.com/style/voice), [word list](https://developers.google.com/style/word-list)
- [MDN writing style guide](https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Writing_style_guide)
- Terminology from [MDN `unhandledrejection`](https://developer.mozilla.org/en-US/docs/Web/API/Window/unhandledrejection_event), the [HTML spec](https://html.spec.whatwg.org/multipage/webappapis.html#the-hostpromiserejectiontracker), and long-form posts on promises such as [web.dev: JavaScript promises](https://web.dev/articles/promises) and [Human Who Codes: unhandled rejection tracking](https://humanwhocodes.com/blog/2021/01/creating-javascript-promise-from-scratch-unhandled-rejection-tracking/)

## 1. Voice and tone

- **Conversational, not chatty.** Write like a knowledgeable colleague explaining something at a whiteboard. Google's own example of the target register: "This API lets you collect data about what your users like." Not "Dude! This API is totally awesome!" and not "The API documented by this page may enable the acquisition of information…"
- **Person.**
  - `I` for my own experiments and decisions ("I ran the same code in three consoles").
  - `you` for the reader, especially when they are the one making a decision ("If you maintain an SDK, …").
  - Avoid the editorial `we` unless it really means "you and I, together, right now". Korean `~해봅시다` becomes a direct statement or `Let's` *sparingly* (at most once or twice per post).
- **Active voice by default.** Name who does what: "The browser fires `unhandledrejection`", not "`unhandledrejection` is fired". Passive is fine when the actor doesn't matter.
- **Present tense** for how things work; **past tense** only for what I observed in a specific experiment.
- **Contractions are fine** (don't, isn't, it's). MDN encourages them; they keep the tone light.
- **No filler or condescension.** Drop `simply`, `just`, `easy`, `obviously`, `of course`, `please`. Don't use exclamation marks.
- **Rhetorical questions** are a strength of the Korean original. Keep them in headings and section openers, but answer them right away, and avoid two in a row.

## 2. Korean → English pitfalls

| Korean pattern | Literal English (avoid) | Natural English |
| --- | --- | --- |
| Hedged endings: `~할 수 있습니다`, `~로 보입니다`, `~것 같습니다` everywhere | "It can be said that…", "It seems that…" on every line | State facts plainly. Hedge once, only where I actually am not sure ("This appears to be why…"). |
| `~하는 것입니다` / `~라는 것` nominalization | "The thing is that it is to …" | Use the verb: "The handler calls `preventDefault()`." |
| Topic markers: `A는 ~` at sentence start | "As for A, …" | Make A the subject, or restructure. |
| Dropped subject | "Then, can't observe the error." | Always supply a subject: "The SDK can't observe the error." |
| `즉`, `따라서`, `또한`, `반면` at every sentence | "That is, … Therefore, … Also, …" | Use connectives only where the logic needs one; prefer `so`, `but`, `instead`, `that means`. |
| `~에 대해 알아보겠습니다` | "Let's find out about …" | Say what the section shows: "This section compares three options." |
| `이 글에서는 ~를 다룹니다` | "In this article, we will deal with …" | "This post covers …" / "This post focuses on …" |
| Stacked noun phrases | "SDK internal monitoring channel transmission function" | Unpack with prepositions: "a function that sends errors to the SDK's own monitoring channel" |
| Missing articles | "SDK can't know host environment." | "The SDK can't know which environment the host runs in." |
| Uncountable nouns pluralized | informations, feedbacks | information, feedback |
| Long Korean sentence with several `~고`, `~며` | One 50-word sentence | Split into two or three sentences. Aim for under ~25 words. |

Other habits:

- **Vary everyday words instead of repeating them.** Korean tolerates repeating the same word in neighboring sentences; English reads as flat when it does. Reach for a fitting synonym for general vocabulary (logs / prints / shows up, observe / see / detect / track, failure / error, run / try, inside / within). **Exception: glossary and technical terms stay fixed** (`unhandled rejection`, `rejection handler`, `host`, `same-origin`, `default action`). Swapping those for synonyms makes readers think a different thing is meant.
- **Explain Korea-specific context once.** On first mention, add a short appositive or parenthetical for names and customs a reader outside Korea won't know: services (Inflearn, "a Korean online learning platform for developers"), events (INFCON, "Inflearn's annual developer conference"), communities (Geultto), certifications, holidays (Lunar New Year), and Korean-only books. Mark Korean-language links with "(in Korean)". Don't explain the same thing twice, and don't add explanations that turn into digressions.
- Use **"for example"** and **"that is"** instead of `e.g.` / `i.e.` in prose; avoid `etc.` (name the items or say "such as").
- Prefer plain verbs: `use` (not leverage/utilize), `after` (not once), `to` (not in order to), `want` (not desire).
- Don't say "below/above" for things in the post; use "the following table", "the earlier example".
- Descriptive link text, never "here".

## 3. Formatting conventions

- **Headings:** sentence case ("Where does an un-awaited promise's failure go?"), not Title Case. Keep code in backticks inside headings.
- **American spelling** (behavior, color, canceled). **Serial (Oxford) comma**: "ignore, log, or report".
- **Code in prose** uses backticks: `await`, `preventDefault()`, `unhandledrejection`, `event.reason`. Function names get `()` when referring to the call.
- **Code blocks stay byte-for-byte identical** to the Korean post, including stack traces and line markers. Translate only comments that are written in Korean, and keep them short.
- **Tables:** translate headers and cell text; keep emoji/marks as they are.
- **Admonitions:** keep the `:::tip[Title]` syntax; translate the title.
- **Links:** keep the same targets. If a Korean source is linked and an English equivalent exists, link the English one.

## 4. Glossary

Terms used across posts. Keep these consistent; add new ones when a post introduces them.

| Korean in posts | English | Notes |
| --- | --- | --- |
| Promise (개념) | promise | Lowercase for the concept: "an un-awaited promise". |
| Promise (생성자/타입) | `Promise` | Code font when it means the JavaScript object/type. |
| reject되다 | is rejected / rejects | "If the promise rejects, …" |
| rejection | rejection | "an unhandled rejection" |
| 처리되지 않은 rejection | unhandled rejection | Standard term (MDN, HTML spec). |
| rejection 핸들러 | rejection handler | Callback passed to `.catch()` or the second argument of `.then()`. |
| await하지 않다 | don't await / leave un-awaited | "a promise you don't await"; avoid "non-awaited". |
| fire-and-forget 패턴 | the fire-and-forget pattern | Hyphenated when used as a modifier. |
| 호스트 (SDK를 사용하는 페이지/앱) | host page / host app / host | Define once: "the page that embeds the SDK (the host)". |
| SDK 작성자 | SDK author / SDK maintainer | |
| 호출자 | caller | |
| 전역 핸들러 | global handler | e.g. a `window` listener for `unhandledrejection` |
| 기본 동작 | default behavior / default action | MDN uses "default action" for events. |
| 콘솔 출력이 막히다 | suppresses the console error | |
| 실패를 삼키다 | swallow the error | Idiomatic in English too. |
| 관측하다 | observe / see / capture | "observe" for monitoring; "capture" for Sentry-style reporting. |
| 텔레메트리 | telemetry | Uncountable. |
| 동일 출처 / 교차 출처 | same-origin / cross-origin | Hyphenated adjectives. |
| 스펙 | the spec / the HTML spec | |
| 실무 사례 | In the wild / Real-world examples | Section label for open-source examples. |
| 닫으며 | Wrapping up / Conclusion | Prefer "Wrapping up" on this blog. |
| REF | References | |

## 5. Process

1. **Read the whole Korean post first** and write the core claim in one English sentence. Every paragraph should serve it.
2. **Translate paragraph by paragraph, not sentence by sentence.** Reorder sentences inside a paragraph if English reads better that way.
3. **Re-read the English cold**, as if no Korean version existed. Cut repetition the Korean needed for rhythm but English doesn't.
4. **Check against this guide:** glossary terms, sentence case headings, no `e.g./i.e.`, no filler words, code blocks unchanged.
5. **Frontmatter:** same `slug`, `date`, `tags`, `comments`; translated `title` and `description` (description: 1–2 sentences, under ~160 characters, says what the reader learns).
6. File location: `src/content/blog/<post-folder>/index.en.mdx`. The English page is served at `/en/<slug>`.

## 6. Checklist

- [ ] Title is a natural English headline, not a calque of the Korean.
- [ ] Every section heading is sentence case.
- [ ] No sentence starts with "As for", "That is,", "In other words," more than once in the post.
- [ ] Hedges appear only where I'm actually unsure.
- [ ] Glossary terms are used consistently.
- [ ] No everyday word is repeated in back-to-back sentences when a natural synonym exists.
- [ ] Korea-specific names and references are explained once on first mention; Korean-language links say "(in Korean)".
- [ ] Code blocks, stack traces, and links match the Korean post.
- [ ] Read aloud: no sentence makes you take a breath in the middle.
