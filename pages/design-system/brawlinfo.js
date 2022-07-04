import React, {useState} from 'react';

import Footer from '../../components/Footer/Footer';
import { getLayout } from '../../components/DesignSystem/DSLayout';

const DSpage = () => {
 
  return(
  <>
    <h1 className='mb-2'>
      Brawl info
    </h1>


    {/* Brawl info 1 */}
    <div className='mb-12' id='brawl-info-1'>

      <div className='pt-4'>
        <div className=''>
          
          <div className='flex gap-4 flex-col'>
            <ul className='flex-1 surface overflow-hidden rounded-lg flex flex-col lg:flex-row flex-wrap items-stretch'>
              <li className='flex-1 p-4 border-b lg:border-b-0 lg:border-r border-ui-700'>
                <div className='animate-slide-in-bottom animate-delay' style={{ '--delay': 'calc( 1 * 0.05s)'}}>
                  <h4 className='font-headings text-base uppercase text-ui-400 mb-1'>Objective</h4>
                  <p className='text-sm text-ui-200 leading-tight'>
                    Most kills wins
                  </p>
                </div>
              </li>
              <li className='flex-1 p-4 border-b lg:border-b-0 lg:border-r border-ui-700'>
                <div className='animate-slide-in-bottom animate-delay' style={{ '--delay': 'calc( 2 * 0.05s)'}}>
                  <h4 className='font-headings text-base uppercase text-ui-400 mb-1'>Tiebreaker</h4>
                  <p className='text-sm text-ui-200 leading-tight'>
                    Headshots from your 3 best rounds decides a tie
                  </p>
                </div>
              </li>
              <li className='flex-1 p-4 border-b lg:border-b-0 lg:border-r border-ui-700'>
                <div className='animate-slide-in-bottom animate-delay' style={{ '--delay': 'calc( 3 * 0.05s)'}}>
                  <h4 className='font-headings text-base uppercase text-ui-400 mb-1'>Game modes</h4>
                  <p className='text-sm text-ui-200 leading-tight'>
                    Competitive
                  </p>
                </div>
              </li>
              <li className='flex-1 p-4 border-b lg:border-b-0 lg:border-r border-ui-700'>
                <div className='animate-slide-in-bottom animate-delay' style={{ '--delay': 'calc( 4 * 0.05s)'}}>
                  <h4 className='font-headings text-base uppercase text-ui-400 mb-1'>Brawl points</h4>
                  <p className='text-sm text-ui-200 leading-tight'>
                    Best 3 matches
                  </p>
                </div>
              </li>
              <li className='flex-1 p-4'>
                <div className='animate-slide-in-bottom animate-delay' style={{ '--delay': 'calc( 5 * 0.05s)'}}>
                  <h4 className='font-headings text-base uppercase text-ui-400 mb-1'>Brawl ID</h4>
                  <button type='button' className='button button-sm button-secondary'>
                    <span>Copy</span>
                    <span className='icon icon-document-copy'></span>
                  </button>
                </div>
              </li>
            </ul>
            <div className='flex-1'>
              <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/ut530jcq/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
            </div>
          </div>
        </div>

        
        
      </div>

      

      
    </div>

    {/* Brawl info 1 */}
    <div className='mb-12' id='brawl-info-1'>

      <div className='pt-4'>
        <div className=''>
          
          <div className='flex gap-4 flex-col'>
            <ul className='flex-1 surface overflow-hidden rounded-lg flex flex-col lg:flex-row flex-wrap items-stretch gap-2 p-2'>
              <li className='flex-1 p-3 rounded bg-gradient-to-b from-ui-900 to-ui-800 animate-slide-in-bottom animate-delay' style={{ '--delay': 'calc( 1 * 0.05s)'}}>
                <h4 className='font-headings text-base uppercase text-ui-400 mb-1'>Objective</h4>
                <p className='text-sm text-ui-200 leading-tight'>
                  Most kills wins
                </p>
              </li>
              <li className='flex-1 p-3 rounded bg-gradient-to-b from-ui-900 to-ui-800 animate-slide-in-bottom animate-delay' style={{ '--delay': 'calc( 2 * 0.05s)'}}>
                <h4 className='font-headings text-base uppercase text-ui-400 mb-1'>Tiebreaker</h4>
                <p className='text-sm text-ui-200 leading-tight'>
                  Headshots from your 3 best rounds decides a tie
                </p>
              </li>
              <li className='flex-1 p-3 rounded bg-gradient-to-b from-ui-900 to-ui-800 animate-slide-in-bottom animate-delay' style={{ '--delay': 'calc( 3 * 0.05s)'}}>
                <h4 className='font-headings text-base uppercase text-ui-400 mb-1'>Game modes</h4>
                <p className='text-sm text-ui-200 leading-tight'>
                  Competitive
                </p>
              </li>
              <li className='flex-1 p-3 rounded bg-gradient-to-b from-ui-900 to-ui-800 animate-slide-in-bottom animate-delay' style={{ '--delay': 'calc( 4 * 0.05s)'}}>
                <h4 className='font-headings text-base uppercase text-ui-400 mb-1'>Brawl points</h4>
                <p className='text-sm text-ui-200 leading-tight'>
                  Best 3 matches
                </p>
              </li>
              <li className='flex-1 p-3 rounded bg-gradient-to-b from-ui-900 to-ui-800 animate-slide-in-bottom animate-delay' style={{ '--delay': 'calc( 5 * 0.05s)'}}>
                <h4 className='font-headings text-base uppercase text-ui-400 mb-1'>Brawl ID</h4>
                <button type='button' className='button button-sm button-secondary'>
                  <span>Copy</span>
                  <span className='icon icon-document-copy'></span>
                </button>
              </li>
            </ul>
            <div className='flex-1'>
              <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/85x0q7ky/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
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