import React, { useEffect, useRef, useState } from 'react'

export default function Accordion(props) {
  const isOpen = props.isopen !== undefined ? props.isopen : false
  const isSelected = props.isselected !== undefined ? props.isselected : false
  const isClosed = props.isclosed !== undefined ? props.isclosed : false
  const isDisabled = props.isdisabled !== undefined ? props.isdisabled : false
  const [isActive, setActive] = useState(isOpen)
  const elementRef = useRef(null)

  var height = elementRef.current?.clientHeight

  
  useEffect(()=> {
    if(isClosed) {
      height = 0;
      setActive(false);
    }
  }, [isClosed])

  const handleToggle = (e) => {
    e.preventDefault()
    setActive(!isActive)
  }

  return (
    <div className={`accordion-item ${isActive ? 'is-active' : ''} ${isSelected ? 'is-selected' : ''} ${isDisabled ? 'is-disabled pointer-events-none opacity-50' : ''}`}>
      <div className={`accordion-header`} onClick={handleToggle}>
        {props.header} 
      </div>
      <div className={`accordion-collapse ${isClosed ? 'h-0' : ''}`} style={{ height: `${isActive ? height : 0}px` }}>
        <div ref={elementRef}>{props.children}</div>
      </div>
    </div>
  )
}
