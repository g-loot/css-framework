import Link from "next/link";
import { useRouter } from "next/router";
import { usePrototypeData } from "../../contexts/prototype";
import Tooltip from "../Tooltip/Tooltip";

function numberWithSpaces(x) {
  var parts = x.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  return parts.join(".");
}
export default function Reward(props) {
  const xFactor = props.xFactor || 1;
  const prototype = usePrototypeData();

  return (
    <>
      {props.reward.type === "coin" && (
        <div
          className={`flex items-center whitespace-nowrap ${
            props.gap ? props.gap : "gap-1"
          }`}
        >
          <span
            className={`icon icon-coin text-currency-1-500 ${props.iconClassNames}`}
          />
          <span className={`text-currency-1-500 ${props.textClassNames}`}>
            {numberWithSpaces(Math.round(props.reward.value * xFactor))}
          </span>
        </div>
      )}
      {props.reward.type === "token" && (
        <div
          className={`flex items-center whitespace-nowrap ${
            props.gap ? props.gap : "gap-1"
          }`}
        >
          <span
            className={`icon icon-token text-currency-2-500 ${props.iconClassNames}`}
          />
          <span className={`text-currency-2-500 ${props.textClassNames}`}>
            {numberWithSpaces(Math.round(props.reward.value * xFactor))}
          </span>
        </div>
      )}
      {props.reward.type === "powertoken" && (
        <div
          className={`flex items-center whitespace-nowrap ${
            props.gap ? props.gap : "gap-1"
          }`}
        >
          <span
            className={`icon icon-powertoken text-currency-3-500 ${props.iconClassNames}`}
          />
          <span className={`text-currency-3-500 ${props.textClassNames}`}>
            {numberWithSpaces(Math.round(props.reward.value * xFactor))}
          </span>
        </div>
      )}
      {props.reward.type === "ticket" && (
        <div
          className={`flex items-center whitespace-nowrap ${
            props.gap ? props.gap : "gap-1"
          }`}
        >
          <span className={`icon icon-ticket ${props.iconClassNames}`} />
          <span className={`${props.textClassNames}`}>
            {numberWithSpaces(Math.round(props.reward.value * xFactor))}
          </span>
        </div>
      )}
      {props.reward.type === "avatarframe" && (
        <div
          className={`flex items-center whitespace-nowrap ${
            props.gap ? props.gap : "gap-1"
          }`}
        >
          <div className="avatar avatar-circle avatar-tiny">
            <img
              src={prototype.getShopitemByID(1, props.reward.value).image}
              alt=""
            />
            <div>
              <span className="icon icon-circle-08" />
            </div>
          </div>
        </div>
      )}
      {props.reward.type === "profilebanner" && (
        <div
          className={`flex items-center whitespace-nowrap ${
            props.gap ? props.gap : "gap-1"
          }`}
        >
          <img
            src={prototype.getShopitemByID(2, props.reward.value).image}
            alt=""
            className="w-7 h-7 rounded object-cover border border-ui-600"
          />
        </div>
      )}
    </>
  );
}
