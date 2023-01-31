import React, { useEffect, useRef, useState } from 'react';

import Link from 'next/link'
import cn from 'classnames'
import { useRouter } from 'next/router';

const TopBarMarketing = ({ props }) => {
  const [visible, setVisible] = useState(false)

  const playBaseUrl = ''
  const marketingBaseUrl = ''

  const ref = useRef(null)

  const handleClickOutside = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setVisible(false)
    }
  }

  const navClickHandler = (e, key, trackingOpts = {}) => {
    e.preventDefault()
    window.location.href = e.target.href
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true)
    return () => {
      document.removeEventListener('click', handleClickOutside, true)
    }
  })

  const toggleNav = () => {
    setVisible(!visible)
  }

  const {
    query: { query },
    route,
  } = useRouter()

  const navLinks = [
    ['home', '/', 'Home'],
    ['features', '/features', 'Features'],
    ['howItWorks', '/how-it-works', 'How it works'],
    ['blog', '/blog', 'Blog'],
  ]
  
  return (
    <>
      <header className="fixed w-full top-0 z-50 bg-ui-900/95 backdrop-blur font-bold">
        <div className="px-2 md:px-8 xl:px-0 container max-w-[1280px] mx-auto flex relative text-mono-100 items-stretch justify-between">
          <div className="flex flex-wrap xl:flex-nowrap items-center">
            <Link href="/">
              <a
                className="lg:mr-8 cursor-pointer hover:opacity-70 transition-all duration-500"
                aria-label="Stryda home">
                <img
                  width={123}
                  height={64}
                  src="https://res.cloudinary.com/gloot/image/upload/v1672130648/Stryda/logos/stryda-logo-white.svg"
                  alt="Stryda logo"
                  className="py-3"
                />
                <span className="hidden">Stryda home</span>
              </a>
            </Link>
            <nav
              ref={ref}
              className={`flex-1 flex justify-center flex-grow fixed inset-x-0 top-0 z-10 items-center px-6 py-8 pb-12 rounded-t shadow-md transition-all duration-300 ease-[cubic-bezier(0.8,0,0.2,1)] transform bg-ui-900/95 backdrop-blur-sm  lg:flex lg:relative lg:top-auto lg:right-auto lg:bottom-auto lg:left-auto lg:p-0 lg:text-left lg:bg-ui-900/0 lg:translate-y-0 ${visible ? 'translate-y-0' : '-translate-y-full'}`}
             >
              <button
                title="Hide navigation"
                type="button"
                onClick={toggleNav}
                className="absolute top-0 right-0 my-6 mx-6 text-[2.25rem] lg:hidden">
                ✕
              </button>
              <ul className='tabs'>
                {navLinks.map(([key, href, label, classnames], idx) => (
                  <li
                    key={idx}
                    className={cn(
                      '',
                      classnames,
                      route === href || (href.length > 1 && route.startsWith(href))
                        ? ''
                        : '',
                    )}>
                    <Link href={`${marketingBaseUrl}${href}`} target='_blank'>
                      <a className='relative text-mono-100 transition-colors duration-200 hover:text-main'>{label}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="flex items-center relative justify-end md:ml-8 ml-auto space-x-2 sm:space-x-4 text-sm xl:relative">
            <Link target='_blank' href={`${playBaseUrl}/auth/login?platform=web`}>
              <a className="button button-secondary">
                <span className="px-2">Log in</span>
              </a>
            </Link>
            <Link target='_blank' href={`${playBaseUrl}/auth/register`}>
              <a className="button button-primary">
                <span className="px-2">Join free</span>
              </a>
            </Link>
          
            <button
              title="Show navigation"
              className="flex justify-center items-center w-10 h-10 text-[2.25rem] text-mono-100 lg:hidden"
              type="button"
              onClick={toggleNav}>
              <svg viewBox="0 0 100 80" fill="currentColor" width="24" height="24">
                <rect width="100" height="14" rx="7"></rect>
                <rect y="32" width="100" height="14" rx="7"></rect>
                <rect y="64" width="100" height="14" rx="7"></rect>
              </svg>
            </button>
          </div>
        </div>
      </header>
    </>

  );
};

export default TopBarMarketing;