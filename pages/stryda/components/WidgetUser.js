import React, { useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { UiContext } from "../../../contexts/ui";
import { usePrototypeData } from "../../../contexts/prototype";
import Avatar from "../../../components/Avatar/Avatar";
import Link from "next/link";

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

  return (
    <>
      {selectedUser && (
        <div className="surface rounded-3 text-center">
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
                  className="rounded-t-3"
                />
              </>
            ) : (
              <>
                <img
                  src="https://res.cloudinary.com/gloot/image/upload/v1672241804/Stryda/illustrations/Generic_bg.png"
                  alt=""
                  className="rounded-t-3"
                />
              </>
            )}
          </div>
          <div className="p-2">
            <h2 className="text-xl leading-tight mt-4">
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
            <ul className="grid grid-cols-2 items-stretch divide-x-1 divide-ui-700 leading-tight my-4">
              <li>
                <div className="text-lg text-ui-100">165</div>
                <div className="text-sm text-ui-300">followers</div>
              </li>
              <li>
                <div className="text-lg text-ui-100">165</div>
                <div className="text-sm text-ui-300">following</div>
              </li>
            </ul>
            {selectedUser.clan ? (
              <Link
                href={`/prototype/clans/${
                  selectedUser.clan
                }${prototype.getURLparams()}`}
              >
                <div className="p-2 rounded-1 bg-ui-700 interactive">
                  <div className="flex gap-2 items-center justify-center">
                    <div className="avatar avatar-tiny avatar-squircle">
                      <div>
                        <img
                          src={prototype.getClanByID(selectedUser.clan).avatar}
                          alt="avatar"
                        />
                      </div>
                    </div>
                    <div className="text-ui-100 truncate">
                      &#91;
                      {prototype.getClanByID(selectedUser.clan).tag}
                      &#93; {prototype.getClanByID(selectedUser.clan).nickname}
                    </div>
                  </div>
                </div>
              </Link>
            ) : (
              <div className="p-2 rounded-1 bg-ui-700">
                <div className="space-y-2">
                  <div className="text-center text-sm">
                    {selectedUser.nickname} is not part of a clan.
                  </div>
                  <Link href="#">
                    <a
                      type="button"
                      className="button button-sm button-primary w-full"
                    >
                      <span>Recruit to your clan</span>
                    </a>
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
