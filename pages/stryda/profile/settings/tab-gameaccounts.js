import React, { useEffect, useState, useContext } from "react";

import { UiContext } from "@/contexts/ui";
import { usePrototypeData } from "@/contexts/prototype";
import { useRouter } from "next/router";
import TextareaExpandable from "@/components/Textarea/TextareaExpandable";
import Link from "next/link";
import Tooltip from "@/components/Tooltip/Tooltip";

export default function TabSettingsGameAccounts() {
  const router = useRouter();
  const { query } = useRouter();
  const prototype = usePrototypeData();
  const uiContext = useContext(UiContext);
  const [selectedUser, setSelectedUser] = useState(prototype.getUserByID(1));
  const [isValorantConnected, setIsValorantConnected] = useState(false);
  const [isAlreadyValorantConnected, setIsAlreadyValorantConnected] =
    useState(false);
  const [isLoLConnected, setIsLoLConnected] = useState(false);
  const [isLoLRegionSelected, setIsLoLRegionSelected] = useState(false);
  const [isAlreadyLoLConnected, setIsAlreadyLoLConnected] = useState(false);

  function selectLoLRegion(e) {
    const selectLoLRegionTarget = e.target.value;
    setIsLoLRegionSelected(true);
  }

  return (
    <>
      {selectedUser && (
        <div className="max-w-md mx-auto">
          <h2 className="mb-8">Game accounts</h2>
          <div className="flex flex-col xl:flex-row items-stretch xl:items-start gap-8">
            <div className="flex-1 order-2 xl:order-1 space-y-8">
              <div className="form-group">
                <label htmlFor="game-steam">
                  <span className="icon icon-steam" />
                  <span className="flex-1">Steam</span>
                  <div className="chip chip-xs chip-status chip-success animate-slide-in-bottom">
                    <span className="icon icon-check" />
                    <span>Connected</span>
                  </div>
                </label>
                <div className="input-group">
                  <button className="button button-ghost">
                    <span>Connect account</span>
                  </button>
                  <input type="text" name="game-steam" id="game-steam" />
                </div>
                <p className="text-sm text-ui-300">
                  This site is not associated with Valve Corp.
                </p>
              </div>
              <div className="form-group">
                <label htmlFor="game-valorant">
                  <span className="icon icon-game-valorant-symbol text-game-valorant" />
                  <span className="flex-1">VALORANT</span>
                  {isValorantConnected && (
                    <div className="chip chip-xs chip-status chip-success animate-slide-in-bottom">
                      <span className="icon icon-check" />
                      <span>Connected</span>
                    </div>
                  )}
                </label>
                <div>
                  {isValorantConnected ? (
                    <>
                      {isAlreadyValorantConnected ? (
                        <div className="space-y-3">
                          <div className="flex items-center gap-3 text-attention-500">
                            <span className="icon text-xl icon-warning-sign" />
                            <p className="text-sm leading-tight">
                              This Valorant account is already connected to a
                              Stryda account. Click the following button to
                              generate a recovery e-mail for that address.
                            </p>
                          </div>
                          <button
                            type="button"
                            onClick={() => {
                              setIsValorantConnected(!isValorantConnected);
                              setIsAlreadyValorantConnected(
                                !isAlreadyValorantConnected
                              );
                            }}
                            className="button button-primary w-full"
                          >
                            <span>Send recovery email</span>
                          </button>
                        </div>
                      ) : (
                        <div
                          className="input-group"
                          onClick={() =>
                            setIsAlreadyValorantConnected(
                              !isAlreadyValorantConnected
                            )
                          }
                        >
                          <input
                            type="text"
                            name="game-valorant"
                            id="game-valorant"
                            readOnly
                            disabled
                            value={`${selectedUser.socials.riotValorantNickname}#${selectedUser.socials.riotValorantHashtag}`}
                          />
                          <span>
                            <Tooltip
                              tooltip={
                                <>
                                  If you have updated your Valorant account
                                  recently, it can take up to 15 minutes to see
                                  the changes.
                                </>
                              }
                            >
                              <button className="button button-sm button-ghost rounded-full">
                                <span className="icon icon-c-info" />
                              </button>
                            </Tooltip>
                          </span>
                        </div>
                      )}
                    </>
                  ) : (
                    <>
                      <div className="input-group">
                        <button
                          type="button"
                          className="button button-ghost"
                          onClick={() =>
                            setIsValorantConnected(!isValorantConnected)
                          }
                        >
                          <span>Connect account</span>
                        </button>
                        <input type="text" name="game-steam" id="game-steam" />
                      </div>
                      <p className="text-ui-300 text-sm mt-2 leading-tight">
                        By connecting my VALORANT account I acknowledge making
                        my profile public to all users.
                      </p>
                    </>
                  )}
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="game-leagueoflegends">
                  <span className="icon icon-game-leagueoflegends-symbol text-game-leagueoflegends" />
                  <span className="flex-1">League of Legends</span>
                  {isLoLConnected && (
                    <div className="chip chip-xs chip-status chip-success animate-slide-in-bottom">
                      <span className="icon icon-check" />
                      <span>Connected</span>
                    </div>
                  )}
                </label>
                <div>
                  {isLoLConnected ? (
                    <>
                      {isAlreadyLoLConnected ? (
                        <div className="space-y-3">
                          <div className="flex items-center gap-3 text-attention-500">
                            <span className="icon text-xl icon-warning-sign" />
                            <p>
                              This League of Legends account is already
                              connected to a Stryda account. Click the following
                              button to generate a recovery e-mail for that
                              address.
                            </p>
                          </div>
                          <button
                            type="button"
                            onClick={() => {
                              setIsLoLRegionSelected(false);
                              setIsLoLConnected(!isLoLConnected);
                              setIsAlreadyLoLConnected(!isAlreadyLoLConnected);
                            }}
                            className="button button-primary w-full"
                          >
                            <span>Send recovery email</span>
                          </button>
                        </div>
                      ) : (
                        <div
                          className="input-group"
                          onClick={() =>
                            setIsAlreadyLoLConnected(!isAlreadyLoLConnected)
                          }
                        >
                          <input
                            type="text"
                            name="game-valorant"
                            id="game-valorant"
                            readOnly
                            disabled
                            value={`${selectedUser.socials.riotValorantNickname}#${selectedUser.socials.riotValorantHashtag}`}
                          />
                          <span>
                            <Tooltip
                              tooltip={
                                <>
                                  If you have updated your League of Legends
                                  account recently, it can take up to 15 minutes
                                  to see the changes.
                                </>
                              }
                            >
                              <button className="button button-sm button-ghost rounded-full">
                                <span className="icon icon-c-info" />
                              </button>
                            </Tooltip>
                          </span>
                        </div>
                      )}
                    </>
                  ) : (
                    <>
                      <div className="form-group form-select mb-2">
                        <select
                          id="Leagueoflegends-region"
                          onChange={(e) => selectLoLRegion(e)}
                        >
                          <option disabled selected>
                            Select your region
                          </option>
                          <option>Brazil</option>
                          <option>Europe Nordic & East</option>
                          <option>Europe West</option>
                          <option>North America</option>
                          <option>Latin America North</option>
                          <option>Latin America South</option>
                          <option>Oceania</option>
                          <option>Russia</option>
                          <option>Turkey</option>
                          <option>Japan</option>
                          <option>Republic of Korea</option>
                          <option>The Philippines</option>
                          <option>Singapore, Malaysia, Indonesia</option>
                          <option>Taiwan, Hong Kong, Macao</option>
                          <option>Thailand</option>
                          <option>Vietnam</option>
                        </select>
                      </div>
                      <button
                        type="button"
                        onClick={() => setIsLoLConnected(!isLoLConnected)}
                        disabled={!isLoLRegionSelected}
                        className="button button-primary w-full"
                      >
                        <span className="icon icon-game-leagueoflegends-symbol" />
                        <span>Connect my account</span>
                      </button>
                      <p className="text-ui-300 text-sm mt-2 leading-tight">
                        By connecting my League of Legends account I acknowledge
                        making my profile public to all users.
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>
            <div className="w-full xl:w-72 order-1 xl:order-2 space-y-4">
              <div className="flex items-start gap-4 p-4 surface-ui-500 rounded">
                <span className="icon icon-20 icon-link" />
                <div>
                  <h5 className="text-lg mb-2">Connect game accounts</h5>
                  <ul className="list-outside ml-2 pl-1 space-y-1 list-disc text-sm">
                    <li>
                      Needed to play Missions and Ladders on Stryda in API games
                    </li>
                    <li>Get stats from your games</li>
                    <li>To record in-game play with the Stryda recorder.</li>
                  </ul>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 surface-ui-500 rounded">
                <span className="icon icon-20 icon-refresh-02" />
                <div>
                  <p className="text-sm">
                    Contact <a href="#" className="link">Stryda support</a> if you need to update your accounts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
