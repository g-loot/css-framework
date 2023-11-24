import React, {useState} from 'react';

import Footer from '../../components/Footer/Footer';
import { getLayout } from '../../components/DesignSystem/DSLayout';

const DSpage = () => {
 
  return(
  <>
    <h1 className='mb-2'>
      Ladder activation
    </h1>


    {/* Footer */}
    <div className='mb-12' id='footer'>

      <div className='pt-4'>
        <div className=''>
          
          <div className='flex gap-4 flex-col'>
            <div className='flex-1'>
              
            </div>
            <div className='flex-1'>
              <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/ut530jcq/embedded/html/dark/?bodyColor=212333&menuColor=1C1D2C&fontColor=FFFFFF&accentColor=F3C351" ></iframe>
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