"use client";
import type { ReactNode } from "react";

import { cn } from "@/lib/cn";
import { noop } from "@fullstacksjs/toolbox";
import { usePress } from "react-aria";

interface Props {
  children: ReactNode;
  id: number;
  onSelect?: (id: number) => void;
  questionId: number;
  checked?: boolean;
  disabled?: boolean;
}

export function QuestionOption({
  children,
  questionId,
  id,
  checked,
  disabled,
  onSelect,
}: Props) {
  const { pressProps } = usePress({
    onPress: () => onSelect?.(id),
    isDisabled: disabled,
  });

  return (
    <label
      tabIndex={0}
      className={cn(
        "flex w-full items-center gap-3 rounded-lg border border-border-dark p-3 cursor-pointer has-checked:text-accent has-checked:bg-shade-2",
        { "animate-pulse": disabled && !checked },
      )}
      {...pressProps}
    >
      <div className="size-[26px] shrink-0 cursor-pointer rounded-full border-2 border-foreground grid justify-center items-center has-checked:border-accent">
        <input
          checked={checked}
          className="hidden peer"
          name={`option-${questionId}`}
          type="radio"
          onChange={noop}
        />
        <div className="hidden size-[14px] rounded-full bg-accent peer-checked:block"></div>
      </div>
      <div className="overflow-x-auto">{children}</div>
    </label>
  );
}
