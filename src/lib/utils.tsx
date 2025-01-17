import type { ComponentType } from "react";

export function renderField(field: string | ComponentType) {
  if (typeof field === "string") return field;

  const FieldComponent = field;

  return <FieldComponent />;
}
