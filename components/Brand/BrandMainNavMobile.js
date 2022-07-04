import React, { useRef, useState } from 'react';

import { useRouter } from 'next/router';

export default function BrandMainNavMobile(props) {
  const router = useRouter();
  const handleClick = e => {
    e.preventDefault()
    router.push(e.target.value)
  };
  return (
    <>
      <div className='container mx-auto block md:hidden px-2 sm:px-0 pb-2'>
        <div className="form-group form-select">
          <select onChange={e => handleClick(e)}>
            {props.data.sections.map((item, itemIndex) => (
              <>
                <option disabled key={itemIndex}>{item.label.toUpperCase()}</option>
                {item.pages.map((item, itemChildIndex) => (
                  <>
                    <option key={itemChildIndex} value={item.url} selected={router.pathname.includes(item.url) || router.pathname == ''} disabled={item.disabled == true ? 'is-disabled' : ''}>{item.label}</option>
                  </>
                ))}
              </>
            ))}
          </select>
        </div>
      </div>
    </>
  )
};