import React from 'react';
import { getLayout } from '../../components/DesignSystem/DSLayout';

const DSpage = () => {

  return(
  <>
    <h1 className='mb-2'>
      Badge
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
              <div className='w-full flex flex-wrap gap-8 items-center justify-center'>
                  <div data-badge=".">
                    Notifications
                  </div>
                  <div data-badge="8">
                    Notifications
                  </div>
                  <div data-badge="88">
                    Notifications
                  </div>
                  <div data-badge="888">
                    Notifications
                  </div>
              </div>
            </div>
            <div className='flex-1'>
              <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/useoh40x/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
            </div>
          </div>
        </div>

      </div>
    </div>

    {/* Badges everywhere */}
    <div className='mb-12' id='badges-everywhere'>

      <h2 className='h3 mb-3'>
        Badges everywhere
      </h2>

      <div className="surface rounded-lg p-4">
        <div className=''>
          <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
            <div className='flex-1 space-y-4'>
              <div className='w-full flex flex-wrap gap-8 items-center justify-center'>
                <button className='button button-secondary' data-badge="88">
                  <span>Notifications</span>
                </button>
                <figure className='avatar avatar-simple' data-badge="88">
                    <div>
                      <img src='https://res.cloudinary.com/gloot/image/upload/v1654063975/Marketing/2022_prototype/DummyContent/teams/teamlogo_CrocEsports.png' />
                    </div>
                </figure>
              </div>
            </div>
            <div className='flex-1'>
              <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/sqetj4yp/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
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
        <div className=''>
          <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
            <div className='flex-1 space-y-4'>
              <div className='w-full flex flex-wrap gap-8 items-center justify-center'>
                  <div data-badge="." className='after:bg-info-500'>
                    Notifications
                  </div>
                  <div data-badge="8" className='after:bg-error-500'>
                    Notifications
                  </div>
                  <div data-badge="88" className='after:bg-attention-500'>
                    Notifications
                  </div>
                  <div data-badge="888" className='after:bg-sucess-500'>
                    Notifications
                  </div>
              </div>
            </div>
            <div className='flex-1'>
              <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/kxd57qu8/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
            </div>
          </div>
        </div>

      </div>
    </div>

    {/* As single elements */}
    <div className='mb-12' id='as-single-elements'>

      <h2 className='h3 mb-3'>
      As single elements
      </h2>

      <div className="surface rounded-lg p-4">
        <div className=''>
          <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
            <div className='flex-1 space-y-4'>
              <div className='w-full flex flex-col gap-8 items-center justify-center'>
                  <i className="badge" />
                  <i className="badge bg-error-500" />
                  <i className="badge bg-attention-500" />
                  <i className="badge bg-blue-500" />
              </div>
            </div>
            <div className='flex-1'>
              <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/m25ce1o3/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
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