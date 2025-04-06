import React from "react";

export const Explanation = ({ children }: { children: React.ReactNode }) => {
  return (
    <details className="bg-bg-elevated px-6 py-4 mt-6 rounded">
      <summary className="text-lg font-bold cursor-pointer focus-visible:outline-none focus-visible:underline ">
        Explanation
      </summary>
      <div className="question mt-4 flex flex-col gap-6">{children}</div>
    </details>
  );
};
