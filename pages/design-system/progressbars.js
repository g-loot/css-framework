import React, { useEffect } from 'react';

import DSHead from '../../components/DesignSystem/DSHead';
import DSStructure from '../../components/DesignSystem/DSStructure';
import DSTopBar from '../../components/DesignSystem/DSTopBar';
import DSdata from '../api/designsystem/data.json'
import useFetch from '../../hooks/use-fetch';
import { useRouter } from 'next/router';

function RandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function Progressbar() {
  var Random1 = RandomNumber(1,100);
  var Random2 = RandomNumber(1,100);
  var Random3 = RandomNumber(1,100);
  var Random4 = RandomNumber(1,100);

  useEffect(() => {
    const interval = setInterval(() => {
      Random1 = RandomNumber(1,100);
      Random2 = RandomNumber(1,100);
      Random3 = RandomNumber(1,100);
      Random4 = RandomNumber(1,100);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  
  const router = useRouter();
  const { data, loading } = useFetch('/api/designsystem', { delay: 20 });

  return (
    <div>
        <DSHead title='Progress bars' />
        
        <DSTopBar />

        <DSStructure data={DSdata}>

          <h1 className='mb-2 mx-2 md:mx-0'>
            Progress bar
          </h1>


          {/* linear */}
          <div className='mb-12'>

            <h2 className='h3 mb-3 mx-2 md:mx-0'>
              Linear
            </h2>
          
            <div className="card rounded-lg p-4">
              <div className=''>
                <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
                  <div className='flex-1 space-y-4'>
                    <div className='w-full flex flex-col gap-4 items-center'>
                      <div className='progressbar w-full' style={{"--percent": Random1}}>
                        <div></div>
                      </div>
                      <div className='progressbar w-full' style={{"--percent": Random2}}>
                        <div></div>
                      </div>
                      <div className='progressbar w-full' style={{"--percent": Random3}}>
                        <div></div>
                      </div>
                      <div className='progressbar w-full' style={{"--percent": Random4}}>
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



          {/* radial */}
          <div className='mb-12'>

            <h2 className='h3 mb-3 mx-2 md:mx-0'>
              Radial 
            </h2>

            <div className="card rounded-lg p-4">
              <div className=''>
                <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
                  <div className='flex-1 space-y-4'>
                    <div className='w-full flex gap-4 items-center justify-center'>
                      <div className='progressbar-radial'>
                        <div>
                          <div>
                            <div className='text-2xl font-headings'>
                              {Random1}%
                            </div>
                            <div className='text-xs text-ui-300 uppercase'>
                              win rate
                            </div>
                          </div>
                        </div>
                        <svg viewBox="0 0 40 40" style={{"--percent": Random1}}>
                            <circle cx="20" cy="20" r="16" />
                        </svg>
                      </div>
                      <div className='progressbar-radial'>
                        <div>
                          <div>
                            <div className='text-2xl font-headings'>
                              {Random2}%
                            </div>
                            <div className='text-xs text-ui-300 uppercase'>
                              win rate
                            </div>
                          </div>
                        </div>
                        <svg viewBox="0 0 40 40" style={{"--percent": Random2}}>
                            <circle cx="20" cy="20" r="16" />
                        </svg>
                      </div>
                      <div className='progressbar-radial'>
                        <div>
                          <div>
                            <div className='text-2xl font-headings'>
                              {Random3}%
                            </div>
                            <div className='text-xs text-ui-300 uppercase'>
                              win rate
                            </div>
                          </div>
                        </div>
                        <svg viewBox="0 0 40 40" style={{"--percent": Random3}}>
                            <circle cx="20" cy="20" r="16" />
                        </svg>
                      </div>
                      <div className='progressbar-radial'>
                        <div>
                          <div>
                            <div className='text-2xl font-headings'>
                              {Random4}%
                            </div>
                            <div className='text-xs text-ui-300 uppercase'>
                              win rate
                            </div>
                          </div>
                        </div>
                        <svg viewBox="0 0 40 40" style={{"--percent": Random4}}>
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
          <div className='mb-12'>

            <h2 className='h3 mb-3 mx-2 md:mx-0'>
              Size
            </h2>
          
            <div className="card rounded-lg p-4">
              <div className=''>
                <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
                  <div className='flex-1 space-y-4'>
                    <div className='w-full flex flex-col gap-4 items-center'>
                      <div className='progressbar progressbar-sm w-full' style={{"--percent": Random1}}>
                        <div></div>
                      </div>

                      <div className='progressbar-sm progressbar-radial'>
                        <div>
                          <div>
                            <div className='text-xl font-headings'>
                              {Random2}%
                            </div>
                            <div className='text-xs text-ui-300 uppercase'>
                              win rate
                            </div>
                          </div>
                        </div>
                        <svg viewBox="0 0 40 40" style={{"--percent": Random2}}>
                            <circle cx="20" cy="20" r="16" />
                        </svg>
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
        
        
        </DSStructure>

        
    </div>
  );
}
