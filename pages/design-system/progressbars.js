import React, { useEffect, useState } from 'react';

import { getLayout } from '../../components/DesignSystem/DSLayout';

function RandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const DSpage = () => {
  const [random1, setRandom1] = useState(0);
  const [random2, setRandom2] = useState(0);
  const [random3, setRandom3] = useState(0);
  const [random4, setRandom4] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRandom1(RandomNumber(0,100))
      setRandom2(RandomNumber(0,100))
      setRandom3(RandomNumber(0,100))
      setRandom4(RandomNumber(0,100))
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  return(
  <>
    <h1 className='mb-2'>
      Progress bar
    </h1>


    {/* Linear */}
    <div className='mb-12' id='linear'>

      <h2 className='h3 mb-3'>
        Linear
      </h2>

      <div className="surface rounded-lg p-4">
        <div className=''>
          <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
            <div className='flex-1 space-y-4'>
              <div className='w-full flex flex-col gap-4 items-center'>
                <div className='progressbar w-full' style={{"--percent": random1}}>
                  <div></div>
                </div>
                <div className='progressbar w-full' style={{"--percent": random2}}>
                  <div></div>
                </div>
                <div className='progressbar w-full' style={{"--percent": random3}}>
                  <div></div>
                </div>
                <div className='progressbar w-full' style={{"--percent": random4}}>
                  <div></div>
                </div>
              </div>
            </div>
            <div className='flex-1'>
              <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/r6og8tLk/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
            </div>
          </div>
        </div>

      </div>
    </div>



    {/* Radial */}
    <div className='mb-12' id='radial'>

      <h2 className='h3 mb-3'>
        Radial 
      </h2>

      <div className="surface rounded-lg p-4">
        <div className=''>
          <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
            <div className='flex-1 space-y-4'>
              <div className='w-full grid grid-cols-2 grid-rows-2 gap-4 items-center justify-center'>
                <div className='progressbar-radial'>
                  <div>
                    <div>
                      <div className='text-2xl font-headings font-bold'>
                        {random1}%
                      </div>
                      <div className='text-xs text-ui-300 uppercase'>
                        win rate
                      </div>
                    </div>
                  </div>
                  <svg viewBox="0 0 40 40" style={{"--percent": random1}}>
                      <circle cx="20" cy="20" r="16" />
                  </svg>
                </div>
                <div className='progressbar-radial'>
                  <div>
                    <div>
                      <div className='text-2xl font-headings font-bold'>
                        {random2}%
                      </div>
                      <div className='text-xs text-ui-300 uppercase'>
                        win rate
                      </div>
                    </div>
                  </div>
                  <svg viewBox="0 0 40 40" style={{"--percent": random2}}>
                      <circle cx="20" cy="20" r="16" />
                  </svg>
                </div>
                <div className='progressbar-radial'>
                  <div>
                    <div>
                      <div className='text-2xl font-headings font-bold'>
                        {random3}%
                      </div>
                      <div className='text-xs text-ui-300 uppercase'>
                        win rate
                      </div>
                    </div>
                  </div>
                  <svg viewBox="0 0 40 40" style={{"--percent": random3}}>
                      <circle cx="20" cy="20" r="16" />
                  </svg>
                </div>
                <div className='progressbar-radial'>
                  <div>
                    <div>
                      <div className='text-2xl font-headings font-bold'>
                        {random4}%
                      </div>
                      <div className='text-xs text-ui-300 uppercase'>
                        win rate
                      </div>
                    </div>
                  </div>
                  <svg viewBox="0 0 40 40" style={{"--percent": random4}}>
                      <circle cx="20" cy="20" r="16" />
                  </svg>
                </div>
              </div>  
            </div>
            <div className='flex-1'>
              <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/vbk023ta/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Size */}
    <div className='mb-12' id='size'>

      <h2 className='h3 mb-3'>
        Size
      </h2>

      <div className="surface rounded-lg p-4">
        <div className=''>
          <div className='flex gap-4 flex-col lg:flex-row items-center'>
            <div className='flex-1 space-y-8'>
              <div className='flex gap-4 items-center'>
                <div className='w-1/4 text-ui-400 text-right text-sm leading-tight pr-4'>
                  Small
                </div>
                <div className='flex-1 w-full flex flex-col gap-4 justify-start items-start pl-8 border-l border-ui-700'>

                  <div className='progressbar progressbar-sm w-full mt-0.5' style={{"--percent": random1}}>
                    <div></div>
                  </div>

                  <div className='progressbar-sm progressbar-radial m-0'>
                    <div>
                      <div>
                        <div className='text-xl font-headings font-bold'>
                          {random2}%
                        </div>
                        <div className='text-xs text-ui-300 uppercase'>
                          win rate
                        </div>
                      </div>
                    </div>
                    <svg viewBox="0 0 40 40" style={{"--percent": random2}}>
                        <circle cx="20" cy="20" r="16" />
                    </svg>
                  </div>
                  
                </div>
              </div>
              <div className='flex gap-4 items-center'>
                <div className='w-1/4 text-ui-400 text-right text-sm leading-tight pr-4'>
                  Extra small
                </div>
                <div className='flex-1 w-full flex flex-col gap-4 justify-start items-start pl-8 border-l border-ui-700'>

                  <div className='progressbar progressbar-xs w-full mt-0.5' style={{"--percent": random1}}>
                    <div></div>
                  </div>

                  <div className='progressbar-xs progressbar-radial m-0'>
                    <svg viewBox="0 0 40 40" style={{"--percent": random2}}>
                        <circle cx="20" cy="20" r="16" />
                    </svg>
                  </div>
                  
                </div>
              </div>
            </div>
            <div className='flex-1'>
              <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/Lqwb35of/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
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