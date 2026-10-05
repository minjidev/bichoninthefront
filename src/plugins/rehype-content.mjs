/**
 * Post-body HTML tweaks:
 * - wrap tables in a focusable, scrollable region (keyboard-scrollable on mobile)
 * - lazy-load images that don't set `loading` explicitly
 *   (covers Markdown images and raw `<img>` JSX in MDX)
 */
const isJsx = (node) => node.type === "mdxJsxFlowElement" || node.type === "mdxJsxTextElement";

function lazyImage(node) {
    if (node.type === "element" && node.tagName === "img") {
        node.properties ??= {};
        node.properties.loading ??= "lazy";
        node.properties.decoding ??= "async";
    } else if (isJsx(node) && node.name === "img") {
        const names = new Set(node.attributes.map((attr) => attr.name));
        if (!names.has("loading")) node.attributes.push({ type: "mdxJsxAttribute", name: "loading", value: "lazy" });
        if (!names.has("decoding")) node.attributes.push({ type: "mdxJsxAttribute", name: "decoding", value: "async" });
    }
}

const isTable = (node) =>
    (node.type === "element" && node.tagName === "table") || (isJsx(node) && node.name === "table");

export function rehypeContent() {
    return (tree) => {
        const walk = (parent) => {
            if (!parent.children) return;
            parent.children = parent.children.map((node) => {
                walk(node);
                lazyImage(node);
                if (!isTable(node)) return node;
                return {
                    type: "element",
                    tagName: "div",
                    properties: { className: ["table-wrap"], tabIndex: 0, role: "region", ariaLabel: "표" },
                    children: [node],
                };
            });
        };
        walk(tree);
    };
}
