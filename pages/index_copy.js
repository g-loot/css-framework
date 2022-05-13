import { Button, Container, Flex, Progressbar, Tabs, Typography } from '@g-loot/component-library';
import { compose, flexbox, layout, space } from 'styled-system';

import CustomComponent from '../components/CustomComponent/CustomComponent';
import Head from 'next/head';
import Topbar from '../components/Topbar/Topbar';
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
        <h1 className="text-3xl font-bold underline border-b">
          Hello world!
        </h1>
        <div className='button-caca'>qsdqsd</div>
        <Topbar />
        <Wrapper maxWidth={[ 768, null, null, 1600 ]} m="auto" paddingX={[ 2, 3 ]}>
          <Flex alignItems='center'>
            <Wrapper width={[ 1, 1/6 ]}>
              <CustomComponent padding={4} />
            </Wrapper>
            <Wrapper width={[ 1, 5/6 ]}>
              <Typography variant="h1" color="ui.100">
                {loading ? 'Hello ???' : `Hello ${data.username}`}
              </Typography>
              
              <Button variant="secondary" onClick={() => router.push('/brawl')}>
                Go to Brawls
              </Button>
              <Progressbar value="50"></Progressbar>
              <Wrapper maxWidth={500}>
                <Tabs
                  tabs={tabsArray}
                  justifyContent="space-evenly"
                />
              </Wrapper>
            </Wrapper>
          </Flex>
        </Wrapper>
    </div>
  );
}
