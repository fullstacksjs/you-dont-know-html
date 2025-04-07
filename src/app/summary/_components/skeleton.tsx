export function Skeleton() {
  return (
    <div className="flex flex-col gap-4">
      <output className="inline-block w-full h-7 bg-muted-2 animate-pulse rounded-md" />
      <output className="inline-block mx-4 w-stretch h-7 bg-muted-2 animate-pulse rounded-md" />
    </div>
  );
}
