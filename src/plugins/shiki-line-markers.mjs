/**
 * Docusaurus-style magic comments for code blocks:
 *   // highlight-next-line, // highlight-start ... // highlight-end
 *   // error-next-line,     // error-start ... // error-end
 * `#`, `<!-- -->` and `/* *\/` comment styles are accepted too.
 * Marker lines are removed and the target lines get a CSS class.
 */
const MARKER =
    /^\s*(?:\/\/|#|<!--|\/\*)\s*(highlight|error)-(next-line|start|end)\s*(?:-->|\*\/)?\s*$/;

const CLASS = { highlight: "line-highlighted", error: "line-error" };

export function transformerLineMarkers() {
    return {
        name: "bichon:line-markers",
        preprocess(code) {
            const marks = new Map();
            const out = [];
            let block = null;
            let next = null;
            for (const line of code.split("\n")) {
                const m = line.match(MARKER);
                if (m) {
                    const [, kind, pos] = m;
                    if (pos === "next-line") next = kind;
                    else if (pos === "start") block = kind;
                    else block = null;
                    continue;
                }
                out.push(line);
                const kind = next ?? block;
                if (kind) marks.set(out.length, kind);
                next = null;
            }
            this.meta.lineMarks = marks;
            return out.join("\n");
        },
        line(node, line) {
            const kind = this.meta.lineMarks?.get(line);
            if (kind) this.addClassToHast(node, CLASS[kind]);
        },
    };
}
