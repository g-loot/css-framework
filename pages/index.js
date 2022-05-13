import { compose, flexbox, layout, space } from 'styled-system';

import CustomComponent from '../components/CustomComponent/CustomComponent';
import Head from 'next/head';
import Topbar from '../components/Topbar/Topbar';
import { Typography } from '@g-loot/component-library';
import styled from 'styled-components';
import useFetch from '../hooks/use-fetch';
import { useRouter } from 'next/router';

const Wrapper = styled.div`
  ${compose(layout, space, flexbox)};
`;

const Flexer = styled.div`
  ${compose(layout, space, flexbox)};
`;

const TabsWrapper = styled.div`
  position: relative;
  text-align: center;
`;

const tabsArray = [
  'BRAWLS',
  'HOW IT WORKS',
  'G-LOOT RULES',
  'YOUR BRAWL HISTORY',
];

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
       
        
        <Topbar />
        <div>
          <h1 className="font-headings italic text-5xl">
            {loading ? 'Hello ???' : `Hello ${data.username}`}
          </h1>
          <Typography variant="h1" color="ui.100">
            {loading ? 'Hello ???' : `Hello ${data.username}`}
          </Typography>
        </div>
    </div>
  );
}
