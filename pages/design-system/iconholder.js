import React, { useState } from 'react';

import { getLayout } from '../../components/DesignSystem/DSLayout';

const DSpage = () => {
  function RandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const [random1, setRandom1] = useState(0);
  const [random2, setRandom2] = useState(0);
  const [random3, setRandom3] = useState(0);
  const [random4, setRandom4] = useState(0);

  function clickHandlerNum1and2(){
    clickHandlerNum1();
    clickHandlerNum2();
  }
  function clickHandlerNum3and4(){
    clickHandlerNum3();
    clickHandlerNum4();
  }

  function clickHandlerNum1(){
    setRandom1(RandomNumber(0,100));
  }
  function clickHandlerNum2(){
    setRandom2(RandomNumber(0,100))
  }
  function clickHandlerNum3(){
    setRandom3(RandomNumber(0,100))
  }
  function clickHandlerNum4(){
    setRandom4(RandomNumber(0,100))
  }
  return(
  <>
    <h1 className='mb-2'>
      Icon holder
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
              <div className='w-full flex items-start justify-around'>

                
                <div className='text-center'>
                  <div className='icon-holder'>
                    <span className='icon icon-mission-headshot'></span>
                  </div>
                  <div>
                    <div className="text-3xl font-headings">25</div>
                    <div className="leading-none text-sm text-ui-300 uppercase">headshots</div>
                  </div>
                </div>
                <div className='text-center'>
                  <div className='icon-holder'>
                    <span className='icon icon-mission-kill'></span>
                  </div>
                  <div>
                    <div className="text-3xl font-headings">42</div>
                    <div className="leading-none text-sm text-ui-300 uppercase">kills</div>
                  </div>
                </div>
                
                
              </div>  
            </div>
            <div className='flex-1'>
              <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/ryc2mboz/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
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
          <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
            <div className='flex-1 space-y-4'>
              <div className='w-full flex items-start justify-around'>

                
                <div className='text-center'>
                  <div className='icon-holder icon-holder-sm'>
                    <span className='icon icon-mission-headshot'></span>
                  </div>
                  <div>
                    <div className="text-2xl font-headings">25</div>
                    <div className="leading-none text-xs text-ui-300 uppercase">headshots</div>
                  </div>
                </div>
                <div className='text-center'>
                  <div className='icon-holder icon-holder-sm'>
                    <span className='icon icon-mission-kill'></span>
                  </div>
                  <div>
                    <div className="text-2xl font-headings">42</div>
                    <div className="leading-none text-xs text-ui-300 uppercase">kills</div>
                  </div>
                </div>
                
                
              </div>  
            </div>
            <div className='flex-1'>
              <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/52bwqhvm/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>



    {/* Icon holder &amp; radial progress bar */}
    <div className='mb-12'>

      <h2 className='h3 mb-3' id='icon-holder-radial'>
        Icon holder &amp; radial progress bar
      </h2>

      <div className="surface rounded-lg p-4">
        <div className=''>
          <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
            <div className='flex-1 space-y-4'>
              <div className='w-full flex items-start justify-around'>
                <div className='text-center relative'>
                  <div className='progressbar-radial'>
                    <svg viewBox="0 0 40 40" style={{"--percent": random3}}>
                        <circle cx="20" cy="20" r="16" />
                    </svg>
                  </div>
                  <div className='icon-holder'>
                    <span className='icon icon-mission-headshot'></span>
                  </div>
                </div>
                <div className='text-center relative'>
                  <div className='progressbar-radial'>
                    <svg viewBox="0 0 40 40" style={{"--percent": random4}}>
                        <circle cx="20" cy="20" r="16" />
                    </svg>
                  </div>
                  <div className='icon-holder'>
                    <span className='icon icon-mission-kill'></span>
                  </div>
                  
                </div>
                
                
              </div>     
              <div className='text-center'>
                <button className='button button-tertiary mx-auto' onClick={clickHandlerNum3and4.bind(this)}>
                  <span>Get random values</span>
                </button>
              </div>                 
            </div>
            <div className='flex-1'>
              <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/ryc2mboz/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
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