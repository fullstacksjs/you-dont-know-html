import type { ClassValue } from "clsx";
import type { ComponentType } from "react";

import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function renderField(field: string | ComponentType) {
  if (typeof field === "string") return field;

  const FieldComponent = field;

  return <FieldComponent />;
}

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};
