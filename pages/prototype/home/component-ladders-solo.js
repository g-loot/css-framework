import React from "react";
import { useRouter } from "next/router";
import LadderCardSecondary from "../../../components/Ladder/LadderCardSecondary";
import Slider from "../../../components/Slider/Slider";
import Link from "next/link";
import { usePrototypeData } from "../../../contexts/prototype";

const SoloLadders = [
  {
    id: 0,
    game_slug: "pubg",
    name: null,
    gameMode: "Unrated",
    name: "Unrated Ladder",
    status: "ongoing",
    isEnrolled: true,
    hasClaim: true,
    cover:
      "https://res.cloudinary.com/gloot/image/upload/v1660720108/Marketing/2022_prototype/DummyContent/banners/banner-pubg-1.webp",
  },
  {
    id: 1,
    game_slug: "valorant",
    name: null,
    gameMode: "Unrated",
    name: "Power Play",
    status: "ongoing",
    isEnrolled: true,
    hasClaim: false,
    isPowerPlay: true,
    cover:
      "https://res.cloudinary.com/gloot/image/upload/v1674822962/Stryda/demo/PowerPlay_Valorant1.jpg",
  },
  {
    id: 4,
    game_slug: "valorant",
    name: null,
    gameMode: "Spike Rush",
    name: "Spike Rush Ladder",
    status: "ongoing",
    isEnrolled: true,
    hasClaim: false,
    cover:
      "https://res.cloudinary.com/gloot/image/upload/v1660720108/Marketing/2022_prototype/DummyContent/banners/banner-valorant-5.webp",
  },
  {
    id: 2,
    game_slug: "apexlegends",
    name: null,
    gameMode: "Ranked trio",
    name: "Competitive Ladder with a very long name",
    status: "ongoing",
    isEnrolled: false,
    hasClaim: false,
    cover:
      "https://res.cloudinary.com/gloot/image/upload/v1660720108/Marketing/2022_prototype/DummyContent/banners/banner-apexlegends-1.webp",
  },
  {
    id: 3,
    game_slug: "apexlegends",
    name: null,
    gameMode: "Ranked Arena",
    name: "Weekly Arena Ladder",
    status: "ongoing",
    isEnrolled: false,
    hasClaim: false,
    cover:
      "https://res.cloudinary.com/gloot/image/upload/v1660720108/Marketing/2022_prototype/DummyContent/banners/banner-apexlegends-3.webp",
  },
  {
    id: 5,
    game_slug: "pubg",
    name: null,
    gameMode: "Ranked squad FPP",
    name: "Competitive Ladder",
    status: "ongoing",
    isEnrolled: false,
    hasClaim: false,
    cover:
      "https://res.cloudinary.com/gloot/image/upload/v1660720108/Marketing/2022_prototype/DummyContent/banners/banner-pubg-1.webp",
  },
];

export default function HomeLaddersSolo() {
  const { query } = useRouter();
  const hasNoLadders = query.noladders === "true" ? true : false;
  const prototype = usePrototypeData();

  return (
    <div className="relative">
      {hasNoLadders ? (
        <div className="flex-none surface sm:rounded-lg overflow-hidden w-full px-4 py-12 mt-4 flex items-center">
          <div className="relative z-10 px-8 lg:w-1/2">
            <h3 className="mb-4">
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
            className="absolute inset-0 h-full w-full object-cover object-right opacity-20 lg:opacity-100"
            src="https://res.cloudinary.com/gloot/image/upload/v1673862737/Stryda/illustrations/home-laddernoladders.jpg"
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
              key={item.id}
              /*
              ladder={prototype.getLadderByID(item.game_slug, item.ladder_id)}
              */
              ladder={item}
              game_slug={item.game_slug}
              isHorizontal={false}
              isClan={false}
              isDemo={true}
            />
          ))}
        </Slider>
      )}
    </div>
  );
}
