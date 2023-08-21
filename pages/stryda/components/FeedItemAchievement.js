import { usePrototypeData } from "@/contexts/prototype";
import Link from "next/link";

export default function FeedItemAchievement(props) {
  const prototype = usePrototypeData();
  const achievement = props.achievement;
  const user = props.user || 1;

  return (
    <>
      {achievement && (
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
                completed in {prototype.getGameByID(achievement.game).name}
              </p>
            </li>
          )}
          {achievement.type === "ladder" && (
            <li className="flex items-center gap-2">
              <span className="icon icon-ladder text-[1.25em] text-ui-400" />
              <p className="text-ui-300">
                {achievement.number}+ in{" "}
                <Link
                  href={`/stryda/ladders/${
                    prototype.getGameByID(achievement.game).slug
                  }/${achievement.ladderID}${prototype.getURLparams()}`}
                >
                  <span className="interactive font-bold text-ui-100">
                    {
                      prototype.getLadderByID(
                        prototype.getGameByID(achievement.game).slug,
                        achievement.ladderID
                      ).name
                    }
                  </span>
                </Link>
              </p>
            </li>
          )}
          {achievement.type === "achievement" && (
            <li className="flex items-center gap-2">
              <span className="icon icon-medal text-[1.25em] text-ui-400" />
              <p className="text-ui-300">
                <Link
                  href={`/stryda/profile/${user}?tab=achievements${prototype.getURLparams(
                    "&"
                  )}`}
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
