/* eslint-disable @typescript-eslint/no-explicit-any */
import { unified } from "unified";
import remarkParse from "remark-parse";

export async function extractToc(markdown: string) {
  const tree: any = unified().use(remarkParse).parse(markdown);
  const toc: { id: string; text: string; level: number }[] = [];

  const slugify = (value: string) =>
    value
      .toLowerCase()
      .trim()
      .replace(/^\d+\./, (m) => m.replace(".", "")) // fix utama
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-");

  tree.children.forEach((node: any) => {
    if (node.type === "heading") {
      const text = node.children
        .map((child: any) => child.value || "")
        .join("");

      toc.push({
        id: slugify(text),
        text,
        level: node.depth,
      });
    }
  });

  return toc;
}
