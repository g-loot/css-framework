import React, { useState } from 'react';

import DSHead from '../../components/DesignSystem/DSHead';
import DSStructure from '../../components/DesignSystem/DSStructure';
import DSTopBar from '../../components/DesignSystem/DSTopBar';
import DSdata from '../api/designsystem/data.json'

export default function Alert() {

  return (
    <div>
        <DSHead title='Alert' />
        
        <DSTopBar data={DSdata} />

        <DSStructure data={DSdata}>

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
                        <span className='icon icon-24 icon-c-info'></span>
                        <span>3 new tournaments available.</span>
                      </div>
                    </div>
                  </div>
                  <div className='flex-1'>
                    <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/chnr8gbk/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
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
                        <span className='icon icon-24 icon-c-info'></span>
                        <span>3 new tournaments available.</span>
                      </div>
                      <div className="flex-none">
                        <button className="button button-sm button-secondary">Deny</button>
                        <button className="button button-sm button-primary">Accept</button>
                      </div>
                    </div>
                  
                  </div>
                  <div className='flex-1'>
                    <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/3c0gf9mx/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
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
                        <span className='icon icon-24 icon-f-check'></span>
                        <span>Your token purchase has been confirmed.</span>
                      </div>
                    </div>
                  </div>
                  <div className='flex-1'>
                    <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/592j71gs/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
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
                        <span className='icon icon-24 icon-c-info'></span>
                        <span>3 new tournaments available.</span>
                      </div>
                    </div>
                  </div>
                  <div className='flex-1'>
                    <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/592j71gs/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
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
                        <span className='icon icon-24 icon-warning-sign'></span>
                        <span>Warning. Tournament enrolment invalid.</span>
                      </div>
                    </div>
                  </div>
                  <div className='flex-1'>
                    <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/592j71gs/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
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
                        <span className='icon icon-24 icon-c-info'></span>
                        <span>Error! We were unable to retrieve your Brawl result.</span>
                      </div>
                    </div>
                  </div>
                  <div className='flex-1'>
                    <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/592j71gs/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
                  </div>
                </div>
              </div>
              
            
            </div>
          </div>

      

          
        </DSStructure>

        
    </div>
  );
}
