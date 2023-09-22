import GameIcon from "@/components/GameIcon/GameIcon";
import Tooltip from "@/components/Tooltip/Tooltip";
import { usePrototypeData } from "@/contexts/prototype";
import Link from "next/link";

export default function FeedItemAchievement(props) {
  const prototype = usePrototypeData();
  const achievement = props.achievement;
  const match = props.match;
  const delay = props.delay;
  const detailedView = props.detailedView || false;

  return (
    <>
      {achievement && match && (
        <>
          {achievement.type === "mission" && (
            <li className="flex items-center gap-2">
              <span className="icon icon-missions text-[1.25em] text-ui-400" />
              <p className="text-ui-300">
                <Link href={`/stryda/missions/${prototype.getURLparams()}`}>
                  <span className="interactive font-bold text-ui-100">
                    {achievement.number} mission
                    {achievement.number > 1 && <>s</>}
                  </span>
                </Link>{" "}
                completed in {prototype.getGameByID(match.meta.game).name}
              </p>
            </li>
          )}
          {achievement.type === "ladder" && (
            <li
              className="w-full animate-slide-in-bottom animate-delay"
              style={{
                "--delay": "calc(" + delay + " * 0.05s)",
              }}
            >
              <Link
                href={`/stryda/ladders/${
                  prototype.getGameByID(match.meta.game).slug
                }/${achievement.id}${prototype.getURLparams()}`}
              >
                <button
                  type="button"
                  className="group flex items-center rounded interactive surface-ui-700 w-full"
                >
                  <img
                    src={
                      prototype.getLadderByID(
                        prototype.getGameByID(match.meta.game).slug,
                        achievement.id
                      ).cover
                    }
                    className="w-2/5 rounded-l border-r border-ui-700 group-hover:border-ui-600 object-cover aspect-cover"
                    alt=""
                  />
                  <div className="flex-1 flex items-center gap-3 px-3">
                    <ul className={`flex-1 flex gap-4 items-center justify-between px-2 ${detailedView ? 'text-base' : 'text-sm'}`}>
                      <li>
                        <div className={`text-xs text-ui-300 ${detailedView ? 'text-sm' : 'text-xs'}`}>Ladder</div>
                        <div className="text-ui-100 truncate">
                          {
                            prototype.getLadderByID(
                              prototype.getGameByID(match.meta.game).slug,
                              achievement.id
                            ).name
                          }
                        </div>
                      </li>
                      <li>
                        <div className={`text-xs text-ui-300 ${detailedView ? 'text-sm' : 'text-xs'}`}>Score</div>
                        <div className="text-ui-100">
                          {achievement.number}
                        </div>
                      </li>
                    </ul>
                    <span className="icon icon-ctrl-right text-ui-400 group-hover:translate-x-1 group-hover:text-ui-200 transition-all ease-in-out duration-150" />
                  </div>
                </button>
              </Link>
            </li>
          )}
          {achievement.type === "achievement" && (
            <li className="flex items-center gap-2">
              <span className="icon icon-medal text-[1.25em] text-ui-400" />
              <p className="text-ui-300">
                <Link
                  href={`/stryda/profile/${
                    match.user
                  }?tab=achievements${prototype.getURLparams("&")}`}
                >
                  <span className="interactive font-bold text-ui-100">
                    {
                      prototype.getAchievementitemByID(
                        1,
                        achievement.achievementID
                      ).name
                    }{" "}
                    LVL {achievement.level}
                  </span>
                </Link>{" "}
                achievement unlocked
              </p>
            </li>
          )}
        </>
      )}
    </>
  );
}
