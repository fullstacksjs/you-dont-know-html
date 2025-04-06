"use client";

import { Button } from "../../_components/button";

interface Props {
  correct: number;
  all: number;
}

export const ShareButton = ({ correct, all }: Props) => {
  const shareData = {
    title: "You don't know HTML",
    text: `I got ${correct} out of ${all} correct!`,
    url: "https://you-dont-know-html.com",
  };

  return (
    <Button
      type="button"
      variant="secondary"
      onClick={async () => {
        try {
          if (typeof navigator.share !== "function")
            throw new Error("Share not supported");

          await navigator.share(shareData);
        } catch (err) {
          console.error(err);
        }
      }}
    >
      Share
    </Button>
  );
};
