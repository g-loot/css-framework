import React, { useRef, useState } from 'react';

import { useRouter } from 'next/router';

export default function DSMainNavMobile(props) {
  const router = useRouter();
  const handleClick = e => {
    e.preventDefault()
    router.push(e.target.value)
  };
  return (
    <>
      <div className='sticky z-40 top-[50px] block md:hidden px-2 pb-2'>
        <div className="form-group form-select">
          <select onChange={e => handleClick(e)}>
            {props.data.sections.map((item, itemIndex) => (
              <>
                <option disabled key={itemIndex}>{item.label.toUpperCase()}</option>
                {item.pages.map((item, itemIndex) => (
                  <>
                    <option value={item.url} selected={router.pathname.includes(item.url) || router.pathname == ''} disabled={item.disabled == true ? 'is-disabled' : ''}>{item.label}</option>
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