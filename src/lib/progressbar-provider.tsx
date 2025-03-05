"use client";

import { ProgressProvider } from "@bprogress/next/app";

interface Props {
  children: React.ReactNode;
}

const ProgressBarProvider = ({ children }: Props) => {
  return (
    <ProgressProvider
      height="4px"
      color="var(--color-accent)"
      options={{ showSpinner: false }}
      shallowRouting
    >
      {children}
    </ProgressProvider>
  );
};

export default ProgressBarProvider;
