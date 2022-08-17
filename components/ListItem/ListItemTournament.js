import Link from "next/link";
import { usePrototypeData } from "../../contexts/prototype";
import { useRouter } from "next/router";

export default function ListItemTournament(props) {
  const prototype = usePrototypeData();
  const game = props.game;
  const tournament = props.tournament;
  const { query } = useRouter();
  const hasAds = query.ads === "true" ? true : false;
  return (
    <>
      <li key={tournament.id}>
        <Link
          href={`${
            tournament.progress !== 3
              ? `/prototype/${game.slug}/tournaments/${tournament.id}`
              : ""
          }${hasAds ? "?ads=true" : ""}`}
        >
          <div
            className={`rounded overflow-hidden surface surface-ui-700 p-2 relative interactive`}
          >
            <div className="relative z-10 leading-tight w-72 lg:w-auto h-24 flex flex-col items-start justify-between">
              <div
                className={`chip chip-sliced chip-sm ${
                  tournament.status === "ongoing" ? "" : ""
                } ${tournament.status === "finished" ? "chip-blue" : ""} ${
                  tournament.status === "scheduled" ? "chip-gray" : ""
                }`}
              >
                <span>{tournament.status}</span>
              </div>
              <div className="font-bold mt-2">{tournament.name}</div>
              {tournament.status === "scheduled" && (
                <div className="flex gap-3 items-center">
                  <span className="text-sm text-ui-300">Prize pool:</span>
                  {tournament.rewards.map((reward, rewardIndex) => (
                    <>
                      <div className="flex items-center gap-1">
                        <img
                          className="h-4"
                          src={`https://res.cloudinary.com/gloot/image/upload/v1658134262/Marketing/2022_prototype/CurrencyRewards/Reward-cropped-${reward.type}-unique.webp`}
                          width="auto"
                          height="auto"
                          alt=""
                        />
                        <span className="font-headings font-bold text-lg italic">
                          {reward.value}
                        </span>
                      </div>
                    </>
                  ))}
                </div>
              )}
              {tournament.status !== "scheduled" && (
                <div className="flex gap-3 items-center">
                  <span className="text-sm text-ui-300">
                    Placement: <b>{tournament.stats.placement}</b>
                  </span>
                  <span className="text-sm text-ui-300">
                    Kills: <b>{tournament.stats.kills}</b>
                  </span>
                </div>
              )}
            </div>
            <div className="absolute z-20 top-2 right-2 p-1 rounded bg-gradient-to-b from-ui-900 to-ui-900/50 flex items-center justify-center">
              <span
                className={`icon text-xl ${
                  prototype.getGameByID(game.id).slug === "apexlegends"
                    ? "icon-game-apexlegends-symbol text-game-apexlegends"
                    : ""
                } ${
                  prototype.getGameByID(game.id).slug === "csgo"
                    ? "icon-game-csgo-symbol text-game-csgo"
                    : ""
                }  ${
                  prototype.getGameByID(game.id).slug === "dota2"
                    ? "icon-game-dota2-symbol text-game-dota2"
                    : ""
                }  ${
                  prototype.getGameByID(game.id).slug === "leagueoflegends"
                    ? "icon-game-leagueoflegends-symbol text-game-leagueoflegends"
                    : ""
                }  ${
                  prototype.getGameByID(game.id).slug === "rocketleague"
                    ? "icon-game-rocketleague-symbol text-game-rocketleague"
                    : ""
                } ${
                  prototype.getGameByID(game.id).slug === "pubg"
                    ? "icon-game-pubg-symbol text-game-pubg"
                    : ""
                }  ${
                  prototype.getGameByID(game.id).slug === "valorant"
                    ? "icon-game-valorant-symbol text-game-valorant"
                    : ""
                }`}
              />
            </div>
            <div className="absolute z-0 right-0 inset-y-0 w-1/2">
              <div className="absolute z-10 inset-0 bg-gradient-to-r from-ui-700 to-ui-700/50"></div>
              <img
                className="absolute z-0 object-right object-cover xl:object-cover inset-0 w-full h-full"
                src={tournament.cover}
              />
            </div>
          </div>
        </Link>
      </li>
    </>
  );
}
