import React from 'react';
import { getLayout } from '../../components/DesignSystem/DSLayout';

const DSpage = () => {

  return(
  <>
    <h1 className='mb-2'>
      Avatars
    </h1>


    {/* Shapes */}
    <div className='mb-12' id='shapes'>

      <h2 className='h3 mb-3'>
        Shapes
      </h2>

      <div className="surface rounded-lg p-4">
        <div className=''>
          <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
            <div className='flex-1 space-y-4'>
              <div className='w-full flex gap-4 items-center'>
                <div className='w-1/4 text-ui-400 text-right text-sm leading-tight'>
                </div>
                <div className='flex-1'>
                  <figure className="avatar">
                    <div>
                      <img src='https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_1.jpg' />
                    </div>
                  </figure>
                </div>
              </div>
            </div>
            <div className='flex-1'>
              <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/djL5vgrp/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
            </div>
          </div>
        </div>

        
      </div>
    </div>

    {/* Shapes */}
    <div className='mb-12' id='shapes'>

      <h2 className='h3 mb-3'>
        Shapes
      </h2>

      <div className="surface rounded-lg p-4">
        <div className=''>
          <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
            <div className='flex-1 space-y-4'>
              <div className='w-full flex gap-4 items-center'>
                <div className='w-1/4 text-ui-400 text-right text-sm leading-tight'>
                  Circle
                </div>
                <div className='flex-1'>
                  <figure className="avatar avatar-circle">
                    <div>
                      <img src='https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_2.jpg' />
                    </div>
                  </figure>
                </div>
              </div>
              <div className='w-full flex gap-4 items-center'>
                <div className='w-1/4 text-ui-400 text-right text-sm leading-tight'>
                  Squircle
                </div>
                <div className='flex-1'>
                  <figure className="avatar avatar-squircle">
                    <div>
                      <img src='https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_2.jpg' />
                    </div>
                  </figure>
                </div>
              </div>
              <div className='w-full flex gap-4 items-center'>
                <div className='w-1/4 text-ui-400 text-right text-sm leading-tight'>
                  Diamond
                </div>
                <div className='flex-1'>
                  <figure className="avatar avatar-diamond">
                    <div>
                      <img src='https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_2.jpg' />
                    </div>
                  </figure>
                </div>
              </div>
              <div className='w-full flex gap-4 items-center'>
                <div className='w-1/4 text-ui-400 text-right text-sm leading-tight'>
                  Hexagon
                </div>
                <div className='flex-1'>
                  <figure className="avatar avatar-hexagon">
                    <div>
                      <img src='https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_2.jpg' />
                    </div>
                  </figure>
                </div>
              </div>
            </div>
            <div className='flex-1'>
              <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/vf5scmdb/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
            </div>
          </div>
        </div>

        
      </div>
    </div>



    {/* Sizes */}
    <div className='mb-12' id='sizes'>

      <h2 className='h3 mb-3'>
        Sizes
      </h2>

      <div className="surface rounded-lg p-4">
        <div className=''>
          <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
            <div className='flex-1 space-y-4'>
              <div className='w-full flex gap-4 items-center'>
                <div className='w-1/4 text-ui-400 text-right text-sm leading-tight'>
                  Large <button className='chip chip-xs chip-secondary pointer-events-none uppercase'><span>default</span></button>
                </div>
                <div className='flex-1'>
                  <div className='flex gap-4 justify-start'>
                    <figure className="avatar">
                      <div>
                        <img src='https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_3.jpg' />
                      </div>
                    </figure>
                    <figure className="avatar avatar-squircle">
                      <div>
                        <img src='https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_3.jpg' />
                      </div>
                    </figure>
                  </div>
                </div>
              </div>
              <div className='w-full flex gap-4 items-center'>
                <div className='w-1/4 text-ui-400 text-right text-sm leading-tight'>
                  Medium
                </div>
                <div className='flex-1'>
                  <div className='flex gap-4 justify-start'>
                    <figure className="avatar avatar-md">
                      <div>
                        <img src='https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_3.jpg' />
                      </div>
                    </figure>
                    <figure className="avatar avatar-md avatar-squircle">
                      <div>
                        <img src='https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_3.jpg' />
                      </div>
                    </figure>
                  </div>
                </div>
              </div>
              <div className='w-full flex gap-4 items-center'>
                <div className='w-1/4 text-ui-400 text-right text-sm leading-tight'>
                  Small
                </div>
                <div className='flex-1'>
                  <div className='flex gap-4 justify-start'>
                    <figure className="avatar avatar-sm">
                      <div>
                        <img src='https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_3.jpg' />
                      </div>
                    </figure>
                    <figure className="avatar avatar-sm avatar-squircle">
                      <div>
                        <img src='https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_3.jpg' />
                      </div>
                    </figure>
                  </div>
                </div>
              </div>
              <div className='w-full flex gap-4 items-center'>
                <div className='w-1/4 text-ui-400 text-right text-sm leading-tight'>
                  Extra small
                </div>
                <div className='flex-1'>
                  <div className='flex gap-4 justify-start'>
                    <figure className="avatar avatar-xs">
                      <div>
                        <img src='https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_3.jpg' />
                      </div>
                    </figure>
                    <figure className="avatar avatar-xs avatar-squircle">
                      <div>
                        <img src='https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_3.jpg' />
                      </div>
                    </figure>
                  </div>
                </div>
              </div>
              <div className='w-full flex gap-4 items-center'>
                <div className='w-1/4 text-ui-400 text-right text-sm leading-tight'>
                  Tiny
                </div>
                <div className='flex-1'>
                  <div className='flex gap-4 justify-start'>
                    <figure className="avatar avatar-tiny">
                      <div>
                        <img src='https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_3.jpg' />
                      </div>
                    </figure>
                    <figure className="avatar avatar-tiny avatar-squircle">
                      <div>
                        <img src='https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_3.jpg' />
                      </div>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex-1'>
              <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/3o7ztqgw/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>





    {/* Rank */}
    <div className='mb-12' id='rank'>

      <h2 className='h3 mb-3'>
        Rank
      </h2>

      <div className="surface rounded-lg p-4">
        <div className=''>
          <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
            <div className='flex-1 space-y-4'>
              <div className='w-full flex gap-4 items-center'>
                <div className='w-1/4 text-ui-400 text-right text-sm leading-tight'>
                  Light <button className='chip chip-xs chip-secondary pointer-events-none uppercase'><span>default</span></button>
                </div>
                <div className='flex-1'>
                  <div className='flex gap-4 justify-start'>
                    <figure className="avatar">
                      <div>
                        <img src='https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_5.jpg' />
                      </div>
                    </figure>
                    <figure className="avatar avatar-squircle">
                      <div>
                        <img src='https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_5.jpg' />
                      </div>
                    </figure>
                  </div>
                </div>
              </div>
              <div className='w-full flex gap-4 items-center'>
                <div className='w-1/4 text-ui-400 text-right text-sm leading-tight'>
                  Gold
                </div>
                <div className='flex-1'>
                  <div className='flex gap-4 justify-start'>
                    <figure className="avatar avatar-gold">
                      <div>
                        <img src='https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_5.jpg' />
                      </div>
                    </figure>
                    <figure className="avatar avatar-gold avatar-squircle">
                      <div>
                        <img src='https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_5.jpg' />
                      </div>
                    </figure>
                  </div>
                </div>
              </div>
              <div className='w-full flex gap-4 items-center'>
                <div className='w-1/4 text-ui-400 text-right text-sm leading-tight'>
                  Silver
                </div>
                <div className='flex-1'>
                  <div className='flex gap-4 justify-start'>
                    <figure className="avatar avatar-silver">
                      <div>
                        <img src='https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_5.jpg' />
                      </div>
                    </figure>
                    <figure className="avatar avatar-silver avatar-squircle">
                      <div>
                        <img src='https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_5.jpg' />
                      </div>
                    </figure>
                  </div>
                </div>
              </div>
              <div className='w-full flex gap-4 items-center'>
                <div className='w-1/4 text-ui-400 text-right text-sm leading-tight'>
                  Bronze
                </div>
                <div className='flex-1'>
                  <div className='flex gap-4 justify-bronze'>
                    <figure className="avatar avatar-bronze">
                      <div>
                        <img src='https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_5.jpg' />
                      </div>
                    </figure>
                    <figure className="avatar avatar-bronze avatar-squircle">
                      <div>
                        <img src='https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_5.jpg' />
                      </div>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex-1'>
              <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/s7or0umz/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>



    {/* Status */}
    <div className='mb-12' id='status'>

      <h2 className='h3 mb-3'>
        Status
      </h2>

      <div className="surface rounded-lg p-4">
        <div className=''>
          <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
            <div className='flex-1 space-y-4'>
              <div className='w-full flex gap-4 items-center'>
                <div className='w-1/4 text-ui-400 text-right text-sm leading-tight'>
                  Online <button className='chip chip-xs chip-secondary pointer-events-none uppercase'><span>default</span></button>
                </div>
                <div className='flex-1'>
                  <div className='flex flex-wrap gap-4 justify-start items-center'>
                    <figure className="avatar avatar-circle">
                      <div>
                        <img src='https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_6.jpg' />
                      </div>
                      <i></i>
                    </figure>
                    <figure className="avatar avatar-circle avatar-sm">
                      <div>
                        <img src='https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_6.jpg' />
                      </div>
                      <i></i>
                    </figure>
                  </div>
                </div>
              </div>
              <div className='w-full flex gap-4 items-center'>
                <div className='w-1/4 text-ui-400 text-right text-sm leading-tight'>
                  Disabled
                </div>
                <div className='flex-1'>
                  <div className='flex flex-wrap gap-4 justify-start items-center'>
                    <figure className="avatar avatar-circle">
                      <div>
                        <img src='https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_6.jpg' />
                      </div>
                      <i className="disabled"></i>
                    </figure>
                    <figure className="avatar avatar-circle avatar-sm">
                      <div>
                        <img src='https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_6.jpg' />
                      </div>
                      <i className="disabled"></i>
                    </figure>
                  </div>
                </div>
              </div>
              <div className='w-full flex gap-4 items-center'>
                <div className='w-1/4 text-ui-400 text-right text-sm leading-tight'>
                  Error
                </div>
                <div className='flex-1'>
                  <div className='flex flex-wrap gap-4 justify-start items-center'>
                    <figure className="avatar avatar-circle">
                      <div>
                        <img src='https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_6.jpg' />
                      </div>
                      <i className="error"></i>
                    </figure>
                    <figure className="avatar avatar-circle avatar-sm">
                      <div>
                        <img src='https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_6.jpg' />
                      </div>
                      <i className="error"></i>
                    </figure>
                  </div>
                </div>
              </div>
              <div className='w-full flex gap-4 items-center'>
                <div className='w-1/4 text-ui-400 text-right text-sm leading-tight'>
                  Attention
                </div>
                <div className='flex-1'>
                  <div className='flex flex-wrap gap-4 justify-start items-center'>
                    <figure className="avatar avatar-circle">
                      <div>
                        <img src='https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_6.jpg' />
                      </div>
                      <i className="attention"></i>
                    </figure>
                    <figure className="avatar avatar-circle avatar-sm">
                      <div>
                        <img src='https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_6.jpg' />
                      </div>
                      <i className="attention"></i>
                    </figure>
                  </div>
                </div>
              </div>
              <div className='w-full flex gap-4 items-center'>
                <div className='w-1/4 text-ui-400 text-right text-sm leading-tight'>
                  Info
                </div>
                <div className='flex-1'>
                  <div className='flex flex-wrap gap-4 justify-start items-center'>
                    <figure className="avatar avatar-circle">
                      <div>
                        <img src='https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_6.jpg' />
                      </div>
                      <i className="info"></i>
                    </figure>
                    <figure className="avatar avatar-circle avatar-sm">
                      <div>
                        <img src='https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_6.jpg' />
                      </div>
                      <i className="info"></i>
                    </figure>
                  </div>
                </div>
              </div>
              <div className='w-full flex gap-4 items-center'>
                <div className='w-1/4 text-ui-400 text-right text-sm leading-tight'>
                  Radar
                </div>
                <div className='flex-1'>
                  <div className='flex flex-wrap gap-4 justify-start items-center'>
                    <figure className="avatar avatar-circle">
                      <div>
                        <img src='https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_6.jpg' />
                      </div>
                      <i className="radar"></i>
                    </figure>
                    <figure className="avatar avatar-circle avatar-sm">
                      <div>
                        <img src='https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_6.jpg' />
                      </div>
                      <i className="radar info"></i>
                    </figure>
                  </div>
                </div>
              </div>
              
              
              
            </div>
            <div className='flex-1'>
              <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/8jr1qg4x/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>




    {/* simple */}
    <div className='mb-12' id='simple'>

      <h2 className='h3 mb-3'>
        Simple
      </h2>

      <div className="surface rounded-lg p-4">
        <div className=''>
          <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
            <div className='flex-1 space-y-4'>
              <div className='w-full flex gap-4 items-center'>
                <div className='w-1/4 text-ui-400 text-right text-sm leading-tight'>
                  No border
                </div>
                <div className='flex-1'>
                  <div className='flex flex-wrap gap-4 justify-start items-center'>
                    <figure className="avatar avatar-simple">
                      <div>
                        <img src='https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_9.jpg' />
                      </div>
                    </figure>
                    <figure className="avatar avatar-diamond avatar-simple">
                      <div>
                        <img src='https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_9.jpg' />
                      </div>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex-1'>
              <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/mv2yx3r8/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>




    {/* With icon */}
    <div className='mb-12' id='with-icon'>

      <h2 className='h3 mb-3'>
        With icon
      </h2>

      <div className="surface rounded-lg p-4">
        <div className=''>
          <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
            <div className='flex-1 space-y-4'>
              <div className='w-full flex gap-4 items-center'>
                <div className='w-1/4 text-ui-400 text-right text-sm leading-tight'>
                  Works with any icon
                </div>
                <div className='flex-1'>
                  <div className='flex flex-wrap gap-4 justify-start items-center'>
                    <figure className="avatar avatar-squircle">
                      <div>
                        <span className='icon icon-multiple-11'></span>
                      </div>
                    </figure>
                    <figure className="avatar avatar-squircle avatar-md">
                      <div>
                        <span className='icon icon-multiple-11'></span>
                      </div>
                    </figure>
                    <figure className="avatar avatar-squircle avatar-sm">
                      <div>
                        <span className='icon icon-multiple-11'></span>
                      </div>
                    </figure>
                    <figure className="avatar avatar-squircle avatar-xs">
                      <div>
                        <span className='icon icon-multiple-11'></span>
                      </div>
                    </figure>
                    <figure className="avatar avatar-squircle avatar-tiny">
                      <div>
                        <span className='icon icon-multiple-11'></span>
                      </div>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex-1'>
              <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/L86wt5ok/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* With placeholder */}
    <div className='mb-12' id='with-placeholder'>

      <h2 className='h3 mb-3'>
        With placeholder
      </h2>

      <div className="surface rounded-lg p-4">
        <div className=''>
          <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
            <div className='flex-1 space-y-4'>
              <div className='w-full flex gap-4 items-center'>
                <div className='w-1/4 text-ui-400 text-right text-sm leading-tight'>
                  Works with any text
                </div>
                <div className='flex-1'>
                  <div className='flex flex-wrap gap-4 justify-start items-center'>
                    <figure className="avatar avatar-squircle">
                      <div>
                        <span>CG</span>
                      </div>
                    </figure>
                    <figure className="avatar avatar-squircle avatar-md">
                      <div>
                        <span>CG</span>
                      </div>
                    </figure>
                    <figure className="avatar avatar-squircle avatar-sm">
                      <div>
                        <span>CG</span>
                      </div>
                    </figure>
                    <figure className="avatar avatar-squircle avatar-xs">
                      <div>
                        <span>CG</span>
                      </div>
                    </figure>
                    <figure className="avatar avatar-squircle avatar-tiny">
                      <div>
                        <span>CG</span>
                      </div>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex-1'>
              <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/y1wjg3p6/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
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