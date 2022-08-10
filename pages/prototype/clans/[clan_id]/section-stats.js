import React, { useEffect, useState } from "react";

import Countdown from "../../../../components/Countdown/Countdown";
import Link from "next/link";
import { usePrototypeData } from "../../../../contexts/prototype";
import { useRouter } from "next/router";

export default function SectionClanStats() {
  const router = useRouter();
  const { query } = useRouter();
  const prototype = usePrototypeData();
  const [selectedClan, setSelectedClan] = useState(null);
  const { clan_id } = router.query;
  const hasAds = query.ads === "true" ? true : false;

  useEffect(() => {
    setSelectedClan(prototype.getClanByID(clan_id));
  }, [clan_id]);

  function numberWithSpaces(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return parts.join(".");
  }

  return (
    <>
      {selectedClan && (
        <>
          <div className="flex-1 flex flex-col items-center justify-center">
            <div className="relative flex items-center justify-center py-8">
              <img
                className="relative z-10 h-24"
                src="https://res.cloudinary.com/gloot/image/upload/v1657888942/Marketing/2022_prototype/Logo/samesize-brawl.svg"
                width="auto"
                height="auto"
                alt=""
              />
              <div className="absolute z-0 inset-0 flex items-center justify-center">
                <img
                  src="https://res.cloudinary.com/gloot/image/upload/v1659466410/Marketing/2022_prototype/Statsbg_brawl.webp"
                  width="auto"
                  height="auto"
                  alt=""
                />
              </div>
            </div>
            <div className="flex flex-wrap justify-center items-stretch gap-2 text-center p-2">
              <div className="w-32 flex flex-col items-center justify-end rounded bg-gradient-to-b from-ui-800 to-ui-700/25 p-4">
                <div className="leading-none text-xs text-ui-300 uppercase">
                  Number of Brawls played
                </div>
                <div className="text-3xl font-headings font-bold">22</div>
              </div>
              <div className="w-32 flex flex-col items-center justify-end rounded bg-gradient-to-b from-ui-800 to-ui-700/25 p-4">
                <div className="leading-none text-xs text-ui-300 uppercase">
                  Times in top 50
                </div>
                <div className="text-3xl font-headings font-bold">2</div>
              </div>
              <div className="w-32 flex flex-col items-center justify-end rounded bg-gradient-to-b from-ui-800 to-ui-700/25 p-4">
                <div className="leading-none text-xs text-ui-300 uppercase">
                  Best placement
                </div>
                <div className="text-3xl font-headings font-bold">1</div>
              </div>
              <div className="w-32 flex flex-col items-center justify-end rounded bg-gradient-to-b from-ui-800 to-ui-700/25 p-4">
                <div className="leading-none text-xs text-ui-300 uppercase">
                  Most matches in a Brawl
                </div>
                <div className="text-3xl font-headings font-bold">84</div>
              </div>
              <div className="w-32 flex flex-col items-center justify-end rounded bg-gradient-to-b from-ui-800 to-ui-700/25 p-4">
                <div className="leading-none text-xs text-ui-300 uppercase">
                  Avg. matches/Brawl
                </div>
                <div className="text-3xl font-headings font-bold">54</div>
              </div>
            </div>
          </div>
          <div className="hidden 2xl:block w-px bg-ui-700" />
          <div className="flex-1 flex flex-col items-center justify-center">
            <div className="relative flex items-center justify-center py-8">
              <img
                className="relative z-10 h-24"
                src="https://res.cloudinary.com/gloot/image/upload/v1657888942/Marketing/2022_prototype/Logo/samesize-showdown.svg"
                width="auto"
                height="auto"
                alt=""
              />
              <div className="absolute z-0 inset-0 flex items-center justify-center">
                <img
                  src="https://res.cloudinary.com/gloot/image/upload/v1659466410/Marketing/2022_prototype/Statsbg_tournament.webp"
                  width="auto"
                  height="auto"
                  alt=""
                />
              </div>
            </div>
            <div className="flex flex-wrap justify-center items-stretch gap-2 text-center p-2">
              <div className="w-32 flex flex-col items-center justify-end rounded bg-gradient-to-b from-ui-800 to-ui-700/25 p-4">
                <div className="leading-none text-xs text-ui-300 uppercase">
                  Best Showdown placement
                </div>
                <div className="text-3xl font-headings font-bold">6</div>
              </div>
              <div className="w-32 flex flex-col items-center justify-end rounded bg-gradient-to-b from-ui-800 to-ui-700/25 p-4">
                <div className="leading-none text-xs text-ui-300 uppercase">
                  Played Showdowns
                </div>
                <div className="text-3xl font-headings font-bold">3</div>
              </div>
              <div className="w-32 flex flex-col items-center justify-end rounded bg-gradient-to-b from-ui-800 to-ui-700/25 p-4">
                <div className="leading-none text-xs text-ui-300 uppercase">
                  Avg. Showdown placement
                </div>
                <div className="text-3xl font-headings font-bold">11</div>
              </div>
              <div className="w-32 flex flex-col items-center justify-end rounded bg-gradient-to-b from-ui-800 to-ui-700/25 p-4">
                <div className="leading-none text-xs text-ui-300 uppercase">
                  Tournaments played
                </div>
                <div className="text-3xl font-headings font-bold">5</div>
              </div>
              <div className="w-32 flex flex-col items-center justify-end rounded bg-gradient-to-b from-ui-800 to-ui-700/25 p-4">
                <div className="leading-none text-xs text-ui-300 uppercase">
                  Top 3 placement
                </div>
                <div className="text-3xl font-headings font-bold">4</div>
              </div>
              <div className="w-32 flex flex-col items-center justify-end rounded bg-gradient-to-b from-ui-800 to-ui-700/25 p-4">
                <div className="leading-none text-xs text-ui-300 uppercase">
                  Avg. tournaments placement
                </div>
                <div className="text-3xl font-headings font-bold">14</div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
