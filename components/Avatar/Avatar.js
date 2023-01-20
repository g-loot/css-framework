import React, {
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

import { usePrototypeData } from "../../contexts/prototype";

export default function Avatar(props) {
  const prototype = usePrototypeData();
  const userId = props.id || 1;
  const size = props.size || 'avatar-xs';

  return (
    <>
      <div
        className={`avatar avatar-circle ${size}  ${
          prototype.getUserByID(userId)?.isPremium ? "avatar-premium" : ""
        }`}
      >
      
        {prototype.getUserByID(userId)?.avatarFrame && (
          <img src={prototype.getShopitemByID(1, prototype.getUserByID(userId).avatarFrame).image} alt="" />
        )}
        
        <div>
          <img src={prototype.getUserByID(userId)?.avatar} />
        </div>
        {size === 'avatar-xs' && prototype.getUserByID(userId)?.isYou && <i className="radar" />}
        {prototype.getUserByID(userId).isOnline && <i />}
      </div>
    </>
  );
}
