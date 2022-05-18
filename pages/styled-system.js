import { Button, Container, Flex, Progressbar, Tabs, Typography } from '@g-loot/component-library';
import { compose, layout, space } from 'styled-system';

import CustomComponent from '../components/CustomComponent/CustomComponent';
import Head from 'next/head';
import Topbar from '../components/Topbar/Topbar';
import styled from 'styled-components';
import useFetch from '../hooks/use-fetch';
import { useRouter } from 'next/router';

const Wrapper = styled.div`
  ${compose(layout, space)};

  background: red;

  @media (max-width: 768px) {
    background: green;
    border-radius: 20px;
  }
`;


const Box = styled.div`
  ${compose(layout, space)};
  background: red;
  border-radius: 3px;


  @media (max-width: 758px) {
    border-radius: 100px;
  }
`;



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
        <Wrapper width={200} margin={20} display={[ 'flex', 'inline-block', 'block' ]} maxWidth={[ 768, null, null, 1024 ]}>
          Wrappertext Wrappertext Wrappertext Wrappertext Wrappertext Wrappertext
        </Wrapper>


        <Box width={200}>
          What's in the box?
        </Box>

    </div>
  );
}
