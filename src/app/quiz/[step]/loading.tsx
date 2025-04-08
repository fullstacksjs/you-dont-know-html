export default function Loading() {
  return (
    <div className="flex flex-col gap-4 animate-pulse">
      <output className="w-full h-10 bg-shade-4 rounded"></output>
      <output className="w-full h-64 bg-shade-4 rounded"></output>
      <hr className="w-full border-shade-4" />
      <output className="w-full h-10 bg-shade-4 rounded"></output>
      <output className="w-full h-10 bg-shade-4 rounded"></output>
      <output className="w-full h-10 bg-shade-4 rounded"></output>
      <output className="w-full h-10 bg-shade-4 rounded"></output>
    </div>
  );
}
