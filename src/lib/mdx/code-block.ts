import dedent from "dedent";

export const codeBlock = (s: TemplateStringsArray) => {
  return `\`\`\`html\n${dedent`${s.join("\n")}`}\n\`\`\``;
};
