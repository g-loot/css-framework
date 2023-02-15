import React, {
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { useRouter } from "next/router";
import { usePrototypeData } from "../../contexts/prototype";

export default function Avatar(props) {
  const prototype = usePrototypeData();
  const { query } = useRouter();
  const userId = props.id || 1;
  const size = props.size || 'avatar-xs';
  const className = props.className || '';
  const [avatarFrame, setAvatarFrame] = useState(false);
  const hasAvatarFrame = query.avatarframe || false;

  useEffect(() => {
    if (hasAvatarFrame) {
      setAvatarFrame(prototype.getShopitemByID(1, hasAvatarFrame));
    } else {
      setAvatarFrame(prototype.getShopitemByID(1, 1));
    }
  }, [hasAvatarFrame]);

  return (
    <>
      <div
        className={`avatar avatar-circle ${size}  ${
          prototype.getUserByID(userId)?.isPremium ? "avatar-premium" : ""
        } ${className}`}
      >
        <i>{prototype.getUserByID(userId).level}</i>
        {!prototype.getUserByID(userId).isYou && prototype.getUserByID(userId)?.avatarFrame && (
          <img src={prototype.getShopitemByID(1, prototype.getUserByID(userId).avatarFrame).image} alt="" />
        )}
        {prototype.getUserByID(userId).isYou && hasAvatarFrame && <img src={avatarFrame.image} alt="" />}
        
        <div>
          <img src={prototype.getUserByID(userId)?.avatar} />
        </div>
        {size === 'avatar-xs' && prototype.getUserByID(userId)?.isYou && !hasAvatarFrame && <i className="radar" />}
        {prototype.getUserByID(userId).isOnline && <i />}
      </div>
    </>
  );
}
