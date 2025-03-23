import { Container } from "@/components/container";

export default function Page({ children }: React.PropsWithChildren) {
  return (
    <main className="flex justify-center md:items-center">
      <Container>{children}</Container>
    </main>
  );
}
