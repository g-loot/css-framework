import { usePrototypeData } from "../../contexts/prototype";
import Tooltip from "../Tooltip/Tooltip";
import Reward from "./Reward";

function numberWithSpaces(x) {
  var parts = x.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  return parts.join(".");
}
export default function Rewards(props) {
  const prototype = usePrototypeData();
  const rewards = props.rewards || undefined;

  return (
    <>
      {rewards && (
        <div className="flex-1 flex items-center justify-center">
          <Tooltip
            placement="top"
            tooltip={
              <ul className="divide-y divide-ui-500 child:py-1.5 child:pr-1.5">
                {rewards.map((reward, rewardIndex) => (
                  <>
                    {reward.type === "coin" && (
                      <li
                        className={`flex items-center whitespace-nowrap ${
                          props.gap ? props.gap : "gap-1"
                        }`}
                      >
                        <div className="w-9 mr-2 flex items-center justify-center">
                          <span className="text-2xl icon icon-coin text-currency-1-500" />
                        </div>
                        <div className="text-currency-1-500">
                          {numberWithSpaces(Math.round(reward.value * 1))} coins
                        </div>
                      </li>
                    )}
                    {reward.type === "token" && (
                      <li
                        className={`flex items-center whitespace-nowrap ${
                          props.gap ? props.gap : "gap-1"
                        }`}
                      >
                        <div className="w-9 mr-2 flex items-center justify-center">
                          <span className="text-2xl icon icon-token text-currency-2-500" />
                        </div>
                        <div className="text-currency-2-500">
                          {numberWithSpaces(Math.round(reward.value * 1))}{" "}
                          tokens
                        </div>
                      </li>
                    )}
                    {reward.type === "powertoken" && (
                      <li
                        className={`flex items-center whitespace-nowrap ${
                          props.gap ? props.gap : "gap-1"
                        }`}
                      >
                        <div className="w-9 mr-2 flex items-center justify-center">
                          <span className="text-2xl icon icon-powertoken text-currency-3-500" />
                        </div>
                        <div className="text-currency-3-500">
                          {numberWithSpaces(Math.round(reward.value * 1))} power
                          tokens
                        </div>
                      </li>
                    )}
                    {reward.type === "avatarframe" && (
                      <li
                        className={`flex items-center whitespace-nowrap ${
                          props.gap ? props.gap : "gap-1"
                        }`}
                      >
                        <div className="w-9 mr-2 flex items-center justify-center">
                          <div className="avatar avatar-circle avatar-tiny">
                            <img
                              src={
                                prototype.getShopitemByID(1, reward.value).image
                              }
                              alt=""
                            />
                            <div>
                              <span className="icon icon-circle-08" />
                            </div>
                          </div>
                        </div>
                        <div>1 avatar frame</div>
                      </li>
                    )}
                    {reward.type === "profilebanner" && (
                      <li
                        className={`flex items-center whitespace-nowrap ${
                          props.gap ? props.gap : "gap-1"
                        }`}
                      >
                        <div className="w-9 mr-2 flex items-center justify-center">
                          <img
                            src={
                              prototype.getShopitemByID(2, reward.value).image
                            }
                            alt=""
                            className="w-7 h-7 rounded object-cover border border-ui-600"
                          />
                        </div>
                        <div>1 profile banner</div>
                      </li>
                    )}
                  </>
                ))}
              </ul>
            }
          >
            <div className="flex-1 flex items-center justify-center gap-4">
              {rewards.map((reward, rewardIndex) => (
                <Reward
                  key={rewardIndex}
                  reward={reward}
                  gap="gap-2"
                  iconClassNames="text-lg"
                  textClassNames="text-lg"
                />
              ))}
            </div>
          </Tooltip>
        </div>
      )}
    </>
  );
}
