import PrototypeHead from "./PrototypeHead";
import { getLayout as getSiteLayout } from "../SiteLayout";

const PrototypeLayout = ({ children }) => {
  
  return (
    <>
      <PrototypeHead title="Stryda" />
      <div>{children}</div>
    </>
  );
};

export const getLayout = (page) =>
  getSiteLayout(<PrototypeLayout>{page}</PrototypeLayout>);

export default PrototypeLayout;
