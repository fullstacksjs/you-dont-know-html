export default function SummaryLayout({ children }: React.PropsWithChildren) {
  return (
    <main className="flex flex-col gap-10 justify-center h-[100dvh] px-3 md:p-0 sm:w-[800px] sm:mx-auto">
      {children}
    </main>
  );
}
