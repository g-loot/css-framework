import { useContext, useEffect, useState } from "react";

import Link from "next/link";
import Lottie from "lottie-react";
import LottieExplosion from "../../assets/animations/explosion_stryda_1.json";
import Tooltip from "../Tooltip/Tooltip";
import { UiContext } from "../../contexts/ui";
import { usePrototypeData } from "../../contexts/prototype";
import { useRouter } from "next/router";
import Countdown from "../Countdown/Countdown";
import ModalAvatarEdit from "../../pages/prototype-new/profile/[user_id]/modal-avataredit";

export default function PrototypeSideRightUser() {
  const router = useRouter();
  const { query } = useRouter();
  const prototype = usePrototypeData();
  const uiContext = useContext(UiContext);
  const isEmpty = query.empty === "true" ? true : false;
  const isPremium = query.premium === "true" ? true : false;
  const hasAvatarFrame = query.avatarframe || false;
  const [avatarFrame, setAvatarFrame] = useState(false);
  const modalAvatarEdit = query.modalavataredit === "true" ? true : false;

  useEffect(() => {
    if (hasAvatarFrame) {
      setAvatarFrame(prototype.getShopitemByID(1, hasAvatarFrame));
    }
  }, []);

  useEffect(() => {
    if (modalAvatarEdit) {
      openModalAvatarEdit(1);
    }
  }, [modalAvatarEdit]);

  function openModalAvatarEdit(id) {
    uiContext.openModal(<ModalAvatarEdit id={id} />);
  }

  return (
    <>
      <div className="space-y-2 px-2">
        <div className="grid place-content-center">
          <div className="relative">
            <div
              className={`avatar avatar-xl avatar-circle ${
                prototype.getUserByID(1).isPremium ? "avatar-premium" : ""
              }`}
            >
              {avatarFrame && <img src={avatarFrame.image} alt="" />}
              <div>
                <img src={prototype.getUserByID(1).avatar} alt="avatar" />
              </div>
            </div>
            <button
              onClick={openModalAvatarEdit.bind(this, hasAvatarFrame)}
              type="button"
              className="button button-tertiary rounded-full absolute z-20 bottom-0 right-0"
            >
              <span className="icon icon-pen-2" />
            </button>
          </div>
        </div>

        <div
          className={`text-center pt-2 ${
            prototype.getUserByID(1).isPremium ? "text-premium-500" : ""
          }`}
        >
          {prototype.getUserByID(1).nickname}
        </div>

{/*
        <div className="flex justify-center gap-1">
          {prototype.getUserByID(1).games?.map((game, gameIndex) => (
            <div
              key={game.id}
              className="cursor-pointer p-1 flex items-center justify-center"
            >
              <span
                className={`icon text-xl ${
                  prototype.getGameByID(game).slug === "apexlegends"
                    ? "icon-game-apexlegends-symbol text-game-apexlegends"
                    : ""
                } ${
                  prototype.getGameByID(game).slug === "csgo"
                    ? "icon-game-csgo-symbol text-game-csgo"
                    : ""
                }  ${
                  prototype.getGameByID(game).slug === "dota2"
                    ? "icon-game-dota2-symbol text-game-dota2"
                    : ""
                }  ${
                  prototype.getGameByID(game).slug === "leagueoflegends"
                    ? "icon-game-leagueoflegends-symbol text-game-leagueoflegends"
                    : ""
                }  ${
                  prototype.getGameByID(game).slug === "rocketleague"
                    ? "icon-game-rocketleague-symbol text-game-rocketleague"
                    : ""
                } ${
                  prototype.getGameByID(game).slug === "pubg"
                    ? "icon-game-pubg-symbol text-game-pubg"
                    : ""
                }  ${
                  prototype.getGameByID(game).slug === "valorant"
                    ? "icon-game-valorant-symbol text-game-valorant"
                    : ""
                }`}
              />
            </div>
          ))}
        </div>
              */}
        <div className="rounded p-2 space-y-2 bg-ui-700 mx-auto">
          <div className="flex items-center justify-center gap-x-1 text-gold-500">
            <span>550</span>
            <div className="infobanner is-active">
              <div className="infobanner-front">
                <span className="font-bold text-xs leading-[0]">
                  {isPremium ? <>+165%</> : <>+15%</>}
                </span>
              </div>
              <div className="infobanner-back">
                <span className="icon icon-xp-symbol text-3xl text-main mx-auto" />
              </div>
            </div>
            <Tooltip
            tooltip={
              <div className="">
                <h5 className="mx-2 mt-2">XP Boosts</h5>
              <ul className="rounded-lg text-left text-sm p-2 leading-none">
                {isPremium ? (
                  <li className="flex gap-2 py-1 items-center">
                    <div className="icon icon-e-add text-premium-500" />
                    <div className="flex-1">Premium boost</div>
                    <div className="text-right text-premium-500">+50%</div>
                  </li>
                ) : (
                  <li className="flex gap-2 py-1 items-center text-ui-400">
                    <div className="icon icon-e-remove" />
                    <div className="flex-1 line-through">Premium boost</div>
                    <div className="text-right line-through">+50%</div>
                  </li>
                )}
                <li className="flex gap-2 py-1 items-center">
                  <div className="icon icon-e-add text-main" />
                  <div className="flex-1">Clan boost</div>
                  <div className="text-right text-main">+10%</div>
                </li>
                <li className="separator bg-ui-600" />
                <li className="flex gap-2 py-1 items-center">
                  <div className="icon icon-e-add text-main" />
                  <div className="flex-1 flex-col">
                    <div>New user boost</div>
                    <div>
                      <Countdown
                        separator={":"}
                        hasDays={true}
                        hasHours={true}
                        hasMinutes={true}
                        hasSeconds={true}
                        hasLabels={false}
                        labelsAbbr={false}
                        labelClassName=""
                        className="text-xs text-main"
                      />
                    </div>
                  </div>
                  <div className="text-right text-main">+5%</div>
                </li>
              </ul>
              </div>
            }
          >
            <button className="text-ui-300 text-0 ml-2">
              <span className="icon text-sm icon-c-info" />
            </button>
          </Tooltip>
          </div>

          <div className="flex items-center justify-center gap-x-3 hoverhighlight">
            <div className="inline-flex">
              <Tooltip
                tooltip={
                  <div className="w-56 relative">
                    <h6 className="my-4 text-ui-100">Coins</h6>
                    <div className="absolute -top-8 -right-5 p-2">
                      <img
                        src="https://res.cloudinary.com/gloot/image/upload/v1674640634/Stryda/currencies/Reward-coin-face.png"
                        className="w-14 h-14"
                        alt=""
                      />
                      <div className="lottie-blur absolute -inset-1">
                        <Lottie
                          animationData={LottieExplosion}
                          loop={false}
                          autoplay={true}
                        />
                      </div>
                    </div>
                    <ul className="leading-tight space-y-2 mt-2">
                      <li className="flex gap-2 text-sm">
                        <div className=" w-12 uppercase">Use</div>
                        <div className="flex-1">
                          To purchase items in the Shop.
                        </div>
                      </li>
                      <li className="flex gap-2 text-sm">
                        <div className=" w-12 uppercase">Get</div>
                        <div className="flex-1">
                          From <strong>Daily Login</strong> Streak and{" "}
                          <strong>Weekly Ladder winnings</strong>.
                        </div>
                      </li>
                    </ul>
                  </div>
                }
              >
                <Link
                  href={`/prototype-new/wallet${prototype.getURLparams()}`}
                >
                  <div className="flex items-center gap-1 text-currency-1-500">
                    <span className="icon icon-20 icon-coin" />
                    <span className="">
                      {prototype.getUserByID(1)?.wallet.coins}
                    </span>
                  </div>
                </Link>
              </Tooltip>
            </div>
            <div className="inline-flex">
              <Tooltip
                tooltip={
                  <div className="w-56 relative">
                    <h6 className="my-4 text-ui-100">Token</h6>
                    <div className="absolute -top-8 -right-5 p-2">
                      <img
                        src="https://res.cloudinary.com/gloot/image/upload/v1674640634/Stryda/currencies/Reward-token-face.png"
                        className="w-14 h-14"
                        alt=""
                      />
                      <div className="lottie-blur absolute grid place-items-center -inset-1">
                        <Lottie
                          animationData={LottieExplosion}
                          loop={false}
                          autoplay={true}
                        />
                      </div>
                    </div>
                    <ul className="leading-tight space-y-2 mt-2">
                      <li className="flex gap-2 text-sm">
                        <div className=" w-12 uppercase">Use</div>
                        <div className="flex-1">To enter Weekly Ladders.</div>
                      </li>
                      <li className="flex gap-2 text-sm">
                        <div className=" w-12 uppercase">Get</div>
                        <div className="flex-1">
                          <strong>Missions, Daily Login Streak</strong> or{" "}
                          <strong>buy them</strong> directly from the Wallet.
                        </div>
                      </li>
                    </ul>
                  </div>
                }
              >
                <Link
                  href={`/prototype-new/wallet${prototype.getURLparams()}`}
                >
                  <div className="flex items-center gap-1 text-currency-2-500">
                    <span className="icon icon-20 icon-token" />
                    <span className="">
                      {prototype.getUserByID(1)?.wallet.tokens}
                    </span>
                  </div>
                </Link>
              </Tooltip>
            </div>
            <div className="inline-flex">
              <Tooltip
                tooltip={
                  <div className="w-56 relative">
                    <h6 className="my-4 text-ui-100">Power token</h6>
                    <div className="absolute -top-8 -right-5 p-2">
                      <img
                        src="https://res.cloudinary.com/gloot/image/upload/v1674640634/Stryda/currencies/Reward-powertoken-face.png"
                        className="w-14 h-14"
                        alt=""
                      />
                      <div className="lottie-blur absolute grid place-items-center -inset-1">
                        <Lottie
                          animationData={LottieExplosion}
                          loop={false}
                          autoplay={true}
                        />
                      </div>
                    </div>
                    <ul className="leading-tight space-y-2 mt-2">
                      <li className="flex gap-2 text-sm">
                        <div className=" w-12 uppercase">Use</div>
                        <div className="flex-1">To enter Power Plays.</div>
                      </li>
                      <li className="flex gap-2 text-sm">
                        <div className=" w-12 uppercase">Get</div>
                        <div className="flex-1">
                          <strong>Buy them</strong> directly from the Wallet.
                        </div>
                      </li>
                    </ul>
                  </div>
                }
              >
                <Link
                  href={`/prototype-new/wallet${prototype.getURLparams()}`}
                >
                  <div className="flex items-center gap-1 text-currency-3-500">
                    <span className="icon icon-20 icon-powertoken" />
                    <span className="">
                      {prototype.getUserByID(1)?.wallet.powertokens}
                    </span>
                  </div>
                </Link>
              </Tooltip>
            </div>
          </div>
        </div>
        <div className="text-center">
          <Link href="/prototype-new/profile/1">
            <button
              type="button"
              className="button button-secondary button-sm w-full"
            >
              <span>View profile</span>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
