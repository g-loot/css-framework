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
        <div className={`flex items-center ${props.gap ? props.gap : "gap-2"}`}>
          <img
            className={props.imageClassNames}
            src={`https://res.cloudinary.com/gloot/image/upload/v1658134262/Marketing/2022_prototype/CurrencyRewards/Reward-cropped-coin-unique.webp`}
            width="auto"
            height="auto"
            alt=""
          />
          <span className={props.textClassNames}>
            {numberWithSpaces(props.reward.value)}
          </span>
        </div>
      )}
      {props.reward.type === "token" && (
        <div className={`flex items-center ${props.gap ? props.gap : "gap-2"}`}>
          <img
            className={props.imageClassNames}
            src={`https://res.cloudinary.com/gloot/image/upload/v1658134262/Marketing/2022_prototype/CurrencyRewards/Reward-cropped-token-unique.webp`}
            width="auto"
            height="auto"
            alt=""
          />
          <span className={props.textClassNames}>
            {numberWithSpaces(props.reward.value)}
          </span>
        </div>
      )}
      {props.reward.type === "ticket" && (
        <div className={`flex items-center ${props.gap ? props.gap : "gap-2"}`}>
          <img
            className={props.imageClassNames}
            src={`https://res.cloudinary.com/gloot/image/upload/v1658134262/Marketing/2022_prototype/CurrencyRewards/Reward-cropped-ticket-unique.webp`}
            width="auto"
            height="auto"
            alt=""
          />
          <span className={props.textClassNames}>
            {numberWithSpaces(props.reward.value)}
          </span>
        </div>
      )}
    </>
  );
}
