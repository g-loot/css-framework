import React, { useRef, useState } from 'react';

import DSMainNav from '../../components/DesignSystem/DSMainNav';
import { useRouter } from 'next/router';

export default function DSStructure({children, data}) {
  const router = useRouter();
  
  return (
    <>
      <div className='xl:px-4 3xl:px-0'>
        <div className="container flex mx-auto gap-4 lg:gap-6 xl:gap-12">
          <div className="hidden md:block sticky w-auto md:w-3/12 xl:w-2/12 py-4 pb-4">
            <DSMainNav data={data} />
          </div>
          <div className="pt-4 pb-8 w-full md:w-9/12 xl:w-10/12">
            
            <div className='px-2 md:px-0'>
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  )
};