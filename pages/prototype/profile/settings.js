import { useContext, useState, useEffect } from "react";

import Accordion from "../../../components/Accordion/Accordion";
import Ad from "../../../components/Ad/Ad";
import PrototypeStructure from "../../../components/Prototype/PrototypeStructure";
import { usePrototypeData } from "../../../contexts/prototype";
import { UiContext } from "../../../contexts/ui";
import { useRouter } from "next/router";
import TextareaExpandable from "../../../components/Textarea/TextareaExpandable";
import Tooltip from "../../../components/Tooltip/Tooltip";
import Link from "next/link";

export default function Home() {
  const router = useRouter();
  const uiContext = useContext(UiContext);
  const [submitting, setSubmitting] = useState(false);
  const { query } = useRouter();
  const [buttonFeedbackMessage1, setButtonFeedbackMessage1] = useState("");
  const [buttonFeedbackMessage2, setButtonFeedbackMessage2] = useState("");
  const delay = 4000;
  const prototype = usePrototypeData();
  const [selectedUser, setSelectedUser] = useState(prototype.getUserByID(1));
  const [isConnected, setIsConnected] = useState(false);
  const [isAlreadyConnected, setIsAlreadyConnected] = useState(false);

  useEffect(() => {
    setSelectedUser(prototype.getUserByID(1));
  }, []);

  useEffect(() => {
    if (query.connected === "true") {
      setIsConnected(true);
    }
  }, []);

  function buttonFeedback1(message) {
    setButtonFeedbackMessage1(message);
    setTimeout(() => {
      setButtonFeedbackMessage1("");
    }, delay);
    return;
  }
  function buttonFeedback2(message) {
    setButtonFeedbackMessage2(message);
    setTimeout(() => {
      setButtonFeedbackMessage2("");
    }, delay);
    return;
  }

  function addToastWithDelay(toast) {
    setSubmitting(true);

    setTimeout(() => {
      uiContext.openToastr(toast);
      setSubmitting(false);
    }, 1000);
  }

  return (
    <>
      <PrototypeStructure title="Profile settings">
        <Ad width="1005" height="124" />

        <section>
          <div className="flex justify-center items-center gap-4 -mb-8 relative z-10">
            <div className="relative">
              <div className="avatar avatar-xl avatar-circle z-0">
                <div>
                  <img src={selectedUser.avatar} />
                </div>
              </div>
              <div className="form-group absolute z-10 bottom-0 right-0">
                <label
                  htmlFor="file-button"
                  className="button button-sm button-tertiary rounded-full"
                >
                  <span className="icon icon-camera" />
                </label>
                <input
                  type="file"
                  name="file-button"
                  id="file-button"
                  aria-describedby="file_input_help"
                />
              </div>
            </div>
          </div>
          <div className="surface surface-halo halo-t sm:rounded-lg p-4 pt-12 sm:p-8 sm:pt-16 relative z-0">
            <div className="max-w-lg mx-auto">
              <div className="grid xl:grid-cols-2 gap-16">
                <div className="space-y-4">
                  <h2 className="h5">My details</h2>
                  <div className="form-group">
                    <label htmlFor="account-username">Username</label>
                    <input
                      type="text"
                      name="account-username"
                      id="account-username"
                      value={selectedUser.nickname}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="account-email">Email</label>
                    <input
                      type="email"
                      name="account-email"
                      id="account-email"
                      value={selectedUser.email}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-ui-300">
                      <span className="label">Stryda ID:</span>
                      <span className="tooltip" data-tooltip="Copy">
                        <code
                          className="interactive text-xs"
                          onClick={() => {
                            uiContext.openToastr({
                              size: "small",
                              text: "Stryda ID copied to your clipboard",
                              color: "green",
                              autoDelete: true,
                              autoDeleteDelay: 2500,
                            });
                            navigator.clipboard.writeText("4769554309840896");
                          }}
                        >
                          4769554309840896
                        </code>
                      </span>
                    </div>
                    <button
                      type="button"
                      className="button button-sm button-secondary"
                    >
                      <span>Change password</span>
                    </button>
                  </div>
                  <div className="form-group">
                    <label htmlFor="first-name">Your bio</label>
                    <TextareaExpandable text={selectedUser.bio} rows={7} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="account-country">Country</label>
                    <div className="flex justify-center items-center gap-2 border border-ui-600 rounded p-2">
                      <div className="w-6 flex justify-center">
                        <img
                          src="https://flagcdn.com/tt.svg"
                          className="aspect-video rounded-sm max-w-[1.5rem]"
                        />
                      </div>
                      <span className="text-ui-300">Trinidad and Tobago</span>
                      <button
                        className="tooltip tooltip-bottom text-ui-300 text-0"
                        data-tooltip="Contact support to change your country."
                      >
                        <span className="icon icon-16 icon-c-info" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="space-y-8">
                  <div className="space-y-4">
                    <h2 className="h5">My social links</h2>
                    <div className="form-group">
                      <label htmlFor="social-twitch">Twitch</label>
                      <div className="input-group">
                        <span className="icon icon-twitch" />
                        <input
                          type="text"
                          name="social-twitch"
                          id="social-twitch"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="social-twitter">Twitter</label>
                      <div className="input-group">
                        <span className="icon icon-logo-twitter" />
                        <input
                          type="text"
                          name="social-twitter"
                          id="social-twitter"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="social-discord">Discord</label>
                      <div className="flex-3">
                        <button className="button button-primary w-full">
                          <span className="icon icon-discord" />
                          <span>Connect my Discord account</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex gap-2">
                      <h2 className="h5">Game accounts</h2>
                      <button
                        className="tooltip tooltip-bottom text-ui-300 text-0"
                        data-tooltip="Contact support if you need to update your game accounts."
                      >
                        <span className="icon icon-16 icon-c-info" />
                      </button>
                    </div>
                    <div className="form-group">
                      <label htmlFor="social-steam">Steam</label>
                      <div className="flex-3">
                        <button className="button button-primary w-full">
                          <span className="icon icon-steam" />
                          <span>Connect my Steam account</span>
                        </button>
                        <p className="text-ui-300 text-sm mt-2 leading-tight">
                          This site is not associated with Valve Corp.
                        </p>
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="social-steam">Riot</label>
                      <div className="flex-3">
                        {isConnected ? (
                          <>
                            {isAlreadyConnected ? (
                              <div className="space-y-3">
                                <div className="flex items-center gap-3 text-attention-500">
                                  <span className="icon text-xl icon-warning-sign" />
                                  <p>
                                    This Valorant account is already connected to a
                                    Stryda account. Click the following button
                                    to generate a recovery e-mail for that
                                    address.
                                  </p>
                                </div>
                                <button
                                  type="button"
                                  onClick={() => {
                                    setIsConnected(!isConnected);
                                    setIsAlreadyConnected(!isAlreadyConnected);
                                  }}
                                  className="button button-primary w-full"
                                >
                                  <span>Send recovery email</span>
                                </button>
                              </div>
                            ) : (
                              <div className="flex gap-4 items-center">
                                <div
                                  className="flex-1 input-group cursor-pointer"
                                  onClick={() =>
                                    setIsAlreadyConnected(!isAlreadyConnected)
                                  }
                                >
                                  <span>
                                    <span className="icon icon-game-valorant-symbol" />
                                  </span>
                                  <input
                                    type="text"
                                    name="gameaccount-valorant"
                                    id="gameaccount-valorant"
                                    disabled
                                    value="myvalorantaccount#3827"
                                  />
                                </div>
                                <Tooltip
                                  tooltip={
                                    <div className="max-w-xs">
                                      If you have updated your Valorant account recently,
                                      it can take up to 15 minutes to see the
                                      changes.
                                    </div>
                                  }
                                >
                                  <span className="icon icon-c-info" />
                                </Tooltip>
                              </div>
                            )}
                          </>
                        ) : (
                          <>
                            <button
                              type="button"
                              onClick={() => setIsConnected(!isConnected)}
                              className="button button-primary w-full"
                            >
                              <span className="icon icon-game-valorant-symbol" />
                              <span>Connect my account</span>
                            </button>
                            <p className="text-ui-300 text-sm mt-2 leading-tight">
                              By connecting my Valorant account I acknowledge making my
                              profile public to all users.
                            </p>
                          </>
                        )}
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="social-steam">League of Legends</label>
                      <div className="flex-3">
                        {isConnected ? (
                          <>
                            {isAlreadyConnected ? (
                              <div className="space-y-3">
                                <div className="flex items-center gap-3 text-attention-500">
                                  <span className="icon text-xl icon-warning-sign" />
                                  <p>
                                    This League of Legends account is already connected to a
                                    Stryda account. Click the following button
                                    to generate a recovery e-mail for that
                                    address.
                                  </p>
                                </div>
                                <button
                                  type="button"
                                  onClick={() => {
                                    setIsConnected(!isConnected);
                                    setIsAlreadyConnected(!isAlreadyConnected);
                                  }}
                                  className="button button-primary w-full"
                                >
                                  <span>Send recovery email</span>
                                </button>
                              </div>
                            ) : (
                              <div className="flex gap-4 items-center">
                                <div
                                  className="flex-1 input-group cursor-pointer"
                                  onClick={() =>
                                    setIsAlreadyConnected(!isAlreadyConnected)
                                  }
                                >
                                  <span>
                                    <span className="icon icon-game-leagueoflegends-symbol" />
                                  </span>
                                  <input
                                    type="text"
                                    name="gameaccount-leagueoflegends"
                                    id="gameaccount-leagueoflegends"
                                    disabled
                                    value="mylolaccount#3827"
                                  />
                                </div>
                                <Tooltip
                                  tooltip={
                                    <div className="max-w-xs">
                                      If you have updated your League of Legends account recently,
                                      it can take up to 15 minutes to see the
                                      changes.
                                    </div>
                                  }
                                >
                                  <span className="icon icon-c-info" />
                                </Tooltip>
                              </div>
                            )}
                          </>
                        ) : (
                          <>
                            <button
                              type="button"
                              onClick={() => setIsConnected(!isConnected)}
                              className="button button-primary w-full"
                            >
                              <span className="icon icon-game-leagueoflegends-symbol" />
                              <span>Connect my account</span>
                            </button>
                            <p className="text-ui-300 text-sm mt-2 leading-tight">
                              By connecting my League of Legends I acknowledge making my
                              profile public to all users.
                            </p>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="my-8" />
              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  className={`button button-primary ${
                    submitting ? "is-loading" : ""
                  }`}
                  onClick={addToastWithDelay.bind(this, {
                    title: "Success",
                    icon: "f-check",
                    color: "green",
                    text: "Settings saved successfully.",
                    autoDelete: true,
                    autoDeleteDelay: 5000,
                  })}
                >
                  <span>Save changes</span>
                </button>
                <Link href={`/prototype/profile/1`}>
                  <button type="button" className="button button-secondary">
                    <span>Cancel</span>
                  </button>
                </Link>
                {/*
                <button
                  type="button"
                  className="button button-secondary"
                  data-feedback-icon="success"
                  data-feedback={buttonFeedbackMessage1}
                  onClick={buttonFeedback1.bind(this, "Settings reset")}
                >
                  <span>Cancel</span>
                </button>
                */}
              </div>
            </div>
          </div>
          <div className="accordion accordion-highlighted surface sm:rounded-lg hidden">
            {/*
            <Accordion
              header={
                <>
                  <div className="item">
                    <div className="item-body">
                      <div className="py-1 px-2 item-title text-xl">
                        Stryda &amp; game accounts
                      </div>
                    </div>
                    <div className="item-actions">
                      <div>
                        <span className="icon icon-24 icon-arrow-sm-down" />
                      </div>
                    </div>
                  </div>
                </>
              }
            >
              <div className="p-4 md:p-8">
                <div className="max-w-lg mx-auto">
                  <div className="space-y-4">
                    <div className="flex gap-2">
                      <h2 className="h5">Game ID&#39;s</h2>
                      <button
                        className="tooltip tooltip-bottom text-ui-300 text-0"
                        data-tooltip="Your in-game nickname is necessary if you want to join Stryda tournaments"
                      >
                        <span className="icon icon-16 icon-c-info" />
                      </button>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4 md:gap-16">
                      <div className="form-group-1">
                        <label htmlFor="game-apex">
                          Apex Legends Nickname:
                        </label>
                        <input type="text" name="game-apex" id="game-apex" />
                      </div>
                      <div className="form-group-1">
                        <label htmlFor="game-pubg">
                          PUBG BATTLEGROUNDS Nickname:
                        </label>
                        <input type="text" name="game-pubg" id="game-pubg" />
                      </div>
                    </div>
                  </div>
                  <hr className="my-8 opacity-50" />
                  <div className="flex justify-end gap-4">
                    <button
                      type="button"
                      className={`button button-primary ${
                        submitting ? "is-loading" : ""
                      }`}
                      onClick={addToastWithDelay.bind(this, {
                        title: "Success",
                        icon: "f-check",
                        color: "green",
                        text: "Settings saved successfully.",
                        autoDelete: true,
                        autoDeleteDelay: 5000,
                      })}
                    >
                      <span>Save changes</span>
                    </button>
                    <button
                      type="button"
                      className="button button-secondary"
                      data-feedback-icon="success"
                      data-feedback={buttonFeedbackMessage2}
                      onClick={buttonFeedback2.bind(this, "Settings reset")}
                    >
                      <span>Reset</span>
                    </button>
                  </div>
                </div>
              </div>
            </Accordion>
                    */}

            {/* 
            <Accordion
              header={
                <>
                  <div className="item">
                    <div className="item-body">
                      <div className="py-1 px-2 item-title text-xl">
                        Data Privacy
                      </div>
                    </div>
                    <div className="item-actions">
                      <div>
                        <span className="icon icon-24 icon-arrow-sm-down" />
                      </div>
                    </div>
                  </div>
                </>
              }
            >
              <div className="p-4 md:p-8">
                <div className="max-w-lg mx-auto">
                  <div className="grid xl:grid-cols-2 gap-16">
                    <div className="space-y-4">
                      <p className="leading-relaxed">
                        To make Stryda better we collect information from you as
                        visitor with help from cookies. We also conduct relevant
                        marketing of Stryda&lsquo;s services within Meta,
                        Google, Adroll, Snapchat and Bing&lsquo;s network. Read
                        more in our{" "}
                        <a href="#" className="link" target="_blank">
                          Privacy Policy
                        </a>
                        . <br />
                        Here you can consent to share your data with the
                        following partners:
                      </p>
                    </div>
                    <div className="space-y-4">
                      <div className="form-group">
                        <label className="form-toggle">
                          <input type="checkbox" name="data-meta" />
                          <i className="form-icon" /> Meta
                        </label>
                        <label className="form-toggle">
                          <input type="checkbox" name="data-google" />
                          <i className="form-icon" /> Google
                        </label>
                        <label className="form-toggle">
                          <input type="checkbox" name="data-adroll" />
                          <i className="form-icon" /> Adroll
                        </label>
                        <label className="form-toggle">
                          <input type="checkbox" name="data-bing" />
                          <i className="form-icon" /> Bing
                        </label>
                        <label className="form-toggle">
                          <input type="checkbox" name="data-quantcast" />
                          <i className="form-icon" /> Quantcast
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Accordion>
            */}
          </div>
        </section>
      </PrototypeStructure>
    </>
  );
}
