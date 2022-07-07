import React, { useRef, useState } from 'react';

import DSHead from './DSHead';
import DSMainNav from './DSMainNav';
import DSTopBar from './DSTopBar';
import DSpages from '../../pages/api/designsystem/pages.json'
import Link from 'next/link';
import { getLayout as getSiteLayout } from '../SiteLayout';
import packageFramework from '../../framework/package.json';
import { useRouter } from 'next/router';

const DSLayout = ({ children }) => {

  const [filter, setFilter] = useState('');

  const router = useRouter();
  const myRef = useRef(null);

  const executeScroll = () => myRef.current.scrollTo(0, 0);

  React.useEffect(() => {
    window.scrollTo(0, myRef.current.offsetTop);
  }, []);

  const handleClick = e => {
    e.preventDefault()
    router.push(item.url)
  };
  
  return (
    <>
    <DSHead title='Docs' />
    <div className='drawer drawer-mobile'>
      <input id='drawer-ds' type='checkbox' className='drawer-toggle' />
      <div className='drawer-content' ref={myRef}>
        <div className='block lg:hidden'>
          <DSTopBar data={DSpages} />
        </div>
        <div className='pt-12 pb-24 px-4'>
          <div className='container max-w-lg mx-auto'>
            {children}
          </div>
        </div>
      </div>
      <div className='drawer-side scrollbar-hidden'>
        <label htmlFor='drawer-ds' className='drawer-overlay'></label>
        <aside className='w-80 bg-ui-800 border-r border-ui-700'>
          <div className='sticky z-20 top-0 bg-ui-800/75 p-4 backdrop-blur-sm'>
            <div className='flex justify-between'>
              <Link href='../'>
                <a className='hover:opacity-50 transition-opacity duration-150'>
                  <img className='' width='123' height='64' src='https://res.cloudinary.com/gloot/image/upload/v1636647109/glootcom/v2-202111/gloot_logo.svg' alt='G-Loot logo' />
                  <div className='font-headings text-lg uppercase not-italic leading-none pl-10'>
                    Framework
                  </div>
                </a>
              </Link>
              <div className='text-xs text-ui-400'>
                <a href='https://www.npmjs.com/package/@g-loot/css-framework' target='_blank' rel='noreferrer' className='chip chip-secondary chip-xs'>
                  <span>v{packageFramework.version}</span>
                </a>
              </div>
            </div>
            <div className='form-group mt-4'>
              <div className='input-group'>
                <span className='icon icon-zoom'></span>
                <input id='filter'
                  name='filter'
                  type='text'
                  value={filter}
                  placeholder=''
                  autoComplete='off'
                  className='input-sm'
                  onChange={event => setFilter(event.target.value)}
                />
              </div>
            </div>
          </div>
          
          <div className='relative z-0 px-4 pb-4'>
            {DSpages.sections.map((item, itemIndex) => (
              <div className={`${filter ? '' : 'mb-4'}`} key={itemIndex}>
                <button className={`flex items-center px-4 ${filter ? 'hidden' : 'py-2'}`}>
                  {/*
                    <span className={`icon icon-16 icon-${item.icon}`}></span>
                  */}
                  <span className='font-headings uppercase text-ui-100'>{item.label}</span>
                </button>
                <div className={`${router.pathname.includes(item.url) ? 'is-active' : ''}`}>
                  <div className={`${filter ? '' : 'border-t border-ui-700/50'}`}>
                    <DSMainNav filter={filter} items={item.pages.sort((a, b) => a.label.localeCompare(b.label))} style='secondary' rounded='true' onClick={executeScroll.bind(this)} />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </aside>
      </div>
    </div>

    
      
    </>
    
  );
};

export const getLayout = page =>
  getSiteLayout(<DSLayout>{page}</DSLayout>);

export default DSLayout;
