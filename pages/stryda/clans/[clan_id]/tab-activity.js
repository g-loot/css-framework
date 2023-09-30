import React, { useEffect, useState } from "react";

import { usePrototypeData } from "@/contexts/prototype";
import { useRouter } from "next/router";
import LadderCardSecondary from "../../../../components/Ladder/LadderCardSecondary";
import Link from "next/link";

export default function TabClanActivity() {
  const router = useRouter();
  const { query } = useRouter();
  const prototype = usePrototypeData();
  const [selectedClan, setSelectedClan] = useState(null);
  const { clan_id } = router.query;
  const empty = query.empty === "true" ? true : false;
  const [isEmpty, setIsEmpty] = useState(empty);

  function RandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  useEffect(() => {
    setSelectedClan(prototype.getClanByID(clan_id));
  }, [clan_id]);

  return (
    <>
      {selectedClan && (
        <>
          {!isEmpty ? (
            <div className="grid lg:grid-cols-2 2xl:grid-cols-3 gap-4 mx-4 sm:mx-0 mt-2 animate-slide-in-bottom">
              {selectedClan.ladders.map((ladder, ladderIndex) => (
                <>
                  <LadderCardSecondary
                    key={ladder.id}
                    ladder={prototype.getLadderByID(ladder.gameSlug, ladder.id)}
                    isHorizontal={false}
                    isGlobal={false}
                    isFluid={true}
                  />
                </>
              ))}
            </div>
          ) : (
            <div className="surface surface-dimmed sm:rounded px-4 py-8 text-center animate-slide-in-bottom">
              <div className="max-w-sm mx-auto">
                <span className="icon icon-ladder text-6xl text-ui-500" />
                {selectedClan.isYou ? (
                  <>
                    <div className="mt-2">
                      <p className="text-sm text-ui-400">
                        Your clan has not entered any Ladders yet
                      </p>
                      <p className="text-lg text-ui-300">
                        Join Ladders and start earning rewards
                      </p>
                    </div>
                    <Link href="/prototype/valorant/ladders">
                      <a className="button button-main mt-6">
                        <span>Browse Ladders</span>
                      </a>
                    </Link>
                  </>
                ) : (
                  <>
                    <div className="mt-2">
                      <p className="text-lg text-ui-300">
                        &#91;
                        {selectedClan.tag}
                        &#93; {selectedClan.nickname} has not entered any
                        Ladders yet
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>
          )}
        </>
      )}
      {/* for demo purposes only */}
      {prototype.showDemo && (
        <section className="fixed z-[9999] bottom-4 left-4 surface-ui-500 rounded shadow-md p-4 pr-16 text-sm text-ui-100 flex flex-col items-stretch">
          <div className="absolute top-1 right-1">
            <button
              type="button"
              className="button button-sm button-secondary button-close"
              onClick={() => prototype.setShowDemo(!prototype.showDemo)}
            >
              <span className="icon icon-e-remove" />
            </button>
          </div>
          <a onClick={() => setIsEmpty(!isEmpty)}>
            Toggle empty state {isEmpty ? "ON" : "OFF"}
          </a>
        </section>
      )}
    </>
  );
}
