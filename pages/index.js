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
    <div className='absolute z-20 inset-0 flex items-center justify-center' data-theme='light'>
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
          <div className='flex-3 space-y-8 flex flex-col items-center'>
            <Link href='design-system/about'>
              <a className='card-mission card-interactive surface surface-ui-700'>
                <div className='card-decoration'></div>
                <div className='card-body'>
                  <div className='card-title flex gap-2 items-center'>
                    <span>Framework</span> <button className="chip chip-xs chip-secondary pointer-events-none uppercase"><span>work in progress</span></button>
                  </div>
                  <div className='card-meta'>
                    <div>
                      A centralized CSS framework for speed and consistency
                    </div>
                  </div>
                  <div className='progressbar progressbar-sm' style={{"--percent": "80"}}>
                    <div></div>
                  </div>
                </div>
                <div className="card-bg">
                  <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1653289722/Marketing/2022_prototype/cover-designsystem.jpg)`}}></span>
                </div>
              </a>
            </Link>
            <Link href='prototype/'>
              <a className='card-mission card-interactive surface surface-ui-700'>
                <div className='card-decoration'></div>
                <div className='card-body'>
                  <div className='card-title flex gap-2 items-center'>
                    <span>Prototype</span> <button className="chip chip-xs chip-secondary pointer-events-none uppercase"><span>work in progress</span></button>
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
            </Link>
          </div>
        </div>
      </div>
    </div>
  </>
  )
};

Index.getLayout = getLayout;

export default Index;
