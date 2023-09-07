import React from "react";
import { useRouter } from "next/router";
import LadderCardSecondary from "@/components/Ladder/LadderCardSecondary";
import Slider from "@/components/Slider/Slider";
import Link from "next/link";
import { usePrototypeData } from "@/contexts/prototype";

const SoloLadders = [
  {
    game: "pubg",
    id: 1,
  },
  {
    game: "valorant",
    id: 0,
  },
  {
    game: "valorant",
    id: 1,
  },
  {
    game: "pubg",
    id: 2,
  }
]

export default function HomeLaddersSolo(props) {
  const { query } = useRouter();
  const hasNoLadders = props.hasNoLadders || false;
  const prototype = usePrototypeData();

  return (
    <div className="relative">
      {hasNoLadders ? (
        <div className="flex-none surface sm:rounded-lg overflow-hidden w-full px-4 py-24 mt-4 flex items-center">
          <div className="relative z-10 px-8 lg:w-1/2">
            <h3 className="mb-6">
              Compete in Ladders
              <br />
              and earn rewards
            </h3>
            <Link href="/prototype/valorant/ladders">
              <button type="button" className="button button-primary">
                <span>Discover Valorant Ladders</span>
              </button>
            </Link>
          </div>
          <img
            className="absolute inset-0 h-full w-full object-cover object-left opacity-20 lg:opacity-100"
            src="https://res.cloudinary.com/gloot/image/upload/v1694090425/Stryda/illustrations/home-ad-multipleladders.jpg"
            alt=""
          />
        </div>
      ) : (
        <Slider
          itemWidth={397 + 16}
          bgColor="from-ui-900 via-ui-900/90 to-ui-900/0"
        >
          {SoloLadders.map((item, itemIndex) => (
            <LadderCardSecondary
              key={itemIndex}
              ladder={prototype.getLadderByID(item.game, item.id)}
              game_slug={item.game_slug}
              isHorizontal={false}
              isClan={false}
            />
          ))}
        </Slider>
      )}
    </div>
  );
}
