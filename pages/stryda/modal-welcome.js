import React, { useContext, useState } from "react";

import { UiContext } from "../../contexts/ui.js";
import { VariablesContext } from "../../contexts/variables.js";
import { usePrototypeData } from "../../contexts/prototype.js";
import ModalSelectYourGame from "./modal-selectyourgame.js";

export default function ModalWelcome(props) {
  const uiContext = useContext(UiContext);
  const prototype = usePrototypeData();
  const variablesContext = useContext(VariablesContext);
  const [submitting, setSubmitting] = useState(false);
  const [selectedGamesCount, setSelectedGamesCount] = useState(
    prototype.games.filter((g) => g.isFavorite).length
  );
  const selectedGame = prototype.getGameByID(prototype.defaultGameID);
  const [disabled, setDisable] = useState(false);

  const handlechange = (event) => {
    setSelectedGame(event.target.id);
  };

  function closeModalWithDelay() {
    setSubmitting(true);

    setTimeout(() => {
      uiContext.openToastr({
        size: "medium",
        text: "Favorite games updated",
        color: "green",
        autoDelete: true,
        autoDeleteDelay: 2500,
      });
      uiContext.closeModal();
      setSubmitting(false);
    }, 1000);
  }

  function clearSelectedGame() {
    setSelectedGamesCount(0);
  }

  function openModalSelectYourGame() {
    uiContext.openModal(<ModalSelectYourGame />);
  }

  return (
    <>
      <div className="relative z-10 max-w-md w-full">
        <div className="modal modal-center w-full">
          <button
            type="button"
            className="button button-secondary button-close"
            onClick={uiContext.closeModal}
          >
            <span className="icon icon-e-remove" />
          </button>
          <div className="modal-content">
            <div className="modal-body">
              <h2 className="modal-title">Welcome to Stryda</h2>
              <p>
                A community where you can play, compete and have fun with other
                likeminded players.
              </p>
              <video
                className="surface rounded mt-4"
                autoPlay
                playsInline
                muted
                loop
                preload="true"
              >
                <source
                  type="video/webm"
                  src="https://res.cloudinary.com/gloot/video/upload/v1688385745/Stryda/videos/Stryda_Anouncement_video_1.webm"
                />
                <source
                  type="video/mp4"
                  src="https://res.cloudinary.com/gloot/video/upload/v1688387320/Stryda/videos/Stryda_Anouncement_video_2.mp4"
                />
                <img
                  src="https://res.cloudinary.com/gloot/image/upload/v1688386123/Stryda/illustrations/Welcome_video_thumbnail.png"
                  alt=""
                />
              </video>
              {/*
              <div className="relative">
                <span className="max-lg:hidden absolute icon icon-reply text-5xl text-gradient bg-gradient-to-r from-ui-100/20 to-ui-100/60 -scale-x-110 right-[22%] top-[10%] rotate-[65deg]" />
                <ul className="lg:grid lg:grid-cols-3 gap-x-4">
                  <li className="col-start-2">
                    <img
                      src="https://res.cloudinary.com/gloot/image/upload/v1688384702/Stryda/illustrations/Welcome_Progress_In_Battlepass.png"
                      width="100%"
                      height="auto"
                      alt=""
                      className="mx-auto max-w-xs w-full object-cover object-center"
                    />
                    <p className="leading-tight text-ui-100 px-4">
                      Progress the Battlepass and get rewarded
                    </p>
                  </li>
                  <li className="lg:pt-[70%]">
                    <img
                      src="https://res.cloudinary.com/gloot/image/upload/v1688384702/Stryda/illustrations/Welcome_Complete_Missions.png"
                      width="100%"
                      height="auto"
                      alt=""
                      className="mx-auto max-w-xs w-full object-cover object-center"
                    />
                    <p className="leading-tight text-ui-100 px-4">
                      Reveal and complete Missions
                    </p>
                  </li>
                  <li className="lg:pt-[70%] lg:row-start-1">
                    <img
                      src="https://res.cloudinary.com/gloot/image/upload/v1688384702/Stryda/illustrations/Welcome_Compete_In_Ladders.png"
                      width="100%"
                      height="auto"
                      alt=""
                      className="mx-auto max-w-xs w-full object-cover object-center"
                    />
                    <p className="leading-tight text-ui-100 px-4">
                      Compete in Solo and Clan Ladders
                    </p>
                  </li>
                  <li className="lg:-mt-[40%] lg:col-start-2">
                    <img
                      src="https://res.cloudinary.com/gloot/image/upload/v1688384702/Stryda/illustrations/Welcome_Grow_Your_Profile.png"
                      width="100%"
                      height="auto"
                      alt=""
                      className="mx-auto max-w-xs w-full object-cover object-center"
                    />
                    <p className="leading-tight text-ui-100 px-4">
                      Grow your profile by playing your favorite games
                    </p>
                  </li>
                </ul>
              </div>
  */}
            </div>
            <div className="modal-action">
              <button
                type="button"
                onClick={openModalSelectYourGame}
                className="button w-80 button-primary"
              >
                <span>Continue</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
