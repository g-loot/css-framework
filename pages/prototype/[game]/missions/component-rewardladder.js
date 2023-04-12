import React, { useContext, useEffect, useState } from "react";

import Ad from "../../../../components/Ad/Ad";
import Countdown from "../../../../components/Countdown/Countdown";
import Link from "next/link";
import RewardLadder from "../../../../components/RewardLadder/RewardLadder";
import Tooltip from "../../../../components/Tooltip/Tooltip";
import { UiContext } from "../../../../contexts/ui";
import { usePrototypeData } from "../../../../contexts/prototype";
import { useRouter } from "next/router";
import CardMissionSecondary from "../../../../components/Card/CardMissionSecondary";
import Slider from "../../../../components/Slider/Slider";
import ModalClaimLadderRewards from "../../home/modal-claim-ladderrewards";
import Battlepass from "../../../../components/BattlePass/BattlePass";

export default function ComponentRewardLadder() {
  const router = useRouter();
  const { query } = useRouter();
  const prototype = usePrototypeData();
  const uiContext = useContext(UiContext);
  const [selectedGame, setSelectedGame] = useState(null);
  const hasAds = query.ads === "true" ? true : false;
  const oldBattlepass = query.oldbattlepass === "true" ? true : false;
  const isPremium = query.premium === "true" ? true : false;
  const { game } = router.query;
  const [submitting, setSubmitting] = useState(false);
  const unclaimedRewards = query.unclaimedrewards === "true" ? true : false;
  const [hasUnclaimedRewards, setHasUnclaimedRewards] = useState(false);

  function addToastWithDelay(toast) {
    setSubmitting(true);

    setTimeout(() => {
      uiContext.openToastr(toast);
      setSubmitting(false);
    }, 1000);
  }

  useEffect(() => {
    setSelectedGame(prototype.getGameBySlug(game));
  }, [game]);

  useEffect(() => {
    setHasUnclaimedRewards(unclaimedRewards);
  }, [unclaimedRewards]);

  function openModalClaimLadderRewards() {
    setHasUnclaimedRewards(false);
    uiContext.openModal(<ModalClaimLadderRewards />);
  }

  return (
    <>
      <div className="flex flex-col gap-2 lg:flex-row items-baseline justify-between mb-2 px-4 sm:px-0">
        <div className="flex gap-2 items-baseline">
          <h2 className="h3 flex-none">Battlepass</h2>

          <Tooltip
            tooltip={
              <div className="max-w-xs text-sm text-center leading-tight">
                Unlock rewards as you earn XP from completed missions and
                registered Ladder matches.
              </div>
            }
          >
            <button className="text-ui-300 text-0">
              <span className="icon icon-16 icon-c-info" />
            </button>
          </Tooltip>
        </div>

        {hasUnclaimedRewards && (
          <button
            type="button"
            className="button button-claim is-shining mt-1"
            onClick={openModalClaimLadderRewards}
          >
            <span className="icon icon-present animate-bounce" />
            <span>Claim past rewards</span>
          </button>
        )}
        <div className="text-sm text-ui-300 flex gap-2 items-baseline">
          <span>
            Resets in{" "}
            <Countdown
              separator=":"
              hasHours={true}
              hasMinutes={true}
              hasSeconds={true}
            />
          </span>
          <Link href="/prototype/valorant/ladders/">
            <a className="link link-hover text-ui-300 text-sm">
              View Battlepass
            </a>
          </Link>
        </div>
      </div>
      {/*
      {isPremium ? (
        <div className="mb-2 mx-4 sm:mx-0">
          <p className="text-sm text-ui-300">
            As a <b className="text-ui-100">Premium user</b>, you currently earn an additional <b className="text-ui-100">50% XP</b> for each completed Mission and registered Ladder match.
          </p>
        </div>
      ) : (
        <div className="mb-2 mx-4 sm:mx-0">
          <p className="text-sm text-ui-300">
            <Link href="/prototype/premium">
              <a className="text-premium-500 link">Premium</a>
            </Link>{" "}
            users earn an additional 50% XP for each completed Mission and registered Ladder match.
          </p>
        </div>
      )}
      */}
      {selectedGame?.needsSteam && (
        <>
          <div className="px-4 sm:px-0">
            <div className="alert alert-info mb-4">
              <div>
                <svg
                  width="120"
                  height="37"
                  viewBox="0 0 120 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M18.0268 0C8.52432 0 0.739734 7.327 0 16.6385L9.69546 20.6471C10.517 20.0853 11.5094 19.7561 12.5771 19.7561C12.6728 19.7561 12.7681 19.7602 12.8625 19.7647L17.1742 13.5152V13.4268C17.1742 9.6652 20.2341 6.60485 23.9962 6.60485C27.7578 6.60485 30.8177 9.6652 30.8177 13.4268C30.8177 17.1885 27.7578 20.2492 23.9962 20.2492C23.9442 20.2492 23.8927 20.2492 23.8412 20.2451L17.6919 24.6328C17.6959 24.7126 17.698 24.794 17.698 24.8749C17.698 27.6989 15.4011 29.9954 12.5775 29.9954C10.0991 29.9954 8.02666 28.2264 7.55722 25.8837L0.623192 23.0188C2.77001 30.6116 9.74576 36.1782 18.0268 36.1782C28.0175 36.1782 36.1161 28.0792 36.1161 18.0897C36.1161 8.09863 28.0171 0 18.0268 0ZM11.3356 27.4473L9.11355 26.5292C9.50734 27.3491 10.1886 28.0357 11.0931 28.4127C13.0486 29.2273 15.3029 28.2994 16.1179 26.3424C16.5125 25.3961 16.515 24.3513 16.1236 23.4026C15.7331 22.4535 14.9963 21.7134 14.0488 21.3184C13.1087 20.927 12.1015 20.9414 11.2166 21.2754L13.5119 22.2245C14.9541 22.8257 15.6362 24.4818 15.0351 25.924C14.4352 27.3667 12.7779 28.0488 11.3356 27.4473ZM23.9953 8.88103C26.502 8.88103 28.5409 10.9203 28.5409 13.4266C28.5409 15.9328 26.502 17.9717 23.9953 17.9717C21.4891 17.9717 19.4498 15.9332 19.4498 13.4266C19.4498 10.9203 21.4891 8.88103 23.9953 8.88103ZM24.0031 10.0043C22.1172 10.0043 20.5882 11.5329 20.5882 13.4188C20.5882 15.3043 22.1172 16.8333 24.0031 16.8333C25.889 16.8333 27.418 15.3047 27.418 13.4188C27.418 11.5329 25.889 10.0043 24.0031 10.0043ZM55.4346 12.377L54.2226 14.5075C53.2891 13.8553 52.0239 13.4627 50.9194 13.4627C49.657 13.4627 48.876 13.9853 48.876 14.9213C48.876 15.8828 49.8678 16.2205 51.4206 16.7492L51.4208 16.7493C51.7046 16.8459 52.007 16.9489 52.3256 17.0632C54.5424 17.8471 55.8166 18.7684 55.8166 20.7987C55.8166 23.5765 53.6321 25.1365 50.4925 25.1365C48.9623 25.1365 47.1164 24.7415 45.6975 23.8783L46.5816 21.5164C47.7343 22.1252 49.1132 22.4863 50.3424 22.4863C51.9993 22.4863 52.7869 21.875 52.7869 20.9713C52.7869 20.0138 51.7574 19.6764 50.0661 19.1221C49.9307 19.0777 49.791 19.0319 49.6472 18.9843C47.4378 18.2467 45.9068 17.2787 45.9068 15.0317C45.9068 12.4977 47.9363 11.0423 50.8564 11.0423C52.8916 11.0423 54.5273 11.6872 55.4346 12.377ZM62.0554 13.7237V24.9032H64.9093V13.7237H69.0393V11.276H57.9131V13.7237H62.0554ZM80.5169 16.787V19.2347H75.0554V22.4329H81.392V24.9032H72.2023V11.276H81.392V13.7164H75.0554V16.787H80.5169ZM86.8596 24.9032L87.7617 22.2571V22.2567H93.0895L94.0112 24.9028H97.1039L91.8501 11.276H88.9774L83.868 24.9032H86.8596ZM88.5366 19.9827L90.3976 14.5265L92.297 19.9827H88.5366ZM106.41 24.5061L102.742 16.6144V24.9032H100.009V11.276H102.735L107.315 21.1129L111.732 11.276H114.483V24.9032H111.75V16.5432L108.021 24.5061H106.41ZM118.115 14.8962C119.122 14.8962 120 14.1663 120 12.9952C120 11.8245 119.123 11.0994 118.115 11.0994C117.104 11.0994 116.225 11.8245 116.225 12.9952C116.225 14.1663 117.104 14.8962 118.115 14.8962ZM118.115 14.5904C117.248 14.5904 116.542 13.975 116.542 12.9952C116.542 12.0199 117.25 11.4065 118.115 11.4065C118.98 11.4065 119.683 12.0126 119.683 12.9952C119.683 13.975 118.98 14.5904 118.115 14.5904ZM118.795 12.5642C118.795 12.2849 118.63 12.0265 118.141 12.0265H117.489V13.9001H117.787V13.1727H118.168L118.537 13.9001H118.896L118.458 13.0794C118.643 12.9919 118.795 12.8202 118.795 12.5642ZM118.123 12.8983H117.79H117.79V12.3107H118.122C118.375 12.3107 118.466 12.4211 118.466 12.5928C118.466 12.7629 118.339 12.8983 118.123 12.8983Z" />
                </svg>
                <div>
                  <div className="uppercase">Important:</div>
                  <p className="max-w-[80ch]">
                    To complete Missions and earn rewards, you need to{" "}
                    <Link
                      href={`/prototype/profile/settings${prototype.getURLparams()}`}
                    >
                      <a className="link">
                        connect your Steam account to Stryda
                      </a>
                    </Link>
                    .
                  </p>
                </div>
              </div>
              <div className="flex-none">
                <Link
                  href={`/prototype/profile/settings${prototype.getURLparams()}`}
                >
                  <a className="button button-sm button-tertiary">
                    <span>
                      Connect{" "}
                      <span className="hidden sm:inline">my account</span>
                    </span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </>
      )}

      {!oldBattlepass ? (
        <div className="surface sm:rounded p-2 pb-4 mt-4 mb-8">
          <Battlepass size="battlepass-md" />
        </div>
      ) : (
        <div className="mb-4">
          <Slider
            itemWidth={480 + 16}
            bgColor="from-ui-900 via-ui-900/90 to-ui-900/0"
          >
            <RewardLadder hasReward={selectedGame?.hasReward} />
          </Slider>
        </div>
      )}
    </>
  );
}
