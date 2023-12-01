import React, { useEffect, useState, useContext } from "react";

import Link from "next/link";
import { UiContext } from "@/contexts/ui";
import { usePrototypeData } from "@/contexts/prototype";
import { useRouter } from "next/router";
import ModalAchievementReceived from "../../modal-achievementreceived";
import LadderCardSecondary from "../../../../components/Ladder/LadderCardSecondary";
import AchievementFrame from "../../../../components/Achievements/AchievementFrame";
import AchievementIcon from "../../../../components/Achievements/AchievementIcon";
import CardMissionSecondary from "../../../../components/Card/CardMissionSecondary";
import Avatar from "../../../../components/Avatar/Avatar";
import Video from "../../components/Video";
import FeedItem from "../../components/FeedItem";

export default function TabProfileFeed() {
  const router = useRouter();
  const { query } = useRouter();
  const uiContext = useContext(UiContext);
  const prototype = usePrototypeData();
  const [selectedUser, setSelectedUser] = useState(null);
  const { user_id } = router.query;
  const isEmpty = query.empty === "true" ? true : false;
  const { game } = router.query;

  useEffect(() => {
    setSelectedUser(prototype.getUserByID(user_id));
  }, [user_id]);

  function openModalAchievementReceived(item) {
    uiContext.openModal(<ModalAchievementReceived item={item} />);
  }

  return (
    <>
      {selectedUser && (
        <div className="flex items-start gap-8">
          <div className="flex-1">
            {isEmpty ? (
              <>
                <div className="surface rounded-lg px-4 py-8 text-center">
                  <div className="max-w-xs mx-auto">
                    <span className="icon icon-smile text-6xl text-ui-500" />
                    <div className="mt-2 mb-6">
                      <p className="text-sm text-ui-400">
                        You have not entered any Ladders yet.
                      </p>
                      <p className="text-lg text-ui-300">
                        Play tournaments and competitions to see the history of
                        your earnings.
                      </p>
                    </div>
                    <Link href="/prototype/valorant/ladders">
                      <a className="button button-main">
                        <span>Browse Ladders</span>
                      </a>
                    </Link>
                  </div>
                </div>
              </>
            ) : (
              <>
                {prototype
                  .getUserFeedItems(selectedUser.id)
                  .map((item, itemIndex) => (
                    <FeedItem
                      item={item}
                      key={itemIndex}
                      autoPlay={false}
                      stateFeedAd={true}
                    />
                  ))}
              </>
            )}
          </div>
          <div className="w-80 hidden lg:block space-y-4"></div>
        </div>
      )}
    </>
  );
}
