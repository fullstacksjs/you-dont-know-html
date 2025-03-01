import { RestartButton } from "@/components/restart-button";

export default function HomePage() {
  return (
    <main className="flex h-[100dvh] flex-col justify-center p-4">
      <div className="flex h-full flex-col gap-10 justify-center">
        <h2 className="text-center text-4xl/normal font-bold">
          YOU DON’T KNOW <span className="text-accent block">HTML</span>
        </h2>
        <RestartButton />
      </div>
    </main>
  );
}
