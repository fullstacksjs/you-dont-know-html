"use client";
import { use } from "react";
import Pride from "react-canvas-confetti/dist/presets/pride";

import { AnswersContext } from "./answers-provider";

export const Confetti = () => {
  const { correctAnswers, loading, total } = use(AnswersContext);

  if (loading || correctAnswers === 0) return null;

  return (
    <Pride
      autorun={{
        speed: 20,
        duration: (correctAnswers / total) * 3000,
      }}
      decorateOptions={(options) => ({
        ...options,
        particleCount: 4,
        decay: 0.9,
        colors: ["#f39f47", "#585858"],
      })}
    />
  );
};
