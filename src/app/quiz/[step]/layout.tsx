import { Layout } from "../../_components/layout";

export default function Page({ children }: React.PropsWithChildren) {
  return <Layout>{children}</Layout>;
}
