import { compose, layout, space } from 'styled-system';

import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import styled from 'styled-components';

export default function Topbar() {
  return (
    <div className='sticky top-0 z-50 bg-ui-800/50 flex items-center backdrop-blur-md'>
      <div className='py-2 container mx-auto flex md:gap-12 relative text-white items-stretch justify-between md:px-4 2xl:px-0'>
        <div className='w-auto md:w-3/12 xl:w-2/12 flex items-center'>
          <a href='../' className='block transition-opacity duration-100 hover:opacity-50'>
            <img width='123' height='64' src='https://res.cloudinary.com/gloot/image/upload/v1636647109/glootcom/v2-202111/gloot_logo.svg' alt='G-Loot logo' />
          </a>
        </div>
        <div className='w-full md:w-9/12 xl:w-10/12 hidden md:flex items-center justify-between'>
          <div className='flex items-center'>
            <div className='hidden lg:block pl-2'>
              <Button variant='secondary' label='Download tracker' icon='tv' />
            </div>
          </div>
          <div className='flex items-center justify-end'>
            <div className="hidden xl:hiden relative text-ui-500 items-center justify-end rounded border border-ui-700">
              <input className="border border-ui-600 bg-transparent h-8 px-3 pr-16 rounded text-sm focus:outline-none" type="search" name="search" placeholder="Search" />
              <button type="submit" className="absolute mr-2 text-0">
                <span className="icon icon-16 icon-zoom text-ui-600"></span>
              </button>
            </div>
            <div className='flex justify-end items-center gap-2'>
              <div className="flex space-x-3 items-center border border-ui-600 pr-2 rounded-full">
                <div className="flex items-center tooltip tooltip-bottom" data-tooltip="Coins">
                  <img src="https://res.cloudinary.com/gloot/image/upload/v1638282344/Marketing/202109_gloot2/Square_coininverted.png" width="32" height="32" alt="coins" />
                  <span className="text-sm font-bold text-gold-500">42352</span>
                </div>
                <div className="flex items-center tooltip tooltip-bottom" data-tooltip="Tokens">
                  <img src="https://res.cloudinary.com/gloot/image/upload/v1638282344/Marketing/202109_gloot2/Square_token.png" width="32" height="32" alt="tokens" />
                  <span className="text-sm font-bold text-purple-500">48</span>
                </div>
                <div className="flex items-center tooltip tooltip-bottom" data-tooltip="Tickets">
                  <img src="https://res.cloudinary.com/gloot/image/upload/v1638282344/Marketing/202109_gloot2/Square_tikethorizontal.png" width="32" height="32" alt="tickets" />
                  <span className="text-sm font-bold ml-1 text-bronze-500">12</span>
                </div>
              </div>
              <button className='button button-sm  button-tertiary rounded-full'>
                <Icon icon='alarm'></Icon>
              </button>
              <button className='button button-sm button-tertiary rounded-full'>
                <Icon icon='c-question'></Icon>
              </button>
              <figure className='avatar avatar-tiny'>
                <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1654063975/Marketing/2022_prototype/DummyContent/teams/teamlogo_CrocEsports.png)`}}></span>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
