import React, { useContext, useEffect, useState } from "react";

import Accordion from "../../../../components/Accordion/Accordion";
import Link from "next/link";
import ModalAddDiscord from "./modal-add-discord";
import ModalContainer from "../../../../components/Modal/ModalContainer";
import Reward from "../../../../components/Reward/Reward";
import { UiContext } from "../../../../contexts/ui";
import moment from "moment";
import { usePrototypeData } from "../../../../contexts/prototype";
import { useRouter } from "next/router";

export default function TabTournamentsOverview() {
  const router = useRouter();
  const { query } = useRouter();
  const prototype = usePrototypeData();
  const hasAds = query.ads === "true" ? true : false;
  const uiContext = useContext(UiContext);
  const modalAddDiscord = query.modaladddiscord === "true" ? true : false;
  const [selectedGame, setSelectedGame] = useState(null);
  const { game } = router.query;
  const { tournament_id } = router.query;

  function openModalAddDiscord() {
    uiContext.openModal(<ModalAddDiscord></ModalAddDiscord>);
  }

  useEffect(() => {
    setSelectedGame(prototype.getGameBySlug(game));
  }, [game]);

  useEffect(() => {
    if (modalAddDiscord) {
      openModalAddDiscord();
    }
  }, [modalAddDiscord]);

  return (
    <>
      {uiContext.displayedModal && (
        <ModalContainer>{uiContext.displayedModal}</ModalContainer>
      )}
      {selectedGame && (
        <div className="accordion">
          {prototype
            .getTournamentByID(game, tournament_id)
            .clans.map((clan, clanIndex) => (
              <div
                key={clan}
                className="surface sm:rounded-lg mb-4 overflow-hidden animate-slide-in-bottom animate-delay"
                style={{
                  "--delay": "calc(" + clanIndex + " * 0.05s)",
                }}
              >
                <Accordion
                  header={
                    <>
                      <div className="item">
                        <div className="item-image">
                          <figure className="avatar avatar-squircle avatar-sm">
                            <div>
                              <img src={prototype.getClanByID(clan)?.avatar} />
                            </div>
                          </figure>
                        </div>
                        <div className="item-body">
                          <div className="item-title font-bold">
                            <span
                              className={`${
                                prototype.getClanByID(clan)?.isYou
                                  ? "text-blue-300 font-bold"
                                  : ""
                              }`}
                            >
                              <span className="">
                                &#91;
                                {prototype.getClanByID(clan)?.tag}
                                &#93;
                              </span>{" "}
                              <span className="">
                                {prototype.getClanByID(clan)?.nickname}
                              </span>
                            </span>
                          </div>
                          <div className="text-sm text-ui-300">
                            {prototype.getClanByID(clan)?.members?.length} party
                            members
                          </div>
                        </div>
                        <div className="item-actions flex items-center gap-2">
                          <div>
                            <span className="icon icon-24 icon-arrow-sm-down" />
                          </div>
                        </div>
                      </div>
                    </>
                  }
                >
                  <div className="p-4 display flex gap-8 items-center justify-center flex-wrap text-center">
                    {prototype
                      .getClanByID(clan)
                      .members?.map((user, userIndex) => (
                        <Link
                          key={user}
                          href={`/prototype/profile/${
                            prototype.getUserByID(user).id
                          }${hasAds ? "?ads=true" : ""}`}
                        >
                          <div className="flex flex-col items-center gap-2 interactive">
                            <figure className="avatar avatar-circle">
                              <div>
                                <img src={prototype.getUserByID(user).avatar} />
                              </div>
                              {prototype.getUserByID(user).isYou && <i />}
                            </figure>
                            {prototype.getUserByID(user).nickname}
                          </div>
                        </Link>
                      ))}
                  </div>
                </Accordion>
              </div>
            ))}
        </div>
      )}
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
    </>
  );
}
