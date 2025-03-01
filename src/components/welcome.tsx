import Link from "next/link";

export function Welcome() {
  return (
    <main className="flex h-[100dvh] flex-col justify-center p-4">
      <div className="flex h-full flex-col gap-10 justify-center">
        <h2 className="text-center text-4xl/normal font-bold">
          {"YOU DON’T KNOW "}
          <span className="text-accent block">{"HTML"}</span>
        </h2>
        <Link
          className="bg-accent text-background w-1/5 cursor-pointer rounded-md py-2 text-center font-bold text-xl mx-auto"
          href={"/quiz"}
        >
          Give It a Go!
        </Link>
      </div>
    </main>
  );
}
