import React from "react";
import { useRouter } from "next/router";
import BrawlCardSecondary from "../../../components/Brawl/BrawlCardSecondary";
import Slider from "../../../components/Slider/Slider";
import Link from "next/link";
import { usePrototypeData } from "../../../contexts/prototype";

const SoloBrawls = [
  {
    id: 0,
    game_slug: "pubg",
    name: null,
    gameMode: "Unrated",
    name: "Unrated Brawl",
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
    name: "Unrated Brawl",
    status: "ongoing",
    isEnrolled: true,
    hasClaim: false,
    cover:
      "https://res.cloudinary.com/gloot/image/upload/v1660720108/Marketing/2022_prototype/DummyContent/banners/banner-valorant-2.webp",
  },
  {
    id: 4,
    game_slug: "valorant",
    name: null,
    gameMode: "Spike Rush",
    name: "Spike Rush Brawl",
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
    name: "Competitive Brawl",
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
    name: "Weekly Arena Brawl",
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
    name: "Competitive Brawl",
    status: "ongoing",
    isEnrolled: false,
    hasClaim: false,
    cover:
      "https://res.cloudinary.com/gloot/image/upload/v1660720108/Marketing/2022_prototype/DummyContent/banners/banner-pubg-1.webp",
  },
];
const SoloBrawlsNO = [
  { game_slug: "valorant", brawl_id: 1 },
  { game_slug: "pubg", brawl_id: 1 },
  { game_slug: "valorant", brawl_id: 2 },
  { game_slug: "pubg", brawl_id: 2 },
];

export default function HomeBrawlSolo() {
  const { query } = useRouter();
  const hasNoBrawls = query.nobrawls === "true" ? true : false;
  const prototype = usePrototypeData();

  return (
    <div className="relative">
      {hasNoBrawls ? (
        <div className="flex-none surface sm:rounded-lg overflow-hidden w-full px-4 py-12 mt-4 flex items-center">
          <div className="relative z-10 px-8 lg:w-1/2">
            <h3 className="mb-4">
              Compete in Brawls
              <br />
              and earn rewards
            </h3>
            <Link href="/prototype/valorant/brawls">
              <button type="button" className="button button-primary">
                <span>Discover Valorant Brawls</span>
              </button>
            </Link>
          </div>
          <img
            className="absolute inset-0 h-full w-full object-cover object-right opacity-20 lg:opacity-100"
            src="https://res.cloudinary.com/gloot/image/upload/v1673862737/Stryda/illustrations/home-brawlnobrawls.jpg"
            alt=""
          />
        </div>
      ) : (
        <Slider
          itemWidth={397 + 16}
          bgColor="from-ui-900 via-ui-900/90 to-ui-900/0"
        >
          {SoloBrawls.map((item, itemIndex) => (
            <BrawlCardSecondary
              key={item.id}
              /*
              brawl={prototype.getBrawlByID(item.game_slug, item.brawl_id)}
              */
              brawl={item}
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
