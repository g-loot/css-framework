import React, {useState} from 'react';

import DSHead from '../components/DesignSystem/DSHead';
import Link from 'next/link';
import ReactDOM from 'react-dom';
import { getLayout } from '../components/SiteLayout';
import packageFramework from '../framework/package-framework.json';

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
    <div className='absolute z-20 inset-0 flex items-start justify-center' data-theme='light'>
      <div className='absolute z-20 inset-0 flex items-center'>
        <div className='surface surface-halo halo-r p-4 lg:p-8 lg:rounded-xl container max-w-lg mx-auto'>
          <div className='flex flex-col lg:flex-row items-stretch '>
            <div className='flex-1 lg:pr-8 lg:mr-8 lg:border-r lg:border-ui-700 flex flex-col justify-between'>
              <div>
                <div className='flex items-start justify-between pb-8 mb-8 border-b border-ui-700'>
                  <div>
                    <img className='mb-0.5' width="123" height="64" src="https://res.cloudinary.com/gloot/image/upload/v1636647109/glootcom/v2-202111/gloot_logo.svg" alt="G-Loot logo" />
                    <h1 className='text-lg uppercase not-italic leading-none pl-10'>
                      Framework
                    </h1>
                  </div>
                  <div className='text-xs text-ui-400 mt-1'>
                    <div className='chip chip-secondary chip-xs'>
                      <span>v{packageFramework.version}</span>
                    </div>
                  </div>
                </div>
                
                <div className='hidden lg:block space-y-8'>
                  <div>
                    <div className='px-2 mb-2 uppercase font-headings text-ui-200'>
                      Latest components:
                    </div>
                    <ul className="menu menu-secondary menu-rounded">
                      <li>
                        <Link href='design-system/tables'>
                          <a><span>Tables</span></a>
                        </Link>
                      </li>
                      <li>
                        <Link href='design-system/fileinputs'>
                          <a><span>File inputs</span></a>
                        </Link>
                      </li>
                      <li>
                        <Link href='design-system/animation'>
                          <a><span>Animation</span></a>
                        </Link>
                      </li>
                      <li>
                        <Link href='design-system/dropdown'>
                          <a><span>Dropdown</span></a>
                        </Link>
                      </li>
                      <li>
                        <Link href='design-system/stats'>
                          <a><span>Stats</span></a>
                        </Link>
                      </li>
                      <li>
                        <Link href='design-system/rangeinputs'>
                          <a><span>Range inputs</span></a>
                        </Link>
                      </li>
                      <li>
                        <Link href='design-system/switch'>
                          <a><span>Switch</span></a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <div className='px-2 mb-2 uppercase font-headings text-ui-200'>
                      Latest pages:
                    </div>
                    <ul className="menu menu-secondary menu-rounded">
                      <li>
                        <Link href='prototype/pubg-season-6'>
                          <a><span>PUBG Season 6</span></a>
                        </Link>
                      </li>
                      <li>
                        <Link href='prototype/'>
                          <a><span>Home</span></a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <label className="form-toggle hidden">
                <input type="checkbox" name="notification" onChange={SwitchTheme.bind(this, checked, 'light')} />
                <i className="form-icon"></i> Light theme
              </label>
            
            </div>
            <div className='flex-3 space-y-4 flex flex-col items-center'>

              <div className='rounded-2xl surface bg-ui-850 overflow-hidden transform-gpu flex gap-8 items-stretch w-full p-2'>
                <div className='flex-2 aspect-video bg-cover bg-center rounded-lg' style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1653289722/Marketing/2022_prototype/cover-designsystem.webp)`}}>

                </div>
                <div className='flex-3 flex flex-col items-start justify-center py-4 pr-4'>
                  <div className='flex items-baseline gap-2 mb-3'>
                    <h2 className='text-2xl leading-none'>Framework</h2>
                  </div>
                  <div className='text-ui-300 mb-5'>
                    A centralized CSS framework for speed and consistency.
                  </div>
                  <div className='flex gap-2'>
                    <Link href='design-system/about'>
                      <a className='button button-primary'>
                        <span>Read the docs</span>
                      </a>
                    </Link>
                    <Link href='design-system/gettingstarted'>
                      <a className='button button-secondary'>
                        <span>Get started</span>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className='rounded-2xl surface bg-ui-850 overflow-hidden transform-gpu flex gap-8 items-stretch w-full p-2'>
                <div className='flex-2 aspect-video bg-cover bg-center rounded-lg' style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1653289722/Marketing/2022_prototype/cover-prototype.webp)`}}>

                </div>
                <div className='flex-3 flex flex-col items-start justify-center py-4 pr-4'>
                  <div className='flex items-baseline gap-2 mb-3'>
                    <h2 className='text-2xl leading-none'>Prototype</h2>
                  </div>
                  <div className='text-ui-300 mb-5'>
                    Functional prototype for testing purposes.
                  </div>
                  <div className='flex gap-2'>
                    <Link href='prototype'>
                      <a className='button button-primary'>
                        <span>View prototype</span>
                      </a>
                    </Link>
                    <Link href='prototype?ads=true'>
                      <a className='button button-secondary'>
                        <span>View with ads</span>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className='rounded-2xl surface bg-ui-850 overflow-hidden transform-gpu flex gap-8 items-stretch w-full p-2'>
                <div className='flex-2 aspect-video bg-cover bg-center rounded-lg' style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1653289722/Marketing/2022_prototype/cover-brand.webp)`}}>

                </div>
                <div className='flex-3 flex flex-col items-start justify-center py-4 pr-4'>
                  <div className='flex items-baseline gap-2 mb-3'>
                    <h2 className='text-2xl leading-none'>Brand</h2>
                  </div>
                  <div className='text-ui-300 mb-5'>
                    G-Loot styleguide and brand assets.
                  </div>
                  <div className='flex gap-2'>
                    <Link href='prototype'>
                      <a className='button button-ghost is-disabled'>
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
  </>
  )
};

Index.getLayout = getLayout;

export default Index;
