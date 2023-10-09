import { useEffect, useState, useContext } from "react";
import { UiContext } from "@/contexts/ui";
import { usePrototypeData } from "@/contexts/prototype";
import Link from "next/link";
import FeedItemAchievement from "./FeedItemAchievement";
import { StatsValorantAgents } from "@/mock-data/data-stats-valorant";
import { StatsValorantRanks } from "@/mock-data/data-stats-valorant";
import { StatsValorantWeapons } from "@/mock-data/data-stats-valorant";
import { StatsValorantMaps } from "@/mock-data/data-stats-valorant";

export default function FeedItemMatchTabStats(props) {
  const uiContext = useContext(UiContext);
  const prototype = usePrototypeData();
  const item = props.item;
  const match = props.match;
  const detailedView = props.detailedView || false;

  const getAgentByID = (id) => {
    return StatsValorantAgents.find((agent) => {
      return agent.id === parseInt(id);
    });
  };
  const getRankByID = (id) => {
    return StatsValorantRanks.find((rank) => {
      return rank.id === parseInt(id);
    });
  };
  const getMapByID = (id) => {
    return StatsValorantMaps.find((map) => {
      return map.id === parseInt(id);
    });
  };
  const getWeaponByID = (id) => {
    return StatsValorantWeapons.find((weapon) => {
      return weapon.id === parseInt(id);
    });
  };

  function randomNumberInRange(min, max) {
    // 👇️ get number between min (inclusive) and max (inclusive)
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return (
    <>
      {item && match && (
        <div className="border-y border-ui-700 bg-ui-850 text-base">
          <div className="overflow-y-hidden overflow-x-auto scrollbar-desktop">
            <div className="item text-center whitespace-nowrap gap-4">
              <div className="item-image">
                <div className="avatar avatar-sm avatar-diamond">
                  <div>
                    <img
                      src={getAgentByID(match.meta.agent).picturePath}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="item-body flex-none text-left">
                <div>
                  <div className="text-ui-100 capitalize">
                    {getAgentByID(match.meta.agent).name}
                  </div>
                  <div className="text-ui-300 text-xs font-normal capitalize">
                    {getMapByID(match.meta.map).name} • {match.meta.mode}
                  </div>
                </div>
              </div>
              <div className="item-body flex-0 flex gap-4 items-center justify-around">
                {match.meta.mode === "Deathmatch" ? (
                  <div className="text-2xl text-ui-300 text-center">
                    5th place
                  </div>
                ) : (
                  <>
                    <div className="text-2xl uppercase text-center">
                    {match.stats.result === "victory" && <span className="text-success-500">Victory</span>}
                    {match.stats.result === "defeat" && <span className="text-ui-300">Defeat</span>}
                    {match.stats.result === "draw" && <span className="text-ui-300">Draw</span>}
                     
                    </div>
                    <div>
                      <div className="text-ui-300 text-xl">
                        <span
                          className={`${match.stats.result === "victory" && "text-success-300"}
                          ${match.stats.result === "defeat" && "text-error-300"}
                          ${match.stats.result === "draw" && "text-ui-200"}`}
                        >
                          {match.stats.score.team1}
                        </span>{" "}
                        -{" "}
                        <span
                          className={`${match.stats.result === "victory" && "text-success-300"}
                          ${match.stats.result === "defeat" && "text-error-300"}
                          ${match.stats.result === "draw" && "text-ui-200"}`}
                        >
                          {match.stats.score.team2}
                        </span>
                      </div>
                      <div className="text-sm text-ui-400 font-normal">
                        5th place
                      </div>
                    </div>
                  </>
                )}
              </div>
              <div className="item-body flex-1 flex gap-4 items-center justify-around">
                <div>
                  <div className="text-ui-400 text-xs lg:text-sm uppercase">
                    {match.meta.dateTimeEnded}
                  </div>
                  <div>{match.meta.duration}</div>
                </div>
                <div>
                  <div className="text-ui-400 text-xs lg:text-sm uppercase">
                    K/D/A
                  </div>
                  <div>17 - 9 - 11</div>
                </div>
                <div>
                  <div className="text-ui-400 text-xs lg:text-sm uppercase">
                    KD
                  </div>
                  <div>1.00</div>
                </div>
                <div>
                  <div className="text-ui-400 text-xs lg:text-sm uppercase">
                    ADR
                  </div>
                  <div>135</div>
                </div>
                <div>
                  <div className="text-ui-400 text-xs lg:text-sm uppercase">
                    ACS
                  </div>
                  <div>175</div>
                </div>
                <div>
                  <div className="text-ui-400 text-xs lg:text-sm uppercase">
                    HS%
                  </div>
                  <div>15.4%</div>
                </div>
              </div>
            </div>
          </div>
          <div className="overflow-y-hidden overflow-x-auto scrollbar-desktop">
            <table className="table table-compact w-full text-center text-xs lg:text-sm">
              <tbody>
                <tr className="bg-success-300/20 uppercase">
                  <td className="text-success-300 text-left">Team 1</td>
                  <td></td>
                  <td>Rank</td>
                  <td>ACS</td>
                  <td>K</td>
                  <td>D</td>
                  <td>A</td>
                  <td>+/-</td>
                  <td>K/D</td>
                  <td>ADR</td>
                  <td>HS%</td>
                  <td>FK</td>
                  <td>FD</td>
                  <td>MK</td>
                  <td>ECO</td>
                </tr>
                {match.stats.leaderboard.team1.map((item, itemIndex) => (
                  <tr
                    key={itemIndex}
                    className={`${itemIndex === 1 ? "bg-blue-300/10" : ""}`}
                  >
                    <td className="w-6">
                      <div className="avatar avatar-xs avatar-diamond ml-1">
                        <div>
                          <img
                            src={getAgentByID(item.agent).picturePath}
                            alt=""
                          />
                        </div>
                      </div>
                    </td>
                    <td>
                      <div
                        className={`flex items-center gap-2 ${
                          itemIndex === 1 ? "text-main" : "font-normal"
                        }`}
                      >
                        <span className="text-base">{item.nickname}</span>
                        <div className="rounded bg-gradient-to-b from-ui-100/20 to-ui-100/5 text-xs lg:text-sm uppercase p-1">
                          #{item.tag}
                        </div>
                      </div>
                    </td>
                    <td className="w-13">
                      <div
                        data-tooltip={getRankByID(item.rank).name}
                        className="tooltip-left"
                      >
                        <img
                          className="h-8 mx-auto"
                          src={getRankByID(item.rank).picturePath}
                          height="auto"
                          width="auto"
                          alt=""
                        />
                      </div>
                    </td>
                    <td className="w-13">{randomNumberInRange(0, 20)}</td>
                    <td className="w-13">{randomNumberInRange(0, 20)}</td>
                    <td className="w-13">{randomNumberInRange(0, 20)}</td>
                    <td className="w-13">{randomNumberInRange(0, 20)}</td>
                    <td
                      className={`w-13 ${
                        item.isPlus ? "text-success-300" : "text-error-300"
                      }`}
                    >
                      {item.isPlus ? <span>+</span> : <span>-</span>}
                      {randomNumberInRange(0, 20)}
                    </td>
                    <td className="w-13">{randomNumberInRange(0, 500)}</td>
                    <td className="w-13">{randomNumberInRange(0, 20)}</td>
                    <td className="w-13">{randomNumberInRange(0, 100)}%</td>
                    <td className="w-13">{randomNumberInRange(0, 10)}</td>
                    <td className="w-13">{randomNumberInRange(0, 5)}</td>
                    <td className="w-13">{randomNumberInRange(0, 5)}</td>
                    <td className="w-13">{randomNumberInRange(0, 100)}</td>
                  </tr>
                ))}
                <tr className="bg-error-300/20 uppercase">
                  <td className="text-error-300 text-left">Team 2</td>
                  <td></td>
                  <td>Rank</td>
                  <td>ACS</td>
                  <td>K</td>
                  <td>D</td>
                  <td>A</td>
                  <td>+/-</td>
                  <td>K/D</td>
                  <td>ADR</td>
                  <td>HS%</td>
                  <td>FK</td>
                  <td>FD</td>
                  <td>MK</td>
                  <td>ECO</td>
                </tr>
                {match.stats.leaderboard.team2.map((item, itemIndex) => (
                  <tr key={itemIndex}>
                    <td className="w-6">
                      <div className="avatar avatar-xs avatar-diamond ml-1">
                        <div>
                          <img
                            src={getAgentByID(item.agent).picturePath}
                            alt=""
                          />
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="flex items-center gap-2 font-normal">
                        <span className="text-base">{item.nickname}</span>
                        <div className="rounded bg-gradient-to-b from-ui-100/20 to-ui-100/5 text-xs lg:text-sm uppercase p-1">
                          #{item.tag}
                        </div>
                      </div>
                    </td>
                    <td className="w-13">
                      <div
                        data-tooltip={getRankByID(item.rank).name}
                        className="tooltip-left"
                      >
                        <img
                          className="h-8 mx-auto"
                          src={getRankByID(item.rank).picturePath}
                          height="auto"
                          width="auto"
                          alt=""
                        />
                      </div>
                    </td>
                    <td className="w-13">{randomNumberInRange(0, 20)}</td>
                    <td className="w-13">{randomNumberInRange(0, 20)}</td>
                    <td className="w-13">{randomNumberInRange(0, 20)}</td>
                    <td className="w-13">{randomNumberInRange(0, 20)}</td>
                    <td
                      className={`w-13 ${
                        item.isPlus ? "text-success-300" : "text-error-300"
                      }`}
                    >
                      {item.isPlus ? <span>+</span> : <span>-</span>}
                      {randomNumberInRange(0, 20)}
                    </td>
                    <td className="w-13">{randomNumberInRange(0, 500)}</td>
                    <td className="w-13">{randomNumberInRange(0, 20)}</td>
                    <td className="w-13">{randomNumberInRange(0, 100)}%</td>
                    <td className="w-13">{randomNumberInRange(0, 10)}</td>
                    <td className="w-13">{randomNumberInRange(0, 5)}</td>
                    <td className="w-13">{randomNumberInRange(0, 5)}</td>
                    <td className="w-13">{randomNumberInRange(0, 100)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
}
