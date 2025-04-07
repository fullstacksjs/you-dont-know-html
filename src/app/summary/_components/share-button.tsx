"use client";

import { use } from "react";
import { useIsClient } from "usehooks-ts";

import { Button } from "../../_components/button";
import { AnswersContext } from "./answers-provider";

function getTweetText(score: number, total: number) {
  if (score === 0) {
    return `I scored 0/${total} on "You Don't Know HTML" 😅 Apparently, I *really* don't. Try it and do better:`;
  } else if (score === total) {
    return `I got a perfect ${total}/${total} on "You Don't Know HTML" 🔥 Guess I actually *do* know HTML! Think you can match me?`;
  } else {
    return `I scored ${score}/${total} on "You Don't Know HTML"! Not bad, but can you do better? 👀`;
  }
}

export const ShareButton = () => {
  const { correctAnswers, total } = use(AnswersContext);
  const isClient = useIsClient();

  const shareData = {
    text: getTweetText(correctAnswers, total),
    url: isClient ? window.location.origin : "",
    hashtags: "youdontknowhtml",
  };

  return (
    <Button asChild type="button" variant="secondary">
      <a
        rel="noopener noreferrer"
        target="_blank"
        href={`https://x.com/intent/post?text=${encodeURIComponent(
          shareData.text,
        )}&url=${encodeURIComponent(shareData.url)}&hashtags=${encodeURIComponent(
          shareData.hashtags,
        )}`}
      >
        Share on <i aria-label="x logo" className="i-x ml-1" role="img"></i>
      </a>
    </Button>
  );
};
