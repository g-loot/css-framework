import DSMainNavMobile from './DSMainNavMobile';
import Link from 'next/link';
import packageFramework from '../../framework/package-framework.json';

export default function DSTopBar({children, data}) {
  return (
    <div className='sticky top-0 z-50 bg-ui-800/50 backdrop-blur'>
      <div className="flex items-center">
        <div className='py-2 container mx-auto flex space-x-12 relative text-white items-stretch justify-between px-2 md:px-0'>
          <div className='w-1/2 md:w-3/12 xl:w-2/12 flex items-center gap-2'>
           
            <div className='hidden md:block'>
              <label htmlFor="drawer-ds" className="drawer-button button button-sm button-tertiary rounded-full">
                <div className="icon icon-dots-vertical"></div>
              </label>
            </div>
            <Link href='../'>
              <a className='block transition-opacity duration-100 hover:opacity-50'>
                <img width="123" height="64" src="https://res.cloudinary.com/gloot/image/upload/v1636647109/glootcom/v2-202111/gloot_logo.svg" alt="G-Loot logo" />
              </a>
            </Link>
          </div>
          <div className='w-1/2 md:w-9/12 xl:w-10/12 flex items-center justify-end'>
            <div className='flex gap-2 items-center justify-end'>
              <div className='font-headings italic text-lg leading-none text-ui-300'>
                Framework
              </div>
              <div className='chip chip-secondary chip-xs'>
                <span>v{packageFramework.version}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DSMainNavMobile data={data} />
    </div>
  );
}
