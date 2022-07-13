import React, { useState } from 'react';

import { getLayout } from '../../components/DesignSystem/DSLayout';

const DSpage = () => {
  const [randomNum0, setRandomNum0] = useState(1);
  const [randomNum1, setRandomNum1] = useState(1);
  const [randomNum2, setRandomNum2] = useState(1);
  const [randomNum3, setRandomNum3] = useState(1);
  const [randomNum4, setRandomNum4] = useState(1);
  const [randomNum5, setRandomNum5] = useState(1);

  function clickHandlerNum0(varTarget, max) {
    if(varTarget === max) {
      setRandomNum0(varTarget = 0)
    } else {
      setRandomNum0(varTarget + 1)
    }
  }
  function clickHandlerNum1(varTarget, max) {
    if(varTarget === max) {
      setRandomNum1(varTarget = 0)
    } else {
      setRandomNum1(varTarget + 1)
    }
  }
  function clickHandlerNum2(varTarget, max) {
    if(varTarget === max) {
      setRandomNum2(varTarget = 0)
    } else {
      setRandomNum2(varTarget + 1)
    }
  }
  function clickHandlerNum3(varTarget, max) {
    if(varTarget === max) {
      setRandomNum3(varTarget = 0)
    } else {
      setRandomNum3(varTarget + 1)
    }
  }
  function clickHandlerNum4(varTarget, max) {
    if(varTarget === max) {
      setRandomNum4(varTarget = 0)
    } else {
      setRandomNum4(varTarget + 1)
    }
  }
  function clickHandlerNum5(varTarget, max) {
    if(varTarget === max) {
      setRandomNum5(varTarget = 0)
    } else {
      setRandomNum5(varTarget + 1)
    }
  }
  return(
  <>
    <h1 className='mb-2'>
      Steps
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
              <ul className={`step step-primary ${randomNum0 === 0 ? `is-inactive` : ''}`}>
                <li className={`${randomNum0 === 1 ? `is-active` : ''}`}>
                  <a href='#'>
                    <i>1</i>
                    <div></div>
                    <span></span>
                  </a>
                </li>
                <li className={`${randomNum0 === 2 ? `is-active` : ''}`}>
                  <a href='#'>
                    <i>2</i>
                    <div></div>
                    <span></span>
                  </a>
                </li>
                <li className={`${randomNum0 === 3 ? `is-active` : ''}`}>
                  <a href='#'>
                    <i>3</i>
                    <div></div>
                    <span></span>
                  </a>
                </li>
              </ul>
              <div className='text-center'>
                <button className='button button-tertiary mx-auto' onClick={clickHandlerNum0.bind(this, randomNum0, 3)}>
                  <span>Next step</span>
                </button>
              </div>
            </div>
            <div className='flex-1'>
              <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/mxsohytv/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
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
              <ul className={`step step-primary step-sm ${randomNum5 === 0 ? `is-inactive` : ''}`}>
                <li className={`${randomNum5 === 1 ? `is-active` : ''}`}>
                  <a href='#'>
                    <i>1</i>
                    <div></div>
                    <span></span>
                  </a>
                </li>
                <li className={`${randomNum5 === 2 ? `is-active` : ''}`}>
                  <a href='#'>
                    <i>2</i>
                    <div></div>
                    <span></span>
                  </a>
                </li>
                <li className={`${randomNum5 === 3 ? `is-active` : ''}`}>
                  <a href='#'>
                    <i>3</i>
                    <div></div>
                    <span></span>
                  </a>
                </li>
              </ul>
              <div className='text-center'>
                <button className='button button-tertiary mx-auto' onClick={clickHandlerNum5.bind(this, randomNum5, 3)}>
                  <span>Next step</span>
                </button>
              </div>
            </div>
            <div className='flex-1'>
              <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/zdsrkw9g/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>


    {/* Variants */}
    <div className='mb-12' id='variants'>

      <h2 className='h3 mb-3'>
        Variants
      </h2>

      <div className="surface rounded-lg p-4">
        <div className='mb-4'>
          <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
            <div className='flex-1 space-y-4'>
              <div className="text-ui-400 text-sm leading-tight">
                Primary
              </div>
              <ul className={`step step-primary ${randomNum1 === 0 ? `is-inactive` : ''}`}>
                <li className={`${randomNum1 === 1 ? `is-active` : ''}`}>
                  <a href='#'>
                    <i>1</i>
                    <div></div>
                    <span></span>
                  </a>
                </li>
                <li className={`${randomNum1 === 2 ? `is-active` : ''}`}>
                  <a href='#'>
                    <i>2</i>
                    <div></div>
                    <span></span>
                  </a>
                </li>
                <li className={`${randomNum1 === 3 ? `is-active` : ''}`}>
                  <a href='#'>
                    <i>3</i>
                    <div></div>
                    <span></span>
                  </a>
                </li>
              </ul>
              <div className='text-center'>
                <button className='button button-tertiary mx-auto' onClick={clickHandlerNum1.bind(this, randomNum1, 3)}>
                  <span>Next step</span>
                </button>
              </div>
            </div>
            <div className='flex-1'>
              <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/dfawponx/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
            </div>
          </div>
        </div>
        <div className='mb-4'>
          <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
            <div className='flex-1 space-y-4'>
              <div className="text-ui-400 text-sm leading-tight">
                Secondary
              </div>
              <ul className={`step step-secondary ${randomNum2 === 0 ? `is-inactive` : ''}`}>
                <li className={`${randomNum2 === 1 ? `is-active` : ''}`}>
                  <a href='#'>
                    <i>1</i>
                    <div>Step 1</div>
                    <span></span>
                  </a>
                </li>
                <li className={`${randomNum2 === 2 ? `is-active` : ''}`}>
                  <a href='#'>
                    <i>2</i>
                    <div>Step 2</div>
                    <span></span>
                  </a>
                </li>
                <li className={`${randomNum2 === 3 ? `is-active` : ''}`}>
                  <a href='#'>
                    <i>3</i>
                    <div>Step 3</div>
                    <span></span>
                  </a>
                </li>
              </ul>

              <div className='text-center'>
                <button className='button button-tertiary mx-auto' onClick={clickHandlerNum2.bind(this, randomNum2, 3)}>
                  <span>Next step</span>
                </button>
              </div>
            </div>
            <div className='flex-1'>
              <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/nx6jp318/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
            </div>
          </div>
        </div>
        <div className='mb-4'>
          <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
            <div className='flex-1 space-y-4'>
              <div className="text-ui-400 text-sm leading-tight">
                Tertiary
              </div>
              <ul className={`step step-tertiary ${randomNum3 === 0 ? `is-inactive` : ''}`}>
                <li className={`${randomNum3 === 1 ? `is-active` : ''}`}>
                  <a href='#'>
                    <i>1</i>
                    <div>Step 1</div>
                    <span></span>
                  </a>
                </li>
                <li className={`${randomNum3 === 2 ? `is-active` : ''}`}>
                  <a href='#'>
                    <i>2</i>
                    <div>Step 2</div>
                    <span></span>
                  </a>
                </li>
                <li className={`${randomNum3 === 3 ? `is-active` : ''}`}>
                  <a href='#'>
                    <i>3</i>
                    <div>Step 3</div>
                    <span></span>
                  </a>
                </li>
              </ul>

              <div className='text-center'>
                <button className='button button-tertiary mx-auto' onClick={clickHandlerNum3.bind(this, randomNum3, 3)}>
                  <span>Next step</span>
                </button>
              </div>
            </div>
            <div className='flex-1'>
              <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/gu8kzyp9/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
            </div>
          </div>
        </div>
        <div className='mb-0'>
          <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
            <div className='flex-1 space-y-4'>
              <div className="text-ui-400 text-sm leading-tight">
                Quaternary
              </div>
              <ul className={`step step-quaternary ${randomNum4 === 0 ? `is-inactive` : ''}`}>
                <li className={`${randomNum4 === 1 ? `is-active` : ''}`}>
                  <a href='#'>
                    <i>1</i>
                    <div>Step 1</div>
                    <span></span>
                  </a>
                </li>
                <li className={`${randomNum4 === 2 ? `is-active` : ''}`}>
                  <a href='#'>
                    <i>2</i>
                    <div>Step 2</div>
                    <span></span>
                  </a>
                </li>
                <li className={`${randomNum4 === 3 ? `is-active` : ''}`}>
                  <a href='#'>
                    <i>3</i>
                    <div>Step 3</div>
                    <span></span>
                  </a>
                </li>
              </ul>

              <div className='text-center'>
                <button className='button button-tertiary mx-auto' onClick={clickHandlerNum4.bind(this, randomNum4, 3)}>
                  <span>Next step</span>
                </button>
              </div>
            </div>
            <div className='flex-1'>
              <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/jx16my3c/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
            </div>
          </div>
        </div>

      </div>
    </div>


    {/* Label position */}
    <div className='mb-12' id='label-position'>

      <h2 className='h3 mb-3'>
        Label position
      </h2>

      <div className="surface rounded-lg p-4">
        <div className='mb-0'>
          <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
            <div className='flex-1 space-y-4'>
              <div className="text-ui-400 text-sm leading-tight">
                Bottom
              </div>
              <ul className='step step-label-bottom step-primary'>
                <li className='is-active'>
                  <a href='#'>
                    <i>1</i>
                    <div className='text-sm'>First you need to subscribe to G-Loot.</div>
                    <span></span>
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <i>2</i>
                    <div className='text-sm'>Then you have to win a ticket by playing missions and competing in Brawls.</div>
                    <span></span>
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <i>3</i>
                    <div className='text-sm'>Now you can join the tournament Make sure to check out how to play.</div>
                    <span></span>
                  </a>
                </li>
              </ul>
              
            </div>
            <div className='flex-1'>
              <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/7yh184bq/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
            </div>
          </div>
        </div>
        
      </div>
    </div>


    {/* Vertical */}
    <div className='mb-12' id='vertical'>

      <h2 className='h3 mb-3'>
        Vertical
      </h2>

      <div className="surface rounded-lg p-4">
        <div className='mb-0'>
          <div className='flex gap-4 flex-col lg:flex-row lg:items-start'>
            <div className='flex-1 space-y-4'>
              
              <ul className='step step-label-bottom step-primary step-vertical'>
                <li className='is-active'>
                  <a href='#'>
                    <i>1</i>
                    <div>First you need to subscribe to G-Loot.</div>
                    <span></span>
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <i>2</i>
                    <div>Then you have to win a ticket by playing missions and competing in Brawls.</div>
                    <span></span>
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <i>3</i>
                    <div>Now you can join the tournament Make sure to check out how to play.</div>
                    <span></span>
                  </a>
                </li>
              </ul>

              <ul className='step step-label-bottom step-secondary step-vertical'>
                <li className='is-active'>
                  <a href='#'>
                    <i>1</i>
                    <div>First you need to subscribe to G-Loot.</div>
                    <span></span>
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <i>2</i>
                    <div>Then you have to win a ticket by playing missions and competing in Brawls.</div>
                    <span></span>
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <i>3</i>
                    <div>Now you can join the tournament Make sure to check out how to play.</div>
                    <span></span>
                  </a>
                </li>
              </ul>

              <ul className='step step-label-bottom step-tertiary step-vertical'>
                <li className='is-active'>
                  <a href='#'>
                    <i>1</i>
                    <div>First you need to subscribe to G-Loot.</div>
                    <span></span>
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <i>2</i>
                    <div>Then you have to win a ticket by playing missions and competing in Brawls.</div>
                    <span></span>
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <i>3</i>
                    <div>Now you can join the tournament Make sure to check out how to play.</div>
                    <span></span>
                  </a>
                </li>
              </ul>

              <ul className='step step-label-bottom step-quaternary step-vertical'>
                <li className='is-active'>
                  <a href='#'>
                    <i>1</i>
                    <div>First you need to subscribe to G-Loot.</div>
                    <span></span>
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <i>2</i>
                    <div>Then you have to win a ticket by playing missions and competing in Brawls.</div>
                    <span></span>
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <i>3</i>
                    <div>Now you can join the tournament Make sure to check out how to play.</div>
                    <span></span>
                  </a>
                </li>
              </ul>
              
            </div>
            <div className='flex-1'>
              <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/o1L927gr/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
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