"use client";

import { useEffect } from "react";
import { useSessionStorage } from "usehooks-ts";

export function CleanStorage() {
  const [, , remove] = useSessionStorage("answers", []);

  useEffect(() => {
    remove();
  }, [remove]);

  return null;
}
