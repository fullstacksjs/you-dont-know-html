export function Skeleton() {
  return (
    <output className="max-w-sm animate-pulse">
      <div className="mb-2.5 h-2 max-w-[360px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
      <div className="mb-2.5 h-2 rounded-full bg-gray-200 dark:bg-gray-700"></div>
      <div className="mb-2.5 h-2 max-w-[330px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
      <div className="mb-2.5 h-2 max-w-[300px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
      <div className="h-2 max-w-[360px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
      <span className="sr-only">Loading...</span>
    </output>
  );
}
