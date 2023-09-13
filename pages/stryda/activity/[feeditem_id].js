import React, { Fragment, useContext, useEffect, useState } from "react";

import { UiContext } from "@/contexts/ui";
import { useRouter } from "next/router";

import { usePrototypeData } from "@/contexts/prototype";
import WidgetUser from "@/pages/stryda/components/WidgetUser";
import Structure from "@/pages/stryda/components/Structure";
import Link from "next/link";
import Loader from "@/pages/stryda/components/Loader";
import ModalGiftTokens from "../clans/modal-gift-tokens";
import PremiumLogo from "@/components/PremiumLogo/PremiumLogo";
import ModalBuyTokens from "../wallet/modal-buytokens";
import { DataFeedItems } from "@/mock-data/data-feed";
import FeedItemDetails from "@/pages/stryda/components/FeedItemDetails";

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
    setSelectedFeedItem(prototype.getFeedItemByID(feeditem_id));
  }, [feeditem_id]);

  return (
    <>
      <Structure title="Activity">
        <Loader
          loader={
            <section className="min-h-screen container max-w-md py-4 overflow-hidden space-y-4">
              <div className="rounded surface is-loading min-h-[calc(100vh-116px)]" />
            </section>
          }
        >
          {selectedFeedItem && (
            <section className="min-h-screen container max-w-md py-4 overflow-hidden space-y-4">
              <FeedItemDetails item={selectedFeedItem} />
            </section>
          )}
        </Loader>
      </Structure>
    </>
  );
}
