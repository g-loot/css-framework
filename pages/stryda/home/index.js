import React, { useContext, useState, useEffect } from "react";

import { UiContext } from "@/contexts/ui";
import { useRouter } from "next/router";

import { usePrototypeData } from "@/contexts/prototype";
import WidgetUser from "@/pages/stryda/components/WidgetUser";
import Structure from "@/pages/stryda/components/Structure";
import Loader from "@/pages/stryda/components/Loader";
import Feed from "@/pages/stryda/components/Feed";
import { VariablesContext } from "@/contexts/variables";
import WidgetCompetitions from "../components/WidgetCompetitions";
import WidgetBattlepass from "../components/WidgetBattlepass";
import WidgetMissions from "../components/WidgetMissions";
import WidgetFollowings from "../components/WidgetFollowings";
import WidgetAdPremium from "../components/WidgetAdPremium";
import WidgetAdShop from "../components/WidgetAdShop";
import ModalUpdateClient from "../modal-updateclient";

export default function Home() {
  const router = useRouter();
  const { query } = useRouter();
  const uiContext = useContext(UiContext);
  const prototype = usePrototypeData();
  const variablesContext = useContext(VariablesContext);
  const empty = query.empty === "true" ? true : false;
  const [isEmpty, setIsEmpty] = useState(empty);
  const [stateUser, setStateUser] = useState("normal");
  const [stateBattlepass, setStateBattlepass] = useState("normal");
  const [stateMissions, setStateMissions] = useState("normal");
  const [stateCompetitions, setStateCompetitions] = useState("normal");
  const [stateFollowings, setStateFollowings] = useState("normal");
  const [stateFeedAd, setStateFeedAd] = useState("normal");
  const [hasError, setHasError] = useState(false);
  const modalUpdateClient =
    query.modalupdater === "true" ? true : false;

  function openModalUpdateClient() {
    uiContext.openModal(<ModalUpdateClient />);
  }

  useEffect(() => {
    if (modalUpdateClient) {
      openModalUpdateClient();
    }
  }, [modalUpdateClient]);

  return (
    <>
      <Structure title="Home" fullWidth={true}>
        <Loader
          loader={
            <section className="min-h-screen w-full flex flex-col sm:px-4 md:flex-row md:justify-around gap-8 lg:gap-14 py-8">
              <div className="flex-none w-80 space-y-4 hidden md:block rounded surface is-loading min-h-[calc(100vh-116px)]" />
              <div className="flex-1 overflow-x-hidden">
                <div className="max-w-[400px] md:max-w-[620px] mx-auto space-y-4">
                  <div className="flex-1 rounded surface is-loading aspect-video" />
                  <div className="flex-1 rounded surface is-loading aspect-video" />
                  <div className="flex-1 rounded surface is-loading aspect-video" />
                  <div className="flex-1 rounded surface is-loading aspect-video" />
                </div>
              </div>
              <div className="flex-none w-80 hidden xl:block rounded surface is-loading min-h-[calc(100vh-116px)]" />
            </section>
          }
        >
          <section className="min-h-screen w-full flex flex-col sm:px-4 md:flex-row md:justify-around gap-8 lg:gap-14 py-8">
            <div className="flex-none w-80 space-y-4 hidden md:block">
              <WidgetUser hasActions={false} state={stateUser} />
              {stateUser === "mvp" ? (
                <>
                  <WidgetBattlepass state={stateBattlepass} />
                  <WidgetMissions state={stateMissions} />
                  <div className="sticky space-y-4 top-16">
                    <WidgetAdPremium />
                  </div>
                </>
              ) : (
                <div className="sticky space-y-4 top-16">
                  <WidgetBattlepass state={stateBattlepass} />
                  <WidgetMissions state={stateMissions} />
                </div>
              )}
            </div>
            <div className="flex-1">
              {hasError ? (
                <div className="max-w-[400px] md:max-w-[620px] mx-auto sticky text-center top-16">
                  <span className="icon icon-warning-sign text-7xl text-ui-400 my-4" />
                  <h2 className="h4">We seem to have an issue</h2>
                  <p className="mt-3 mb-4">
                    Something went wrong when loading the feed.
                    <br />
                    Please refresh the page.
                  </p>
                  <button
                    type="button"
                    className="button button-secondary"
                    onClick={() => setHasError(!hasError)}
                  >
                    <span className="icon icon-refresh-01" />
                    <span>Refresh</span>
                  </button>
                </div>
              ) : (
                <div className="max-w-[400px] md:max-w-[620px] mx-auto space-y-4">
                  <Feed stateFeedAd={stateFeedAd} />
                </div>
              )}
            </div>
            <div className="flex-none w-80 space-y-4 hidden xl:block">
              <WidgetCompetitions state={stateCompetitions} />
              {stateUser === "mvp" ? (
                <>
                  <WidgetFollowings state={stateFollowings} />
                  <div className="sticky space-y-4 top-16">
                    <WidgetAdShop />
                  </div>
                </>
              ) : (
                <div className="sticky space-y-4 top-16">
                  <WidgetFollowings state={stateFollowings} />
                </div>
              )}
            </div>
          </section>
          {/* for demo purposes only */}
          {prototype.showDemo && (
            <section className="fixed z-[9999] bottom-4 left-4 surface-ui-500 rounded shadow-md p-4 pr-16 text-sm text-ui-100 grid grid-flow-col-dense grid-rows-3 gap-2">
              <div className="absolute top-1 right-1">
                <button
                  type="button"
                  className="button button-sm button-secondary button-close"
                  onClick={() => prototype.setShowDemo(!prototype.showDemo)}
                >
                  <span className="icon icon-e-remove" />
                </button>
              </div>
              <div>
                <h3 className="text-sm">Global states:</h3>
                <div className="form-group pl-4 mt-2">
                  <div className="form-xs form-toggle">
                    <input
                      type="checkbox"
                      name="feed"
                      id="feed-premium"
                      checked={prototype.isPremium}
                      onChange={() => prototype.togglePremium()}
                    />
                    <label htmlFor="feed-premium">Premium state</label>
                  </div>
                  <div className="form-xs form-toggle">
                    <input
                      type="checkbox"
                      name="feed"
                      id="feed-client"
                      checked={prototype.isClient}
                      onChange={() => prototype.toggleClient()}
                    />
                    <label htmlFor="feed-client">Client state</label>
                  </div>
                  <div className="form-xs form-toggle">
                    <input
                      type="checkbox"
                      name="feed"
                      id="feed-error"
                      onChange={() => setHasError(!hasError)}
                    />
                    <label htmlFor="feed-error">Error state</label>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-sm">User: </h3>
                <div className="form-group pl-4 mt-2">
                  <div className="form-xs form-radio">
                    <input
                      type="radio"
                      name="user"
                      id="user-mvp"
                      defaultChecked={stateUser === "mvp"}
                      onChange={() => setStateUser("mvp")}
                    />
                    <label htmlFor="user-mvp">MVP 1</label>
                  </div>
                  <div className="form-xs form-radio">
                    <input
                      type="radio"
                      name="user"
                      id="user-normal"
                      defaultChecked={stateUser === "normal"}
                      onChange={() => setStateUser("normal")}
                    />
                    <label htmlFor="user-normal">Normal</label>
                  </div>
                  <div className="form-xs form-radio">
                    <input
                      type="radio"
                      name="user"
                      id="user-noclan"
                      defaultChecked={stateUser === "noclan"}
                      onChange={() => setStateUser("noclan")}
                    />
                    <label htmlFor="user-noclan">No Clan</label>
                  </div>
                  <div className="form-xs form-radio">
                    <input
                      type="radio"
                      name="user"
                      id="user-empty"
                      defaultChecked={stateUser === "empty"}
                      onChange={() => setStateUser("empty")}
                    />
                    <label htmlFor="user-empty">Empty</label>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-sm">Battle Pass:</h3>
                <div className="form-group pl-4 mt-2">
                  <div className="form-xs form-radio">
                    <input
                      type="radio"
                      name="battlepass"
                      id="battlepass-normal"
                      defaultChecked={stateBattlepass === "normal"}
                      onChange={() => setStateBattlepass("normal")}
                    />
                    <label htmlFor="battlepass-normal">Normal</label>
                  </div>
                  <div className="form-xs form-radio">
                    <input
                      type="radio"
                      name="battlepass"
                      id="battlepass-rewards"
                      defaultChecked={stateBattlepass === "rewards"}
                      onChange={() => setStateBattlepass("rewards")}
                    />
                    <label htmlFor="battlepass-rewards">Rewards</label>
                  </div>
                  <div className="form-xs form-radio">
                    <input
                      type="radio"
                      name="battlepass"
                      id="battlepass-empty"
                      defaultChecked={stateBattlepass === "empty"}
                      onChange={() => setStateBattlepass("empty")}
                    />
                    <label htmlFor="battlepass-empty">Empty</label>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-sm">Missions:</h3>
                <div className="form-group pl-4 mt-2">
                  <div className="form-xs form-radio">
                    <input
                      type="radio"
                      name="missions"
                      id="missions-normal"
                      defaultChecked={stateMissions === "normal"}
                      onChange={() => setStateMissions("normal")}
                    />
                    <label htmlFor="missions-normal">Normal</label>
                  </div>
                  <div className="form-xs form-radio">
                    <input
                      type="radio"
                      name="missions"
                      id="missions-empty"
                      defaultChecked={stateMissions === "empty"}
                      onChange={() => setStateMissions("empty")}
                    />
                    <label htmlFor="missions-empty">Empty / finished</label>
                  </div>
                  <div className="form-xs form-radio">
                    <input
                      type="radio"
                      name="missions"
                      id="missions-onboarding"
                      defaultChecked={stateMissions === "onboarding"}
                      onChange={() => setStateMissions("onboarding")}
                    />
                    <label htmlFor="missions-onboarding">Onboarding</label>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-sm">Competitions:</h3>
                <div className="form-group pl-4 mt-2">
                  <div className="form-xs form-radio">
                    <input
                      type="radio"
                      name="competitions"
                      id="competitions-normal"
                      defaultChecked={stateCompetitions === "normal"}
                      onChange={() => setStateCompetitions("normal")}
                    />
                    <label htmlFor="competitions-normal">Normal</label>
                  </div>
                  <div className="form-xs form-radio">
                    <input
                      type="radio"
                      name="competitions"
                      id="competitions-empty"
                      defaultChecked={stateCompetitions === "empty"}
                      onChange={() => setStateCompetitions("empty")}
                    />
                    <label htmlFor="competitions-empty">
                      Empty / onboarding
                    </label>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-sm">Followings:</h3>
                <div className="form-group pl-4 mt-2">
                  <div className="form-xs form-radio">
                    <input
                      type="radio"
                      name="followings"
                      id="followings-normal"
                      defaultChecked={stateFollowings === "normal"}
                      onChange={() => setStateFollowings("normal")}
                    />
                    <label htmlFor="followings-normal">Normal</label>
                  </div>
                  <div className="form-xs form-radio">
                    <input
                      type="radio"
                      name="followings"
                      id="followings-empty"
                      defaultChecked={stateFollowings === "empty"}
                      onChange={() => setStateFollowings("empty")}
                    />
                    <label htmlFor="followings-empty">Empty</label>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-sm">Ad feed item:</h3>
                <div className="form-group pl-4 mt-2">
                  <div className="form-xs form-radio">
                    <input
                      type="radio"
                      name="ad"
                      id="ad-normal"
                      defaultChecked={stateFeedAd === "normal"}
                      onChange={() => setStateFeedAd("normal")}
                    />
                    <label htmlFor="ad-normal">With brand as author</label>
                  </div>
                  <div className="form-xs form-radio">
                    <input
                      type="radio"
                      name="ad"
                      id="ad-stryda"
                      defaultChecked={stateFeedAd === "stryda"}
                      onChange={() => setStateFeedAd("stryda")}
                    />
                    <label htmlFor="ad-stryda">With Stryda as author</label>
                  </div>
                  <div className="form-xs form-radio">
                    <input
                      type="radio"
                      name="ad"
                      id="ad-noauthor"
                      defaultChecked={stateFeedAd === "noauthor"}
                      onChange={() => setStateFeedAd("noauthor")}
                    />
                    <label htmlFor="ad-noauthor">Without author</label>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-sm">Modals:</h3>
                <div className="space-y-2 mt-2">
                  <button
                    type="button"
                    className="button button-sm button-ghost"
                    onClick={openModalUpdateClient}
                  >
                    <span>Open Client Updater Modal</span>
                  </button>
                </div>
              </div>
            </section>
          )}
        </Loader>
      </Structure>
    </>
  );
}
