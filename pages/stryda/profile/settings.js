import { useContext, useState, useEffect } from "react";

import Ad from "../../../components/Ad/Ad";
import Structure from "../components/Structure";
import { usePrototypeData } from "../../../contexts/prototype";
import { UiContext } from "../../../contexts/ui";
import { useRouter } from "next/router";
import TextareaExpandable from "../../../components/Textarea/TextareaExpandable";
import Tooltip from "../../../components/Tooltip/Tooltip";
import Link from "next/link";
import Avatar from "../../../components/Avatar/Avatar";
import ModalAvatarEdit from "./[user_id]/modal-avataredit";
import ModalBannerEdit from "./[user_id]/modal-banneredit";

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
  const [isValorantConnected, setIsValorantConnected] = useState(false);
  const [isAlreadyValorantConnected, setIsAlreadyValorantConnected] =
    useState(false);
  const [isLoLConnected, setIsLoLConnected] = useState(false);
  const [isLoLRegionSelected, setIsLoLRegionSelected] = useState(false);
  const [isAlreadyLoLConnected, setIsAlreadyLoLConnected] = useState(false);
  const hasAvatarFrame = query.avatarframe || false;
  const hasProfileBanner = query.profilebanner || false;

  function selectLoLRegion(e) {
    const selectLoLRegionTarget = e.target.value;
    setIsLoLRegionSelected(true);
  }

  useEffect(() => {
    setSelectedUser(prototype.getUserByID(1));
  }, []);

  useEffect(() => {
    if (query.connected === "true") {
      setIsValorantConnected(true);
    }
  }, []);

  function addToastWithDelay(toast) {
    setSubmitting(true);

    setTimeout(() => {
      uiContext.openToastr(toast);
      setSubmitting(false);
    }, 1000);
  }

  function openModalAvatarEdit() {
    if (hasAvatarFrame) {
      uiContext.openModal(<ModalAvatarEdit id={hasAvatarFrame} />);
    } else if (selectedUser.shopItems?.avatarFrame) {
      uiContext.openModal(
        <ModalAvatarEdit id={selectedUser.shopItems?.avatarFrame} />
      );
    } else {
      uiContext.openModal(<ModalAvatarEdit id={1} />);
    }
  }

  function openModalBannerEdit() {
    if (hasProfileBanner) {
      uiContext.openModal(<ModalBannerEdit id={hasProfileBanner} />);
    } else if (selectedUser.shopItems?.profileBanner) {
      uiContext.openModal(
        <ModalBannerEdit id={selectedUser.shopItems?.profileBanner} />
      );
    } else {
      uiContext.openModal(<ModalBannerEdit id={1} />);
    }
  }

  return (
    <>
      <Structure title="Profile settings">
        <Ad width="1005" height="124" />

        {selectedUser && (
          <>
          <section className="header header-secondary mt-8">
          <div className="header-bg">
            {selectedUser.isYou ? (
              <div className="flex">
                <div className="relative">
                  <Avatar
                    size="avatar-2xl"
                    id={selectedUser.id}
                    hasTooltip={true}
                    hasTooltipXP={true}
                    tooltipPlacement={"bottom"}
                  />
                  <button
                    onClick={openModalAvatarEdit}
                    type="button"
                    className="button button-tertiary rounded-full absolute z-20 bottom-0 right-0"
                  >
                    <span className="icon icon-pen-2" />
                  </button>
                </div>
              </div>
            ) : (
              <Avatar size="avatar-2xl" id={selectedUser.id} />
            )}
            {selectedUser.isYou && (
              <button
                onClick={openModalBannerEdit}
                type="button"
                className="button button-tertiary rounded-full absolute z-20 top-2 right-2"
              >
                <span className="icon icon-camera" />
              </button>
            )}
            {hasProfileBanner ? (
              <img src={profileBanner?.image} alt={profileBanner?.name} />
            ) : (
              <>
                {selectedUser.shopItems?.profileBanner ? (
                  <>
                    <img
                      src={
                        prototype.getShopitemByID(
                          2,
                          selectedUser.shopItems?.profileBanner
                        ).image
                      }
                      alt=""
                    />
                  </>
                ) : (
                  <>
                    <img
                      src="https://res.cloudinary.com/gloot/image/upload/v1672241804/Stryda/illustrations/Generic_bg.png"
                      alt=""
                    />
                  </>
                )}
              </>
            )}
          </div>
          </section>
            <section className="mt-4 mb-8">
              {/*
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
                */}
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
                        <TextareaExpandable text={selectedUser.bio} rows={10} />
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
                          <label htmlFor="social-steam">Valorant</label>
                          <div className="flex-3">
                            {isValorantConnected ? (
                              <>
                                {isAlreadyValorantConnected ? (
                                  <div className="space-y-3">
                                    <div className="flex items-center gap-3 text-attention-500">
                                      <span className="icon text-xl icon-warning-sign" />
                                      <p>
                                        This Valorant account is already connected
                                        to a Stryda account. Click the following
                                        button to generate a recovery e-mail for
                                        that address.
                                      </p>
                                    </div>
                                    <button
                                      type="button"
                                      onClick={() => {
                                        setIsValorantConnected(
                                          !isValorantConnected
                                        );
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
                                  <div className="flex gap-4 items-center">
                                    <div
                                      className="flex-1 input-group cursor-pointer"
                                      onClick={() =>
                                        setIsAlreadyValorantConnected(
                                          !isAlreadyValorantConnected
                                        )
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
                                        <div className="max-w-xs text-sm">
                                          If you have updated your Valorant account
                                          recently, it can take up to 15 minutes to
                                          see the changes.
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
                                  onClick={() =>
                                    setIsValorantConnected(!isValorantConnected)
                                  }
                                  className="button button-primary w-full"
                                >
                                  <span className="icon icon-game-valorant-symbol" />
                                  <span>Connect my account</span>
                                </button>
                                <p className="text-ui-300 text-sm mt-2 leading-tight">
                                  By connecting my Valorant account I acknowledge
                                  making my profile public to all users.
                                </p>
                              </>
                            )}
                          </div>
                        </div>
                        <div className="form-group">
                          <label htmlFor="social-steam">League of Legends</label>
                          <div className="flex-3">
                            {isLoLConnected ? (
                              <>
                                {isAlreadyLoLConnected ? (
                                  <div className="space-y-3">
                                    <div className="flex items-center gap-3 text-attention-500">
                                      <span className="icon text-xl icon-warning-sign" />
                                      <p>
                                        This League of Legends account is already
                                        connected to a Stryda account. Click the
                                        following button to generate a recovery
                                        e-mail for that address.
                                      </p>
                                    </div>
                                    <button
                                      type="button"
                                      onClick={() => {
                                        setIsLoLRegionSelected(false);
                                        setIsLoLConnected(!isLoLConnected);
                                        setIsAlreadyLoLConnected(
                                          !isAlreadyLoLConnected
                                        );
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
                                        setIsAlreadyLoLConnected(
                                          !isAlreadyLoLConnected
                                        )
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
                                        <div className="max-w-xs text-sm">
                                          If you have updated your League of Legends
                                          account recently, it can take up to 15
                                          minutes to see the changes.
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
                                  By connecting my League of Legends account I
                                  acknowledge making my profile public to all users.
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
                    <Link href={`/prototype/profile/1${prototype.getURLparams()}`}>
                      <button type="button" className="button button-secondary">
                        <span>Cancel</span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}

      </Structure>
    </>
  );
}
