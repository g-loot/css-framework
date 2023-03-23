import { useContext, useEffect, useState } from "react";

import Accordion from "../../../../components/Accordion/Accordion";
import Link from "next/link";
import ModalBuyTokens from "./modal-buytokens";
import { UiContext } from "../../../../contexts/ui";
import { usePrototypeData } from "../../../../contexts/prototype";
import { useRouter } from "next/router";

import { DataGroupFinderPosts } from "../../../../mock-data/data-groupfinder";
import Avatar from "../../../../components/Avatar/Avatar";

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
          <div key={itemIndex} className="surface rounded">
            <div className="item">
              <div className="item-image">
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
              </div>
              <div className="item-body leading-tight">
                <div className="item-title">
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
                </div>
                <div className="text-sm text-ui-300">
                  {item.datePosted}
                </div>
              </div>
              {prototype.getUserByID(item.author)?.isYou && (
                <div className="item-actions">
                  <div>
                  <div className="dropdown dropdown-end">
                      <label tabIndex="1" className="button button-ghost rounded-full">
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
                </div>
              )}
            </div>
            <div className="p-8">
              I am looking for <span className="font-bold text-ui-100">{item.numberPlayer} player{item.numberPlayer > 1 && (<>s</>)}</span> to play <span className="uppercase">{game}</span> <span className="capitalize font-bold text-ui-100">{item.gameMode}</span>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
