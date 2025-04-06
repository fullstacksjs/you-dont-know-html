import type { RehypeShikiOptions } from "@shikijs/rehype";

import { addCodeBlockContainerTransformer } from "./add-container";
import { fullstacksJSTheme } from "./fullstacksjs-theme";
import { renderWhitespaceTransformer } from "./white-space";

export const shikiOptions: RehypeShikiOptions = {
  theme: fullstacksJSTheme,
  transformers: [renderWhitespaceTransformer, addCodeBlockContainerTransformer],
  tabindex: false,
};
