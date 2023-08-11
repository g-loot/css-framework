import React, { Fragment, useContext, useEffect, useState } from "react";

import { UiContext } from "../../../contexts/ui";
import { useRouter } from "next/router";

import { usePrototypeData } from "../../../contexts/prototype";
import WidgetUser from "../components/WidgetUser";
import Structure from "../components/Structure";
import Link from "next/link";
import Tooltip from "../../../components/Tooltip/Tooltip";
import Avatar from "../../../components/Avatar/Avatar";
import Loader from "../components/Loader";
import ModalGiftTokens from "../clans/modal-gift-tokens";
import PremiumLogo from "../../../components/PremiumLogo/PremiumLogo";
import ModalBuyTokens from "../wallet/modal-buytokens";
import { DataFeedItems } from "../../../mock-data/data-feed";
import FeedItemDetails from "../components/FeedItemDetails";

export default function Home() {
  const router = useRouter();
  const { query } = useRouter();
  const uiContext = useContext(UiContext);
  const prototype = usePrototypeData();
  const { feeditem_id } = router.query;
  const [selectedFeedItem, setSelectedFeedItem] = useState(null);

  function openModalGiftTokens(selectedUser) {
    uiContext.openModal(<ModalGiftTokens selectedUser={selectedUser} />);
  }

  useEffect(() => {
    setSelectedFeedItem(getFeedItemByID(feeditem_id))
  }, [feeditem_id]);


  const getFeedItemByID = (id) => {
    return DataFeedItems.find((feeditem) => {
      return feeditem.id === parseInt(id);
    });
  };


  return (
    <>
      <Structure title="Activity">
        <Loader
          loader={
            <section className="min-h-full container flex flex-col md:flex-row gap-8 py-4">
              <div className="w-80 2xl:w-96 space-y-4 hidden md:block rounded surface is-loading min-h-[calc(100vh-116px)]" />
              <div className="flex-1 rounded surface is-loading min-h-[calc(100vh-116px)]" />
            </section>
          }
        >
          {selectedFeedItem && (
            <section className="min-h-full container flex flex-col md:flex-row gap-8 py-4">
              <div className="w-80 2xl:w-96 space-y-4 hidden md:block">
                <div
                  className="sticky space-y-4"
                  style={{ top: "calc(48px + 1rem)" }}
                >
                  <div
                    className="surface rounded px-4 py-6 text-center"
                  >
                    <PremiumLogo
                      src="https://res.cloudinary.com/gloot/image/upload/v1672241197/Stryda/logos/stryda-premium-logo-main-white-animated.svg"
                      width="180"
                      height="auto"
                      className="mx-auto"
                    />
                    <p className="px-4 text-ui-300 mx-auto mt-4 mb-5">
                      Increase your amount of XP you can earn each day with a{" "}
                      <Link href={`/stryda/premium${prototype.getURLparams()}`}>
                        <a className="link text-premium-500">
                          Premium subscription
                        </a>
                      </Link>
                      .
                    </p>
                    <div className="mx-auto mt-2">
                      <Link href={`/stryda/premium${prototype.getURLparams()}`}>
                        <a className="button button-premium is-shining">
                          <span>Get Premium</span>
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="rounded bg-ui-600 aspect-square grid place-content-center text-center text-2xl text-ui-400">
                    <span>AD</span>
                  </div>
                </div>
              </div>
              <div className="flex-1 overflow-hidden space-y-4">
                <FeedItemDetails item={selectedFeedItem} />
              </div>
            </section>
          )}
        </Loader>
      </Structure>
    </>
  );
}
