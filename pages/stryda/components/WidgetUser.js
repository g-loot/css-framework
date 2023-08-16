import React, { useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { UiContext } from "@/contexts/ui";
import { usePrototypeData } from "@/contexts/prototype";
import Avatar from "@/components/Avatar/Avatar";
import Link from "next/link";
import ModalRemoveFriend from "../profile/[user_id]/modal-remove-friend";

export default function WidgetUser(props) {
  const router = useRouter();
  const { query } = useRouter();
  const uiContext = useContext(UiContext);
  const prototype = usePrototypeData();
  const user_id = props.id || 1;
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    setSelectedUser(prototype.getUserByID(user_id));
  }, [user_id]);

  function openModalRemoveFriends(id) {
    uiContext.openModal(<ModalRemoveFriend id={id} />);
  }

  return (
    <>
      {selectedUser && (
        <div className="surface rounded text-center">
          <div className="relative">
            <div className="absolute z-10 inset-0 flex items-center justify-center">
              <Avatar id={user_id} hasTooltip={false} size="avatar-md" />
            </div>
            {selectedUser.shopItems?.profileBanner ? (
              <>
                <img
                  src={
                    prototype.getShopitemByID(
                      2,
                      selectedUser.shopItems?.profileBanner
                    ).image
                  }
                  alt=""
                  className="rounded-t"
                />
              </>
            ) : (
              <>
                <img
                  src="https://res.cloudinary.com/gloot/image/upload/v1692022099/Stryda/illustrations/Generic_background_v2.jpg"
                  alt=""
                  className="rounded-t"
                />
              </>
            )}
          </div>
          <div className="p-2">
            <Link
              href={`/stryda/profile/${
                selectedUser.id
              }${prototype.getURLparams()}`}
            >
              <h2
                className={`text-xl leading-tight mt-4 truncate interactive ${
                  selectedUser.isPremium ? "text-premium-500" : ""
                }`}
              >
                {" "}
                {selectedUser.clan && (
                  <>
                    {" "}
                    &#91;
                    {prototype.getClanByID(selectedUser.clan)?.tag}
                    &#93;
                  </>
                )}{" "}
                {selectedUser.nickname}
              </h2>
            </Link>
            <ul className="flex justify-around items-stretch divide-x-1 divide-ui-700 leading-tight my-4 text-center">
              <li>
                <Link
                  href={`/stryda/profile/${
                    selectedUser.id
                  }?tab=followers${prototype.getURLparams("&")}`}
                >
                  <button type="button" className="interactive px-2">
                    <div className="text-lg text-ui-100">165</div>
                    <div className="text-sm text-ui-300">followers</div>
                  </button>
                </Link>
              </li>
              <li>
                <Link
                  href={`/stryda/profile/${
                    selectedUser.id
                  }?tab=followers${prototype.getURLparams("&")}`}
                >
                  <button type="button" className="interactive px-2">
                    <div className="text-lg text-ui-100">165</div>
                    <div className="text-sm text-ui-300">following</div>
                  </button>
                </Link>
              </li>
            </ul>
            <div className="space-y-2 mb-2">
              {selectedUser.isYou && (
                <Link href={`/stryda/profile/settings${prototype.getURLparams("&")}`}>
                  <a
                    type="button"
                    className="button button-sm button-tertiary w-full"
                  >
                    <span className="icon icon-cogwheel" />
                    <span>Profile settings</span>
                  </a>
                </Link>
              )}
              {!selectedUser.isYou && selectedUser.isFriend && (
                <a
                  type="button"
                  className="button button-sm button-tertiary w-full"
                  onClick={openModalRemoveFriends.bind(this, selectedUser.id)}
                >
                  <span className="icon icon-a-remove" />
                  <span>Remove as friend</span>
                </a>
              )}
              {!selectedUser.isYou && !selectedUser.isFriend && (
                <Link
                  href={`/prototype/profile/${
                    selectedUser.id
                  }?tab=followers${prototype.getURLparams("&")}`}
                >
                  <a
                    type="button"
                    className="button button-sm button-primary w-full"
                  >
                    <span className="icon icon-add-27" />
                    <span>Follow</span>
                  </a>
                </Link>
              )}
            </div>
            {selectedUser.clan ? (
              <Link
                href={`/stryda/clans/${
                  selectedUser.clan
                }${prototype.getURLparams()}`}
              >
                <div className="p-2 rounded bg-ui-600 interactive">
                  <div className="flex gap-2 items-center justify-center">
                    <div className="avatar avatar-tiny avatar-squircle">
                      <div>
                        <img
                          src={prototype.getClanByID(selectedUser.clan).avatar}
                          alt="avatar"
                        />
                      </div>
                    </div>
                    <div className="text-ui-100 truncate text-sm">
                      &#91;
                      {prototype.getClanByID(selectedUser.clan).tag}
                      &#93; {prototype.getClanByID(selectedUser.clan).nickname}
                    </div>
                  </div>
                </div>
              </Link>
            ) : (
              <div className="p-2 rounded bg-ui-700">
                <div className="space-y-2">
                  <div className="text-center text-sm">
                    {selectedUser.nickname} is not part of a clan.
                  </div>
                  <Link href="#">
                    <button
                      type="button"
                      className="button button-sm button-secondary w-full"
                    >
                      <span>Recruit to your clan</span>
                    </button>
                  </Link>
                </div>
              </div>
            )}
            
          </div>
        </div>
      )}
    </>
  );
}
