import { compose, flexbox, layout, space } from 'styled-system';

import Button from '../components/Button/Button';
import CustomComponent from '../components/CustomComponent/CustomComponent';
import Head from 'next/head';
import MainNav from '../components/MainNav/MainNav';
import Topbar from '../components/Topbar/Topbar';
import { Typography } from '@g-loot/component-library';
import styled from 'styled-components';
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
        
        <div className='absolute z-20 inset-0 flex items-center justify-center'>
          <div className='backdrop-blur bg-ui-900/50 rounded-3xl p-4 xl:w-1/2'>
            <img className='mx-auto mt-4 mb-8' width="123" height="64" src="https://res.cloudinary.com/gloot/image/upload/v1636647109/glootcom/v2-202111/gloot_logo.svg" alt="G-Loot logo" />
            <div className='flex flex-col lg:flex-row gap-4'>
              <a href='design-system/introduction' className='card-mission card-interactive card-ui-700'>
                <div className='card-decoration'></div>
                <div className='card-info'>
                  <div className='card-title'>
                    Front-end Framework
                  </div>
                  <div className='card-meta'>
                    <div>
                      Styled components for speed and consistency
                    </div>
                  </div>
                  <div className='progressbar progressbar-sm' style={{"--percent": "75"}}>
                    <div></div>
                  </div>
                </div>
                <div className="card-bg">
                  <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1653289722/Marketing/2022_prototype/cover-designsystem_1.jpg)`}}></span>
                </div>
              </a>
              <a href='prototype/index' className='card-mission card-locked card-ui-700'>
                <div className='card-decoration'></div>
                <div className='card-info'>
                  <div className='card-title'>
                    Prototype <button className="chip chip-sm chip-secondary pointer-events-none uppercase"><span>coming soon</span></button>
                  </div>
                  <div className='card-meta'>
                    <div>
                      Functional prototype for testing purposes
                    </div>
                  </div>
                  <div className='progressbar progressbar-sm' style={{"--percent": "5"}}>
                    <div></div>
                  </div>
                </div>
                <div className="card-bg">
                  <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1653289889/Marketing/2022_prototype/cover-prototype.jpg)`}}></span>
                </div>
              </a>
            </div>
          </div>
          
        </div>
        <div className="hidden md:block fixed z-0 inset-0 flex flex-col justify-center items-center transition-all ease-in-out bg-no-repeat bg-cover" 
        style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1646299164/Marketing/202109_gloot2/Auth_bg.jpg)`}}></div>

        
    </div>
  );
}
