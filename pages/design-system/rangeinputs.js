import React, {useState} from 'react';

import { getLayout } from '../../components/DesignSystem/DSLayout';

const DSpage = () => {
  const [rangeval, setRangeval] = useState(null);
  return(
  <>
    <h1 className='mb-2'>
      Range
    </h1>


    {/* Structure */}
    <div className='mb-12' id='structure'>

      <h2 className='h3 mb-3'>
        Structure
      </h2>

      <div className="surface rounded-lg p-4">
        <div className=''>
          <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
            <div className='flex-1 space-y-4'>
              <div className='w-full flex gap-4 items-center'>
                <div className='flex-1 space-y-4'>
                  <input type="range" className="form-range" min="0" max="100" onChange={(event) => setRangeval(event.target.value)} />
                </div>
              </div>
            </div>
            <div className='flex-1'>
              <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/aLy8gzcu/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>


    {/* With ticks */}
    <div className='mb-12' id='with-ticks'>

      <h2 className='h3 mb-3'>
        With ticks
      </h2>

      <div className="surface rounded-lg p-4">
        <div className=''>
          <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
            <div className='flex-1 space-y-4'>
              <div className='w-full flex gap-4 items-center'>
                <div className='flex-1'>
                  <input type="range" className="form-range" min="0" max="100" step="25" onChange={(event) => setRangeval(event.target.value)} />
                  <div className="w-full flex justify-between text-xs text-ui-400 px-2">
                    <span>|</span>
                    <span>|</span>
                    <span>|</span>
                    <span>|</span>
                    <span>|</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex-1'>
              <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/uawsqjtm/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
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