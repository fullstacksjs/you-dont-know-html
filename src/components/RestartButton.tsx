"use client";

import Link from "next/link";
import { useSessionStorage } from "usehooks-ts";

export const RestartButton = () => {
  const [, , remove] = useSessionStorage("answers", []);

  return (
    <Link
      className="bg-accent text-background w-1/5 cursor-pointer rounded-md py-2 text-center font-bold text-xl mx-auto"
      href={"/quiz"}
      onClick={remove}
    >
      Give It a Go!
    </Link>
  );
};
