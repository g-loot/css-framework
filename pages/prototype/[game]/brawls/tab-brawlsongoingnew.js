import React, { useEffect, useState } from "react";

import Countdown from "../../../../components/Countdown/Countdown";
import Link from "next/link";
import Reward from "../../../../components/Reward/Reward";
import Tooltip from "../../../../components/Tooltip/Tooltip";
import { usePrototypeData } from "../../../../contexts/prototype";
import { useRouter } from "next/router";
import BrawlCardSecondary from "../../../../components/Brawl/BrawlCardSecondary";
import Slider from "../../../../components/Slider/Slider";

export default function TabBrawlsOngoingNew() {
  const router = useRouter();
  const { query } = useRouter();
  const prototype = usePrototypeData();
  const [selectedGame, setSelectedGame] = useState(null);
  const hasAds = query.ads === "true" ? true : false;
  const { game } = router.query;

  useEffect(() => {
    setSelectedGame(prototype.getGameBySlug(game));
  }, [game]);

  return (
    <>
      {selectedGame && (
        <>
          <section className="my-8">
            <div className="flex gap-2 items-baseline justify-between mx-4 sm:mx-0">
              <h2 className="h5">Ongoing Brawls</h2>
            </div>
            <div className="relative">
              <Slider
                itemWidth={397 + 16}
                bgColor="from-ui-900 via-ui-900/90 to-ui-900/0"
              >
                {selectedGame.brawls.map((brawl, brawlIndex) => (
                  <>
                    {brawl.status !== "finished" && (
                      <BrawlCardSecondary
                        key={brawl.id}
                        brawl={brawl}
                        isHorizontal={false}
                        isClan={false}
                        gameID={selectedGame.id}
                      />
                    )}
                  </>
                ))}
              </Slider>
            </div>
          </section>
        </>
      )}
    </>
  );
}
