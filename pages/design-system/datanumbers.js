import React, { useEffect, useState } from 'react';

import DSHead from '../../components/DesignSystem/DSHead';
import DSStructure from '../../components/DesignSystem/DSStructure';
import DSTopBar from '../../components/DesignSystem/DSTopBar';
import DSdata from '../api/designsystem/data.json'
import useFetch from '../../hooks/use-fetch';
import { useRouter } from 'next/router';

export default function DataNumbers() {
  function RandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  
  const [random1, setRandom1] = useState(RandomNumber(0,100));
  const [random2, setRandom2] = useState(RandomNumber(0,100));
  const [random3, setRandom3] = useState(RandomNumber(0,100));
  const [random4, setRandom4] = useState(RandomNumber(0,100));

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
  

  const router = useRouter();
  const { data, loading } = useFetch('/api/designsystem', { delay: 20 });

  return (
    <div>
        <DSHead title='Data &amp; Numbers' />
        
        <DSTopBar />

        <DSStructure data={DSdata}>

          <h1 className='mb-2 mx-2 md:mx-0'>
            Data &amp; numbers
          </h1>


          {/* Gauge */}
          <div className='mb-12'>

            <h2 className='h3 mb-3 mx-2 md:mx-0'>
              Gauge
            </h2>
          
            <div className="card rounded-lg p-4">
              <div className=''>
                <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
                  <div className='flex-1 space-y-4'>
                    <div className='w-full flex gap-4 items-center justify-around'>
                      <div className="gauge" style={{"--percent": random1}}>
                        <div className="gauge-chart">
                          <svg className="h-16 w-16 lg:h-28 lg:w-28" viewBox="0 0 126 126" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M102.402 110.916C101.593 110.916 100.802 110.671 100.135 110.212C99.4678 109.753 98.9556 109.103 98.6659 108.347C98.3763 107.591 98.3229 106.765 98.5128 105.978C98.7027 105.191 99.1269 104.48 99.7295 103.939C108.015 96.5056 113.85 86.7325 116.464 75.9118C119.077 65.0912 118.345 53.7322 114.365 43.3362C110.385 32.9403 103.344 23.9967 94.1732 17.6874C85.0021 11.3782 74.1324 8.0003 63.0006 8.00023C51.8688 8.00015 40.9991 11.3779 31.8279 17.687C22.6567 23.9961 15.6157 32.9396 11.6357 43.3356C7.65559 53.7315 6.92371 65.0904 9.53675 75.9111C12.1498 86.7319 17.9848 96.505 26.2705 103.939C26.6621 104.29 26.9808 104.714 27.2083 105.188C27.4357 105.662 27.5676 106.176 27.5962 106.701C27.6249 107.226 27.5498 107.751 27.3752 108.247C27.2006 108.743 26.93 109.199 26.5789 109.591C26.2277 109.982 25.8029 110.3 25.3287 110.527C24.8545 110.754 24.3402 110.885 23.8153 110.913C23.2903 110.941 22.765 110.865 22.2694 110.69C21.7737 110.515 21.3175 110.244 20.9267 109.892C11.4363 101.377 4.75315 90.1821 1.76042 77.7877C-1.23232 65.3932 -0.393727 52.3824 4.16536 40.4748C8.72445 28.5671 16.7894 18.323 27.2944 11.0965C37.7994 3.86992 50.25 0.00102438 63.0006 0.00109863C75.7512 0.00117288 88.2017 3.87021 98.7066 11.0969C109.212 18.3236 117.276 28.5677 121.835 40.4754C126.394 52.3832 127.233 65.394 124.24 77.7884C121.247 90.1828 114.564 101.377 105.073 109.893C104.34 110.552 103.389 110.917 102.402 110.916Z" />
                              <path d="M23.5986 106.916C14.7106 98.9412 8.4515 88.4573 5.64858 76.8498C2.84566 65.2422 3.63086 53.0574 7.9004 41.9055C12.1699 30.7537 19.7228 21.1599 29.5609 14.3921C39.399 7.6242 51.0591 4.00084 63.0003 4.00085C74.9414 4.00087 86.6016 7.62426 96.4396 14.3922C106.278 21.16 113.831 30.7539 118.1 41.9057C122.37 53.0575 123.155 65.2423 120.352 76.8499C117.549 88.4574 111.29 98.9413 102.402 106.916" strokeWidth="8" strokeMiterlimit="10" strokeLinecap="round" />
                          </svg>
                        </div>
                        <div className="gauge-content">
                          <div className='text-2xl font-headings'>
                            {random1}%
                          </div>
                          <div className='text-xs text-ui-300 uppercase'>
                            win rate
                          </div>
                        </div>
                      </div>
                      <div className="gauge" style={{"--percent": random2}}>
                        <div className="gauge-chart">
                          <svg className="h-16 w-16 lg:h-28 lg:w-28" viewBox="0 0 126 126" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M102.402 110.916C101.593 110.916 100.802 110.671 100.135 110.212C99.4678 109.753 98.9556 109.103 98.6659 108.347C98.3763 107.591 98.3229 106.765 98.5128 105.978C98.7027 105.191 99.1269 104.48 99.7295 103.939C108.015 96.5056 113.85 86.7325 116.464 75.9118C119.077 65.0912 118.345 53.7322 114.365 43.3362C110.385 32.9403 103.344 23.9967 94.1732 17.6874C85.0021 11.3782 74.1324 8.0003 63.0006 8.00023C51.8688 8.00015 40.9991 11.3779 31.8279 17.687C22.6567 23.9961 15.6157 32.9396 11.6357 43.3356C7.65559 53.7315 6.92371 65.0904 9.53675 75.9111C12.1498 86.7319 17.9848 96.505 26.2705 103.939C26.6621 104.29 26.9808 104.714 27.2083 105.188C27.4357 105.662 27.5676 106.176 27.5962 106.701C27.6249 107.226 27.5498 107.751 27.3752 108.247C27.2006 108.743 26.93 109.199 26.5789 109.591C26.2277 109.982 25.8029 110.3 25.3287 110.527C24.8545 110.754 24.3402 110.885 23.8153 110.913C23.2903 110.941 22.765 110.865 22.2694 110.69C21.7737 110.515 21.3175 110.244 20.9267 109.892C11.4363 101.377 4.75315 90.1821 1.76042 77.7877C-1.23232 65.3932 -0.393727 52.3824 4.16536 40.4748C8.72445 28.5671 16.7894 18.323 27.2944 11.0965C37.7994 3.86992 50.25 0.00102438 63.0006 0.00109863C75.7512 0.00117288 88.2017 3.87021 98.7066 11.0969C109.212 18.3236 117.276 28.5677 121.835 40.4754C126.394 52.3832 127.233 65.394 124.24 77.7884C121.247 90.1828 114.564 101.377 105.073 109.893C104.34 110.552 103.389 110.917 102.402 110.916Z" />
                              <path d="M23.5986 106.916C14.7106 98.9412 8.4515 88.4573 5.64858 76.8498C2.84566 65.2422 3.63086 53.0574 7.9004 41.9055C12.1699 30.7537 19.7228 21.1599 29.5609 14.3921C39.399 7.6242 51.0591 4.00084 63.0003 4.00085C74.9414 4.00087 86.6016 7.62426 96.4396 14.3922C106.278 21.16 113.831 30.7539 118.1 41.9057C122.37 53.0575 123.155 65.2423 120.352 76.8499C117.549 88.4574 111.29 98.9413 102.402 106.916" strokeWidth="8" strokeMiterlimit="10" strokeLinecap="round" />
                          </svg>
                        </div>
                        <div className="gauge-content">
                          <div className='text-2xl font-headings'>
                            {random2}%
                          </div>
                          <div className='text-xs text-ui-300 uppercase'>
                            win rate
                          </div>
                        </div>
                      </div>
                      
                    </div>
                    <div className='text-center'>
                      <button className='button button-tertiary mx-auto' onClick={clickHandlerNum1and2.bind(this)}>
                        <span>Get random values</span>
                      </button>
                    </div>
                  </div>
                  <div className='flex-1'>
                    <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/2yuavgot/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
                  </div>
                </div>
              </div>

            </div>
          </div>



          {/* Icon holder */}
          <div className='mb-12'>

            <h2 className='h3 mb-3 mx-2 md:mx-0'>
              Icon holder
            </h2>

            <div className="card rounded-lg p-4">
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


          {/* Icon holder + loader */}
          <div className='mb-12'>

            <h2 className='h3 mb-3 mx-2 md:mx-0'>
              Icon holder + loader
            </h2>

            <div className="card rounded-lg p-4">
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

        
        </DSStructure>

        
    </div>
  );
}
