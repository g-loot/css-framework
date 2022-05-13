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

const Lister = styled.ul`
  ${compose(layout, space, flexbox)};
  list-style-type: disc;
  padding-left: 1rem;
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
       
        <section className='container maxw-lg mx-auto my-4 flex items-baseline justify-between'>
          <h1 className='font-headings italic text-4xl'>
          Utilities
          </h1>
          <nav>
            <ul className='tabs'>
              <li>
                <a onClick={() => router.push('/example-typography')}>
                  Typography
                </a>
              </li>
              <li>
                <a onClick={() => router.push('/example-layout')}>
                  Layout
                </a>
              </li>
              <li>
                <a onClick={() => router.push('/example-utilities')} className="active">
                  Utilities
                </a>
              </li>
            </ul>
          </nav>
        </section>
        <section className='container maxw-lg mx-auto my-4'>
          <div className='bg-ui-800 rounded-xl p-2'>
            <div className='p-4'>
              <h2 className="font-headings italic text-3xl text-ui-200">Enabling color transparency</h2>
              <p className='text-ui-200 leading-loose'>
                Tailwind is built in some way that any color can be used with transparency using the <code>bg-&#123;color-code&#125;/&#123;transparency&#125;</code> pattern (example: <code>bg-ui-700/75</code>)
              </p>
            </div>
            <div className='p-4 border-t border-ui-600 mb-4'>
              <span className="text-ui-300 mb-4">Tailwind:</span>
              <div className="flex flex-col md:flex-row justify-around gap-4">
                <div className='flex-1'>
                  <div className='w-96 relative rounded-xl overflow-hidden'>
                    <div className='absolute rounded left-2 right-2 bottom-2 backdrop-blur p-2 bg-ui-700/75'>
                      I am a text whose background has a transparent color
                    </div>
                    <img src="https://res.cloudinary.com/gloot/image/upload/v1644831647/Marketing/202109_gloot2/mission-valorant_5.jpg" width="100%" height="auto" alt="" />
                  </div>
                </div>
                <div className='flex-1'>
                  <div className='rounded overflow-hidden'>
                    <iframe width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/nbdv342L/embedded/html/dark/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
                  </div>
                </div>
              </div>
             
            </div>
          </div>
        </section>
        
       
    </div>
  );
}
