import react from "react";

import { useRouter } from "next/router";
import LadderCardSecondary from "../../../components/Ladder/LadderCardSecondary";
import Slider from "../../../components/Slider/Slider";
import Link from "next/link";
import { usePrototypeData } from "../../../contexts/prototype";

const ClanLaddersNew = [
  {
    game: "pubg",
    id: 1,
  },
  {
    game: "valorant",
    id: 5,
  },
  {
    game: "valorant",
    id: 2,
  },
  {
    game: "valorant",
    id: 3,
  }
]

export default function HomeLaddersClan() {
  const { query } = useRouter();
  const hasNoClan = query.noclan === "true" ? true : false;
  const hasNoLadders = query.noladders === "true" ? true : false;
  const prototype = usePrototypeData();

  return (
    <div className="relative">
      {hasNoClan && (
        <div className="flex-none surface sm:rounded-lg overflow-hidden w-full px-4 py-12 mt-4 flex items-center">
          <div className="relative z-10 px-8 lg:w-1/2">
            <h3 className="mb-4">
              Multiply your rewards
              <br />
              by Laddering in a Clan
            </h3>
            <Link href="/prototype/clans">
              <button type="button" className="button button-primary">
                <span>Discover Clans</span>
              </button>
            </Link>
          </div>
          <img
            className="absolute inset-0 h-full w-full object-cover object-right opacity-20 lg:opacity-100"
            src="https://res.cloudinary.com/gloot/image/upload/v1673862556/Stryda/illustrations/home-laddernoclan.jpg"
            alt=""
          />
        </div>
      )}
      {hasNoLadders && (
        <div className="flex-none surface sm:rounded-lg overflow-hidden w-full px-4 py-12 mt-4 flex items-center">
        <div className="relative z-10 px-8 lg:w-1/2">
          <h3 className="mb-4">
            Ladder in Clans and 
            <br />
            get stronger together!
          </h3>
          <Link href="/prototype/valorant/ladders">
            <button type="button" className="button button-primary">
              <span>Discover Valorant Ladders</span>
            </button>
          </Link>
        </div>
        <img
          className="absolute inset-0 h-full w-full object-cover object-right opacity-20 lg:opacity-100"
          src="https://res.cloudinary.com/gloot/image/upload/v1673862556/Stryda/illustrations/home-laddernoclan.jpg"
          alt=""
        />
      </div>
      )}
      {!hasNoClan && !hasNoLadders && (
        <Slider
        itemWidth={809 + 16}
        bgColor="from-ui-900 via-ui-900/90 to-ui-900/0"
      >
        {ClanLaddersNew.map((item, itemIndex) => (
          <LadderCardSecondary
            key={itemIndex}
            ladder={prototype.getLadderByID(item.game, item.id)}
            isHorizontal={true}
            isClan={false}
          />
        ))}
      </Slider>
      )}
    </div>
  );
}
