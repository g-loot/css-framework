import Link from "next/link";

const SiteLayout = ({ children }) => (
  <>
    {children}
  </>
);

export const getLayout = page => <SiteLayout>{page}</SiteLayout>;

export default SiteLayout;
