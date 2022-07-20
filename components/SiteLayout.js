import { PrototypeProvider } from "../contexts/prototype";


const SiteLayout = ({ children }) => (
  <>
    {children}
  </>
);

export const getLayout = page => <SiteLayout><PrototypeProvider>{page}</PrototypeProvider></SiteLayout>;

export default SiteLayout;
