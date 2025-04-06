import type { ShikiTransformer } from "shiki";

export const addCodeBlockContainerTransformer: ShikiTransformer = {
  name: "transformers:add-container",
  pre: (node) => {
    Reflect.deleteProperty(node.properties, "style");
    Reflect.deleteProperty(node.properties, "class");
    node.properties["data-syntax-highlight"] = "true";

    return {
      type: "element",
      tagName: "span",
      properties: {
        "data-code-block-container": "true",
      },
      children: [node],
    };
  },
};
