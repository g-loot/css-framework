import react from "react";

import { useRouter } from "next/router";
import BrawlCardSecondary from "../../../components/Brawl/BrawlCardSecondary";
import Slider from "../../../components/Slider/Slider";
import Link from "next/link";

const ClanBrawls = [
  {
    id: 1,
    gameID: 2,
    name: null,
    gameMode: "Unrated",
    name: "Unrated Brawl",
    status: "ongoing",
    isEnrolled: true,
    hasClaim: true,
    isClan: true,
    cover:
      "https://res.cloudinary.com/gloot/image/upload/v1660720108/Marketing/2022_prototype/DummyContent/banners/banner-pubg-1.webp",
  },
  {
    id: 0,
    gameID: 1,
    name: null,
    gameMode: "Unrated",
    name: "Unrated Brawl",
    status: "ongoing",
    isEnrolled: true,
    hasClaim: false,
    isClan: true,
    cover:
      "https://res.cloudinary.com/gloot/image/upload/v1660720108/Marketing/2022_prototype/DummyContent/banners/banner-valorant-2.webp",
  },
  {
    id: 2,
    gameID: 4,
    name: null,
    gameMode: "Ranked Arena",
    name: "Weekly Arena Brawl",
    status: "ongoing",
    isEnrolled: false,
    hasClaim: false,
    isClan: true,
    cover:
      "https://res.cloudinary.com/gloot/image/upload/v1660720108/Marketing/2022_prototype/DummyContent/banners/banner-apexlegends-3.webp",
  },
];
const ClanBrawlsNoClan = [
  {
    id: 1,
    gameID: 2,
    name: null,
    gameMode: "Unrated",
    name: "Unrated Brawl",
    status: "ongoing",
    isEnrolled: false,
    hasClaim: false,
    isClan: true,
    cover:
      "https://res.cloudinary.com/gloot/image/upload/v1660720108/Marketing/2022_prototype/DummyContent/banners/banner-pubg-1.webp",
  },
  {
    id: 0,
    gameID: 1,
    name: null,
    gameMode: "Unrated",
    name: "Unrated Brawl",
    status: "ongoing",
    isEnrolled: false,
    hasClaim: false,
    isClan: true,
    cover:
      "https://res.cloudinary.com/gloot/image/upload/v1660720108/Marketing/2022_prototype/DummyContent/banners/banner-valorant-2.webp",
  },
  {
    id: 2,
    gameID: 4,
    name: null,
    gameMode: "Ranked Arena",
    name: "Weekly Arena Brawl",
    status: "ongoing",
    isEnrolled: false,
    hasClaim: false,
    isClan: true,
    cover:
      "https://res.cloudinary.com/gloot/image/upload/v1660720108/Marketing/2022_prototype/DummyContent/banners/banner-apexlegends-3.webp",
  },
];

export default function HomeBrawlClan() {
  const { query } = useRouter();
  const hasNoClan = query.noclan === "true" ? true : false;
  const hasNoBrawls = query.nobrawls === "true" ? true : false;
  return (
    <div className="relative">
      {hasNoClan && (
        <div className="flex-none surface sm:rounded-lg overflow-hidden w-full px-4 py-12 mt-4 flex items-center">
          <div className="relative z-10 px-8 lg:w-1/2">
            <h3 className="mb-4">
              Multiply your rewards
              <br />
              by Brawling in a Clan
            </h3>
            <Link href="/prototype/clans">
              <button type="button" className="button button-primary">
                <span>Discover Clans</span>
              </button>
            </Link>
          </div>
          <img
            className="absolute inset-0 h-full w-full object-cover object-right opacity-20 lg:opacity-100"
            src="https://res.cloudinary.com/gloot/image/upload/v1670324146/Marketing/2022_prototype/home-brawlnoclan.jpg"
            alt=""
          />
        </div>
      )}
      {hasNoBrawls && (
        <div className="flex-none surface sm:rounded-lg overflow-hidden w-full px-4 py-12 mt-4 flex items-center">
        <div className="relative z-10 px-8 lg:w-1/2">
          <h3 className="mb-4">
            Brawl in Clans and 
            <br />
            get stronger together!
          </h3>
          <Link href="/prototype/valorant/brawls">
            <button type="button" className="button button-primary">
              <span>Discover Valorant Brawls</span>
            </button>
          </Link>
        </div>
        <img
          className="absolute inset-0 h-full w-full object-cover object-right opacity-20 lg:opacity-100"
          src="https://res.cloudinary.com/gloot/image/upload/v1670945610/Marketing/2022_prototype/home-brawlnoclanbrawls_1.jpg"
          alt=""
        />
      </div>
      )}
      {!hasNoClan && !hasNoBrawls && (
        <Slider
        itemWidth={809 + 16}
        bgColor="from-ui-900 via-ui-900/90 to-ui-900/0"
      >
        {ClanBrawls.map((item, itemIndex) => (
          <BrawlCardSecondary
            key={item.id}
            brawl={item}
            isHorizontal={true}
            isClan={false}
            isDemo={true}
          />
        ))}
      </Slider>
      )}
    </div>
  );
}
