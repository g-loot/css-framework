import { Flex, Typography } from '@g-loot/component-library';
import { compose, flexbox, layout, space } from 'styled-system';

import CustomComponent from '../components/CustomComponent/CustomComponent';
import Head from 'next/head';
import Topbar from '../components/Topbar/Topbar';
import styled from 'styled-components';
import useFetch from '../hooks/use-fetch';
import { useRouter } from 'next/router';

const Wrapper = styled.div`
  ${compose(layout, space, flexbox)};
  
  background-color: ${(props) => props.theme.colors.ui[400]};
  padding: 3rem;
  border-radius: .25rem;
`;

const Flexer = styled.div`
  ${compose(layout, space, flexbox)};
  gap: 1rem;
  display: flex;
  @media (max-width: 1280px) {
    > * {
      flex: 1 1 0% !important;
    }
  }
  @media (max-width: 768px) {
    flex-direction: column;
    /* flexDirection='{[ row, column ]}' Does not work */
    align-items: stretch;
  }
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
          <link rel="icon" href="https://res.cloudinary.com/gloot/image/upload/v1653321618/Marketing/2022_prototype/favicon.png" />

        </Head>


        <section className='container maxw-lg mx-auto my-4 flex items-baseline justify-between'>
          <h1 className='font-headings italic text-4xl'>
          Layout
          </h1>
          <nav>
            <ul className='tabs'>
              <li>
                <a onClick={() => router.push('/example-typography')}>
                  <span>Typography</span>
                </a>
              </li>
              <li>
                <a onClick={() => router.push('/example-layout')} className="active">
                  <span>Layout</span>
                </a>
              </li>
              <li>
                <a onClick={() => router.push('/example-perks')}>
                  <span>Perks</span>
                </a>
              </li>
            </ul>
          </nav>
        </section>
        <section className='container maxw-lg mx-auto my-4'>
          <div className='bg-ui-800 rounded-xl p-2'>
            <div className='p-4'>
              <h2 className="font-headings italic text-3xl text-ui-200">Constructing various layouts</h2>
              <p className='text-ui-200 leading-loose'>
                Building layouts is at the core of an integrater's role. If Tailwind enables building complex layouts with a few simple class names, the styled & component systems make it much more heavy with little reusability.
              </p>
            </div>
            <div className='p-4 border-t border-ui-600 mb-4'>
              <span className="text-ui-300 mb-4">Tailwind:</span>
              <div className="flex flex-col md:flex-row justify-around gap-4">
                <div className='flex-1'>
                  <div className='flex flex-col md:flex-row gap-4'>
                    <div className="bg-ui-400 p-12 rounded flex-1"></div>
                    <div className="bg-ui-400 p-12 rounded flex-1 xl:flex-5"></div>
                  </div>
                </div>
                <div className='flex-1'>
                  <div className='rounded overflow-hidden'>
                    <iframe width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/v7xoug5j/embedded/html/dark/" ></iframe>
                  </div>
                </div>
              </div>
              
              <div className="border-t border-ui-700 my-4"></div>
              <span className="text-ui-300 mb-4">Styled component + styled system:</span>

              <div className="flex flex-col md:flex-row justify-around gap-4">
                <div className='flex-1'>
                  <Flexer alignItems='center' flexDirection='row'>
                    <Wrapper flex='1 1 auto'>
                      
                    </Wrapper>
                    <Wrapper flex='5 1 auto'>

                    </Wrapper>
                  </Flexer>
                </div>
                <div className='flex-1'>
                  <div className='rounded overflow-hidden'>
                    <iframe width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/2nd9umyv/embedded/js,html/dark/" ></iframe>
                  </div>
                </div>
              </div>


              
            </div>
          </div>
        </section>
       
        
        
    </div>
  );
}
