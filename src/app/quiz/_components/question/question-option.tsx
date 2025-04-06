"use client";
import type { ReactNode } from "react";

import { cn } from "@app/cn";
import { noop } from "@fullstacksjs/toolbox";
import { usePress } from "react-aria";

import { RadioLabel } from "../../../_components/radio-label";

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
    <RadioLabel
      tabIndex={0}
      className={cn("has-checked:bg-shade-2", {
        "animate-pulse": disabled && !checked,
        "cursor-pointer": !disabled,
      })}
      {...pressProps}
    >
      <div className="size-[20px] md:size-[26px] shrink-0 rounded-full border-2 border-foreground grid justify-center items-center has-checked:border-accent">
        <input
          checked={checked}
          className="hidden peer"
          name={`option-${questionId}`}
          type="radio"
          onChange={noop}
        />
        <div className="hidden size-[12px] md:size-[14px] rounded-full bg-accent peer-checked:block"></div>
      </div>
      {children}
    </RadioLabel>
  );
}
