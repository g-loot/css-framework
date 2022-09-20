import React, { useContext, useEffect, useRef, useState } from 'react';

import { PrototypeContext } from '../../contexts/prototype';
import { useRouter } from 'next/router';

export default function PrototypeGamesNavItem(props) {
  
  const [isActive, setActive] = useState(props.isopen);
  const [isDisabled, setIsDisabled] = useState(props.isdisabled);
  const isSelected = props.isselected !== undefined ? props.isselected : false
  const elementRef = useRef(null);
  const prototype = useContext(PrototypeContext)
  const router = useRouter();

  /* /prototype/${item.slug}/missions/${prototype.getURLparams()} */

  var height = elementRef.current?.clientHeight;

  useEffect(() => {
    setActive(props.isopen)
    setIsDisabled(props.isdisabled)
  }, [props.isopen, props.isdisabled])

  const handleToggle = e => {
    e.preventDefault();
    prototype.defineDefaultGameID(props.gameID);
    console.log(props.gameID);
    setActive(!isActive);
    router.push(`/prototype/${props.gameSlug}/missions/${prototype.getURLparams()}`);
  };
  
  return (
  <div className={`accordion-item ${isActive ? 'is-active' : ''} ${isSelected ? 'is-selected' : ''}`}>
    <div className='accordion-header' aria-expanded={`${isActive ? true : false}`} aria-controls onClick={handleToggle}>
      {props.header}
    </div>
    <div className={`accordion-collapse`} style={{height: `${isActive ? height : 0}px`}}>
      <div ref={elementRef} className={`${!props.border ? "border-none" : ""}`}>
        {props.children}
      </div>
    </div>
  </div>
  );
}