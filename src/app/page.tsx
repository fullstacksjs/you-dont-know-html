import { RestartButton } from "./_components/restart-button";

export default function HomePage() {
  return (
    <main className="grid gap-12 welcome-main h-[100dvh] px-4 py-2 md:p-0">
      <div className="area-[hero]">
        <h2 className="text-center text-hero">
          YOU DON’T KNOW <span className="text-accent block">HTML</span>
        </h2>
        <p className="text-muted-1 text-center text-lg">
          Created with{" "}
          <i aria-label="keyboard" className="i-keyboard" role="img"></i> in{" "}
          <a
            data-external
            className="underline underline-offset-4"
            href="https://fullstacksjs.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <br />
            <span className="italic text-muted-1">
              FullstacksJS (It's a Persian community)
            </span>
          </a>
        </p>
      </div>
      <RestartButton className="area-[btn]" />
    </main>
  );
}
