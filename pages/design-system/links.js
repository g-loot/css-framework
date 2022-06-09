import React, { useEffect, useState } from 'react';

import DSHead from '../../components/DesignSystem/DSHead';
import DSStructure from '../../components/DesignSystem/DSStructure';
import DSTopBar from '../../components/DesignSystem/DSTopBar';
import DSdata from '../api/designsystem/data.json'
import { useRouter } from 'next/router';

export default function Links() {
  
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
  

  const router = useRouter();
  

  return (
    <div>
        <DSHead title='Links' />
        
        <DSTopBar data={DSdata} />

        <DSStructure data={DSdata}>

          <h1 className='mb-2'>
            Links
          </h1>


          {/* Structure */}
          <div className='mb-12'>

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
          <div className='mb-12'>

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
          <div className='mb-12'>

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

        
        </DSStructure>

        
    </div>
  );
}
