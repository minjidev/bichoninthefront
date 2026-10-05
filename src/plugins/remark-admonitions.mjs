/**
 * Docusaurus-style admonitions (`:::note[Title]` ... `:::`) on top of remark-directive.
 * Text/leaf directives that are not admonitions (e.g. "Content-Type:text") are turned
 * back into plain text so prose is never swallowed.
 */
const LABELS = {
    note: "참고",
    tip: "팁",
    info: "정보",
    warning: "주의",
    caution: "주의",
    danger: "위험",
};

function toText(node) {
    if ("value" in node && typeof node.value === "string") return node.value;
    return (node.children ?? []).map(toText).join("");
}

function restore(node) {
    const label = node.children?.length ? `[${toText(node)}]` : "";
    const prefix = node.type === "leafDirective" ? "::" : ":";
    return { type: "text", value: `${prefix}${node.name}${label}` };
}

export function remarkAdmonitions() {
    return (tree) => {
        const walk = (parent) => {
            if (!parent.children) return;
            parent.children = parent.children.map((node) => {
                if (node.type === "textDirective") return restore(node);
                if (node.type === "leafDirective") {
                    return { type: "paragraph", children: [restore(node)] };
                }
                walk(node);
                if (node.type !== "containerDirective") return node;

                const type = node.name in LABELS ? node.name : "note";
                const [first, ...rest] = node.children;
                const hasLabel = first?.type === "paragraph" && first.data?.directiveLabel;
                const title = {
                    type: "paragraph",
                    data: { hProperties: { className: ["admonition-title"] } },
                    children: hasLabel ? first.children : [{ type: "text", value: LABELS[type] }],
                };
                node.children = [title, ...(hasLabel ? rest : node.children)];
                node.data = {
                    hName: "aside",
                    hProperties: { className: ["admonition", `admonition-${type}`] },
                };
                return node;
            });
        };
        walk(tree);
    };
}
