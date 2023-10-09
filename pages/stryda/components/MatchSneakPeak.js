import GameIcon from "@/components/GameIcon/GameIcon";
import { StatsValorantMaps } from "@/mock-data/data-stats-valorant";

export default function FeedItemMatch(props) {
  const match = props.match;
  const getMapByID = (id) => {
    return StatsValorantMaps.find((map) => {
      return map.id === parseInt(id);
    });
  };

  return (
    <>
      {match && (
        <div className="flex gap-2 items-center surface-ui-600 rounded-2 text-xs p-1 text-ui-300">
          <GameIcon game={match.meta.game} size="text-base" />
          <span className="capitalize">
            {match.meta.mode} • {getMapByID(match.meta.map).name}
          </span>
          <div
            className={`self-stretch rounded px-2 py-1 leading-none flex gap-2 items-center ${
              match.stats.result === "victory" &&
              "bg-success-500/10 text-success-300"
            }
            ${
              match.stats.result === "defeat" &&
              "bg-error-500/10 text-error-300"
            }
            ${match.stats.result === "draw" && "text-ui-200"}`}
          >
            <span>
              {" "}
              {match.stats.result === "victory" && "Victory"}
              {match.stats.result === "defeat" && "Defeat"}
              {match.stats.result === "draw" && "Draw"}
            </span>{" "}
            <i
              className={`block h-4 w-px ${
                match.stats.result === "victory" && "bg-success-300/25"
              }
              ${match.stats.result === "defeat" && "bg-error-300/25"}
              ${match.stats.result === "draw" && "bg-error-200/25"}`}
            />{" "}
            <span>
              {match.stats.score.team1} - {match.stats.score.team2}
            </span>
          </div>
        </div>
      )}
    </>
  );
}
