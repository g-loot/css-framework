import { useContext, useEffect, useState } from "react";

import Link from "next/link";
import ModalDownloadStarted from "../../pages/prototype-new/modal-downloadstarted";
import { UiContext } from "../../contexts/ui";
import { usePrototypeData } from "../../contexts/prototype";
import { useRouter } from "next/router";
import { VariablesContext } from "../../contexts/variables";
import ModalBuyTokens from "../../pages/prototype-new/wallet/modal-buytokens";
import ModalAvatarEdit from "../../pages/prototype-new/profile/[user_id]/modal-avataredit";

export default function PrototypeSideRightClan() {
  const { query } = useRouter();
  const prototype = usePrototypeData();
  const uiContext = useContext(UiContext);
  const emptyClan = query.emptyclan === "true" ? true : false;
  const hasAvatarFrame = query.avatarframe || false;
  const modalAvatarEdit = query.modalavataredit === "true" ? true : false;

  return (
    <>
      {!emptyClan ? (
        <>
          {prototype.getUserByID(1).clan ? (
            <>
              <Link
                href={`/prototype-new/clans/${
                  prototype.getUserByID(1).clan
                }${prototype.getURLparams()}`}
              >
                <div className="item interactive w-auto mx-2">
                  <div className="item-image">
                    <div className="avatar avatar-xs avatar-squircle">
                      <div>
                        <img
                          src={
                            prototype.getClanByID(prototype.getUserByID(1).clan)
                              .avatar
                          }
                          alt="avatar"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="item-body pr-2">
                    <div className="item-title text-ui-200">
                      &#91;
                      {prototype.getClanByID(prototype.getUserByID(1).clan).tag}
                      &#93;{" "}
                      {
                        prototype.getClanByID(prototype.getUserByID(1).clan)
                          .nickname
                      }
                    </div>
                    {/*
                            <div className="text-sm text-ui-300">
                              {
                                prototype.getClanByID(prototype.getUserByID(1).clan).members
                                  .length
                              }{" "}
                              members
                            </div>
                            */}
                  </div>
                </div>
              </Link>
              <div className="text-center px-2">
                <Link href="/prototype-new/clans/1">
                <a className="link link-hover text-sm">
                  View clan
                </a>
                {/*
                  <button
                    type="button"
                    className="button button-secondary button-sm w-full"
                  >
                    <span>View Clan</span>
                  </button>
                          */}
                </Link>
              </div>
            </>
          ) : (
            <div className="bg-gradient-radial-to-b from-ui-500/75 to-ui-600/50 backdrop-blur rounded-lg shadow-lg w-auto p-3 text-right space-y-3">
              <div className="text-center">
                {prototype.getUserByID(1).nickname} is not part of a clan.
              </div>
              <Link href="#">
                <a
                  type="button"
                  className="button button-sm button-primary w-full"
                >
                  <span>Recruit to your clan</span>
                </a>
              </Link>
            </div>
          )}
        </>
      ) : (
        <>
          <div className="bg-gradient-radial-to-b from-ui-500/75 to-ui-600/50 backdrop-blur rounded-lg shadow-lg w-auto p-3 text-right space-y-3">
            <div className="text-center">You are not part of a clan.</div>
            <Link href="/prototype-new/clans/search">
              <a
                type="button"
                className="button button-sm button-primary w-full"
              >
                <span>Join a clan</span>
              </a>
            </Link>
          </div>
        </>
      )}
    </>
  );
}
