export const codeBlock = (s: TemplateStringsArray) => {
  return `\`\`\`html\n${s.join("\n")}\n\`\`\``;
};
