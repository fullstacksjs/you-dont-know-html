import Link from "next/link";

export function Welcome() {
  return (
    <main className="flex h-[100dvh] flex-col justify-center p-4">
      <div className="flex h-full flex-col justify-center">
        <h2 className="text-center text-3xl font-bold">
          {"YOU DON’T KNOW "}
          <span className="text-accent">{"HTML"}</span>
        </h2>
      </div>
      <div className="flex flex-col justify-end">
        <Link
          className="bg-accent text-background w-full cursor-pointer rounded-md py-4 text-center"
          href={"/quiz"}
        >
          Give It a Go!
        </Link>
      </div>
    </main>
  );
}
