import { Button, Progressbar, Typography } from '@g-loot/component-library';

import CustomComponent from '../components/CustomComponent/CustomComponent';
import CustomTypography from '../components/TypographyOverride/TypographyOverride';
import Head from 'next/head';
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
        <link rel="icon" href="https://res.cloudinary.com/gloot/image/upload/v1653321618/Marketing/2022_prototype/favicon.png" />
      </Head>

      <CustomTypography variant="h2" color="premium.main" className="text-xl">
        Brawls
      </CustomTypography>

      {!loading && data.map((brawl) => <CustomComponent key={brawl.id} />)}

      <Button variant="secondary" onClick={() => router.push('/')}>
        Go to Home
      </Button>
      <Progressbar value="50"></Progressbar>
    </div>
  );
}