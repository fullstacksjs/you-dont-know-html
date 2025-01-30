import type { ThemeRegistrationAny } from "shiki";

export const customTheme: ThemeRegistrationAny = {
  name: "S-Kill",
  type: "dark",
  semanticHighlighting: true,
  tokenColors: [
    {
      name: "unison punctuation",
      scope:
        "punctuation.definition.delayed.unison,punctuation.definition.list.begin.unison,punctuation.definition.list.end.unison,punctuation.definition.ability.begin.unison,punctuation.definition.ability.end.unison,punctuation.operator.assignment.as.unison,punctuation.separator.pipe.unison,punctuation.separator.delimiter.unison,punctuation.definition.hash.unison",
      settings: {
        foreground: "#ffffff",
      },
    },
    {
      name: "haskell variable generic-type",
      scope: "variable.other.generic-type.haskell",
      settings: {
        foreground: "#ff8888",
      },
    },
    {
      name: "haskell storage type",
      scope: "storage.type.haskell",
      settings: {
        foreground: "#14ffde",
      },
    },
    {
      name: "support.variable.magic.python",
      scope: "support.variable.magic.python",
      settings: {
        foreground: "#ffffff",
      },
    },
    {
      name: "punctuation.separator.parameters.python",
      scope:
        "punctuation.separator.period.python,punctuation.separator.element.python,punctuation.parenthesis.begin.python,punctuation.parenthesis.end.python",
      settings: {
        foreground: "#ffffff",
      },
    },
    {
      name: "variable.parameter.function.language.special.self.python",
      scope: "variable.parameter.function.language.special.self.python",
      settings: {
        foreground: "#ffffff",
      },
    },
    {
      name: "storage.modifier.lifetime.rust",
      scope: "storage.modifier.lifetime.rust",
      settings: {
        foreground: "#ffffff",
      },
    },
    {
      name: "support.function.std.rust",
      scope: "support.function.std.rust",
      settings: {
        foreground: "#ffa478",
      },
    },
    {
      name: "entity.name.lifetime.rust",
      scope: "entity.name.lifetime.rust",
      settings: {
        foreground: "#ffffff",
      },
    },
    {
      name: "variable.language.rust",
      scope: "variable.language.rust",
      settings: {
        foreground: "#ffffff",
      },
    },
    {
      name: "support.constant.edge",
      scope: "support.constant.edge",
      settings: {
        foreground: "#ff8888",
      },
    },
    {
      name: "regexp constant character-class",
      scope: "constant.other.character-class.regexp",
      settings: {
        foreground: "#ffffff",
      },
    },
    {
      name: "Text",
      scope: "variable.parameter.function, text.html.derivative",
      settings: {
        foreground: "#ffffff",
      },
    },
    {
      name: "Comment Markup Link",
      scope: "comment markup.link",
      settings: {
        foreground: "#ffffff44",
      },
    },
    {
      name: "markup diff",
      scope: "markup.changed.diff",
      settings: {
        foreground: "#ffffff",
      },
    },
    {
      name: "diff",
      scope:
        "meta.diff.header.from-file,meta.diff.header.to-file,punctuation.definition.from-file.diff,punctuation.definition.to-file.diff",
      settings: {
        foreground: "#ffa478",
      },
    },
    {
      name: "inserted.diff",
      scope: "markup.inserted.diff",
      settings: {
        foreground: "#83d6ff",
      },
    },
    {
      name: "deleted.diff",
      scope: "markup.deleted.diff",
      settings: {
        foreground: "#ffffff",
      },
    },
    {
      name: "c++ function",
      scope: "meta.function.c,meta.function.cpp",
      settings: {
        foreground: "#ffffff",
      },
    },
    {
      name: "c++ block",
      scope:
        "punctuation.section.block.begin.bracket.curly.cpp,punctuation.section.block.end.bracket.curly.cpp,punctuation.terminator.statement.c,punctuation.section.block.begin.bracket.curly.c,punctuation.section.block.end.bracket.curly.c,punctuation.section.parens.begin.bracket.round.c,punctuation.section.parens.end.bracket.round.c,punctuation.section.parameters.begin.bracket.round.c,punctuation.section.parameters.end.bracket.round.c",
      settings: {
        foreground: "#ffffff",
      },
    },
    {
      name: "js/ts punctuation separator key-value",
      scope: "punctuation.separator.key-value",
      settings: {
        foreground: "#ffffff",
      },
    },
    {
      name: "js/ts import keyword",
      scope: "keyword.operator.expression.import",
      settings: {
        foreground: "#ffa478",
      },
    },
    {
      name: "math js/ts",
      scope: "support.constant.math",
      settings: {
        foreground: "#ffffff",
      },
    },
    {
      name: "math property js/ts",
      scope: "support.constant.property.math",
      settings: {
        foreground: "#14ffde",
      },
    },
    {
      name: "js/ts variable.other.constant",
      scope:
        "variable.other.constant, variable.other.constant.tsx, variable.other.object",
      settings: {
        foreground: "#ffffff",
      },
    },
    {
      name: "java type",
      scope: ["storage.type.annotation.java", "storage.type.object.array.java"],
      settings: {
        foreground: "#ffffff",
      },
    },
    {
      name: "java source",
      scope: "source.java",
      settings: {
        foreground: "#ffffff",
      },
    },
    {
      name: "java modifier.import",
      scope:
        "punctuation.section.block.begin.java,punctuation.section.block.end.java,punctuation.definition.method-parameters.begin.java,punctuation.definition.method-parameters.end.java,meta.method.identifier.java,punctuation.section.method.begin.java,punctuation.section.method.end.java,punctuation.terminator.java,punctuation.section.class.begin.java,punctuation.section.class.end.java,punctuation.section.inner-class.begin.java,punctuation.section.inner-class.end.java,meta.method-call.java,punctuation.section.class.begin.bracket.curly.java,punctuation.section.class.end.bracket.curly.java,punctuation.section.method.begin.bracket.curly.java,punctuation.section.method.end.bracket.curly.java,punctuation.separator.period.java,punctuation.bracket.angle.java,punctuation.definition.annotation.java,meta.method.body.java",
      settings: {
        foreground: "#ffffff",
      },
    },
    {
      name: "java modifier.import",
      scope: "meta.method.java",
      settings: {
        foreground: "#ffa478",
      },
    },
    {
      name: "java modifier.import",
      scope:
        "storage.modifier.import.java,storage.type.java,storage.type.generic.java",
      settings: {
        foreground: "#ffffff",
      },
    },
    {
      name: "java instanceof",
      scope: "keyword.operator.instanceof.java",
      settings: {
        foreground: "#ff8888",
      },
    },
    {
      name: "java variable.name",
      scope: "meta.definition.variable.name.java",
      settings: {
        foreground: "#ffffff",
      },
    },
    {
      name: "operator logical",
      scope: "keyword.operator.logical",
      settings: {
        foreground: "#ffffff",
      },
    },
    {
      name: "operator bitwise",
      scope: "keyword.operator.bitwise",
      settings: {
        foreground: "#ffffff",
      },
    },
    {
      name: "operator channel",
      scope: "keyword.operator.channel",
      settings: {
        foreground: "#ffffff",
      },
    },
    {
      name: "support.constant.property-value.scss",
      scope:
        "support.constant.property-value.scss,support.constant.property-value.css",
      settings: {
        foreground: "#14ffde",
      },
    },
    {
      name: "CSS/SCSS/LESS Operators",
      scope: "keyword.operator.css,keyword.operator.scss,keyword.operator.less",
      settings: {
        foreground: "#ffffff",
      },
    },
    {
      name: "css color standard name",
      scope:
        "support.constant.color.w3c-standard-color-name.css,support.constant.color.w3c-standard-color-name.scss",
      settings: {
        foreground: "#14ffde",
      },
    },
    {
      name: "css comma",
      scope: "punctuation.separator.list.comma.css",
      settings: {
        foreground: "#ffffff",
      },
    },
    {
      name: "css attribute-name.id",
      scope: "support.constant.color.w3c-standard-color-name.css",
      settings: {
        foreground: "#14ffde",
      },
    },
    {
      name: "css property-name",
      scope: "support.type.vendored.property-name.css",
      settings: {
        foreground: "#ffffff",
      },
    },
    {
      name: "js/ts module",
      scope:
        "support.module.node,support.type.object.module,support.module.node",
      settings: {
        foreground: "#ffffff",
      },
    },
    {
      name: "Type Name",
      scope: "entity.name.type",
      settings: {
        foreground: "#14ffde",
      },
    },
    {
      name: "js variable readwrite",
      scope:
        "variable.other.readwrite,meta.object-literal.key,support.variable.property,support.variable.object.process,support.variable.object.node",
      settings: {
        foreground: "#ffffff",
      },
    },
    {
      name: "js/ts json",
      scope: "support.constant.json",
      settings: {
        foreground: "#14ffde",
      },
    },
    {
      name: "js/ts Keyword",
      scope: [
        "keyword.operator.expression.instanceof",
        "keyword.operator.new",
        "keyword.operator.expression.keyof",
      ],
      settings: {
        foreground: "#ff8888",
      },
    },
    {
      name: "js/ts console",
      scope: "support.type.object.console",
      settings: {
        foreground: "#ffffff",
      },
    },
    {
      name: "js/ts support.variable.property.process",
      scope: "support.variable.property.process",
      settings: {
        foreground: "#14ffde",
      },
    },
    {
      name: "keyword.operator.misc.rust",
      scope: "keyword.operator.misc.rust",
      settings: {
        foreground: "#ffffff",
      },
    },
    {
      name: "keyword.operator.sigil.rust",
      scope: "keyword.operator.sigil.rust",
      settings: {
        foreground: "#ff8888",
      },
    },
    {
      name: "operator",
      scope: "keyword.operator.delete",
      settings: {
        foreground: "#ff8888",
      },
    },
    {
      name: "js dom",
      scope: "support.type.object.dom",
      settings: {
        foreground: "#ffffff",
      },
    },
    {
      name: "js dom variable",
      scope: "support.variable.dom,support.variable.property.dom",
      settings: {
        foreground: "#ffffff",
      },
    },
    {
      name: "keyword.operator",
      scope:
        "keyword.operator.arithmetic,keyword.operator.comparison,keyword.operator.decrement,keyword.operator.increment,keyword.operator.relational",
      settings: {
        foreground: "#ffffff",
      },
    },
    {
      name: "C operator assignment",
      scope:
        "keyword.operator.assignment.c,keyword.operator.comparison.c,keyword.operator.c,keyword.operator.increment.c,keyword.operator.decrement.c,keyword.operator.bitwise.shift.c,keyword.operator.assignment.cpp,keyword.operator.comparison.cpp,keyword.operator.cpp,keyword.operator.increment.cpp,keyword.operator.decrement.cpp,keyword.operator.bitwise.shift.cpp",
      settings: {
        foreground: "#ff8888",
      },
    },
    {
      name: "Punctuation",
      scope: "punctuation.separator.delimiter",
      settings: {
        foreground: "#ffffff",
      },
    },
    {
      name: "Other punctuation .c",
      scope: "punctuation.separator.c,punctuation.separator.cpp",
      settings: {
        foreground: "#ff8888",
      },
    },
    {
      name: "C type posix-reserved",
      scope: "support.type.posix-reserved.c,support.type.posix-reserved.cpp",
      settings: {
        foreground: "#ffffff",
      },
    },
    {
      name: "keyword.operator.sizeof.c",
      scope: "keyword.operator.sizeof.c,keyword.operator.sizeof.cpp",
      settings: {
        foreground: "#ff8888",
      },
    },
    {
      name: "python parameter",
      scope: "variable.parameter.function.language.python",
      settings: {
        foreground: "#14ffde",
      },
    },
    {
      name: "python type",
      scope: "support.type.python",
      settings: {
        foreground: "#ffffff",
      },
    },
    {
      name: "python logical",
      scope: "keyword.operator.logical.python",
      settings: {
        foreground: "#ff8888",
      },
    },
    {
      name: "pyCs",
      scope: "variable.parameter.function.python",
      settings: {
        foreground: "#14ffde",
      },
    },
    {
      name: "python block",
      scope:
        "punctuation.definition.arguments.begin.python,punctuation.definition.arguments.end.python,punctuation.separator.arguments.python,punctuation.definition.list.begin.python,punctuation.definition.list.end.python",
      settings: {
        foreground: "#ffffff",
      },
    },
    {
      name: "python function-call.generic",
      scope: "meta.function-call.generic.python",
      settings: {
        foreground: "#ffa478",
      },
    },
    {
      name: "python placeholder reset to normal string",
      scope: "constant.character.format.placeholder.other.python",
      settings: {
        foreground: "#14ffde",
      },
    },
    {
      name: "Operators",
      scope: "keyword.operator",
      settings: {
        foreground: "#ffffff",
      },
    },
    {
      name: "Compound Assignment Operators",
      scope: "keyword.operator.assignment.compound",
      settings: {
        foreground: "#ff8888",
      },
    },
    {
      name: "Compound Assignment Operators js/ts",
      scope:
        "keyword.operator.assignment.compound.js,keyword.operator.assignment.compound.ts",
      settings: {
        foreground: "#ffffff",
      },
    },
    {
      name: "Keywords",
      scope: "keyword",
      settings: {
        foreground: "#ff8888",
      },
    },
    {
      name: "Namespaces",
      scope: "entity.name.namespace",
      settings: {
        foreground: "#ffffff",
      },
    },
    {
      name: "Variables",
      scope: "variable.c",
      settings: {
        foreground: "#ffffff",
      },
    },
    {
      name: "Language variables",
      scope: "variable.language",
      settings: {
        foreground: "#ffffff",
      },
    },
    {
      name: "Java Variables",
      scope: "token.variable.parameter.java",
      settings: {
        foreground: "#ffffff",
      },
    },
    {
      name: "Java Imports",
      scope: "import.storage.java",
      settings: {
        foreground: "#ffffff",
      },
    },
    {
      name: "Packages",
      scope: "token.package.keyword",
      settings: {
        foreground: "#ff8888",
      },
    },
    {
      name: "Packages",
      scope: "token.package",
      settings: {
        foreground: "#ffffff",
      },
    },
    {
      name: "Functions",
      scope: [
        "meta.require",
        "support.function.any-method",
        "variable.function",
      ],
      settings: {
        foreground: "#ffffff",
      },
    },
    {
      name: "meta.var.expr",
      scope: ["variable.other.readwrite.ts entity.name.function"],
      settings: {
        foreground: "#ffffff",
        fontStyle: "italic",
      },
    },
    {
      name: "Functions name",
      scope: [
        "source.ts meta.var.expr meta.function-call entity.name.function",
        "meta.function-call",
      ],
      settings: {
        foreground: "#ffa478",
      },
    },
    {
      name: "Classes",
      scope: "entity.name.type.namespace",
      settings: {
        foreground: "#ffffff",
      },
    },
    {
      name: "Classes",
      scope: "support.class",
      settings: {
        foreground: "#ffffff",
      },
    },
    {
      name: "Class name",
      scope: "entity.name.class.identifier.namespace.type",
      settings: {
        foreground: "#ffffff",
      },
    },
    {
      name: "Class name",
      scope: [
        "entity.name.class",
        "variable.other.class.js",
        "variable.other.class.ts",
      ],
      settings: {
        foreground: "#ffffff",
      },
    },
    {
      name: "Class name php",
      scope: "variable.other.class.php",
      settings: {
        foreground: "#ffffff",
      },
    },
    {
      name: "Keyword Control",
      scope: "keyword.control",
      settings: {
        foreground: "#ff8888",
        fontStyle: "italic",
      },
    },
    {
      name: "Control Elements",
      scope: "control.elements, keyword.operator.less",
      settings: {
        foreground: "#14ffde",
      },
    },
    {
      name: "Methods",
      scope: "keyword.other.special-method",
      settings: {
        foreground: "#ffa478",
      },
    },
    {
      name: "Storage",
      scope: "storage",
      settings: {
        foreground: "#ff8888",
      },
    },
    {
      name: "Storage JS TS",
      scope: "token.storage",
      settings: {
        foreground: "#ff8888",
      },
    },
    {
      name: "Source Js Keyword Operator Delete,source Js Keyword Operator In,source Js Keyword Operator Of,source Js Keyword Operator Instanceof,source Js Keyword Operator New,source Js Keyword Operator Typeof,source Js Keyword Operator Void",
      scope:
        "keyword.operator.expression.delete,keyword.operator.expression.in,keyword.operator.expression.of,keyword.operator.expression.instanceof,keyword.operator.new,keyword.operator.expression.typeof,keyword.operator.expression.void",
      settings: {
        foreground: "#ff8888",
      },
    },
    {
      name: "Java Storage",
      scope: "token.storage.type.java",
      settings: {
        foreground: "#ffffff",
      },
    },
    {
      name: "Support type",
      scope: "support.type.property-name",
      settings: {
        foreground: "#ffffff",
      },
    },
    {
      name: "Support type",
      scope: "support.constant.property-value",
      settings: {
        foreground: "#ffffff",
      },
    },
    {
      name: "Support type",
      scope: "constant.language.import-export-all.ts",
      settings: {
        foreground: "#ffffff",
      },
    },
    {
      name: "Support type",
      scope: "support.constant.font-name",
      settings: {
        foreground: "#14ffde",
      },
    },
    {
      name: "Meta tag",
      scope: "meta.tag",
      settings: {
        foreground: "#ffffff",
      },
    },
    {
      name: "Strings",
      scope: "string",
      settings: {
        foreground: "#83d6ff",
      },
    },
    {
      name: "Inherited Class",
      scope: "entity.other.inherited-class",
      settings: {
        foreground: "#ffffff",
      },
    },
    {
      name: "Constant other symbol",
      scope: "constant.other.symbol",
      settings: {
        foreground: "#ffffff",
      },
    },
    {
      name: "Integers",
      scope: "constant.numeric",
      settings: {
        foreground: "#ffffff",
      },
    },
    {
      name: "Constants",
      scope: "constant",
      settings: {
        foreground: "#14ffde",
      },
    },
    {
      name: "Constants",
      scope: "punctuation.definition.constant",
      settings: {
        foreground: "#14ffde",
      },
    },
    {
      name: "Tags",
      scope: "entity.name.tag, support.class.component",
      settings: {
        foreground: "#ffa478",
      },
    },
    {
      name: "HTML attributes",
      scope: "meta.tag.attributes.tsx",
      settings: {
        foreground: "#ffffff",
      },
    },
    {
      name: "Attributes",
      scope: "entity.other.attribute-name",
      settings: {
        foreground: "#ffffff",
      },
    },
    {
      name: "Attribute IDs",
      scope: "entity.other.attribute-name.id",
      settings: {
        fontStyle: "normal",
        foreground: "#ffa478",
      },
    },
    {
      name: "Attribute class",
      scope: "entity.other.attribute-name.class.css",
      settings: {
        fontStyle: "normal",
        foreground: "#14ffde",
      },
    },
    {
      name: "Selector",
      scope: "meta.selector",
      settings: {
        foreground: "#ff8888",
      },
    },
    {
      name: "Headings",
      scope: "markup.heading",
      settings: {
        foreground: "#ffffff",
      },
    },
    {
      name: "Headings",
      scope:
        "markup.heading punctuation.definition.heading, entity.name.section",
      settings: {
        foreground: "#ffa478",
      },
    },
    {
      name: "Units",
      scope: "keyword.other.unit",
      settings: {
        foreground: "#ffffff",
      },
    },
    {
      name: "Bold",
      scope: "markup.bold,todo.bold",
      settings: {
        foreground: "#14ffde",
      },
    },
    {
      name: "Bold",
      scope: "punctuation.definition.bold",
      settings: {
        foreground: "#ffffff",
      },
    },
    {
      name: "markup Italic",
      scope: "markup.italic, punctuation.definition.italic,todo.emphasis",
      settings: {
        foreground: "#ff8888",
      },
    },
    {
      name: "emphasis md",
      scope: "emphasis md",
      settings: {
        foreground: "#ff8888",
      },
    },
    {
      name: "[VSCODE-CUSTOM] Markdown headings",
      scope: "entity.name.section.markdown",
      settings: {
        foreground: "#ffffff",
      },
    },
    {
      name: "[VSCODE-CUSTOM] Markdown heading Punctuation Definition",
      scope: "punctuation.definition.heading.markdown",
      settings: {
        foreground: "#ffffff",
      },
    },
    {
      name: "punctuation.definition.list.begin.markdown",
      scope: "punctuation.definition.list.begin.markdown",
      settings: {
        foreground: "#ffffff",
      },
    },
    {
      name: "[VSCODE-CUSTOM] Markdown heading setext",
      scope: "markup.heading.setext",
      settings: {
        foreground: "#ffffff",
      },
    },
    {
      name: "[VSCODE-CUSTOM] Markdown Punctuation Definition Bold",
      scope: "punctuation.definition.bold.markdown",
      settings: {
        foreground: "#14ffde",
      },
    },
    {
      name: "[VSCODE-CUSTOM] Markdown Inline Raw",
      scope: "markup.inline.raw.markdown",
      settings: {
        foreground: "#83d6ff",
      },
    },
    {
      name: "[VSCODE-CUSTOM] Markdown Inline Raw",
      scope: "markup.inline.raw.string.markdown",
      settings: {
        foreground: "#83d6ff",
      },
    },
    {
      name: "[VSCODE-CUSTOM] Markdown List Punctuation Definition",
      scope: "punctuation.definition.list.markdown",
      settings: {
        foreground: "#ffffff",
      },
    },
    {
      name: "[VSCODE-CUSTOM] Markdown Punctuation Definition String",
      scope: [
        "punctuation.definition.string.begin.markdown",
        "punctuation.definition.string.end.markdown",
        "punctuation.definition.metadata.markdown",
      ],
      settings: {
        foreground: "#ffffff",
      },
    },
    {
      name: "beginning.punctuation.definition.list.markdown",
      scope: ["beginning.punctuation.definition.list.markdown"],
      settings: {
        foreground: "#ffffff",
      },
    },
    {
      name: "[VSCODE-CUSTOM] Markdown Punctuation Definition Link",
      scope: "punctuation.definition.metadata.markdown",
      settings: {
        foreground: "#ffffff",
      },
    },
    {
      name: "[VSCODE-CUSTOM] Markdown Underline Link/Image",
      scope:
        "markup.underline.link.markdown,markup.underline.link.image.markdown",
      settings: {
        foreground: "#ff8888",
      },
    },
    {
      name: "[VSCODE-CUSTOM] Markdown Link Title/Description",
      scope:
        "string.other.link.title.markdown,string.other.link.description.markdown",
      settings: {
        foreground: "#ffa478",
      },
    },
    {
      name: "Regular Expressions",
      scope: "string.regexp",
      settings: {
        foreground: "#36ffd0",
      },
    },
    {
      name: "Escape Characters",
      scope:
        "constant.character.escape.backslash.regexp,constant.character.escape.regexp, constant.other.character-class.regexp, keyword.operator.quantifier.regexp, keyword.control.anchor.regexp",
      settings: {
        foreground: "#36ffd0",
      },
    },
    {
      name: "Embedded",
      scope: "punctuation.section.embedded, variable.interpolation",
      settings: {
        foreground: "#ffffff",
      },
    },
    {
      name: "Embedded",
      scope:
        "punctuation.section.embedded.begin,punctuation.section.embedded.end",
      settings: {
        foreground: "#ff8888",
      },
    },
    {
      name: "illegal",
      scope: "invalid.illegal",
      settings: {
        foreground: "#ffffff",
      },
    },
    {
      name: "illegal",
      scope: "invalid.illegal.bad-ampersand.html",
      settings: {
        foreground: "#ffffff",
      },
    },
    {
      name: "Broken",
      scope: "invalid.broken",
      settings: {
        foreground: "#ffffff",
      },
    },
    {
      name: "Deprecated",
      scope: "invalid.deprecated",
      settings: {
        foreground: "#ffffff",
      },
    },
    {
      name: "Unimplemented",
      scope: "invalid.unimplemented",
      settings: {
        foreground: "#ffffff",
      },
    },
    {
      name: "Source Json Meta Structure Dictionary Json > String Quoted Json",
      scope: "source.json meta.structure.dictionary.json > string.quoted.json",
      settings: {
        foreground: "#ffffff",
      },
    },
    {
      name: "Source Json Meta Structure Dictionary Json > String Quoted Json > Punctuation String",
      scope:
        "source.json meta.structure.dictionary.json > string.quoted.json > punctuation.string",
      settings: {
        foreground: "#ffffff",
      },
    },
    {
      name: "Source Json Meta Structure Dictionary Json > String Quoted Json > Punctuation String",
      scope:
        "string.quoted.double.json,punctuation.definition.string.begin.json,punctuation.definition.string.end.json",
      settings: {
        foreground: "#ffffff",
      },
    },
    {
      name: "Source Json Meta Structure Dictionary Json > Value Json > String Quoted Json,source Json Meta Structure Array Json > Value Json > String Quoted Json,source Json Meta Structure Dictionary Json > Value Json > String Quoted Json > Punctuation,source Json Meta Structure Array Json > Value Json > String Quoted Json > Punctuation",
      scope:
        "source.json meta.structure.dictionary.json > value.json > string.quoted.json,source.json meta.structure.array.json > value.json > string.quoted.json,source.json meta.structure.dictionary.json > value.json > string.quoted.json > punctuation,source.json meta.structure.array.json > value.json > string.quoted.json > punctuation",
      settings: {
        foreground: "#83d6ff",
      },
    },
    {
      name: "Source Json Meta Structure Dictionary Json > Constant Language Json,source Json Meta Structure Array Json > Constant Language Json",
      scope:
        "source.json meta.structure.dictionary.json > constant.language.json,source.json meta.structure.array.json > constant.language.json",
      settings: {
        foreground: "#ffffff",
      },
    },
    {
      name: "[VSCODE-CUSTOM] JSON Property Name",
      scope: "support.type.property-name.json",
      settings: {
        foreground: "#FFA478",
      },
    },
    {
      name: "laravel blade tag",
      scope:
        "text.html.laravel-blade source.php.embedded.line.html entity.name.tag.laravel-blade",
      settings: {
        foreground: "#ff8888",
      },
    },
    {
      name: "laravel blade @",
      scope:
        "text.html.laravel-blade source.php.embedded.line.html support.constant.laravel-blade",
      settings: {
        foreground: "#ff8888",
      },
    },
    {
      name: "use statement for other classes",
      scope:
        "support.other.namespace.use.php,support.other.namespace.use-as.php,support.other.namespace.php,entity.other.alias.php,meta.interface.php",
      settings: {
        foreground: "#ffffff",
      },
    },
    {
      name: "error suppression",
      scope: "keyword.operator.error-control.php",
      settings: {
        foreground: "#ff8888",
      },
    },
    {
      name: "php instanceof",
      scope: "keyword.operator.type.php",
      settings: {
        foreground: "#ff8888",
      },
    },
    {
      name: "style double quoted array index normal begin",
      scope: "punctuation.section.array.begin.php",
      settings: {
        foreground: "#ffffff",
      },
    },
    {
      name: "style double quoted array index normal end",
      scope: "punctuation.section.array.end.php",
      settings: {
        foreground: "#ffffff",
      },
    },
    {
      name: "php illegal.non-null-typehinted",
      scope: "invalid.illegal.non-null-typehinted.php",
      settings: {
        foreground: "#f44747",
      },
    },
    {
      name: "php types",
      scope:
        "storage.type.php,meta.other.type.phpdoc.php,keyword.other.type.php,keyword.other.array.phpdoc.php",
      settings: {
        foreground: "#ffffff",
      },
    },
    {
      name: "php call-function",
      scope:
        "meta.function-call.php,meta.function-call.object.php,meta.function-call.static.php",
      settings: {
        foreground: "#ffa478",
      },
    },
    {
      name: "php function-resets",
      scope:
        "punctuation.definition.parameters.begin.bracket.round.php,punctuation.definition.parameters.end.bracket.round.php,punctuation.separator.delimiter.php,punctuation.section.scope.begin.php,punctuation.section.scope.end.php,punctuation.terminator.expression.php,punctuation.definition.arguments.begin.bracket.round.php,punctuation.definition.arguments.end.bracket.round.php,punctuation.definition.storage-type.begin.bracket.round.php,punctuation.definition.storage-type.end.bracket.round.php,punctuation.definition.array.begin.bracket.round.php,punctuation.definition.array.end.bracket.round.php,punctuation.definition.begin.bracket.round.php,punctuation.definition.end.bracket.round.php,punctuation.definition.begin.bracket.curly.php,punctuation.definition.end.bracket.curly.php,punctuation.definition.section.switch-block.end.bracket.curly.php,punctuation.definition.section.switch-block.start.bracket.curly.php,punctuation.definition.section.switch-block.begin.bracket.curly.php,punctuation.definition.section.switch-block.end.bracket.curly.php",
      settings: {
        foreground: "#ffffff",
      },
    },
    {
      name: "support php constants",
      scope: "support.constant.core.rust",
      settings: {
        foreground: "#14ffde",
      },
    },
    {
      name: "support php constants",
      scope:
        "support.constant.ext.php,support.constant.std.php,support.constant.core.php,support.constant.parser-token.php",
      settings: {
        foreground: "#14ffde",
      },
    },
    {
      name: "php goto",
      scope: "entity.name.goto-label.php,support.other.php",
      settings: {
        foreground: "#ffa478",
      },
    },
    {
      name: "php logical/bitwise operator",
      scope:
        "keyword.operator.logical.php,keyword.operator.bitwise.php,keyword.operator.arithmetic.php",
      settings: {
        foreground: "#ffffff",
      },
    },
    {
      name: "php regexp operator",
      scope: "keyword.operator.regexp.php",
      settings: {
        foreground: "#ff8888",
      },
    },
    {
      name: "php comparison",
      scope: "keyword.operator.comparison.php",
      settings: {
        foreground: "#ffffff",
      },
    },
    {
      name: "php heredoc/nowdoc",
      scope: "keyword.operator.heredoc.php,keyword.operator.nowdoc.php",
      settings: {
        foreground: "#ff8888",
      },
    },
    {
      name: "python function decorator @",
      scope: "meta.function.decorator.python",
      settings: {
        foreground: "#ffa478",
      },
    },
    {
      name: "python function support",
      scope:
        "support.token.decorator.python,meta.function.decorator.identifier.python",
      settings: {
        foreground: "#ffffff",
      },
    },
    {
      name: "parameter function js/ts",
      scope: "function.parameter",
      settings: {
        foreground: "#ffffff",
      },
    },
    {
      name: "brace function",
      scope: "function.brace",
      settings: {
        foreground: "#ffffff",
      },
    },
    {
      name: "parameter function ruby cs",
      scope: "function.parameter.ruby, function.parameter.cs",
      settings: {
        foreground: "#ffffff",
      },
    },
    {
      name: "constant.language.symbol.ruby",
      scope: "constant.language.symbol.ruby",
      settings: {
        foreground: "#ffffff",
      },
    },
    {
      name: "rgb-value",
      scope: "rgb-value",
      settings: {
        foreground: "#ffffff",
      },
    },
    {
      name: "rgb value",
      scope: "inline-color-decoration rgb-value",
      settings: {
        foreground: "#14ffde",
      },
    },
    {
      name: "rgb value less",
      scope: "less rgb-value",
      settings: {
        foreground: "#14ffde",
      },
    },
    {
      name: "sass selector",
      scope: "selector.sass",
      settings: {
        foreground: "#ffffff",
      },
    },
    {
      name: "ts primitive/builtin types",
      scope:
        "support.type.primitive.ts,support.type.builtin.ts,support.type.primitive.tsx,support.type.builtin.tsx",
      settings: {
        foreground: "#14ffde",
      },
    },
    {
      name: "Typescript porperty definition",
      scope: [
        "meta.definition.property",
        "meta.definition.property variable.object.property",
      ],
      settings: {
        foreground: "#ffffff",
      },
    },
    {
      name: "block scope",
      scope: "block.scope.end,block.scope.begin",
      settings: {
        foreground: "#ffffff",
      },
    },
    {
      name: "cs storage type",
      scope: "storage.type.cs",
      settings: {
        foreground: "#ffffff",
      },
    },
    {
      name: "cs local variable",
      scope: "entity.name.variable.local.cs",
      settings: {
        foreground: "#ffffff",
      },
    },
    {
      scope: "token.info-token",
      settings: {
        foreground: "#ffa478",
      },
    },
    {
      scope: "token.warn-token",
      settings: {
        foreground: "#14ffde",
      },
    },
    {
      scope: "token.error-token",
      settings: {
        foreground: "#f44747",
      },
    },
    {
      scope: "token.debug-token",
      settings: {
        foreground: "#ff8888",
      },
    },
    {
      name: "String interpolation",
      scope: [
        "punctuation.definition.template-expression.begin",
        "punctuation.definition.template-expression.end",
        "punctuation.section.embedded",
      ],
      settings: {
        foreground: "#ff8888",
      },
    },
    {
      scope: "entity.name.function.tagged-template.tsx",
      settings: {
        foreground: "#FFA478",
      },
    },
    {
      name: "Reset JavaScript string interpolation expression",
      scope: ["meta.template.expression"],
      settings: {
        foreground: "#ffffff",
      },
    },
    {
      name: "Import module JS",
      scope: ["keyword.operator.module"],
      settings: {
        foreground: "#ff8888",
      },
    },
    {
      name: "js Flowtype",
      scope: ["support.type.type.flowtype"],
      settings: {
        foreground: "#ffa478",
      },
    },
    {
      name: "js Flow",
      scope: ["support.type.primitive"],
      settings: {
        foreground: "#ffffff",
      },
    },
    {
      name: "js class prop",
      scope: ["meta.property.object"],
      settings: {
        foreground: "#ffffff",
      },
    },
    {
      name: "js func parameter",
      scope: ["variable.parameter.function.js"],
      settings: {
        foreground: "#ffffff",
      },
    },
    {
      name: "js template literals begin",
      scope: ["keyword.other.template.begin"],
      settings: {
        foreground: "#83d6ff",
      },
    },
    {
      name: "js template literals end",
      scope: ["keyword.other.template.end"],
      settings: {
        foreground: "#83d6ff",
      },
    },
    {
      name: "js template literals variable braces begin",
      scope: ["keyword.other.substitution.begin"],
      settings: {
        foreground: "#83d6ff",
      },
    },
    {
      name: "js template literals variable braces end",
      scope: ["keyword.other.substitution.end"],
      settings: {
        foreground: "#83d6ff",
      },
    },
    {
      name: "js operator.assignment",
      scope: ["keyword.operator.assignment"],
      settings: {
        foreground: "#ffffff",
      },
    },
    {
      name: "go operator",
      scope: ["keyword.operator.assignment.go"],
      settings: {
        foreground: "#ffffff",
      },
    },
    {
      name: "go operator",
      scope: ["keyword.operator.arithmetic.go", "keyword.operator.address.go"],
      settings: {
        foreground: "#ff8888",
      },
    },
    {
      name: "Go package name",
      scope: ["entity.name.package.go"],
      settings: {
        foreground: "#ffffff",
      },
    },
    {
      name: "elm prelude",
      scope: ["support.type.prelude.elm"],
      settings: {
        foreground: "#ffffff",
      },
    },
    {
      name: "elm constant",
      scope: ["support.constant.elm"],
      settings: {
        foreground: "#14ffde",
      },
    },
    {
      name: "template literal",
      scope: ["punctuation.quasi.element"],
      settings: {
        foreground: "#ff8888",
      },
    },
    {
      name: "html/pug (jade) escaped characters and entities",
      scope: ["constant.character.entity"],
      settings: {
        foreground: "#ffffff",
      },
    },
    {
      name: "styling css pseudo-elements/classes to be able to differentiate from classes which are the same colour",
      scope: [
        "entity.other.attribute-name.pseudo-element",
        "entity.other.attribute-name.pseudo-class",
      ],
      settings: {
        foreground: "#ffffff",
      },
    },
    {
      name: "Clojure globals",
      scope: ["entity.global.clojure"],
      settings: {
        foreground: "#ffffff",
      },
    },
    {
      name: "Clojure symbols",
      scope: ["meta.symbol.clojure"],
      settings: {
        foreground: "#ffffff",
      },
    },
    {
      name: "Clojure constants",
      scope: ["constant.keyword.clojure"],
      settings: {
        foreground: "#ffffff",
      },
    },
    {
      name: "CoffeeScript Function Argument",
      scope: ["meta.arguments.coffee", "variable.parameter.function.coffee"],
      settings: {
        foreground: "#ffffff",
      },
    },
    {
      name: "Ini Default Text",
      scope: ["source.ini"],
      settings: {
        foreground: "#83d6ff",
      },
    },
    {
      name: "Makefile prerequisities",
      scope: ["meta.scope.prerequisites.makefile"],
      settings: {
        foreground: "#ffffff",
      },
    },
    {
      name: "Makefile text colour",
      scope: ["source.makefile"],
      settings: {
        foreground: "#ffffff",
      },
    },
    {
      name: "Groovy import names",
      scope: ["storage.modifier.import.groovy"],
      settings: {
        foreground: "#ffffff",
      },
    },
    {
      name: "Groovy Methods",
      scope: ["meta.method.groovy"],
      settings: {
        foreground: "#ffa478",
      },
    },
    {
      name: "Groovy Variables",
      scope: ["meta.definition.variable.name.groovy"],
      settings: {
        foreground: "#ffffff",
      },
    },
    {
      name: "Groovy Inheritance",
      scope: ["meta.definition.class.inherited.classes.groovy"],
      settings: {
        foreground: "#83d6ff",
      },
    },
    {
      name: "HLSL Semantic",
      scope: ["support.variable.semantic.hlsl"],
      settings: {
        foreground: "#ffffff",
      },
    },
    {
      name: "HLSL Types",
      scope: [
        "support.type.texture.hlsl",
        "support.type.sampler.hlsl",
        "support.type.object.hlsl",
        "support.type.object.rw.hlsl",
        "support.type.fx.hlsl",
        "support.type.object.hlsl",
      ],
      settings: {
        foreground: "#ff8888",
      },
    },
    {
      name: "SQL Variables",
      scope: ["text.variable", "text.bracketed"],
      settings: {
        foreground: "#ffffff",
      },
    },
    {
      name: "types",
      scope: ["support.type.swift", "support.type.vb.asp"],
      settings: {
        foreground: "#ffffff",
      },
    },
    {
      name: "heading 1, keyword",
      scope: ["entity.name.function.xi"],
      settings: {
        foreground: "#ffffff",
      },
    },
    {
      name: "heading 2, callable",
      scope: ["entity.name.class.xi"],
      settings: {
        foreground: "#ffffff",
      },
    },
    {
      name: "heading 3, property",
      scope: ["constant.character.character-class.regexp.xi"],
      settings: {
        foreground: "#ffffff",
      },
    },
    {
      name: "heading 4, type, class, interface",
      scope: ["constant.regexp.xi"],
      settings: {
        foreground: "#ff8888",
      },
    },
    {
      name: "heading 5, enums, preprocessor, constant, decorator",
      scope: ["keyword.control.xi"],
      settings: {
        foreground: "#ffffff",
      },
    },
    {
      name: "heading 6, number",
      scope: ["invalid.xi"],
      settings: {
        foreground: "#ffffff",
      },
    },
    {
      name: "string",
      scope: ["beginning.punctuation.definition.quote.markdown.xi"],
      settings: {
        foreground: "#83d6ff",
      },
    },
    {
      name: "comments",
      scope: ["beginning.punctuation.definition.list.markdown.xi"],
      settings: {
        foreground: "#ffffff44",
      },
    },
    {
      name: "link",
      scope: ["constant.character.xi"],
      settings: {
        foreground: "#ffa478",
      },
    },
    {
      name: "accent",
      scope: ["accent.xi"],
      settings: {
        foreground: "#ffa478",
      },
    },
    {
      name: "wikiword",
      scope: ["wikiword.xi"],
      settings: {
        foreground: "#14ffde",
      },
    },
    {
      name: "language operators like '+', '-' etc",
      scope: ["constant.other.color.rgb-value.xi"],
      settings: {
        foreground: "#ffffff",
      },
    },
    {
      name: "elements to dim",
      scope: ["punctuation.definition.tag.xi"],
      settings: {
        foreground: "#ffffff44",
      },
    },
    {
      name: "C++/C#",
      scope: [
        "entity.name.label.cs",
        "entity.name.scope-resolution.function.call",
        "entity.name.scope-resolution.function.definition",
      ],
      settings: {
        foreground: "#ffffff",
      },
    },
    {
      name: "Markdown underscore-style headers",
      scope: [
        "entity.name.label.cs",
        "markup.heading.setext.1.markdown",
        "markup.heading.setext.2.markdown",
      ],
      settings: {
        foreground: "#ffffff",
      },
    },
    {
      name: "Function punctuation",
      scope:
        "punctuation.definition.typeparameters, storage.type.function.arrow,punctuation.definition.block, punctuation.accessor",
      settings: {
        foreground: "#ffffff",
      },
    },
    {
      name: "Comments",
      scope: "comment, punctuation.definition.comment",
      settings: {
        fontStyle: "italic",
        foreground: "#ffffff44",
      },
    },
    {
      name: "[VSCODE-CUSTOM] Markdown Quote",
      scope: "markup.quote.markdown",
      settings: {
        foreground: "#ffffff44",
      },
    },
    {
      name: "punctuation.definition.block.sequence.item.yaml",
      scope: "punctuation.definition.block.sequence.item.yaml",
      settings: {
        foreground: "#ffffff",
      },
    },
    {
      scope: ["constant.language.symbol.elixir"],
      settings: {
        foreground: "#ffffff",
      },
    },
    {
      name: "js/ts italic",
      scope:
        "entity.other.attribute-name.js,entity.other.attribute-name.ts,entity.other.attribute-name.jsx,entity.other.attribute-name.tsx,variable.language.super",
      settings: {
        fontStyle: "italic",
      },
    },
    {
      name: "comment",
      scope: "comment.line.double-slash,comment.block.documentation",
      settings: {
        fontStyle: "italic",
      },
    },
    {
      name: "Python Keyword Control",
      scope: "keyword.control.import.python,keyword.control.flow.python",
      settings: {
        fontStyle: "italic",
      },
    },
    {
      name: "markup.italic.markdown",
      scope: "markup.italic.markdown",
      settings: {
        fontStyle: "italic",
      },
    },
    {
      scope: "storage.type.function.arrow",
      settings: {
        fontStyle: "",
      },
    },
    {
      scope: "string.quoted, string.template",
      settings: {
        foreground: "#c6ff90",
      },
    },
    {
      scope:
        "support.type, entity.name.type.ts, support.type.primitive.ts, entity.name.type, constant, entity.other.inherited-class",
      settings: {
        foreground: "#35eeff",
      },
    },
    {
      scope: "storage, keyword.control, storage.type",
      settings: {
        fontStyle: "",
        foreground: "#ff8888",
      },
    },
    {
      scope: "support.variable, support.class, entity.name.tag",
      settings: {
        fontStyle: "bold",
        // foreground: "#ff7474",
        foreground: "#F39F47",
      },
    },
    {
      scope: "support.function.lua",
      settings: {
        foreground: "#ff8888",
      },
    },
    {
      scope: "support.function.library.lua",
      settings: {
        foreground: "#ff8888",
      },
    },
  ],
  colors: {
    foreground: "#ffffff",
    focusBorder: "#00000000",
    "selection.background": "#ffd86e",
    "scrollbar.shadow": "#00000000",
    "activityBar.foreground": "#ffffff",
    "activityBar.background": "#23252e",
    "activityBar.inactiveForeground": "#ffffff11",
    "activityBarBadge.foreground": "#23252e",
    "activityBarBadge.background": "#ffd86e",
    "activityBar.border": "#00000000",
    "activityBar.activeBackground": "#00000000",
    "sideBar.background": "#23252e",
    "sideBar.foreground": "#ffffff",
    "sideBarSectionHeader.background": "#00000000",
    "sideBarSectionHeader.foreground": "#ffffff",
    "sideBarSectionHeader.border": "#00000000",
    "sideBarTitle.foreground": "#ffd86e",
    "sideBar.border": "#1c1e25",
    "list.inactiveSelectionBackground": "#272a34",
    "list.inactiveSelectionForeground": "#ffffff",
    "list.hoverBackground": "#00000022",
    "list.hoverForeground": "#ffffff",
    "list.activeSelectionBackground": "#ffd86e",
    "list.activeSelectionForeground": "#23252e",
    "list.activeSelectionIconForeground": "#23252e",
    "tree.indentGuidesStroke": "#ffffff22",
    "list.dropBackground": "#00000044",
    "list.highlightForeground": "#ffffff",
    "list.focusHighlightForeground": "#23252e",
    "list.focusBackground": "#00000044",
    "list.focusForeground": "#ffffff",
    "listFilterWidget.background": "#1c1e25",
    "listFilterWidget.outline": "#00000000",
    "listFilterWidget.noMatchesOutline": "#ff7062",
    "statusBar.foreground": "#ffffff",
    "statusBar.background": "#23252e",
    "statusBarItem.hoverBackground": "#00000033",
    "statusBar.border": "#00000000",
    "statusBar.debuggingBackground": "#ffd86e",
    "statusBar.debuggingForeground": "#23252e",
    "statusBar.debuggingBorder": "#ffd86e",
    "statusBar.noFolderBackground": "#ff7062",
    "statusBar.noFolderForeground": "#23252e",
    "statusBar.noFolderBorder": "#23252e",
    "statusBarItem.remoteBackground": "#ffd86e",
    "statusBarItem.remoteForeground": "#23252e",
    "statusBarItem.activeBackground": "#FFFFFF25",
    "titleBar.activeBackground": "#23252e",
    "titleBar.activeForeground": "#ffffff",
    "titleBar.inactiveBackground": "#23252e",
    "titleBar.inactiveForeground": "#ffffff44",
    "titleBar.border": "#00000000",
    "editorLightBulb.foreground": "#FFFFFF",
    "editorLightBulbAutoFix.foreground": "#FFFFFF",
    "menubar.selectionForeground": "#ffffff",
    "menubar.selectionBackground": "#00000033",
    "menubar.selectionBorder": "#00000000",
    "menu.foreground": "#ffffff",
    "menu.background": "#272a34",
    "menu.selectionForeground": "#23252e",
    "menu.selectionBackground": "#F6CA52",
    "menu.selectionBorder": "#00000000",
    "menu.separatorBackground": "#1c1e25",
    "menu.border": "#1c1e25",
    "button.background": "#ffd86e",
    "button.foreground": "#23252e",
    "button.hoverBackground": "#ffbc1f",
    "button.secondaryForeground": "#ffffff",
    "button.secondaryBackground": "#1c1e25",
    "button.secondaryHoverBackground": "#272a34",
    "input.background": "#272a34",
    "input.border": "#00000000",
    "input.foreground": "#ffffff",
    "inputOption.activeBackground": "#00000000",
    "inputOption.activeBorder": "#00000000",
    "inputOption.activeForeground": "#ffd86e",
    "input.placeholderForeground": "#ffffff55",
    "textLink.foreground": "#ffd86e",
    "editor.background": "#23252e",
    "editor.foreground": "#ffffff",
    "editorLineNumber.foreground": "#ffffff33",
    "editorCursor.foreground": "#ffffff",
    "editorCursor.background": "#23252e",
    "editor.selectionBackground": "#264f78",
    "editor.inactiveSelectionBackground": "#3a3d41",
    "editorWhitespace.foreground": "#e3e4e229",
    "editor.selectionHighlightBackground": "#add6ff26",
    "editor.selectionHighlightBorder": "#495F77",
    "editor.findMatchBackground": "#515c6a",
    "editor.findMatchBorder": "#74879f",
    "editor.findMatchHighlightBackground": "#ffffff11",
    "editor.findMatchHighlightBorder": "#ffffff00",
    "editor.findRangeHighlightBackground": "#3a3d4166",
    "editor.findRangeHighlightBorder": "#ffffff00",
    "editor.rangeHighlightBackground": "#ffffff0b",
    "editor.rangeHighlightBorder": "#ffffff00",
    "editor.hoverHighlightBackground": "#264f7840",
    "editor.wordHighlightStrongBackground": "#ffffff11",
    "editor.wordHighlightStrongBorder": "#00000000",
    "editor.wordHighlightBackground": "#ffffff11",
    "editor.wordHighlightBorder": "#00000000",
    "editor.lineHighlightBackground": "#00000033",
    "editor.lineHighlightBorder": "#00000000",
    "editorLineNumber.activeForeground": "#ffffff",
    "editorLink.activeForeground": "#4eb4ff",
    "editorIndentGuide.background": "#ffffff11",
    "editorIndentGuide.activeBackground": "#ffffff33",
    "editorRuler.foreground": "#ffffff11",
    "editorBracketMatch.background": "#ffffff11",
    "editorBracketMatch.border": "#00000000",
    "editor.foldBackground": "#00000044",
    "editorOverviewRuler.background": "#00000000",
    "editorOverviewRuler.border": "#00000000",
    "editorError.foreground": "#f29086",
    "editorError.background": "#00000000",
    "editorError.border": "#00000000",
    "editorWarning.foreground": "#ffd1a8",
    "editorWarning.background": "#00000000",
    "editorWarning.border": "#00000000",
    "editorInfo.foreground": "#ffffff33",
    "editorInfo.background": "#00000000",
    "editorInfo.border": "#00000000",
    "editorGutter.background": "#23252e",
    "editorGutter.modifiedBackground": "#2dced0",
    "editorGutter.addedBackground": "#5bf29a",
    "editorGutter.deletedBackground": "#ff7062",
    "editorGutter.foldingControlForeground": "#ffffff33",
    "editorCodeLens.foreground": "#ffffff33",
    "editorGroup.border": "#1c1e25",
    "diffEditor.diagonalFill": "#ffffff11",
    "diffEditor.insertedTextBackground": "#234e55",
    "diffEditor.insertedTextBorder": "#00000000",
    "diffEditor.removedTextBackground": "#4f3438",
    "diffEditor.removedTextBorder": "#00000000",
    "diffEditor.border": "#1c1e25",
    "panel.background": "#23252e",
    "panel.border": "#1c1e25",
    "panelTitle.activeBorder": "#ffd86e",
    "panelTitle.activeForeground": "#ffd86e",
    "panelTitle.inactiveForeground": "#ffffff44",
    "badge.background": "#ffd86e",
    "badge.foreground": "#23252e",
    "terminal.foreground": "#ffffff",
    "terminal.selectionBackground": "#ffffff11",
    "terminalCursor.background": "#23252e",
    "terminalCursor.foreground": "#ffd86e",
    "terminal.border": "#1c1e25",
    "terminal.ansiBlack": "#313744",
    "terminal.ansiBlue": "#4cb2ff",
    "terminal.ansiBrightBlack": "#556570",
    "terminal.ansiBrightBlue": "#4cb2ff",
    "terminal.ansiBrightCyan": "#24e8ea",
    "terminal.ansiBrightGreen": "#5bf29a",
    "terminal.ansiBrightMagenta": "#a7a7ff",
    "terminal.ansiBrightRed": "#ff7272",
    "terminal.ansiBrightWhite": "#ffffff",
    "terminal.ansiBrightYellow": "#ffd04f",
    "terminal.ansiCyan": "#2dced0",
    "terminal.ansiGreen": "#5ecb8c",
    "terminal.ansiMagenta": "#9292ff",
    "terminal.ansiRed": "#e17e85",
    "terminal.ansiWhite": "#f8f8f8",
    "terminal.ansiYellow": "#f6ca52",
    "breadcrumb.background": "#23252e",
    "breadcrumb.foreground": "#ffffff44",
    "breadcrumb.focusForeground": "#ffffff",
    "editorGroupHeader.border": "#1c1e25",
    "editorGroupHeader.tabsBackground": "#23252e",
    "editorGroupHeader.tabsBorder": "#00000000",
    "tab.activeForeground": "#ffffff",
    "tab.border": "#1c1e25",
    "tab.activeBackground": "#272a34",
    "tab.activeBorder": "#00000000",
    "tab.activeBorderTop": "#00000000",
    "tab.inactiveBackground": "#23252e",
    "tab.inactiveForeground": "#ffffff44",
    "tab.hoverBackground": "#00000033",
    "tab.hoverForeground": "#ffffff44",
    "tab.hoverBorder": "#00000000",
    "scrollbarSlider.background": "#1c1e25",
    "scrollbarSlider.hoverBackground": "#272a34",
    "scrollbarSlider.activeBackground": "#272a34",
    "progressBar.background": "#ffd86e",
    "widget.shadow": "#00000000",
    "editorWidget.foreground": "#ffffff",
    "editorWidget.background": "#272a34",
    "editorWidget.resizeBorder": "#1c1e25",
    "pickerGroup.border": "#ffffff11",
    "pickerGroup.foreground": "#ffd86e",
    "debugToolBar.background": "#272a34",
    "debugToolBar.border": "#00000000",
    "notifications.foreground": "#ffffff",
    "notifications.background": "#272a34",
    "notificationToast.border": "#00000000",
    "notificationsErrorIcon.foreground": "#ff7062",
    "notificationsWarningIcon.foreground": "#ffd86e",
    "notificationsInfoIcon.foreground": "#2dced0",
    "notificationCenter.border": "#1c1e25",
    "notificationCenterHeader.foreground": "#ffffff",
    "notificationCenterHeader.background": "#272a34",
    "notifications.border": "#1c1e25",
    "gitDecoration.addedResourceForeground": "#5bf29a",
    "gitDecoration.conflictingResourceForeground": "#9292ff",
    "gitDecoration.deletedResourceForeground": "#ff7272",
    "gitDecoration.ignoredResourceForeground": "#ffffff33",
    "gitDecoration.modifiedResourceForeground": "#ffc773",
    "gitDecoration.stageDeletedResourceForeground": "#ff7062",
    "gitDecoration.stageModifiedResourceForeground": "#e2c08d",
    "gitDecoration.submoduleResourceForeground": "#a7a7ff",
    "gitDecoration.untrackedResourceForeground": "#5ecb8c",
    "editorMarkerNavigation.background": "#1c1e25",
    "editorMarkerNavigationError.background": "#f29086",
    "editorMarkerNavigationWarning.background": "#ffd86e",
    "editorMarkerNavigationInfo.background": "#2dced0",
    "merge.currentHeaderBackground": "#5bf29a55",
    "merge.currentContentBackground": "#5bf29a22",
    "merge.incomingHeaderBackground": "#2dced055",
    "merge.incomingContentBackground": "#2dced022",
    "merge.commonHeaderBackground": "#1c1e25",
    "merge.commonContentBackground": "#1c1e25",
    "editorSuggestWidget.background": "#23252e",
    "editorSuggestWidget.border": "#1c1e25",
    "editorSuggestWidget.foreground": "#ffffff55",
    "editorSuggestWidget.highlightForeground": "#ffffff",
    "editorSuggestWidget.selectedBackground": "#00000044",
    "editorSuggestWidget.selectedIconForeground": "#F6CA52",
    "editorSuggestWidget.selectedForeground": "#FFFFFF",
    "editorSuggestWidget.focusHighlightForeground": "#F6CA52",
    "editorHoverWidget.foreground": "#ffffff55",
    "editorHoverWidget.background": "#272a34",
    "editorHoverWidget.border": "#1c1e25",
    "peekView.border": "#007acc",
    "peekViewEditor.background": "#001f33",
    "peekViewEditorGutter.background": "#001f33",
    "peekViewEditor.matchHighlightBackground": "#ff8f0099",
    "peekViewEditor.matchHighlightBorder": "#ee931e",
    "peekViewResult.background": "#252526",
    "peekViewResult.fileForeground": "#ffffff",
    "peekViewResult.lineForeground": "#bbbbbb",
    "peekViewResult.matchHighlightBackground": "#ea5c004d",
    "peekViewResult.selectionBackground": "#3399ff33",
    "peekViewResult.selectionForeground": "#ffffff",
    "peekViewTitle.background": "#1e1e1e",
    "peekViewTitleDescription.foreground": "#ccccccb3",
    "peekViewTitleLabel.foreground": "#ffffff",
    "icon.foreground": "#ffffff",
    "checkbox.background": "#272a34",
    "checkbox.foreground": "#ffffff",
    "checkbox.border": "#00000000",
    "dropdown.background": "#272a34",
    "dropdown.foreground": "#ffffff",
    "dropdown.border": "#00000000",
    "minimapGutter.addedBackground": "#5bf29a",
    "minimapGutter.modifiedBackground": "#2dced0",
    "minimapGutter.deletedBackground": "#ff7062",
    "minimap.findMatchHighlight": "#515c6a",
    "minimap.selectionHighlight": "#264f78",
    "minimap.errorHighlight": "#f29086",
    "minimap.warningHighlight": "#ffd86e",
    "minimap.background": "#23252e",
    "sideBar.dropBackground": "#00000044",
    "editorGroup.emptyBackground": "#23252e",
    "panelSection.border": "#1c1e25",
    "settings.headerForeground": "#ffffff",
    "settings.focusedRowBackground": "#ffffff07",
    "walkThrough.embeddedEditorBackground": "#00000050",
    "breadcrumb.activeSelectionForeground": "#ffffff",
    "editorGutter.commentRangeForeground": "#ffffff33",
    "debugExceptionWidget.background": "#272a34",
    "debugExceptionWidget.border": "#00000000",
    "editorBracketHighlight.foreground1": "#cdd2e9",
    "editorBracketHighlight.foreground2": "#fad185",
    "editorBracketHighlight.foreground3": "#35DEE9",
    "editorBracketHighlight.foreground4": "#e78f9e",
  },
};
