import Head from 'next/head';
import { Typography, Button } from '@g-loot/component-library';
import CustomComponent from '../components/CustomComponent/CustomComponent';
import useFetch from '../hooks/use-fetch';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  const { data, loading } = useFetch('/api/users/self', { delay: 1000 });

  return (
    <div>
      <Head>
        <title>Gnog Prototype</title>
        <meta name="description" content="Internal playground" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Typography variant="h1" color="ui.100">
        {loading ? 'Hello ???' : `Hello ${data.username}`}
      </Typography>
      <CustomComponent />
      <Button variant="secondary" onClick={() => router.push('/brawl')}>
        Go to Brawls
      </Button>
    </div>
  );
}
