import React, { useRef, useState } from 'react';

export default function PrototypeGamesNavItem(props) {

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
      {props.header}
    </div>
    <div className={`accordion-collapse`} style={{height: `${isActive ? height : 0}px`}}>
      <div ref={elementRef}>
        {props.children}
      </div>
    </div>
  </div>
  );
}