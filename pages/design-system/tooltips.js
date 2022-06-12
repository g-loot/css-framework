import React from 'react';
import { getLayout } from '../../components/DesignSystem/DSLayout';

const DSpage = () => {

  return(
  <>
    <h1 className='mb-2'>
      Tooltips
    </h1>


    {/* Small */}
    <div className='mb-12' id='small'>

      <h2 className='h3 mb-3'>
        Small
      </h2>

      {/* Small: structure */}
      <div className="surface rounded-lg p-4">
        <div className=''>
          <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
            <div className='flex-1 space-y-4'>
              <div className='w-full flex gap-4 items-center'>
                <div className='w-1/4 text-ui-400 text-right text-sm leading-tight'>
                  Top <button className="chip chip-xs chip-secondary pointer-events-none uppercase"><span>default</span></button>
                </div>
                <div className='flex-1'>
                  <button className='chip chip-primary tooltip' data-tooltip="Lorem ipsum dolor sit amet">
                    <span>Tooltip</span>
                  </button>
                </div>
              </div>
              <div className='w-full flex gap-4 items-center'>
                <div className='w-1/4 text-ui-400 text-right text-sm leading-tight'>
                  Right
                </div>
                <div className='flex-1'>
                  <button className='chip chip-primary tooltip tooltip-right' data-tooltip="Lorem ipsum dolor sit amet">
                    <span>Tooltip</span>
                  </button>
                </div>
              </div>
              <div className='w-full flex gap-4 items-center'>
                <div className='w-1/4 text-ui-400 text-right text-sm leading-tight'>
                  Bottom
                </div>
                <div className='flex-1'>
                  <button className='chip chip-primary tooltip tooltip-bottom' data-tooltip="Lorem ipsum dolor sit amet">
                    <span>Tooltip</span>
                  </button>
                </div>
              </div>
              <div className='w-full flex gap-4 items-center'>
                <div className='w-1/4 text-ui-400 text-right text-sm leading-tight'>
                  left
                </div>
                <div className='flex-1'>
                  <button className='chip chip-primary tooltip tooltip-left' data-tooltip="Lorem ipsum dolor sit amet">
                    <span>Tooltip</span>
                  </button>
                </div>
              </div>
            </div>
            <div className='flex-1'>
              <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/hupyntsg/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
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