import react from "react";

import { useRouter } from "next/router";
import BrawlCardSecondary from "../../../components/Brawl/BrawlCardSecondary";
import Slider from "../../../components/Slider/Slider";

const ClanBrawls = [
  {
    id: 1,
    game: 2,
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
    game: 1,
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
    game: 4,
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

  return (
    <>
      <div className="relative">
        <Slider itemWidth={809+16} bgColor="from-ui-900 via-ui-900/90 to-ui-900/0">
          {ClanBrawls.map((item, itemIndex) => (
            <BrawlCardSecondary key={item.id} brawl={item} isHorizontal={true} isClan={false} />
          ))}
        </Slider>
      </div>
    </>
  );
}
