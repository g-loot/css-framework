import Reward from "../../../../../components/Reward/Reward";
import Tooltip from "../../../../../components/Tooltip/Tooltip";
import { usePrototypeData } from "../../../../../contexts/prototype";
import { useRouter } from "next/router";

const rewardDistribClan = [
  {
    name: "1",
    rewards: [
      {
        type: "coin",
        value: 1000,
      },
      {
        type: "token",
        value: 100,
      },
      {
        type: "powertoken",
        value: 5,
      },
    ],
  },
  {
    name: "2",
    rewards: [
      {
        type: "coin",
        value: 700,
      },
      {
        type: "avatarframe",
        value: 4,
      },
      {
        type: "profilebanner",
        value: 33,
      },
    ],
  },
  {
    name: "3",
    rewards: [
      {
        type: "coin",
        value: 600,
      },
      {
        type: "avatarframe",
        value: 5,
      },
    ],
  },
  {
    name: "4",
    rewards: [
      {
        type: "coin",
        value: 500,
      },
    ],
  },
  {
    name: "5-10",
    rewards: [
      {
        type: "coin",
        value: 200,
      },
    ],
  },
];

export default function TabClanLeaderboardsRewards() {
  const router = useRouter();
  const { query } = useRouter();
  const hasAds = query.ads === "true" ? true : false;
  const selectedGame = !query.game ? 0 : query.game;
  const noShowdown = query.noshowdown === "true" ? true : false;
  const noClan = query.noclan === "true" ? true : false;
  const { game } = router.query;
  const { tab } = router.query;
  const { ladder_id } = router.query;
  const prototype = usePrototypeData();

  function numberWithSpaces(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return parts.join(".");
  }

  return (
    <>
      <section className="pb-8 animate-slide-in-bottom">
        <div className="flex flex-col lg:flex-row items-stretch gap-4 mb-8">
          <div className="flex-2 surface sm:rounded-lg p-4 relative flex flex-col items-stretch">
            <div className="border-b border-ui-700 pb-4">
              <h2 className="text-2xl">Reward distribution</h2>
            </div>
            <div className="flex-1 flex flex-col items-center mt-4">
              <ul className="leading-none space-y-1 w-full">
                <li className="flex justify-between gap-2 text-xs text-ui-300 uppercase px-4 pb-2 relative z-10">
                  <span>Position</span>
                  <div className="flex gap-2 items-center">
                    <span>Clan rewards</span>
                    <Tooltip
                      tooltip={
                        <div className="max-w-xs text-sm text-ui-200 leading-tight normal-case space-y-2">
                          <p>
                            Rewards will be distributed evenly to everyone in
                            the clan once the Ladder has ended.
                          </p>
                          <p>
                            For example, if the Clan reward is [number] Coins
                            and [number] Golden tickets - each Clan member will
                            split on the [number] Coins and [number] Golden
                            tickets.
                          </p>
                        </div>
                      }
                    >
                      <button className="text-ui-300 text-0">
                        <span className="icon icon-16 icon-c-info" />
                      </button>
                    </Tooltip>
                  </div>
                </li>
                {rewardDistribClan.map((reward, rewardIndex) => (
                  <li
                    key={reward}
                    className="flex items-center justify-between gap-2 rounded bg-ui-850/50 py-2 px-4 relative z-0 animate-slide-in-bottom animate-delay"
                    style={{
                      "--delay": "calc(" + rewardIndex + " * 0.05s)",
                    }}
                  >
                    <span className="text-lg">{reward.name}</span>
                    <div className="flex items-center justify-center gap-4">
                      {reward.rewards.map((reward, rewardIndex) => (
                        <>
                          <Reward
                            key={rewardIndex}
                            reward={reward}
                            gap="gap-2"
                            iconClassNames="text-lg"
                            textClassNames="text-lg"
                          />
                        </>
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex-1 surface sm:rounded-lg p-4 relative flex flex-col items-stretch">
            <div className="border-b border-ui-700 pb-4">
              <h2 className="text-2xl">Coins</h2>
            </div>
            <div className="flex-1 flex flex-col items-start justify-center text-ui-300 space-y-2 leading-relaxed mt-4">
              <p>
                Use Coins to buy gift cards in the Stryda shop. Get gift cards
                for clothes, games, and more.
              </p>
              <p>
                The higher you are on the Ladder leaderboards, the more Coins
                you can win!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
