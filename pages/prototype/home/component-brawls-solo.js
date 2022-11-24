import React from "react";
import { useRouter } from "next/router";
import BrawlCardSecondary from "../../../components/Brawl/BrawlCardSecondary";
import Slider from "../../../components/Slider/Slider";

const SoloBrawls = [
  {
    id: 0,
    game: 2,
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
    game: 1,
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
    game: 1,
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
    game: 3,
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
    game: 4,
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
    game: 5,
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

export default function HomeBrawlSolo() {
  const { query } = useRouter();

  return (
    <>
      <div className="relative">
        <Slider itemWidth={397+16} bgColor="from-ui-900 via-ui-900/90 to-ui-900/0">
          {SoloBrawls.map((item, itemIndex) => (
            <BrawlCardSecondary key={item.id} brawl={item} isHorizontal={false} isClan={false} />
          ))}
        </Slider>
      </div>
    </>
  );
}
