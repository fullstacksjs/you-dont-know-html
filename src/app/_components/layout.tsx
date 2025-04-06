export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex justify-center md:items-center-safe min-h-[100dvh] pb-4">
      <div className="p-4 w-full md:px-10 lg:px-20 max-w-[1500px]">
        {children}
      </div>
    </main>
  );
};
