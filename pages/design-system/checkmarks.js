import React, { useState } from 'react';

import DSHead from '../../components/DesignSystem/DSHead';
import DSStructure from '../../components/DesignSystem/DSStructure';
import DSTopBar from '../../components/DesignSystem/DSTopBar';
import DSdata from '../api/designsystem/data.json'
import { useRouter } from 'next/router';

export default function Checkmarks() {

  const [randomNum0, setRandomNum0] = useState(1);

  function clickHandlerNum0(varTarget, max) {
    if(varTarget === max) {
      setRandomNum0(varTarget = 0)
    } else {
      setRandomNum0(varTarget + 1)
    }
  }

  const router = useRouter();
  

  return (
    <div>
        <DSHead title='Checkmarks' />
        
        <DSTopBar data={DSdata} />

        <DSStructure data={DSdata}>

          <h1 className='mb-2'>
            Checkmarks
          </h1>


          {/* Structure */}
          <div className='mb-12'>

            <h2 className='h3 mb-3'>
              Structure
            </h2>

            <div className="surface rounded-lg p-4">
              <div className=''>
                <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
                  <div className='flex-1 space-y-4'>
                    <div className='flex-1 flex justify-center flex-wrap gap-4'>
                      <div className={`checkmark ${randomNum0 === 1 ? 'is-active' : ''}`}>
                        <i></i>
                      </div>
                      <div className={`checkmark ${randomNum0 === 0 ? 'is-active' : ''}`}>
                        <i></i>
                      </div>
                    </div>
                    <div className='text-center'>
                      <button className='button button-tertiary mx-auto' onClick={clickHandlerNum0.bind(this, randomNum0, 1)}>
                        <span>Toggle</span>
                      </button>
                    </div>
                  </div>
                  <div className='flex-1'>
                    <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/09fs45cy/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>

          
        </DSStructure>

        
    </div>
  );
}
