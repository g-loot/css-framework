import React from 'react';
import { getLayout } from '../../components/DesignSystem/DSLayout';

const DSpage = () => {

  return(
  <>
    <h1 className='mb-2'>
      Alert
    </h1>


    {/* Structure */}
    <div className='mb-12' id='structure'>

      <h2 className='h3 mb-3'>
        Structure
      </h2>

      <div className="surface rounded-lg p-4">
        <div className=''>
          <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
            <div className='flex-1 space-y-4 text-center'>
              <div className="alert">
                <div>
                  <span className='icon icon-24 icon-c-info'/>
                  <span>3 new tournaments available.</span>
                </div>
              </div>
            </div>
            <div className='flex-1'>
              <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/gm3p84ho/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* With close */}
    <div className='mb-12' id='with-close'>

      <h2 className='h3 mb-3'>
        With close
      </h2>

      <div className="surface rounded-lg p-4">
        <div className=''>
          <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
            <div className='flex-1 space-y-4 text-center'>
              <div className="alert">
                <div>
                  <span className='icon icon-24 icon-c-info'/>
                  <span>3 new tournaments available.</span>
                </div>
                <div className="flex-none">
                  <button type='button' className="button button-tertiary button-close">
                    <span className='icon icon-e-remove'/>
                  </button>
                </div>
              </div>
            </div>
            <div className='flex-1'>
              <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/xz76pau0/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* With buttons */}
    <div className='mb-12' id='with-buttons'>

      <h2 className='h3 mb-3'>
        With buttons
      </h2>

      <div className="surface rounded-lg p-4">
        <div className=''>
          <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
            <div className='flex-1 space-y-4 text-center'>
              <div className="alert">
                <div>
                  <span className='icon icon-24 icon-c-info'/>
                  <span>3 new tournaments available.</span>
                </div>
                <div className="flex-none">
                  <button type='button' className="button button-sm button-secondary"><span>Deny</span></button>
                  <button type='button' className="button button-sm button-primary"><span>Accept</span></button>
                </div>
              </div>
            
            </div>
            <div className='flex-1'>
              <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/2n3dxuz1/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Small */}
    <div className='mb-12' id='small'>

      <h2 className='h3 mb-3'>
        Small
      </h2>

      <div className="surface rounded-lg p-4">
        <div className=''>
          <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
            <div className='flex-1 space-y-4 text-center'>
              <div className="alert alert-sm">
                <div>
                  <span className='icon icon-24 icon-c-info'/>
                  <span>3 new tournaments available.</span>
                </div>
                <div className="flex-none">
                  <button type='button' className="button button-sm button-secondary"><span>Deny</span></button>
                  <button type='button' className="button button-sm button-primary"><span>Accept</span></button>
                </div>
              </div>
            </div>
            <div className='flex-1'>
              <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/Lyonwxdb/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Colors */}
    <div className='mb-12' id='colors'>

      <h2 className='h3 mb-3'>
        Colors
      </h2>

      <div className="surface rounded-lg p-4">
        <div className='border-b border-ui-700 pb-6 mb-6 lg:pb-12 lg:mb-12'>
          <h3 className='h4 mb-6 lg:mb-10'>
            Green
          </h3>
          <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
            <div className='flex-1 space-y-4 flex justify-center'>
              <div className="alert alert-green">
                <div>
                  <span className='icon icon-24 icon-f-check'/>
                  <span>Your token purchase has been confirmed.</span>
                </div>
              </div>
            </div>
            <div className='flex-1'>
              <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/0y9fbe3d/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
            </div>
          </div>
        </div>
        <div className='border-b border-ui-700 pb-6 mb-6 lg:pb-12 lg:mb-12'>
          <h3 className='h4 mb-6 lg:mb-10'>
            Blue
          </h3>
          <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
            <div className='flex-1 space-y-4 flex justify-center'>
              <div className="alert alert-blue">
                <div>
                  <span className='icon icon-24 icon-c-info'/>
                  <span>3 new tournaments available.</span>
                </div>
              </div>
            </div>
            <div className='flex-1'>
              <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/cfgd0u7j/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
            </div>
          </div>
        </div>
        <div className='border-b border-ui-700 pb-6 mb-6 lg:pb-12 lg:mb-12'>
          <h3 className='h4 mb-6 lg:mb-10'>
            Orange
          </h3>
          <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
            <div className='flex-1 space-y-4 flex justify-center'>
              <div className="alert alert-orange">
                <div>
                  <span className='icon icon-24 icon-warning-sign'/>
                  <span>Warning. Tournament enrolment invalid.</span>
                </div>
              </div>
            </div>
            <div className='flex-1'>
              <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/6fcoxy8w/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
            </div>
          </div>
        </div>
        <div className=''>
          <h3 className='h4 mb-6 lg:mb-10'>
            Red
          </h3>
          <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
            <div className='flex-1 space-y-4 flex justify-center'>
              <div className="alert alert-red">
                <div>
                  <span className='icon icon-24 icon-skull-2'/>
                  <span>Error! We were unable to retrieve your Brawl result.</span>
                </div>
              </div>
            </div>
            <div className='flex-1'>
              <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/bocn37zt/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
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