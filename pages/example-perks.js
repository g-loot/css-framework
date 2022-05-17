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
          Additional perks
          </h1>
          <nav>
            <ul className='tabs'>
              <li>
                <a onClick={() => router.push('/example-typography')}>
                  <span>Typography</span>
                </a>
              </li>
              <li>
                <a onClick={() => router.push('/example-layout')}>
                  <span>Layout</span>
                </a>
              </li>
              <li>
                <a onClick={() => router.push('/example-perks')} className="active">
                  <span>Perks</span>
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
        <section className='container maxw-lg mx-auto my-4'>
          <div className='bg-ui-800 rounded-xl p-2'>
            <div className='p-4'>
              <h2 className="font-headings italic text-3xl text-ui-200">Technology agnostic</h2>
              <p className='text-ui-200 leading-loose'>
                Because Tailwind is based on class names and HTML syntax, as long as you use the same class names and HTML structures, your components and views will look identical wether you are using AngularJS, ReactJS, VueJS, PHP, plain HTML, etc.
              </p>
            </div>
            <div className='p-4 border-t border-ui-600 mb-4'>
              <svg width="400" className='mx-auto block' height="auto" viewBox="0 0 825 606" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M643.101 14.9998L612.877 67.3505L582.652 14.9998H482L612.877 241.688L743.753 14.9998H643.101Z" fill="#41B883"/>
                <path d="M643.101 14.9998L612.877 67.3505L582.652 14.9998H534.351L612.877 151.01L691.403 14.9998H643.101Z" fill="#34495E"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8 394.111L126.094 352L247.3 393.379L227.709 549.555L126.094 605.764L26.126 550.288L8 394.111Z" fill="#E23237"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M247.3 393.379L126.094 352V605.764L227.71 549.555L247.3 393.379Z" fill="#B52E31"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M126.277 381.662L52.6742 545.346L80.1379 544.796L94.9682 507.812H126.277H160.698L176.81 545.163L202.992 545.712L126.277 381.662ZM126.46 434.209L151.36 486.207H127.558H126.277H104.672L126.46 434.209Z" fill="white"/>
                <path d="M127.075 150.533C139.537 150.533 149.639 140.43 149.639 127.968C149.639 115.507 139.537 105.404 127.075 105.404C114.613 105.404 104.511 115.507 104.511 127.968C104.511 140.43 114.613 150.533 127.075 150.533Z" fill="#61DAFB"/>
                <path d="M127.076 174.203C193.944 174.203 248.151 153.506 248.151 127.974C248.151 102.442 193.944 81.7451 127.076 81.7451C60.2074 81.7451 6 102.442 6 127.974C6 153.506 60.2074 174.203 127.076 174.203Z" stroke="#61DAFB" stroke-width="11.0069"/>
                <path d="M87.0405 151.084C120.475 208.993 165.503 245.589 187.614 232.824C209.725 220.058 200.545 162.764 167.111 104.855C133.677 46.945 88.649 10.3487 66.5381 23.1144C44.4272 35.8802 53.6064 93.1739 87.0405 151.084Z" stroke="#61DAFB" stroke-width="11.0069"/>
                <path d="M87.0393 104.857C53.6052 162.767 44.4259 220.06 66.5369 232.826C88.6478 245.592 133.676 208.996 167.11 151.086C200.544 93.1765 209.723 35.8828 187.613 23.117C165.502 10.3512 120.473 46.9476 87.0393 104.857Z" stroke="#61DAFB" stroke-width="11.0069"/>
                <path d="M612.933 589.642C729.981 589.642 824.867 540.25 824.867 479.321C824.867 418.392 729.981 369 612.933 369C495.886 369 401 418.392 401 479.321C401 540.25 495.886 589.642 612.933 589.642Z" fill="#8993BE"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M460.515 544.643L483.742 427.063H537.449C560.673 428.515 572.287 440.127 572.287 460.451C572.287 495.289 544.707 515.611 520.029 514.159H493.903L488.096 544.643H460.515ZM499.708 492.387L506.967 448.838H525.837C535.998 448.838 543.255 453.192 543.255 461.901C541.805 486.58 530.192 490.934 517.128 492.387H499.71H499.708ZM566.891 514.159L590.116 396.581H617.697L611.89 427.063H638.018C661.244 428.515 669.953 440.127 667.051 454.644L656.89 514.159H627.858L638.019 460.451C639.47 453.192 639.47 448.838 629.31 448.838H607.536L594.472 514.159H566.891V514.159ZM655.03 544.643L678.255 427.063H731.964C755.19 428.515 766.803 440.127 766.803 460.451C766.803 495.289 739.222 515.611 714.545 514.159H688.416L682.61 544.643H655.03V544.643ZM694.221 492.387L701.48 448.838H720.352C730.513 448.838 737.77 453.192 737.77 461.901C736.32 486.58 724.707 490.934 711.643 492.387H694.223H694.221Z" fill="#232531"/>
              </svg>

            </div>
          </div>
        </section>
        
       
    </div>
  );
}
