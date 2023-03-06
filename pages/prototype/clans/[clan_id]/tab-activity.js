import React, { useEffect, useState } from "react";

import { usePrototypeData } from "../../../../contexts/prototype";
import { useRouter } from "next/router";
import LadderCardSecondary from "../../../../components/Ladder/LadderCardSecondary";

export default function TabClanActivity() {
  const router = useRouter();
  const { query } = useRouter();
  const prototype = usePrototypeData();
  const [selectedClan, setSelectedClan] = useState(null);
  const { clan_id } = router.query;

  function RandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  useEffect(() => {
    setSelectedClan(prototype.getClanByID(clan_id));
  }, [clan_id]);

  return (
    <>
      {selectedClan && (
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
      )}
    </>
  );
}
