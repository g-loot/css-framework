import { compose, flexbox, layout, space } from 'styled-system';

import Button from '../components/Button/Button';
import CustomComponent from '../components/CustomComponent/CustomComponent';
import Head from 'next/head';
import MainNav from '../components/MainNav/MainNav';
import Topbar from '../components/Topbar/Topbar';
import styled from 'styled-components';
import useFetch from '../hooks/use-fetch';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  const { data, loading } = useFetch('/api/users/self', { delay: 1000 });

  return (
    <div>
        <Head>
          <title>G-Loot CSS Framework &amp; Prototype</title>
          <meta name="description" content="Internal playground" />
          <link rel="icon" href="https://res.cloudinary.com/gloot/image/upload/v1653321618/Marketing/2022_prototype/favicon.png" />
        </Head>
        
        <div className='absolute z-20 inset-0 flex items-center justify-center'>
          <div className='surface surface-halo halo-r p-4 lg:p-8 lg:rounded-xl container max-w-lg mx-auto'>

           
            <div className='flex flex-col lg:flex-row items-stretch '>
              <div className='flex-1 lg:pr-8 lg:mr-8 lg:border-r lg:border-ui-700'>
                <img className='mb-1' width="123" height="64" src="https://res.cloudinary.com/gloot/image/upload/v1636647109/glootcom/v2-202111/gloot_logo.svg" alt="G-Loot logo" />
                <h1 className='text-xl uppercase not-italic leading-none pl-10 pb-8 mb-8 border-b border-ui-700'>
                  Front-end
                </h1>
                <div className='hidden lg:block'>
                  <div className='px-2 mb-2 uppercase font-headings text-ui-200'>
                    Latest components:
                  </div>
                  <ul className="menu menu-secondary">
                    <li><a href='design-system/checkmarks'><span>Checkmarks</span></a></li>
                    <li><a href='design-system/listitems'><span>List items</span></a></li>
                    <li><a href='design-system/tournamentbrackets'><span>Tournament brackets</span></a></li>
                    <li><a href='design-system/emptystates'><span>Empty states</span></a></li>
                    <li><a href='design-system/carousel'><span>Carousel</span></a></li>
                    <li><a href='design-system/accordion'><span>Accordion</span></a></li>
                    <li><a href='design-system/missioncards'><span>Mission cards</span></a></li>
                    <li><a href='design-system/tournamentcards'><span>Tournament cards</span></a></li>
                  </ul>
                </div>
              </div>
              <div className='flex-3 space-y-8'>
                <a href='design-system/introduction' className='card-mission card-interactive surface-ui-700'>
                  <div className='card-decoration'></div>
                  <div className='card-info'>
                    <div className='card-title flex gap-2 items-center'>
                      <span>Front-end Framework</span> <button className="chip chip-xs chip-secondary pointer-events-none uppercase uppercase"><span>work in progress</span></button>
                    </div>
                    <div className='card-meta'>
                      <div>
                        A centralized CSS framework for speed and consistency
                      </div>
                    </div>
                    <div className='progressbar progressbar-sm' style={{"--percent": "75"}}>
                      <div></div>
                    </div>
                  </div>
                  <div className="card-bg">
                    <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1653289722/Marketing/2022_prototype/cover-designsystem.jpg)`}}></span>
                  </div>
                </a>
                <a href='prototype/' className='card-mission card-interactive surface-ui-700'>
                  <div className='card-decoration'></div>
                  <div className='card-info'>
                    <div className='card-title flex gap-2 items-center'>
                      <span>Prototype</span> <button className="chip chip-xs chip-secondary pointer-events-none uppercase uppercase"><span>work in progress</span></button>
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
          
        </div>
        

        
    </div>
  );
}
