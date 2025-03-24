import dedent from "dedent";

export const codeBlock = (s: TemplateStringsArray) => {
  return `\`\`\`html-derivative\n${dedent`${s.join("\n")}`}\n\`\`\``;
};
