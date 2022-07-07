import React, {useState} from 'react';

import DSHead from '../components/DesignSystem/DSHead';
import Link from 'next/link';
import { getLayout } from '../components/SiteLayout';
import packageFramework from '../framework/package.json';

const lastestComponents = [
  {
    label: "Navbar",
    url: "design-system/navbar"
  },
  {
    label: "Menu",
    url: "design-system/menu"
  },
  {
    label: "Tables",
    url: "design-system/tables"
  },
  {
    label: "File inputs",
    url: "design-system/fileinputs"
  },
  {
    label: "Animation",
    url: "design-system/animation"
  },
]

const lastestPages = [
  {
    label: "Profile",
    url: "prototype/profile"
  },
  {
    label: "Teams",
    url: "prototype/teams"
  },
  {
    label: "Shop",
    url: "prototype/shop"
  },
  {
    label: "Premium",
    url: "prototype/premium"
  },
  {
    label: "PUBG Season 6",
    url: "prototype/pubg-season-6"
  },
  {
    label: "Home",
    url: "prototype/home"
  },
]

const Index = () => {
  const [checked, setChecked] = useState(false); 

  function SwitchTheme(isChecked, theme) {
    if(isChecked === false){
      document.body.setAttribute('data-theme', theme);
    } else {
      document.body.setAttribute('data-theme', '');
    }
    setChecked(!checked); 
  }
 
  return(
    <>
    <DSHead title='Welcome' />
    <div className='fixed w-screen h-screen z-20 inset-0 flex justify-center items-center overflow-hidden bg-cover' data-theme='light' style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1656493818/Marketing/202207_community/Community_bg.webp)`}}>
      <div className='w-full h-full overflow-y-auto scrollbar-desktop flex items-center justify-center m-auto'>
        <div className='relative py-6 max-w-lg flex-[1_100%] m-auto'>
          <div className='bg-ui-800/90 border border-ui-700/90 backdrop-blur halo-r p-4 lg:p-6 lg:rounded-4xl container max-w-lg mx-auto'>
            <div className='flex flex-col lg:flex-row items-stretch '>
              <div className='flex-1 lg:pr-6 lg:mr-6 lg:border-r lg:border-ui-700 flex flex-col justify-between relative'>
                <div className='absolute inset-0 overflow-y-auto scrollbar-hidden'>
                  <div className='sticky z-20 top-0 bg-ui-800/75 backdrop-blur-sm flex items-start justify-between pb-6 mb-6 pr-2 border-b border-ui-700'>
                    <div>
                      <img className='mb-0.5' width="123" height="64" src="https://res.cloudinary.com/gloot/image/upload/v1636647109/glootcom/v2-202111/gloot_logo.svg" alt="G-Loot logo" />
                      <h1 className='text-lg uppercase not-italic leading-none pl-10'>
                        Framework
                      </h1>
                    </div>
                    <div className='text-xs text-ui-400 mt-1'>
                      <a href='https://www.npmjs.com/package/@g-loot/css-framework' target='_blank' rel='noreferrer' className='chip chip-secondary chip-xs'>
                        <span>v{packageFramework.version}</span>
                      </a>
                    </div>
                    <label className="form-toggle hidden">
                      <input type="checkbox" name="notification" onChange={SwitchTheme.bind(this, checked, 'light')} />
                      <i className="form-icon"></i> Light theme
                    </label>
                  </div>
                  
                  <div className='hidden lg:block space-y-6'>
                    <div>
                      <div className='px-2 mb-2 uppercase font-headings text-ui-200'>
                        Latest components:
                      </div>
                      <ul className="menu menu-secondary menu-rounded">
                        { lastestComponents.map((lastestComponent, lastestComponentIndex) => (
                          <>
                          <li key={lastestComponent}>
                            <Link href={lastestComponent.url}>
                              <a><span>{lastestComponent.label}</span></a>
                            </Link>
                          </li>
                          </>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className='px-2 mb-2 uppercase font-headings text-ui-200'>
                        Latest pages:
                      </div>
                      <ul className="menu menu-secondary menu-rounded">
                        { lastestPages.map((lastestPage, lastestPageIndex) => (
                          <>
                          <li key={lastestPage}>
                            <Link href={lastestPage.url}>
                              <a><span>{lastestPage.label}</span></a>
                            </Link>
                          </li>
                          </>
                        ))}
                        <li>
                          <Link href='prototype/pubg-season-6'>
                            <a><span>PUBG Season 6</span></a>
                          </Link>
                        </li>
                        <li>
                          <Link href='prototype/home'>
                            <a><span>Home</span></a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex-3 space-y-4 flex flex-col items-center'>

                <div className='rounded-2xl surface surface-ui-700 overflow-hidden transform-gpu flex flex-col lg:flex-row gap-4 lg:gap-8 items-stretch w-full p-2 animate-slide-in-bottom animate-delay' style={{ '--delay': 'calc( 1 * 0.05s)'}}>
                  <div className='flex-2 aspect-video bg-cover bg-center rounded-lg' style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1653289722/Marketing/2022_prototype/cover-designsystem.webp)`}}>

                  </div>
                  <div className='flex-3 flex flex-col items-start justify-center p-4 lg:pl-0 lg:py-4 lg:pr-4'>
                    <div className='flex items-baseline gap-2 mb-3'>
                      <h2 className='text-2xl leading-none'>Framework</h2>
                    </div>
                    <div className='text-ui-300 mb-5 text-sm'>
                      A centralized CSS framework for speed and consistency.
                    </div>
                    <div className='flex gap-2'>
                      <Link href='design-system/about'>
                        <a className='button button-sm button-primary'>
                          <span>Read the docs</span>
                        </a>
                      </Link>
                      <Link href='design-system/gettingstarted'>
                        <a className='button button-sm button-secondary'>
                          <span>Get started</span>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className='rounded-2xl surface surface-ui-700 overflow-hidden transform-gpu flex flex-col lg:flex-row gap-4 lg:gap-8 items-stretch w-full p-2 animate-slide-in-bottom animate-delay' style={{ '--delay': 'calc( 2 * 0.05s)'}}>
                  <div className='flex-2 aspect-video bg-cover bg-center rounded-lg' style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1653289722/Marketing/2022_prototype/cover-prototype.webp)`}}>

                  </div>
                  <div className='flex-3 flex flex-col items-start justify-center p-4 lg:pl-0 lg:py-4 lg:pr-4'>
                    <div className='flex items-baseline gap-2 mb-3'>
                      <h2 className='text-2xl leading-none'>Prototype</h2>
                    </div>
                    <div className='text-ui-300 mb-5 text-sm'>
                      Functional prototype for testing purposes.
                    </div>
                    <div className='flex gap-2'>
                      <Link href='prototype/home'>
                        <a className='button button-sm button-primary'>
                          <span>View prototype</span>
                        </a>
                      </Link>
                      <Link href='prototype/home?ads=true'>
                        <a className='button button-sm button-secondary'>
                          <span>View with ads</span>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className='rounded-2xl surface surface-ui-700 overflow-hidden transform-gpu flex flex-col lg:flex-row gap-4 lg:gap-8 items-stretch w-full p-2 animate-slide-in-bottom animate-delay' style={{ '--delay': 'calc( 3 * 0.05s)'}}>
                  <div className='flex-2 aspect-video bg-cover bg-center rounded-lg' style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1653289722/Marketing/2022_prototype/cover-brand.webp)`}}>

                  </div>
                  <div className='flex-3 flex flex-col items-start justify-center p-4 lg:pl-0 lg:py-4 lg:pr-4'>
                    <div className='flex items-baseline gap-2 mb-3'>
                      <h2 className='text-2xl leading-none'>Brand</h2>
                    </div>
                    <div className='text-ui-300 mb-5 text-sm'>
                      G-Loot styleguide and brand assets.
                    </div>
                    <div className='flex gap-2'>
                      <Link href='prototype'>
                        <a className='button button-sm button-ghost is-disabled'>
                          <span>View guidelines</span>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
};

Index.getLayout = getLayout;

export default Index;
