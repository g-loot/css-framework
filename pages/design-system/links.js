import React from 'react';
import { getLayout } from '../../components/DesignSystem/DSLayout';

const DSpage = () => {

  return(
  <>
    <h1 className='mb-2'>
      Links
    </h1>


    {/* Structure */}
    <div className='mb-12' id='structure'>

      <h2 className='h3 mb-3'>
        Structure
      </h2>

      <div className="surface rounded-lg p-4">
        <div className=''>
          <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
            <div className='flex-1 space-y-4 text-center'>
              <a className="link">Yes, I am a link</a>
            </div>
            <div className='flex-1'>
              <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/4tjbgzLe/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
            </div>
          </div>
        </div>

      </div>
    </div>



    {/* Main color */}
    <div className='mb-12' id='main-color'>

      <h2 className='h3 mb-3'>
        Main color
      </h2>

      <div className="surface rounded-lg p-4">
        <div className=''>
          <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
            <div className='flex-1 space-y-4 text-center'>
              <a className="link link-main">Yes, I am a link</a>
            </div>
            <div className='flex-1'>
              <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/h9k0sx53/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>


    {/* Underline on hover */}
    <div className='mb-12' id='hover-underline'>

      <h2 className='h3 mb-3'>
        Underline on hover
      </h2>

      <div className="surface rounded-lg p-4">
        <div className=''>
          <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
            <div className='flex-1 space-y-4 text-center'>
              <a className="link link-hover">Yes, I am a link</a>
            </div>
            <div className='flex-1'>
              <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/20f9e4br/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

DSpage.getLayout = getLayout;

export default DSpage;