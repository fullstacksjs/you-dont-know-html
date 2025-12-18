export default function Loading() {
  return (
    <div className="flex flex-col gap-12 animate-pulse">
      <div className="flex flex-col gap-4">
        <output className="w-full h-10 bg-shade-4 rounded" />
        <output className="w-full h-64 bg-shade-4 rounded" />
        <hr className="w-full border-shade-4" />
        <output className="w-full h-10 bg-shade-4 rounded" />
        <output className="w-full h-10 bg-shade-4 rounded" />
        <output className="w-full h-10 bg-shade-4 rounded" />
        <output className="w-full h-10 bg-shade-4 rounded" />
      </div>
      <div className="flex flex-col gap-4">
        <output className="w-full h-10 bg-shade-4 rounded" />
        <output className="w-full h-64 bg-shade-4 rounded" />
        <hr className="w-full border-shade-4" />
        <output className="w-full h-10 bg-shade-4 rounded" />
        <output className="w-full h-10 bg-shade-4 rounded" />
        <output className="w-full h-10 bg-shade-4 rounded" />
        <output className="w-full h-10 bg-shade-4 rounded" />
      </div>
    </div>
  );
}
