import React, { useState } from 'react';

import DSHead from '../../components/DesignSystem/DSHead';
import DSStructure from '../../components/DesignSystem/DSStructure';
import DSTopBar from '../../components/DesignSystem/DSTopBar';
import DSdata from '../api/designsystem/data.json'

export default function Switch() {

  return (
    <div>
        <DSHead title='Switch' />
        
        <DSTopBar data={DSdata} />

        <DSStructure data={DSdata}>

          <h1 className='mb-2'>
            Switch
          </h1>


          {/* With text */}
          <div className='mb-12' id='with-text'>

            <h2 className='h3 mb-3'>
              With text
            </h2>

            <div className='surface rounded-lg p-4'>
              <div className=''>
                <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
                  <div className='flex-1 space-y-4 text-center'>
                    <label className='switch'>
                      <input type='checkbox' />
                      <div className='switch-on'>ON</div>
                      <div className='switch-off'>OFF</div>
                    </label>
                  </div>
                  <div className='flex-1'>
                    <iframe className='rounded' width='100%' height='200' src='//jsfiddle.net/augustin_hiebel/gn8a9um1/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094' ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* With icons */}
          <div className='mb-12' id='with-icons'>

            <h2 className='h3 mb-3'>
              With icons
            </h2>

            <div className='surface rounded-lg p-4'>
              <div className=''>
                <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
                  <div className='flex-1 space-y-4 text-center'>
                    <label className='switch'>
                      <input type='checkbox' />
                      <div className='switch-on icon icon-36 icon-eye'></div>
                      <div className='switch-off icon icon-36 icon-b-eye'></div>
                    </label>
                  </div>
                  <div className='flex-1'>
                    <iframe className='rounded' width='100%' height='200' src='//jsfiddle.net/augustin_hiebel/xkrvewz8/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094' ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* With rotation effect */}
          <div className='mb-12' id='with-rotation-effect'>

            <h2 className='h3 mb-3'>
              With rotation effect
            </h2>

            <div className='surface rounded-lg p-4'>
              <div className=''>
                <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
                  <div className='flex-1 space-y-4 text-center'>
                    <label className='switch switch-rotate'>
                      <input type='checkbox' />
                      <div className='switch-on icon icon-36 icon-heart'></div>
                      <div className='switch-off icon icon-36 icon-broken-heart'> </div>
                    </label>
                  </div>
                  <div className='flex-1'>
                    <iframe className='rounded' width='100%' height='200' src='//jsfiddle.net/augustin_hiebel/5m8ht0p1/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094' ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>


          {/* Hamburger button */}
          <div className='mb-12' id='hamburger-button'>

            <h2 className='h3 mb-3'>
              Hamburger button
            </h2>

            <div className='surface rounded-lg p-4'>
              <div className=''>
                <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
                  <div className='flex-1 space-y-4 text-center'>
                    <label className='switch switch-rotate button button-tertiary rounded-full'>
                      <input type='checkbox' />
                      <div className='switch-on icon icon-24 icon-dots-vertical'></div>
                      <div className='switch-off icon icon-24 icon-e-remove'></div>
                    </label>
                  </div>
                  <div className='flex-1'>
                    <iframe className='rounded' width='100%' height='200' src='//jsfiddle.net/augustin_hiebel/Ltwch3rn/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094' ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>

        


        </DSStructure>

        
    </div>
  );
}
