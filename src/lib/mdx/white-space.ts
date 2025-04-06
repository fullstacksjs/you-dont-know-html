import type { Element, Root, Text } from "hast";
import type { ShikiTransformer } from "shiki";

function findCode(root: Root): Element {
  let current = root.children[0];

  while (current?.type === "element") {
    if (current.tagName === "code") return current;
    current = current.children[0];

    if (!current) throw new Error("No code element found");
  }

  throw new Error("No code element found");
}

const classMap: Record<string, string> = {
  " ": "space",
  "\t": "tab",
};

function isSpace(part: string): boolean {
  return part === " " || part === "\t";
}

export function splitSpaces(node: Text): string[] {
  const parts = node.value.split(/([ \t])/).filter((i) => i.length);

  const leftCount = Math.max(
    parts.findIndex((part) => !isSpace(part)),
    0,
  );

  const middle = parts.slice(leftCount, parts.length);
  if (leftCount > 0) return [" ", middle.join("")];

  return [middle.join("")];
}

export const renderWhitespaceTransformer: ShikiTransformer = {
  name: "transformers:white-space",

  root(root) {
    const code = findCode(root);
    code.children.forEach((line) => {
      if (line.type !== "element") return;
      const elements = line.children.filter(
        (token) => token.type === "element",
      );
      line.children = line.children.flatMap((token) => {
        if (token.type !== "element") return token;

        const index = elements.indexOf(token);
        if (index !== 0) return token;

        const node = token.children[0];
        if (node?.type !== "text" || !node.value) return token;

        const parts = splitSpaces(node);
        if (parts.length <= 1) return token;

        return parts.map((part) => {
          const clone = {
            ...token,
            properties: { ...token.properties },
          };
          clone.children = [{ type: "text", value: part }];
          const className = classMap[part];
          if (className) {
            this.addClassToHast(clone, className);
            delete clone.properties.style;
          }
          return clone;
        });
      });
    });
  },
};
