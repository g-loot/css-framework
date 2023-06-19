import React, { useContext, useEffect, useState } from "react";

import Reward from "../../../../../components/Reward/Reward";
import Tooltip from "../../../../../components/Tooltip/Tooltip";
import { usePrototypeData } from "../../../../../contexts/prototype";
import { VariablesContext } from "../../../../../contexts/variables";
import ModalClanSeasonResults from "../modal-clanseasonresults";
import { UiContext } from "../../../../../contexts/ui";
import { useRouter } from "next/router";
import Link from "next/link";
import ResetsIn from "../../../../../components/Countdown/ResetsIn";
import AvatarClan from "../../../../../components/Avatar/AvatarClan";
import GameIcon from "../../../../../components/GameIcon/GameIcon";
import ClanSeasonCard from "../../../../../components/ClanSeason/ClanSeasonCard";

export default function TabClanLeaderboardUpcoming() {
  const router = useRouter();
  const { query } = useRouter();
  const uiContext = useContext(UiContext);
  const prototype = usePrototypeData();
  const variablesContext = useContext(VariablesContext);
  const [selectedGame, setSelectedGame] = useState(null);
  const { game } = router.query;
  const isEmpty = query.empty === "true" ? true : false;
  const [loading, setLoading] = useState(true);

  function RandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, RandomNumber(300, 3000));
    }
  }, [loading]);

  useEffect(() => {
    setSelectedGame(prototype.getGameBySlug(game));
  }, [game, prototype]);

  function openmodalLadderResults(id) {
    uiContext.openModal(
      <ModalClanSeasonResults
        item={prototype.getClanLeaderboardByID(
          prototype.getGameBySlug(game).slug,
          id
        )}
      />
    );
  }

  return (
    <>
      {selectedGame && (
        <>
          <section className="pb-8">
            {isEmpty && (
              <>
                <div className="surface rounded-lg px-4 py-8 text-center">
                  <div className="max-w-xs mx-auto">
                    <span className="icon icon-smile text-6xl text-ui-500" />
                    <div className="mt-2 mb-6">
                      <p className="text-sm text-ui-400">
                        There are no events to be displayed yet.
                      </p>
                      <p className="text-lg text-ui-300">
                        Play tournaments and competitions to see the history of
                        your earnings.
                      </p>
                    </div>
                    <Link href="/prototype/valorant/tournaments">
                      <a className="button button-main">
                        <span>Browse tournaments</span>
                      </a>
                    </Link>
                  </div>
                </div>
              </>
            )}
            {!isEmpty && (
              <>
                {loading ? (
                  <section className="mt-2">
                    <div className="overflow-y-hidden overflow-x-auto scrollbar-desktop px-4 sm:px-0 pb-4">
                      <table className="table table-rounded rounded-xl is-loading w-full">
                        <tbody>
                          <tr>
                            <th>1</th>
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                          </tr>
                          <tr>
                            <th>2</th>
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                          </tr>
                          <tr>
                            <th>3</th>
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                          </tr>
                          <tr>
                            <th>3</th>
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                          </tr>
                          <tr>
                            <th>3</th>
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                          </tr>
                          <tr>
                            <th>3</th>
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </section>
                ) : (
                  <>
                    <div className="items-spaced item-interactive space-y-2">
                      {selectedGame.clanLeaderboards
                        .filter((g) => g.status === "upcoming")
                        .map((item, itemIndex) => (
                          <ClanSeasonCard key={itemIndex} game={game} item={item} />
                        ))}
                    </div>
                  </>
                )}
              </>
            )}
          </section>
        </>
      )}
    </>
  );
}
