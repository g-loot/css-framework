import React, { useRef, useState } from 'react';

import Icon from '../Icon/Icon';

export default function Footer(props) {

  const [isActive, setActive] = useState(false);
  const elementRef = useRef(null);

  var height = elementRef.current?.clientHeight;

  const handleToggle = e => {
    e.preventDefault()
    setActive(!isActive);
  };
  
  return (
  <footer className='bg-ui-800 border-t border-ui-700 py-12'>
    <div>
      <div className='container mx-auto md:gap-12 md:px-4 2xl:px-0 md:flex justify-between'>
        <div className='mb-12 lg:mb-0'>
          <img
            width={148}
            height={40}
            src='https://res.cloudinary.com/gloot/image/upload/v1636647109/glootcom/v2-202111/gloot_logo.svg'
            alt='Gloot logo'
          />

          <p className='my-8 text-sm leading-relaxed'>
            © G-Loot Global Esports AB. <br />
            <span className='flex items-center'>
              <span className='text-ui-300'>All rights reserved. Made in Stockholm, Sweden</span>
              <img
                loading='lazy'
                className='ml-2'
                alt='Swedish flag'
                src='https://gloot.com/icons/sweden.svg'
                width='16'
                height='12'
              />
            </span>
          </p>

          <p className='mb-2 text-xs text-ui-300'>Secure payment methods with</p>

          <img width={288} height={40} src='https://gloot.com/payment-providers@2x.png' alt='Payment providers' />
        </div>

        <ul className='grid auto-cols-max gap-16 md:grid-flow-col'>
          <li>
            <strong className='flex mb-4 font-headings italic text-xl items-center'>
              <span className='block flex-shrink-0 mr-2 w-1 h-6 bg-main' />
              <span>Company</span>
            </strong>

            <ul className='text-sm'>
              <li>
                <a className='text-ui-300 hover:text-interaction-500 transition duration-200 p-2 inline-block' target='_blank' href='https://gloot.com/company'>About</a>
              </li>
              <li>
                <a className='text-ui-300 hover:text-interaction-500 transition duration-200 p-2 inline-block' target='_blank' href='https://investor.gloot.com/'>Investor</a>
              </li>
              <li>
                <a className='text-ui-300 hover:text-interaction-500 transition duration-200 p-2 inline-block' target='_blank' href='https://career.gloot.com/'>Jobs</a>
              </li>
            </ul>
          </li>

          <li>
            <strong className='flex mb-4 font-headings italic text-xl items-center'>
              <span className='block flex-shrink-0 mr-2 w-1 h-6 bg-main' />
              <span>Further information</span>
            </strong>

            <ul className='text-sm'>
              <li>
                <a className='text-ui-300 hover:text-interaction-500 transition duration-200 p-2 inline-block' target='_blank' href='https://gloot.com/terms-conditions'>Terms of service</a>
              </li>
              <li>
                <a className='text-ui-300 hover:text-interaction-500 transition duration-200 p-2 inline-block' target='_blank' href='https://gloot.com/privacy-policy'>Privacy policy</a>
              </li>
              <li>
                <a className='text-ui-300 hover:text-interaction-500 transition duration-200 p-2 inline-block' target='_blank' href='https://gloot.com/developer-terms'>Developer terms</a>
              </li>
              <li>
                <a className='text-ui-300 hover:text-interaction-500 transition duration-200 p-2 inline-block' target='_blank' href='https://help.gloot.com/hc/en-us'>Support & FAQ</a>
              </li>
              <li>
                <a className='text-ui-300 hover:text-interaction-500 transition duration-200 p-2 inline-block' target='_blank' href='https://gloot.com/how-it-works'>How it works</a>
              </li>
            </ul>
          </li>
          <li>
            <strong className='flex mb-4 font-headings italic text-xl items-center'>
              <span className='block flex-shrink-0 mr-2 w-1 h-6 bg-main'></span>
              <span>Social</span>
            </strong>
            <ul className=''>
              <li>
                <a className='text-ui-300 hover:text-interaction-500 transition duration-200 px-2 py-1 inline-block' target='_blank' href='https://gloot.com/terms-conditions'>
                  <Icon icon='discord' />
                </a>
              </li>
              <li>
                <a className='text-ui-300 hover:text-interaction-500 transition duration-200 px-2 py-1 inline-block' target='_blank' href='https://gloot.com/terms-conditions'>
                  <Icon icon='logo-facebook' />
                </a>
              </li>
              <li>
                <a className='text-ui-300 hover:text-interaction-500 transition duration-200 px-2 py-1 inline-block' target='_blank' href='https://gloot.com/terms-conditions'>
                  <Icon icon='logo-instagram' />
                </a>
              </li>
              <li>
                <a className='text-ui-300 hover:text-interaction-500 transition duration-200 px-2 py-1 inline-block' target='_blank' href='https://gloot.com/terms-conditions'>
                  <Icon icon='logo-twitter' />
                </a>
              </li>
              <li>
                <a className='text-ui-300 hover:text-interaction-500 transition duration-200 px-2 py-1 inline-block' target='_blank' href='https://gloot.com/terms-conditions'>
                  <Icon icon='logo-youtube' />
                </a>
              </li> 
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </footer>
  );
}