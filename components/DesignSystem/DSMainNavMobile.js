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
      <div className='block md:hidden px-4 border-b border-ui-800 pb-4 mb-4'>
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