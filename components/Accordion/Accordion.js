import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'

export default function Accordion(props) {
  const isOpen = props.isopen !== undefined ? props.isopen : false;
  const isSelected = props.isselected !== undefined ? props.isselected : false;
  const isClosed = props.isclosed !== undefined ? props.isclosed : false;
  const isDisabled = props.isdisabled !== undefined ? props.isdisabled : false;
  const [isActive, setActive] = useState(isOpen);
  const [heightValue, setHeightValue]=useState(0);
  const elementRef = useRef(null);
  
  
  useEffect(()=> {
    if(isClosed) {
      height = 0;
      setActive(false);
    }
  }, [isClosed]);

  useEffect(() => {
    setHeightValue(elementRef.current.clientHeight);
    if(elementRef.current) {
      setHeightValue(elementRef.current.clientHeight);
    }
  }, [elementRef]);

  useLayoutEffect(() => {
    function updateSize() {
      setHeightValue(elementRef.current.clientHeight);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, [elementRef]);

  const handleToggle = (e) => {
    e.preventDefault()
    setActive(!isActive)
  };

  return (
    <div className={`accordion-item ${isActive ? 'is-active' : ''} ${isSelected ? 'is-selected' : ''} ${isDisabled ? 'is-disabled pointer-events-none opacity-50' : ''}`}>
      <div className={`accordion-header`} onClick={handleToggle}>
        {props.header} 
      </div>
      <div className={`accordion-collapse ${isClosed ? 'h-0' : ''}`} style={{ height: `${isActive ? heightValue : 0}px` }}>
        <div ref={elementRef}>{props.children}</div>
      </div>
    </div>
  )
}
