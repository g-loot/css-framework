import { PrototypeProvider } from "../contexts/prototype";
import UiContextProvider from "../contexts/ui.js";
import { useRouter } from "next/router";

const SiteLayout = ({ children }) => {
  const { query } = useRouter();
  const oldColors = query.oldcolors ? true : false;
  return <div className={`${oldColors ? "oldcolors" : ""}`}>{children}</div>;
};

export const getLayout = (page) => (
  <SiteLayout>
    <UiContextProvider>
      <PrototypeProvider>{page}</PrototypeProvider>
    </UiContextProvider>
  </SiteLayout>
);

export default SiteLayout;
