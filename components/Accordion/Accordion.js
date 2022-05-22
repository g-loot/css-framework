import React, { useEffect, useRef, useState } from 'react';

export default function Button(props) {


  const [count, setCount] = useState(0);
  const [isActive, setActive] = useState(false);
  const elementRef = useRef(null);

  var height = elementRef.current?.clientHeight;

  const handleToggle = e => {
    e.preventDefault()
    setActive(!isActive);
  };
  
  return (
  <div className={`accordion-item ${isActive ? 'is-active' : ''}`}>
    <div className='accordion-header' aria-expanded={`${isActive ? true : false}`} aria-controls onClick={handleToggle}>
      <div className='flex-1'>
        {props.title}
      </div>
      <div>
        <span className='icon icon-24 icon-arrow-sm-down'></span>
      </div>
    </div>
    <div className={`accordion-collapse`} style={{height: `${isActive ? height : 0}px`}}>
      <div ref={elementRef}>
        {props.children}
      </div>
    </div>
  </div>
  );
}