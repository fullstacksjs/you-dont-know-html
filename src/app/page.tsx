import { RestartButton } from "@/components/restart-button";

export default function HomePage() {
  return (
    <main className="grid gap-12 welcome-main h-[100dvh] px-12 py-16 md:p-0">
      <h2 className="text-center text-hero area-[hero]">
        YOU DON’T KNOW <span className="text-accent block">HTML</span>
      </h2>
      <RestartButton className="area-[btn]" />
    </main>
  );
}
