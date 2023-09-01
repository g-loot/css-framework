import { usePrototypeData } from "@/contexts/prototype";
import ResetsIn from "../Countdown/ResetsIn";

export default function XPBoostList(props) {
  const prototype = usePrototypeData();
  const isPremium = prototype.isPremium;

  return (
    <ul className="flex flex-col gap-1 text-sm p-2">
      <li className="flex gap-8 py-1 text-teal-500">
        <div className="flex gap-2">
          <div className="icon icon-check" />
          <div className="flex-1 flex-col">
            <div>Welcome Boost</div>
          </div>
        </div>
        <div className="flex-1">
          <div className="text-right">+30%</div>
        </div>
      </li>
      <li className="flex gap-8 py-1 text-teal-500">
        <div className="flex gap-2">
          <div className="icon icon-check" />
          <div className="flex-1 flex-col">
            <div>Weekly Boost</div>
            <div className="text-ui-300 text-xs">
              <ResetsIn label="Ends" />
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="text-right">+10%</div>
        </div>
      </li>
      {isPremium ? (
        <li className="flex gap-8 py-1 text-premium-500">
          <div className="flex gap-2">
            <div className="icon icon-check" />
            <div className="flex-1">
              <div>Premium Boost</div>
            </div>
          </div>
          <div className="text-right flex gap-2 items-center">
            <div className="icon icon-crown" />
            <span>+50%</span>
          </div>
        </li>
      ) : (
        <li className="flex gap-8 py-1 text-ui-300">
          <div className="flex gap-2">
            <div className="icon icon-lock" />
            <div className="flex-1">Premium boost</div>
          </div>
          <div className="flex-1">
            <div className="text-right">+50%</div>
          </div>
        </li>
      )}
    </ul>
  );
}
