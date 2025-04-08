export default function Loading() {
  return (
    <div className="flex flex-col gap-8 animate-pulse w-full sm:w-[400px] mx-auto">
      <div className="flex flex-col gap-4">
        <output className="w-full h-14 bg-shade-4 rounded"></output>
        <output className="w-full h-8 bg-shade-4 rounded"></output>
      </div>
      <div className="flex flex-col gap-4">
        <output className="w-full h-10 bg-shade-4 rounded"></output>
        <output className="w-full h-10 bg-shade-4 rounded"></output>
        <output className="w-full h-10 bg-shade-4 rounded"></output>
      </div>
    </div>
  );
}
