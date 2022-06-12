import React from 'react';
import { getLayout } from '../../components/DesignSystem/DSLayout';

const DSpage = () => {

  return(
  <>
    <h1 className='mb-2'>
      Surfaces
    </h1>

    {/* Normal */}
    <div className='mb-10' id='normal'>
      <h2 className='h3 mb-3'>
        Normal
      </h2>
      <div className='flex flex-col lg:flex-row gap-4'>
        <div className='flex-1 surface rounded-lg aspect-square'>
        </div>
        <div className='flex-1'>
          <iframe className="rounded-lg" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/zvsfkj25/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
        </div>
      </div>
    </div>

    {/* Dimmed */}
    <div className='mb-10' id='dimmed'>
      <h2 className='h3 mb-3'>
        Dimmed
      </h2>
      <div className='flex flex-col lg:flex-row gap-4'>
        <div className='flex-1 surface surface-dimmed rounded-lg aspect-square'>
        </div>
        <div className='flex-1'>
          <iframe className="rounded-lg" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/zvsfkj25/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
        </div>
      </div>
    </div>

    {/* Colors */}
    <div className='mb-10' id='colors'>
      <h2 className='h3 mb-3'>
        Colors
      </h2>
      <div className='flex flex-col lg:flex-row gap-4'>
        <div className='flex-1 grid grid-cols-2 grid-rows-2 gap-4'>
          <div className='surface surface-ui-900 rounded-lg aspect-square'>
          </div>
          <div className='surface surface-ui-800 rounded-lg aspect-square'>
          </div>
          <div className='surface surface-ui-700 rounded-lg aspect-square'>
          </div>
          <div className='surface surface-ui-600 rounded-lg aspect-square'>
          </div>
        </div>
        <div className='flex-1'>
          <iframe className="rounded-lg" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/azv786dn/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
        </div>
      </div>
    </div>

    {/* Halo surface */}
    <div className='mb-10' id='halo-surface'>
      <h2 className='h3 mb-3'>
        Halo surface
      </h2>
      <div className='flex flex-col lg:flex-row gap-4'>
        <div className='flex-1 grid grid-cols-2 grid-rows-2 gap-4'>
          <div className='surface surface-halo rounded-lg aspect-square'>
          </div>
          <div className='surface surface-halo halo-l rounded-lg aspect-square'>
          </div>
          <div className='surface surface-halo halo-r rounded-lg aspect-square'>
          </div>
          <div className='surface surface-halo halo-t rounded-lg aspect-square'>
          </div>
        </div>
        <div className='flex-1'>
          <iframe className="rounded-lg" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/ucvtxz19/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
        </div>
      </div>
    </div>
  </>
  )
}

DSpage.getLayout = getLayout;

export default DSpage;