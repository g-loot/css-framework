import React, { useEffect, useState, useContext } from "react";

import { UiContext } from "@/contexts/ui";
import { usePrototypeData } from "@/contexts/prototype";
import { useRouter } from "next/router";
import TextareaExpandable from "@/components/Textarea/TextareaExpandable";
import Link from "next/link";
import Tooltip from "@/components/Tooltip/Tooltip";
import ButtonFeedback from "@/components/Button/ButtonFeedback";

export default function TabSettingsAppSettings() {
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
  const [inputValue, setInputValue] = useState(30);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      {selectedUser && (
        <div className="max-w-md mx-auto">
          <h2 className="mb-8">App settings</h2>
          <div className="space-y-8 mb-12">
            <h3>General</h3>
            <div className="form-group">
              <label htmlFor="client-version">Client version</label>
              <div className="input-group">
                <input
                  type="text"
                  name="client-version"
                  id="client-version"
                  value="0.0.71"
                  readOnly
                  disabled
                />
                <Tooltip
                  placement="top"
                  tooltip={
                    <span className="text-sm">
                      Click to copy Client version
                    </span>
                  }
                >
                  <ButtonFeedback
                    value="0.0.71"
                    variant="button-ghost rounded-full"
                    icon="icon-document-copy"
                    message="Client version copied to your clipboard"
                  />
                </Tooltip>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="client-id">Client ID</label>
              <div className="input-group">
                <input
                  type="text"
                  name="client-id"
                  id="client-id"
                  value="4728301928412"
                  readOnly
                  disabled
                />
                <Tooltip
                  placement="top"
                  tooltip={
                    <span className="text-sm">Click to copy Client ID</span>
                  }
                >
                  <ButtonFeedback
                    value="4728301928412"
                    variant="button-ghost rounded-full"
                    icon="icon-document-copy"
                    message="Client ID copied to your clipboard"
                  />
                </Tooltip>
              </div>
            </div>
            <div className="space-y-1">
              <div className="form-toggle form-full">
                <input
                  defaultChecked
                  type="checkbox"
                  name="desktop-notification"
                  id="desktop-notification"
                />
                <label htmlFor="desktop-notification">
                  <span>Desktop notification</span>
                  <span className="form-indicator" />
                </label>
              </div>
              <p className="text-sm text-ui-300">
                Stryda can send notifications in Windows to notify you on
                important updates on the platform so you can stay up-to-date in
                your latest competitions and more.
              </p>
            </div>
            <div className="space-y-1">
              <div className="form-toggle form-full">
                <input
                  defaultChecked
                  type="checkbox"
                  name="run-startup"
                  id="run-startup"
                />
                <label htmlFor="run-startup">
                  <span>Run Stryda on startup</span>
                  <span className="form-indicator" />
                </label>
              </div>
              <p className="text-sm text-ui-300">
                Start Stryda when starting my computer.
              </p>
            </div>
          </div>
          <hr className="my-8" />
          <div className="space-y-8 mb-12">
            <h3>Stryda Recap video recorder</h3>
            <div className="space-y-1">
              <div className="form-toggle form-full">
                <input
                  defaultChecked
                  type="checkbox"
                  name="recap-recorder"
                  id="recap-recorder"
                />
                <label htmlFor="recap-recorder">
                  <span>Stryda Recap video recorder</span>
                  <span className="form-indicator" />
                </label>
              </div>
              <p className="text-sm text-ui-300">
                The Stryda AI video recorder makes it possible to record in-game
                play and create video recaps on your profile. By turning it on
                you agree that Stryda can record your screen and sound while
                playing your game to create video recaps.
              </p>
            </div>
            <div className="space-y-1">
              <div className="form-toggle form-full">
                <input
                  defaultChecked
                  type="checkbox"
                  name="automatic-recap"
                  id="automatic-recap"
                />
                <label htmlFor="automatic-recap">
                  <span>Automatically turn matches into recap videos</span>
                  <span className="form-indicator" />
                </label>
              </div>
              <p className="text-sm text-ui-300">
                Stryda can either automatically create recap videos for you
                after every completed match in your game, or you can create them
                manually.
              </p>
            </div>
            <div className="form-group">
              <label className="text-base">
                Choose where to save the match recordings
              </label>
              <button
                type="button"
                className="flex h-11 items-stretch gap-0 justify-start group overflow-hidden w-full max-w-[100%]"
              >
                <div className="relative flex items-center z-10 p-0 bg-ui-600 cursor-pointer px-4 rounded-l-sm border border-ui-500 font-bold w-full text-sm text-ui-200 whitespace-nowrap flex-[0] group-hover:text-ui-100 group-hover:bg-ui-500 group-hover:border-ui-400 focus:outline-none group-active:text-ui-100 group-active:bg-ui-500 group-active:border-ui-300">
                  <span>Choose folder</span>
                </div>
                <div className="relative inline-flex items-center z-0 rounded-r w-full -ml-px bg-ui-700 border border-ui-500 shadow-[inset_2px_2px_6px_0px_rgb(0,0,0,0.25)] focus-visible:-outline-offset-1 focus-visible:outline focus-visible:outline-1 focus-visible:outline-ui-300 focus-visible:z-20 p-2 text-sm truncate child:truncate group-hover:text-ui-100 group-hover:bg-ui-500 group-hover:border-ui-400 group-hover:z-20 focus:outline-none group-active:text-ui-100 group-active:bg-ui-500 group-active:border-ui-300 group-active:z-20">
                  <span>
                    C:\Program Files\My Softwares\Gaming\Esports\Recording
                    Devices\
                  </span>
                </div>
              </button>
            </div>
            <div className="form-group">
              <label className="text-base" for="range">
                Allocated space
              </label>
              <ul className="space-y-1 mt-2 mb-3 list-outside list-disc pl-4 text-sm text-ui-300">
                <li>
                  More hours of gameplay require more allocated space on your
                  drive.
                </li>
                <li>
                  When the storage hits its maximum space, the oldest recording
                  gets removed.
                </li>
              </ul>
              <div className="flex items-start gap-6 leading-none">
                <div className="flex-1">
                  <input
                    type="range"
                    className="form-range"
                    id="range"
                    min="10"
                    max="100"
                    value={inputValue}
                    onChange={handleInputChange}
                    step="10"
                  />
                  <div className="w-full flex justify-between text-xs text-ui-400 px-2">
                    <span className="h-2 w-px bg-ui-400/20" />
                    <span className="h-2 w-px bg-ui-400/20" />
                    <span className="h-2 w-px bg-ui-400/20" />
                    <span className="h-2 w-px bg-ui-400/20" />
                    <span className="h-2 w-px bg-ui-400/20" />
                    <span className="h-2 w-px bg-ui-400/20" />
                    <span className="h-2 w-px bg-ui-400/20" />
                    <span className="h-2 w-px bg-ui-400/20" />
                    <span className="h-2 w-px bg-ui-400/20" />
                  </div>
                </div>
                <div
                  className={`flex-none whitespace-nowrap ${
                    inputValue < 30 ? "text-error-500" : ""
                  }`}
                >
                  {inputValue} GB
                </div>
              </div>
              <div
                className={`text-xs ${
                  inputValue < 30
                    ? "text-error-300 animate-shake"
                    : "text-ui-300"
                }`}
              >
                {inputValue} GB ≈ {Math.round(inputValue * 3.75)} min. of
                gameplay
              </div>
            </div>
            <div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 justify-between">
                  <label className="text-base">Recordings</label>
                  <Link href={`/stryda/profile/settings?tab=game-accounts`}>
                    <button
                      type="button"
                      className="button button-secondary button-sm"
                    >
                      <span>Manage game accounts</span>
                    </button>
                  </Link>
                </div>
                <div className="form-toggle form-full">
                  <input
                    defaultChecked
                    type="checkbox"
                    name="recordings-valorant"
                    id="recordings-valorant"
                  />
                  <label htmlFor="recordings-valorant">
                    <span className="rounded bg-ui-900 flex items-center justify-center p-1">
                      <span className="icon icon-game-valorant-symbol text-game-valorant text-xl" />
                    </span>
                    <span>VALORANT</span>
                    <span
                      className="form-indicator"
                      data-on="Recordings are on"
                      data-off="Recordings are off"
                    />
                  </label>
                </div>
                <div className="form-toggle form-full">
                  <input
                    defaultChecked
                    type="checkbox"
                    name="recordings-leagueoflegends"
                    id="recordings-leagueoflegends"
                  />
                  <label htmlFor="recordings-leagueoflegends">
                    <span className="rounded bg-ui-900 flex items-center justify-center p-1">
                      <span className="icon icon-game-leagueoflegends-symbol text-game-leagueoflegends text-xl" />
                    </span>
                    <span>League of Legends</span>
                    <span
                      className="form-indicator"
                      data-on="Recordings are on"
                      data-off="Recordings are off"
                    />
                  </label>
                </div>
                <div className="form-toggle form-full">
                  <input
                    defaultChecked
                    type="checkbox"
                    name="recordings-pubg"
                    id="recordings-pubg"
                  />
                  <label htmlFor="recordings-pubg">
                    <span className="rounded bg-ui-900 flex items-center justify-center p-1">
                      <span className="icon icon-game-pubg-symbol text-game-pubg text-xl" />
                    </span>
                    <span>PUBG: Battlegrounds</span>
                    <span
                      className="form-indicator"
                      data-on="Recordings are on"
                      data-off="Recordings are off"
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
