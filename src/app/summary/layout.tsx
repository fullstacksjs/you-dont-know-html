export default function SummaryLayout({ children }: React.PropsWithChildren) {
  return (
    <main className="flex flex-col gap-6 justify-center h-[100dvh] px-3 md:p-0 sm:w-[500px] sm:mx-auto">
      {children}
    </main>
  );
}
