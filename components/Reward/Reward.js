import Link from "next/link";
import { useRouter } from "next/router";

function numberWithSpaces(x) {
  var parts = x.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  return parts.join(".");
}
export default function Reward(props) {
  

  return (
    <>
      {props.reward.type === "coin" && (
        <div className={`flex items-center whitespace-nowrap ${props.gap ? props.gap : "gap-2"}`}>
          <span className={`icon icon-coin text-gold-500 ${props.iconClassNames}`} />
          <span className={`text-gold-500 ${props.textClassNames}`}>
            {numberWithSpaces(props.reward.value)}
          </span>
        </div>
      )}
      {props.reward.type === "token" && (
        <div className={`flex items-center whitespace-nowrap ${props.gap ? props.gap : "gap-2"}`}>
          <span className={`icon icon-token text-purple-500 ${props.iconClassNames}`} />
          <span className={`text-purple-500 ${props.textClassNames}`}>
            {numberWithSpaces(props.reward.value)}
          </span>
        </div>
      )}
      {props.reward.type === "ticket" && (
        <div className={`flex items-center whitespace-nowrap ${props.gap ? props.gap : "gap-2"}`}>
          <span className={`icon icon-ticket ${props.iconClassNames}`} />
          <span className={`${props.textClassNames}`}>
            {numberWithSpaces(props.reward.value)}
          </span>
        </div>
      )}
    </>
  );
}
