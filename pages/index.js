import Head from 'next/head';
import { Typography } from '@g-loot/component-library';
import CustomComponent from '../components/CustomComponent/CustomComponent';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Gnog Prototype</title>
        <meta name="description" content="Internal playground" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Typography variant="h1" color="ui.100">
        Hello
      </Typography>
      <CustomComponent />
    </div>
  );
}
