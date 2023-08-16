import { useContext, useEffect, useState } from "react";

import Accordion from "../../../../components/Accordion/Accordion";
import Link from "next/link";
import ModalBuyTokens from "./modal-buytokens";
import { UiContext } from "@/contexts/ui";
import { usePrototypeData } from "@/contexts/prototype";
import { useRouter } from "next/router";

import { DataGroupFinderPosts } from "@/mock-data/data-groupfinder";
import Avatar from "../../../../components/Avatar/Avatar";
import Tooltip from "../../../../components/Tooltip/Tooltip";

export default function TabGroupFinderFeed() {
  const router = useRouter();
  const prototype = usePrototypeData();
  const { query } = useRouter();
  const { game } = router.query;
  const uiContext = useContext(UiContext);
  const alernativeLayout = query.alternativelayout === "true" ? true : false;
  const modaBuyTokens = query.modalbuytokens === "true" ? true : false;
  const [isMobile, setIsMobile] = useState(false);
  const [windowSize, setWindowSize] = useState(0);

  const getGameGroupFinderPostsByID = (gameID) => {
    return DataGroupFinderPosts.find((general) => {
      return general.id === parseInt(gameID);
    });
  };

  function handleLoad() {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }

  const getGroupFinderPostByID = (gameID, id) => {
    const selectedGroupFinderPosts = getGameGroupFinderPostsByID(gameID);
    const GroupFinderPost = selectedGroupFinderPosts.posts?.find((post) => {
      return post.id === parseInt(id);
    });
    return GroupFinderPost;
  };

  return (
    <>
      <section className="grid gap-4 md:grid-cols-2">
        {getGameGroupFinderPostsByID(0).posts?.map((item, itemIndex) => (
          <div key={itemIndex} className={`surface rounded flex flex-col ${prototype.getUserByID(item.author).isPremium ? 'col-span-2 order-1' : 'order-2'}`}>
            <div className="flex-1 flex items-start gap-2 p-3 relative">
              {prototype.getUserByID(item.author)?.isYou && (
                <div className="absolute top-1 right-1">
                  <div className="dropdown dropdown-end">
                    <label
                      tabIndex="1"
                      className="button button-ghost rounded-full"
                    >
                      <span className="icon icon-dots-vertical" />
                    </label>
                    <div tabIndex="1" className="dropdown-content w-52 p-1">
                      <ul className="menu menu-rounded">
                        <li>
                          <a tabIndex="1">
                            <span>Edit</span>
                          </a>
                        </li>
                        <li>
                          <a tabIndex="1">
                            <span>Delete</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
              <Link
                href={`/prototype/profile/${
                  item.author
                }${prototype.getURLparams()}`}
              >
                <Avatar
                  id={item.author}
                  hasTooltip={true}
                  hasTooltipXP={false}
                  size="avatar-sm"
                />
              </Link>
              <div>
                <div className="leading-tight">
                  <Link
                    href={`/prototype/profile/${
                      item.author
                    }${prototype.getURLparams()}`}
                  >
                    <div className="item-title interactive">
                      <span
                        className={`${
                          prototype.getUserByID(item.author)?.isYou
                            ? "text-main font-bold"
                            : ""
                        } ${
                          prototype.getUserByID(item.author)?.isPremium
                            ? "text-premium-500"
                            : ""
                        }`}
                      >
                        {prototype.getUserByID(item.author)?.clan && (
                          <>
                            &#91;
                            {
                              prototype.getClanByID(
                                prototype.getUserByID(item.author)?.clan
                              )?.tag
                            }
                            &#93;{" "}
                          </>
                        )}
                        {prototype.getUserByID(item.author)?.nickname}
                      </span>
                    </div>
                  </Link>
                  <div className="text-sm text-ui-300">{item.datePosted}</div>
                </div>
                <p className="pt-2 pb-3">
                  I am looking for{" "}
                  <span className="font-bold text-ui-100">
                    {item.numberPlayer} player
                    {item.numberPlayer > 1 && <>s</>}
                  </span>{" "}
                  to play <span className="uppercase">{game}</span>{" "}
                  <span className="capitalize font-bold text-ui-100">
                    {item.gameMode}
                  </span>
                  .
                </p>
                <div className="border-l-2 border-ui-700 py-2 px-4 space-y-3">
                  {prototype.getUserByID(item.author).isPremium && item.customText && (
                    <p className="italic text-ui-300">
                      {item.customText}
                    </p>
                  )}
                  <div className="inline-flex items-center justify-between gap-4">
                    <Tooltip
                      tooltip={prototype.getUserByID(item.author).countryFlag}
                    >
                      <img
                        src={`https://flagcdn.com/${
                          prototype.getUserByID(item.author).countryFlag
                        }.svg`}
                        className="aspect-video rounded-sm max-w-[1.5rem]"
                      />
                    </Tooltip>
                    <span className="text-ui-200 font-bold">{item.region}</span>
                    <Tooltip tooltip={`Ascendant`}>
                      <img
                        className="h-6"
                        src="https://res.cloudinary.com/gloot/image/upload/v1671535680/Stryda/stats/valorant/rank-acendant.webp"
                        height="auto"
                        width="auto"
                        alt=""
                      />
                    </Tooltip>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-t border-ui-700 p-1 flex items-center justify-center gap-1">
              {prototype.getUserByID(item.author)?.socials.riotValorantNickname && (
                <button type="button" className="button button-ghost flex-1">
                  <span className="icon icon-riotgames-symbol" />
                  <span className="normal-case">
                    {prototype.getUserByID(item.author)?.socials.riotValorantNickname}#
                    {prototype.getUserByID(item.author)?.socials.riotValorantHashtag}
                  </span>
                </button>
              )}
              {prototype.getUserByID(item.author)?.socials.discord && (
                <button type="button" className="button button-ghost flex-1">
                  <span className="icon icon-discord" />
                  <span className="normal-case">
                    {prototype.getUserByID(item.author)?.socials.discord}
                  </span>
                </button>
              )}
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
