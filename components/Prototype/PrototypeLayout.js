import PrototypeHead from "./PrototypeHead";
import { getLayout as getSiteLayout } from "../SiteLayout";

const PrototypeLayout = ({ children }) => {
  
  return (
    <>
      <PrototypeHead title="G-Loot" />
      <div>{children}</div>
    </>
  );
};

export const getLayout = (page) =>
  getSiteLayout(<PrototypeLayout>{page}</PrototypeLayout>);

export default PrototypeLayout;
