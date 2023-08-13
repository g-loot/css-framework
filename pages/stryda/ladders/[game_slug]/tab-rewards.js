import Reward from "../../../../components/Reward/Reward";
import Tooltip from "../../../../components/Tooltip/Tooltip";
import { usePrototypeData } from "../../../../contexts/prototype";
import { useRouter } from "next/router";

const rewardDistribSolo = [
  {
    name: "1",
    rewards: [
      {
        type: "coin",
        value: 150000,
      },
    ],
  },
  {
    name: "2",
    rewards: [
      {
        type: "coin",
        value: 90000,
      },
    ],
  },
  {
    name: "3",
    rewards: [
      {
        type: "coin",
        value: 90000,
      },
    ],
  },
  {
    name: "4-10",
    rewards: [
      {
        type: "coin",
        value: 90000,
      },
    ],
  },
  {
    name: "11-50",
    rewards: [
      {
        type: "coin",
        value: 40000,
      },
    ],
  },
  {
    name: "51-100",
    rewards: [
      {
        type: "coin",
        value: 5000,
      },
    ],
  },
  {
    name: "101-200",
    rewards: [
      {
        type: "coin",
        value: 2000,
      },
    ],
  },
  {
    name: "201-400",
    rewards: [
      {
        type: "coin",
        value: 500,
      },
    ],
  },
];
const rewardDistribClan = [
  {
    name: "1-10",
    rewards: [
      {
        type: "coin",
        value: 450000,
      },
    ],
  },
  {
    name: "11-20",
    rewards: [
      {
        type: "coin",
        value: 425000,
      },
    ],
  },
  {
    name: "21-50",
    rewards: [
      {
        type: "coin",
        value: 400000,
      },
    ],
  },
  {
    name: "51-150",
    rewards: [
      {
        type: "coin",
        value: 30000,
      },
    ],
  },
  {
    name: "151-300",
    rewards: [
      {
        type: "coin",
        value: 1500,
      },
    ],
  },
];

export default function TabLaddersRewards() {
  const router = useRouter();
  const { query } = useRouter();
  const noClan = query.noclan === "true" ? true : false;
  function numberWithSpaces(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return parts.join(".");
  }

  return (
    <>
      <section
        className="pb-8 animate-slide-in-bottomNO animate-delay"
        style={{ "--delay": "calc(1 * 0.05s)" }}
      >
        <div className="flex flex-col md:flex-row items-stretch gap-8 mb-8">
          <div className="flex-1 surface sm:rounded-lg p-4">
            <h2 className="h4 mb-4 px-4">
              Solo{" "}
              <small className="text-ui-300">
                reward distribution
              </small>
            </h2>
            <ul className="leading-none space-y-1">
              <li className="flex justify-between gap-2 text-xs text-ui-300 uppercase px-4 pb-2">
                <span>Level</span>
                <div className="flex gap-2 items-center">
                  <span>Prizepool for each group</span>
                  <Tooltip
                    tooltip={
                      <div className="max-w-xs text-sm text-ui-200 leading-tight normal-case space-y-2"></div>
                    }
                  >
                    <button className="text-ui-300 text-0 opacity-0 pointer-events-none w-0">
                      <span className="icon icon-16 icon-c-info" />
                    </button>
                  </Tooltip>
                </div>
              </li>
              {rewardDistribSolo.map((reward, rewardIndex) => (
                <li
                  key={reward}
                  className="flex items-center justify-between gap-2 rounded bg-ui-850/50 py-2 px-4 animate-slide-in-bottom animate-delay"
                  style={{
                    "--delay": "calc(" + rewardIndex + " * 0.05s)",
                  }}
                >
                  <span className="text-lg">
                    {reward.name}
                  </span>
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
          {!noClan && (
            <div className="flex-1 surface sm:rounded-lg p-4">
              <h2 className="h4 mb-4 px-4">
                Clan{" "}
                <small className="text-ui-300">
                  reward distribution
                </small>
              </h2>
              <ul className="leading-none space-y-1">
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
                    <span className="text-lg">
                      {reward.name}
                    </span>
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
          )}
        </div>

        <div className="flex flex-col xl:flex-row items-stretch gap-8">
          <div
            className="flex-1 surface sm:rounded-lg p-4 relative flex flex-col items-stretch animate-slide-in-bottom animate-delay"
            style={{ "--delay": "calc(2 * 0.05s)" }}
          >
            <div className="border-b border-ui-700 pb-4">
              <h2 className="text-2xl">Coins</h2>
            </div>
            <div className="flex-1 flex flex-col items-stretch justify-start text-ui-300 space-y-2 leading-relaxed mt-4 py-4">
              <p>
                Use Coins to buy gift cards in the Stryda shop. Get gift cards
                for clothes, games, and more.
              </p>
              <p>
                The higher you are on the Ladder leaderboards, the more Coins you
                can win!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
