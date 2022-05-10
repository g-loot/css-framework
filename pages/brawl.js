import Head from 'next/head';
import { Typography, Button } from '@g-loot/component-library';
import CustomComponent from '../components/CustomComponent/CustomComponent';
import CustomTypography from '../components/TypographyOverride/TypographyOverride';
import useFetch from '../hooks/use-fetch';
import { useRouter } from 'next/router';

export default function Brawl() {
  const router = useRouter();
  const { data, loading } = useFetch('/api/brawls', { delay: 250 });

  return (
    <div>
      <Head>
        <title>Gnog Prototype | Brawl</title>
        <meta name="description" content="Internal playground Brawl Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <CustomTypography variant="h2" color="premium.main">
        Brawls
      </CustomTypography>

      {!loading && data.map((brawl) => <CustomComponent key={brawl.id} />)}

      <Button variant="secondary" onClick={() => router.push('/')}>
        Go to Home
      </Button>
    </div>
  );
}
