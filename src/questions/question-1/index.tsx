import { compileMDX } from "@/lib/mdx/compileMdx";

import type { Question } from "../Question";

import explanation from "./explanation.mdx";
import inquiry from "./inquiry.mdx";

export default {
  id: 1,
  inquiry,
  options: [
    { id: 1, text: await compileMDX(`<H>{"<code>"}</H>,<H>{"<output>"}</H>`) },
    { id: 2, text: await compileMDX(`<H>{"<pre>"}</H>,<H>{"<output>"}</H>`) },
    { id: 3, text: await compileMDX(`<H>{"<code>"}</H>,<H>{"<samp>"}</H>`) },
    { id: 4, text: await compileMDX(`<H>{"<pre>"}</H>,<H>{"<samp>"}</H>`) },
    { id: 5, text: () => "I don't know" },
  ],
  explanation,
  correctAnswerId: 3,
} satisfies Question;
