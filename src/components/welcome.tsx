import { RestartButton } from "./RestartButton";

export function Welcome() {
  return (
    <main className="flex h-[100dvh] flex-col justify-center p-4">
      <div className="flex h-full flex-col gap-10 justify-center">
        <h2 className="text-center text-4xl/normal font-bold">
          {"YOU DON’T KNOW "}
          <span className="text-accent block">{"HTML"}</span>
        </h2>
      </div>
      <div className="flex flex-col justify-end">
        <RestartButton />
      </div>
    </main>
  );
}
