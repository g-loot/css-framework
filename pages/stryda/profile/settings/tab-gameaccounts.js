import React, { useEffect, useState, useContext } from "react";

import { UiContext } from "@/contexts/ui";
import { usePrototypeData } from "@/contexts/prototype";
import { useRouter } from "next/router";
import Tooltip from "@/components/Tooltip/Tooltip";

export default function TabSettingsGameAccounts() {
  const router = useRouter();
  const { query } = useRouter();
  const prototype = usePrototypeData();
  const uiContext = useContext(UiContext);
  const [selectedUser, setSelectedUser] = useState(prototype.getUserByID(1));
  const [isPUBGConnected, setIsPUBGConnected] = useState(false);
  const [isAlreadyPUBGConnected, setIsAlreadyPUBGConnected] = useState(false);
  const [isValorantConnected, setIsValorantConnected] = useState(false);
  const [isAlreadyValorantConnected, setIsAlreadyValorantConnected] =
    useState(false);
  const [isFortniteConnected, setIsFortniteConnected] = useState(false);
  const [isAlreadyFortniteConnected, setIsAlreadyFortniteConnected] =
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
                      <button
                        type="button"
                        onClick={() =>
                          setIsValorantConnected(!isValorantConnected)
                        }
                        className="button button-primary w-full"
                      >
                        <span className="icon icon-game-valorant-symbol" />
                        <span>Connect my account</span>
                      </button>
                      {/* <div className="input-group">
                        <button
                          type="button"
                          className="button button-secondary button-sm"
                          onClick={() =>
                            setIsValorantConnected(!isValorantConnected)
                          }
                        >
                          <span>Connect account</span>
                        </button>
                        <input
                          readOnly
                          type="text"
                          name="game-valorant"
                          id="game-valorant"
                        />
                      </div> */}
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
                      <button
                        type="button"
                        onClick={() => setIsLoLConnected(!isLoLConnected)}
                        className="button button-primary w-full"
                      >
                        <span className="icon icon-game-leagueoflegends-symbol" />
                        <span>Connect my account</span>
                      </button>
                      {/* <div className="form-group form-select mb-2">
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
                      </button> */}
                    </>
                  )}
                </div>
              </div>
              {/* <div className="form-group">
                <label htmlFor="game-fortnite">
                  <span className="icon icon-game-fortnite-symbol text-game-fortnite" />
                  <span className="flex-1">Fortnite</span>
                  {isFortniteConnected && (
                    <div className="chip chip-xs chip-status chip-success animate-slide-in-bottom">
                      <span className="icon icon-check" />
                      <span>Connected</span>
                    </div>
                  )}
                </label>
                <div>
                  {isFortniteConnected ? (
                    <>
                      {isAlreadyFortniteConnected ? (
                        <div className="space-y-3">
                          <div className="flex items-center gap-3 text-attention-500">
                            <span className="icon text-xl icon-warning-sign" />
                            <p className="text-sm leading-tight">
                              This Fortnite account is already connected to a
                              Stryda account. Click the following button to
                              generate a recovery e-mail for that address.
                            </p>
                          </div>
                          <button
                            type="button"
                            onClick={() => {
                              setIsFortniteConnected(!isFortniteConnected);
                              setIsAlreadyFortniteConnected(
                                !isAlreadyFortniteConnected
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
                            setIsAlreadyFortniteConnected(
                              !isAlreadyFortniteConnected
                            )
                          }
                        >
                          <input
                            type="text"
                            name="game-fortnite"
                            id="game-fortnite"
                            readOnly
                            disabled
                            value={`${selectedUser.socials.riotValorantNickname}#${selectedUser.socials.riotValorantHashtag}`}
                          />
                          <span>
                            <Tooltip
                              tooltip={
                                <>
                                  If you have updated your Fortnite account
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
                          className="button button-secondary button-sm"
                          onClick={() =>
                            setIsFortniteConnected(!isFortniteConnected)
                          }
                        >
                          <span>Connect account</span>
                        </button>
                        <input
                          readOnly
                          type="text"
                          name="game-fortnite"
                          id="game-fortnite"
                        />
                      </div>
                    </>
                  )}
                </div>
              </div> */}
              <div className="form-group">
                <label htmlFor="game-pubg">
                  <span className="icon icon-game-pubg-symbol text-game-pubg" />
                  <span className="flex-1">PUBG: BATTLEGROUNDS</span>
                  {isPUBGConnected && (
                    <div className="chip chip-xs chip-status chip-success animate-slide-in-bottom">
                      <span className="icon icon-check" />
                      <span>Connected</span>
                    </div>
                  )}
                </label>
                <div>
                  {isPUBGConnected ? (
                    <>
                      {isAlreadyPUBGConnected ? (
                        <div className="space-y-3">
                          <div className="flex items-center gap-3 text-attention-500">
                            <span className="icon text-xl icon-warning-sign" />
                            <p className="text-sm leading-tight">
                              This PUBG: BATTLEGROUNDS account is already
                              connected to a Stryda account. Click the following
                              button to generate a recovery e-mail for that
                              address.
                            </p>
                          </div>
                          <button
                            type="button"
                            onClick={() => {
                              setIsPUBGConnected(!isPUBGConnected);
                              setIsAlreadyPUBGConnected(
                                !isAlreadyPUBGConnected
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
                            setIsAlreadyPUBGConnected(!isAlreadyPUBGConnected)
                          }
                        >
                          <input
                            type="text"
                            name="game-pubg"
                            id="game-pubg"
                            readOnly
                            disabled
                            value={`${selectedUser.socials.riotValorantNickname}#${selectedUser.socials.riotValorantHashtag}`}
                          />
                          <span>
                            <Tooltip
                              tooltip={
                                <>
                                  If you have updated your PUBG: BATTLEGROUNDS
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
                      <button
                        type="button"
                        onClick={() => setIsPUBGConnected(!isPUBGConnected)}
                        className="button button-primary w-full"
                      >
                        <span className="icon icon-game-pubg-symbol" />
                        <span>Connect my account</span>
                      </button>
                      {/* <div className="input-group">
                        <button
                          type="button"
                          className="button button-secondary button-sm"
                          onClick={() => setIsPUBGConnected(!isPUBGConnected)}
                        >
                          <span>Connect account</span>
                        </button>
                        <input type="text" name="game-pubg" id="game-pubg" />
                      </div> */}
                    </>
                  )}
                </div>
              </div>
              <p className="mb-12 text-sm">
                By connecting my game accounts I acknowledge making those
                profiles public to all users.
              </p>
            </div>
            <div className="w-full xl:w-72 order-1 xl:order-2 space-y-4">
              {!isValorantConnected &&
                !isLoLConnected &&
                !isFortniteConnected &&
                !isPUBGConnected && (
                  <div className="flex flex-col items-center gap-4 p-4 surface-ui-500 rounded">
                    <span className="icon text-3xl icon-c-info" />
                    <div>
                      <h5 className="text-sm mb-2">
                        Connecting a game allows you to:
                      </h5>
                      <ul className="list-outside ml-2 pl-1 space-y-1 list-disc text-sm">
                        <li>
                          Get Recap videos of your best moments after each
                          match.
                        </li>
                        <li>
                          Unlock Stryda Ladders and Missions to progress in the
                          Battle Pass and earn rewards.
                        </li>
                        <li>Get stats from all your matches.</li>
                      </ul>
                    </div>
                  </div>
                )}
              <div className="flex flex-col items-center gap-4 p-4 surface-ui-500 rounded">
                <span className="icon text-3xl icon-c-question" />
                <h5 className="text-base">Need to update accounts?</h5>
                <button
                  type="button"
                  className="button button-secondary button-sm"
                >
                  <span>Contact support</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
