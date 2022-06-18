import React, { useState } from 'react';

import { getLayout } from '../../components/DesignSystem/DSLayout';

const DSpage = () => {

  const [StartAnim1, setStartAnim1] = useState(false);
  const [StartAnim2, setStartAnim2] = useState(false);
  const [StartAnim3, setStartAnim3] = useState(false);
  const [StartAnim4, setStartAnim4] = useState(false);
  const [StartAnim5, setStartAnim5] = useState(false);
  const [StartAnim6, setStartAnim6] = useState(false);
  const [StartAnim7, setStartAnim7] = useState(false);
  const [StartAnim8, setStartAnim8] = useState(false);
  const [StartAnim9, setStartAnim9] = useState(false);
  const [StartAnim10, setStartAnim10] = useState(false);

  function handleStartAnim1() {
    setStartAnim1(true);
    const timer = setTimeout(() => {
      setStartAnim1(false)
    }, 1000);
    return () => clearTimeout(timer);
  }
  function handleStartAnim2() {
    setStartAnim2(true);
    const timer = setTimeout(() => {
      setStartAnim2(false)
    }, 1000);
    return () => clearTimeout(timer);
  }
  function handleStartAnim3() {
    setStartAnim3(true);
    const timer = setTimeout(() => {
      setStartAnim3(false)
    }, 1000);
    return () => clearTimeout(timer);
  }
  function handleStartAnim4() {
    setStartAnim4(true);
    const timer = setTimeout(() => {
      setStartAnim4(false)
    }, 1000);
    return () => clearTimeout(timer);
  }
  function handleStartAnim5() {
    setStartAnim5(true);
    const timer = setTimeout(() => {
      setStartAnim5(false)
    }, 1000);
    return () => clearTimeout(timer);
  }
  function handleStartAnim6() {
    setStartAnim6(true);
    const timer = setTimeout(() => {
      setStartAnim6(false)
    }, 1000);
    return () => clearTimeout(timer);
  }
  function handleStartAnim7() {
    setStartAnim7(true);
    const timer = setTimeout(() => {
      setStartAnim7(false)
    }, 1000);
    return () => clearTimeout(timer);
  }
  function handleStartAnim8() {
    setStartAnim8(true);
    const timer = setTimeout(() => {
      setStartAnim8(false)
    }, 1000);
    return () => clearTimeout(timer);
  }
  function handleStartAnim9() {
    setStartAnim9(true);
    const timer = setTimeout(() => {
      setStartAnim9(false)
    }, 1000);
    return () => clearTimeout(timer);
  }

  return(
  <>
    <h1 className='mb-2'>
      Animation
    </h1>


    {/* Heartbeat */}
    <div className='mb-12' id='heartbeat'>

      <h2 className='h3 mb-3'>
        Heartbeat
      </h2>

      <div className="surface rounded-lg p-4">
        <div className=''>
          <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
            <div className='flex-1 space-y-4 text-center'>
              <div className={`w-24 h-24 rounded-full bg-ui-400 mx-auto animate-heartbeat animate-infinite`}>
              </div>
            </div>
            <div className='flex-1'>
              <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/geh5maLc/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Bounce */}
    <div className='mb-12' id='bounce'>

      <h2 className='h3 mb-3'>
        Bounce
      </h2>

      <div className="surface rounded-lg p-4">
        <div className=''>
          <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
            <div className='flex-1 space-y-4 text-center'>
              <div className={`w-24 h-24 rounded-full bg-ui-400 mx-auto animate-bounce animate-infinite`}>
              </div>
            </div>
            <div className='flex-1'>
              <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/jqpguk8w/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Pulse */}
    <div className='mb-12' id='pulse'>

      <h2 className='h3 mb-3'>
        Pulse
      </h2>

      <div className="surface rounded-lg p-4">
        <div className=''>
          <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
            <div className='flex-1 space-y-4 text-center'>
              <div className={`w-24 h-24 rounded-full bg-ui-400 mx-auto animate-pulse animate-infinite`}>
              </div>
            </div>
            <div className='flex-1'>
              <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/fnvdj6cz/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Slide in bottom */}
    <div className='mb-12' id='slide-in-bottom'>

      <h2 className='h3 mb-3'>
        Slide in bottom
      </h2>

      <div className="surface rounded-lg p-4">
        <div className=''>
          <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
            <div className='flex-1 space-y-4 text-center'>
              <div className={`w-24 h-24 rounded-full bg-ui-400 mx-auto ${StartAnim1 === true ? 'animate-slide-in-bottom' : ''}`}>
              </div>
              <div className='text-center mt-5'>
                <button className='button button-tertiary mx-auto' onClick={handleStartAnim1.bind(this)}>
                  <span>Play animation</span>
                </button>
              </div>
            </div>
            <div className='flex-1'>
              <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/3a19ohqs/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Slide in top */}
    <div className='mb-12' id='slide-in-top'>

      <h2 className='h3 mb-3'>
        Slide in top
      </h2>

      <div className="surface rounded-lg p-4">
        <div className=''>
          <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
            <div className='flex-1 space-y-4 text-center'>
              <div className={`w-24 h-24 rounded-full bg-ui-400 mx-auto ${StartAnim2 === true ? 'animate-slide-in-top' : ''}`}>
              </div>
              <div className='text-center mt-5'>
                <button className='button button-tertiary mx-auto' onClick={handleStartAnim2.bind(this)}>
                  <span>Play animation</span>
                </button>
              </div>
            </div>
            <div className='flex-1'>
              <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/j637d5hp/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Slide in right */}
    <div className='mb-12' id='slide-in-right'>

      <h2 className='h3 mb-3'>
        Slide in right
      </h2>

      <div className="surface rounded-lg p-4">
        <div className=''>
          <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
            <div className='flex-1 space-y-4 text-center'>
              <div className={`w-24 h-24 rounded-full bg-ui-400 mx-auto ${StartAnim3 === true ? 'animate-slide-in-right' : ''}`}>
              </div>
              <div className='text-center mt-5'>
                <button className='button button-tertiary mx-auto' onClick={handleStartAnim3.bind(this)}>
                  <span>Play animation</span>
                </button>
              </div>
            </div>
            <div className='flex-1'>
              <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/zat6459o/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Slide in left */}
    <div className='mb-12' id='slide-in-left'>

      <h2 className='h3 mb-3'>
        Slide in left
      </h2>

      <div className="surface rounded-lg p-4">
        <div className=''>
          <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
            <div className='flex-1 space-y-4 text-center'>
              <div className={`w-24 h-24 rounded-full bg-ui-400 mx-auto ${StartAnim4 === true ? 'animate-slide-in-left' : ''}`}>
              </div>
              <div className='text-center mt-5'>
                <button className='button button-tertiary mx-auto' onClick={handleStartAnim4.bind(this)}>
                  <span>Play animation</span>
                </button>
              </div>
            </div>
            <div className='flex-1'>
              <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/kum1we7y/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Fade in */}
    <div className='mb-12' id='fade-in'>

      <h2 className='h3 mb-3'>
        Fade in
      </h2>

      <div className="surface rounded-lg p-4">
        <div className=''>
          <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
            <div className='flex-1 space-y-4 text-center'>
              <div className={`w-24 h-24 rounded-full bg-ui-400 mx-auto ${StartAnim5 === true ? 'animate-fade-in' : ''}`}>
              </div>
              <div className='text-center mt-5'>
                <button className='button button-tertiary mx-auto' onClick={handleStartAnim5.bind(this)}>
                  <span>Play animation</span>
                </button>
              </div>
            </div>
            <div className='flex-1'>
              <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/5rnbkscm/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Bounce in */}
    <div className='mb-12' id='bounce-in'>

      <h2 className='h3 mb-3'>
        Bounce in
      </h2>

      <div className="surface rounded-lg p-4">
        <div className=''>
          <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
            <div className='flex-1 space-y-4 text-center'>
              <div className={`w-24 h-24 rounded-full bg-ui-400 mx-auto ${StartAnim6 === true ? 'animate-bounce-in' : ''}`}>
              </div>
              <div className='text-center mt-5'>
                <button className='button button-tertiary mx-auto' onClick={handleStartAnim6.bind(this)}>
                  <span>Play animation</span>
                </button>
              </div>
            </div>
            <div className='flex-1'>
              <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/8wty5xqg/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* With delay */}
    <div className='mb-12' id='with-delay'>

      <h2 className='h3 mb-3'>
        With delay
      </h2>

      <div className="surface rounded-lg p-4">
        <div className=''>
          <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
            <div className='flex-1 space-y-4 text-center'>
            <ul className='items-spaced space-y-2'>
                <li className={`w-full h-16 bg-ui-400 rounded-lg  animate-delay ${StartAnim7 === true ? 'animate-slide-in-bottom' : ''}`} style={{ '--delay': 'calc( 1 * 0.05s)'}}>
                  
                </li>
                <li className={`w-full h-16 bg-ui-400 rounded-lg  animate-delay ${StartAnim7 === true ? 'animate-slide-in-bottom' : ''}`} style={{ '--delay': 'calc( 2 * 0.05s)'}}>
                  
                </li>
                <li className={`w-full h-16 bg-ui-400 rounded-lg  animate-delay ${StartAnim7 === true ? 'animate-slide-in-bottom' : ''}`} style={{ '--delay': 'calc( 3 * 0.05s)'}}>
                  
                </li>
                <li className={`w-full h-16 bg-ui-400 rounded-lg  animate-delay ${StartAnim7 === true ? 'animate-slide-in-bottom' : ''}`} style={{ '--delay': 'calc( 4 * 0.05s)'}}>
                  
                </li>
                <li className={`w-full h-16 bg-ui-400 rounded-lg  animate-delay ${StartAnim7 === true ? 'animate-slide-in-bottom' : ''}`} style={{ '--delay': 'calc( 5 * 0.05s)'}}>
                  
                </li>
              </ul>
              <div className='text-center mt-5'>
                <button className='button button-tertiary mx-auto' onClick={handleStartAnim7.bind(this)}>
                  <span>Play animation</span>
                </button>
              </div>
            </div>
            <div className='flex-1'>
              <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/3cLmazgt/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
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