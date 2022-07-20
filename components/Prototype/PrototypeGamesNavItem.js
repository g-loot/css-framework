import React, { useEffect, useRef, useState } from 'react';

export default function PrototypeGamesNavItem(props) {
  const [isActive, setActive] = useState(props.isopen);
  const [isDisabled, setIsDisabled] = useState(props.isdisabled);
  const isSelected = props.isselected !== undefined ? props.isselected : false
  const elementRef = useRef(null);

  var height = elementRef.current?.clientHeight;

  useEffect(() => {
    setActive(props.isopen)
    setIsDisabled(props.isdisabled)
  }, [props.isopen, props.isdisabled])

  const handleToggle = e => {
    e.preventDefault()
    setActive(!isActive);
  };
  
  return (
  <div className={`accordion-item ${isActive ? 'is-active' : ''} ${isSelected ? 'is-selected' : ''}`}>
    <div className='accordion-header' aria-expanded={`${isActive ? true : false}`} aria-controls onClick={handleToggle}>
      {props.isopen} {props.header}
    </div>
    <div className={`accordion-collapse`} style={{height: `${isActive ? height : 0}px`}}>
      <div ref={elementRef}>
        {props.children}
      </div>
    </div>
  </div>
  );
}