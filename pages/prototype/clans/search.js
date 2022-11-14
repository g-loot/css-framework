import React, { useContext, useEffect } from "react";

import Ad from "../../../components/Ad/Ad";
import Link from "next/link";
import ModalClanCreate from "./modal-clan-create";
import ModalContainer from "../../../components/Modal/ModalContainer";
import PrototypeStructure from "../../../components/Prototype/PrototypeStructure";
import { UiContext } from "../../../contexts/ui";
import { usePrototypeData } from "../../../contexts/prototype";
import { useRouter } from "next/router";

export default function ClanSearch() {
  const router = useRouter();
  const { query } = useRouter();
  const prototype = usePrototypeData();
  const modalCreate = query.modalcreate === "true" ? true : false;
  const uiContext = useContext(UiContext);

  function openModalClanCreate() {
    uiContext.openModal(<ModalClanCreate></ModalClanCreate>);
  }

  useEffect(() => {
    if (modalCreate) {
      openModalClanCreate();
    }
  }, [modalCreate]);

  return (
    <>
      <PrototypeStructure title="Clans">
        <Ad width="1005" height="124" />
        <h1 className="text-3xl sm:text-4xl mb-4 px-4 sm:px-0">Find clans</h1>
        <section className="surface surface-dimmed sm:rounded-lg p-4 mb-4">
          <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-4 xl:gap-8">
            <div className="flex-2 flex items-center gap-4 xl:gap-8">
              <div className="flex-1 form-group form-select">
                <label htmlFor="game">Playing:</label>
                <select id="game">
                  <option selected>Any game</option>
                  {prototype.games.map((game, gameIndex) => (
                    <option key={game.id}>{game.name}</option>
                  ))}
                </select>
              </div>
              <div className="flex-1 form-group form-select">
                <label htmlFor="lang">Speaking:</label>
                <select id="lang">
                  <option selected>Any language</option>
                  <option>Arabic</option>
                  <option>Bengali</option>
                  <option>Chinese</option>
                  <option>English</option>
                  <option>French</option>
                  <option>German</option>
                  <option>Hindi</option>
                  <option>Italian</option>
                  <option>Japanese</option>
                  <option>Korean</option>
                  <option>Lahnda</option>
                  <option>Malay</option>
                  <option>Marathi</option>
                  <option>Persian</option>
                  <option>Portuguese</option>
                  <option>Russian</option>
                  <option>Spanish</option>
                  <option>Tamil</option>
                  <option>Telugu</option>
                  <option>Turkish</option>
                  <option>Urdu</option>
                  <option>Vietnamese</option>
                </select>
              </div>
            </div>
            <div className="form-group pb-1 flex items-center gap-2">
              <div className="form-toggle">
                <input type="checkbox" name="joinableOnly" id="joinableOnly" />
                <label htmlFor="joinableOnly">Joinable only</label>
              </div>
              <span className="icon icon-b-add text-ui-300" />
            </div>
            <div className="w-full h-px xl:h-auto xl:w-px bg-ui-700 self-stretch justify-self-stretch" />
            <div className="flex-1 form-group">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" autoComplete="off" />
            </div>
          </div>
        </section>
        <section>
          <div className="overflow-y-hidden overflow-x-auto scrollbar-desktop px-4 sm:px-0 pb-4">
            <table className="table table-rounded rounded-xl w-full">
              <thead>
                <tr>
                  <th>
                    <div className="text-ui-300 flex items-center gap-1">
                      <span>Clan names</span>
                      <button
                        type="button"
                        className="button button-sm button-ghost rounded-full"
                      >
                        <span className="icon icon-arrow-sm-down"></span>
                      </button>
                    </div>
                  </th>
                  <th>
                    <div className="text-ui-300 flex items-center gap-1">
                      <span>Members</span>
                      <button
                        type="button"
                        className="button button-sm button-ghost rounded-full"
                      >
                        <span className="icon icon-arrow-sm-down"></span>
                      </button>
                    </div>
                  </th>
                  <th>
                    <div className="text-ui-300 text-center">Joinable</div>
                  </th>
                  <th>
                    <div className="text-ui-300 text-center">Language</div>
                  </th>
                  <th>
                    <div className="text-ui-300 text-right">Game</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {prototype.clans.map((clan, clanIndex) => (
                  <>
                    <tr
                      key={clan.id}
                      className="animate-slide-in-bottom animate-delay"
                      style={{
                        "--delay": "calc(" + clanIndex + " * 0.05s)",
                      }}
                    >
                      <td>
                        <Link
                          href={`/prototype/clans/${clan.id}${prototype.getURLparams()}`}
                        >
                          <div className="flex gap-3 items-center self-center cursor-pointer hover:opacity-50 transition-opacity duration-200">
                            <div className="avatar avatar-xs avatar-squircle">
                              <div>
                                <img src={clan.avatar} alt="avatar" />
                              </div>
                            </div>
                            <div className="">{clan.nickname}</div>
                          </div>
                        </Link>
                      </td>
                      <td>
                        <div className="text-ui-300">
                          {clan.members.length} members
                        </div>
                      </td>
                      <td>
                        {clan.isPublic && (
                          <div className="text-center">
                            <button
                              type="button"
                              className="button button-sm button-tertiary rounded-full"
                            >
                              <span className="icon icon-b-add"></span>
                            </button>
                          </div>
                        )}
                      </td>
                      <td>
                        <div className="text-ui-300 text-center">
                          {clan.lang}
                        </div>
                      </td>
                      <td>
                        <div className="flex justify-end gap-1">
                          {clan.games?.map((game, gameIndex) => (
                            <>
                              <div className="p-1 border border-ui-700 rounded bg-gradient-to-b from-ui-900 to-ui-900/50 flex items-center justify-center">
                                <span
                                  className={`icon text-xl ${
                                    prototype.getGameByID(game).slug ===
                                    "apexlegends"
                                      ? "icon-game-apexlegends-symbol text-game-apexlegends"
                                      : ""
                                  } ${
                                    prototype.getGameByID(game).slug === "csgo"
                                      ? "icon-game-csgo-symbol text-game-csgo"
                                      : ""
                                  }  ${
                                    prototype.getGameByID(game).slug === "dota2"
                                      ? "icon-game-dota2-symbol text-game-dota2"
                                      : ""
                                  }  ${
                                    prototype.getGameByID(game).slug ===
                                    "leagueoflegends"
                                      ? "icon-game-leagueoflegends-symbol text-game-leagueoflegends"
                                      : ""
                                  }  ${
                                    prototype.getGameByID(game).slug ===
                                    "rocketleague"
                                      ? "icon-game-rocketleague-symbol text-game-rocketleague"
                                      : ""
                                  } ${
                                    prototype.getGameByID(game).slug === "pubg"
                                      ? "icon-game-pubg-symbol text-game-pubg"
                                      : ""
                                  }  ${
                                    prototype.getGameByID(game).slug ===
                                    "valorant"
                                      ? "icon-game-valorant-symbol text-game-valorant"
                                      : ""
                                  }`}
                                />
                              </div>
                            </>
                          ))}
                        </div>
                      </td>
                    </tr>
                  </>
                ))}
              </tbody>
            </table>
          </div>
          <div className="text-center mt-4 mb-8">
            <ul className="pagination">
              <li>
                <a href="#" tabIndex="-1">
                  Previous
                </a>
              </li>
              <li className="is-active">
                <a href="#">1</a>
              </li>
              <li>
                <a href="#">2</a>
              </li>
              <li>
                <a href="#">3</a>
              </li>
              <li>
                <span>...</span>
              </li>
              <li>
                <a href="#">12</a>
              </li>
              <li>
                <a href="#">Next</a>
              </li>
            </ul>
          </div>
        </section>
      </PrototypeStructure>
    </>
  );
}
