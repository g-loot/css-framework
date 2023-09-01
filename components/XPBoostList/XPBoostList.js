import { usePrototypeData } from "@/contexts/prototype";
import ResetsIn from "../Countdown/ResetsIn";
import Link from "next/link";

export default function XPBoostList(props) {
  const prototype = usePrototypeData();
  const isPremium = prototype.isPremium;
  const size = props.size || "sm";

  return (
    <ul
      className={`flex flex-col p-2 text-left child:animate-slide-in-bottom child:animate-delay ${
        size === "sm" ? "text-sm gap-3 child:gap-2" : "text-base gap-4 child:gap-3"
      }`}
    >
      <li className="flex text-teal-500">
        <span
          className={`icon icon-check ${size === "sm" ? "mt-0.5" : "mt-1"}`}
        />
        <div className="flex-1 flex-col">
          <div>Welcome Boost</div>
        </div>
        <div className="flex-1">
          <div className="text-right">+30%</div>
        </div>
      </li>
      <li className="flex text-teal-500">
        <span
          className={`icon icon-check ${size === "sm" ? "mt-0.5" : "mt-1"}`}
        />
        <div className="flex-1 flex-col">
          <div>Weekly Boost</div>
          <div
            className={`text-ui-300 ${size === "sm" ? "text-xs" : "text-sm"}`}
          >
            <ResetsIn label="Ends" />
          </div>
        </div>
        <div className="flex-1">
          <div className="text-right">+10%</div>
        </div>
      </li>
      {isPremium ? (
        <li className="flex text-premium-500">
          <span
            className={`icon icon-check ${size === "sm" ? "mt-0.5" : "mt-1"}`}
          />
          <div className="flex-1">
            <div>Premium Boost</div>
          </div>
          <div className="text-right flex gap-1 items-center">
            <span
              className={`icon icon-crown ${size === "sm" ? "mt-0.5" : "mt-1"}`}
            />
            <span>+50%</span>
          </div>
        </li>
      ) : (
        <li className="flex text-ui-300">
          <span
            className={`icon icon-lock ${size === "sm" ? "mt-0.5" : "mt-1"}`}
          />
          <div className="flex-1">
            <div>Premium Boost</div>
            <div
              className={`text-ui-300 leading-4 ${
                size === "sm" ? "text-xs" : "text-sm"
              }`}
            >
              Become a{" "}
              <Link href={`/prototype/premium${prototype.getURLparams()}`}>
                <a className="link link-premium">Premium subscriber</a>
              </Link>{" "}
              to earn 50% more XP.
            </div>
          </div>
          <div className="text-right">+50%</div>
        </li>
      )}
    </ul>
  );
}
