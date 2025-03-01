"use client";

import { cn } from "@/lib/cn";
import Link from "next/link";
import { useSessionStorage } from "usehooks-ts";

import { Button } from "./button";

export const RestartButton = ({ className }: { className?: string }) => {
  const [, , remove] = useSessionStorage("answers", []);

  return (
    <Button asChild className={cn("mx-auto", className)}>
      <Link href="/quiz" onClick={remove}>
        Give It A Go!
      </Link>
    </Button>
  );
};
