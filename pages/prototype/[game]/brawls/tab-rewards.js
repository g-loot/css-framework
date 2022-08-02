import Ad from "../../../../components/Ad/Ad";
import Countdown from "../../../../components/Countdown/Countdown";
import Link from "next/link";
import PrototypeDataGames from "../../../../mock-data/games.json";
import { useRouter } from "next/router";

const rewardDistribSolo = [
  {
    name: "Diamond",
    rewards: {
      coin: 150000,
      ticket: 5,
    },
  },
  {
    name: "Platinum",
    rewards: {
      coin: 90000,
      ticket: 3,
    },
  },
  {
    name: "Gold",
    rewards: {
      coin: 90000,
      ticket: 2,
    },
  },
  {
    name: "Silver",
    rewards: {
      coin: 90000,
      ticket: 1,
    },
  },
  {
    name: "Bronze",
    rewards: {
      coin: 90000,
      ticket: 1,
    },
  },
];
const rewardDistribClan = [
  {
    name: "1-10",
    rewards: {
      coin: 150000,
      ticket: 1,
    },
  },
  {
    name: "11-20",
    rewards: {
      coin: 125000,
      ticket: 1,
    },
  },
  {
    name: "21-50",
    rewards: {
      coin: 100000,
      ticket: 1,
    },
  },
  {
    name: "51-150",
    rewards: {
      coin: 90000,
      ticket: 1,
    },
  },
  {
    name: "151-300",
    rewards: {
      ticket: 1,
    },
  },
];

export default function TabBrawlsRewards() {
  const { query } = useRouter();
  const hasAds = query.ads === "true" ? true : false;
  const selectedGame = !query.game ? 0 : query.game;

  function numberWithSpaces(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return parts.join(".");
  }

  return (
    <>
      <section
        className="pb-8 animate-slide-in-bottomNO animate-delay"
        style={{ "--delay": "calc( 1 * 0.05s)" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="surface sm:rounded-lg p-4">
            <h2 className="text-3xl mb-4 px-4">
              Solo <small className="text-ui-300">reward distribution</small>
            </h2>
            <ul className="leading-none space-y-1">
              <li className="flex justify-between gap-2 text-xs text-ui-300 uppercase px-4 pb-2">
                <span>Level</span>
                <span>Prizepool for each group</span>
              </li>
              {rewardDistribSolo.map((reward, rewardIndex) => (
                <li
                  key={reward}
                  className="flex items-center justify-between gap-2 rounded bg-ui-850/50 py-2 px-4 animate-slide-in-bottom animate-delay"
                  style={{
                    "--delay": "calc( " + rewardIndex + " * 0.05s)",
                  }}
                >
                  <span className="font-headings font-bold text-lg">{reward.name}</span>
                  <div className="flex items-center justify-center gap-4">
                    {reward.rewards.coin && (
                      <div className="flex items-center gap-2">
                        <img
                          className="h-6"
                          src={`https://res.cloudinary.com/gloot/image/upload/v1658134262/Marketing/2022_prototype/CurrencyRewards/Reward-cropped-coin-unique.webp`}
                          width="auto"
                          height="auto"
                          alt=""
                        />
                        <span className="font-headings font-bold text-lg italic">
                          {numberWithSpaces(reward.rewards.coin)}
                        </span>
                      </div>
                    )}
                    {reward.rewards.token && (
                      <div className="flex items-center gap-2">
                        <img
                          className="h-6"
                          src={`https://res.cloudinary.com/gloot/image/upload/v1658134262/Marketing/2022_prototype/CurrencyRewards/Reward-cropped-token-unique.webp`}
                          width="auto"
                          height="auto"
                          alt=""
                        />
                        <span className="font-headings font-bold text-lg italic">
                          {numberWithSpaces(reward.rewards.token)}
                        </span>
                      </div>
                    )}
                    {reward.rewards.ticket && (
                      <div className="flex items-center gap-2">
                        <img
                          className="h-6"
                          src={`https://res.cloudinary.com/gloot/image/upload/v1658134262/Marketing/2022_prototype/CurrencyRewards/Reward-cropped-ticket-unique.webp`}
                          width="auto"
                          height="auto"
                          alt=""
                        />
                        <span className="font-headings font-bold text-lg italic">
                          {numberWithSpaces(reward.rewards.ticket)}
                        </span>
                      </div>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="surface sm:rounded-lg p-4">
            <h2 className="text-3xl mb-4 px-4">
              Clan <small className="text-ui-300">reward distribution</small>
            </h2>
            <ul className="leading-none space-y-1">
              <li className="flex justify-between gap-2 text-xs text-ui-300 uppercase px-4 pb-2">
                <span>Level</span>
                <span>Prizepool for each group</span>
              </li>
              {rewardDistribClan.map((reward, rewardIndex) => (
                <li
                  key={reward}
                  className="flex items-center justify-between gap-2 rounded bg-ui-850/50 py-2 px-4 animate-slide-in-bottom animate-delay"
                  style={{
                    "--delay": "calc( " + rewardIndex + " * 0.05s)",
                  }}
                >
                  <span className="font-headings font-bold text-lg">{reward.name}</span>
                  <div className="flex items-center justify-center gap-4">
                    {reward.rewards.coin && (
                      <div className="flex items-center gap-2">
                        <img
                          className="h-6"
                          src={`https://res.cloudinary.com/gloot/image/upload/v1658134262/Marketing/2022_prototype/CurrencyRewards/Reward-cropped-coin-unique.webp`}
                          width="auto"
                          height="auto"
                          alt=""
                        />
                        <span className="font-headings font-bold text-lg italic">
                          {numberWithSpaces(reward.rewards.coin)}
                        </span>
                      </div>
                    )}
                    {reward.rewards.token && (
                      <div className="flex items-center gap-2">
                        <img
                          className="h-6"
                          src={`https://res.cloudinary.com/gloot/image/upload/v1658134262/Marketing/2022_prototype/CurrencyRewards/Reward-cropped-token-unique.webp`}
                          width="auto"
                          height="auto"
                          alt=""
                        />
                        <span className="font-headings font-bold text-lg italic">
                          {numberWithSpaces(reward.rewards.token)}
                        </span>
                      </div>
                    )}
                    {reward.rewards.ticket && (
                      <div className="flex items-center gap-2">
                        <img
                          className="h-6"
                          src={`https://res.cloudinary.com/gloot/image/upload/v1658134262/Marketing/2022_prototype/CurrencyRewards/Reward-cropped-ticket-unique.webp`}
                          width="auto"
                          height="auto"
                          alt=""
                        />
                        <span className="font-headings font-bold text-lg italic">
                          {numberWithSpaces(reward.rewards.ticket)}
                        </span>
                      </div>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            className="surface sm:rounded-lg p-4 relative flex flex-col items-stretch animate-slide-in-bottom animate-delay"
            style={{ "--delay": "calc( 2 * 0.05s)" }}
          >
            <div className="absolute -top-6 -left-4 -rotate-12 pointer-events-none">
              <img
                src="https://res.cloudinary.com/gloot/image/upload/v1658472557/Marketing/2022_prototype/Reward-decoration-coin.webp"
                width="140"
                height="auto"
                alt=""
              />
            </div>
            <div className="pl-24 border-b border-ui-700 pb-4">
              <h2 className="text-2xl">Coins</h2>
            </div>
            <div className="flex-1 flex flex-col items-stretch justify-start text-ui-300 space-y-2 leading-relaxed mt-4 py-4">
              <p>
                Use Coins to buy gift cards in the G-Loot shop. Get gift cards
                for clothes, games, and more.
              </p>
              <p>
                The higher you are on the Brawl leaderboards, the more Coins you
                can win!
              </p>
            </div>
          </div>
          <div
            className="surface sm:rounded-lg p-4 relative flex flex-col items-stretch animate-slide-in-bottom animate-delay"
            style={{ "--delay": "calc( 3 * 0.05s)" }}
          >
            <div className="absolute -top-6 -left-4 -rotate-12 pointer-events-none">
              <img
                src="https://res.cloudinary.com/gloot/image/upload/v1658472557/Marketing/2022_prototype/Reward-decoration-ticket.webp"
                width="140"
                height="auto"
                alt=""
              />
            </div>
            <div className="pl-24 border-b border-ui-700 pb-4">
              <h2 className="text-2xl">Golden tickets</h2>
            </div>
            <div className="flex-1 flex flex-col items-stretch justify-start text-ui-300 space-y-2 leading-relaxed mt-4 py-4">
              <p>
                Be one of the top players in Weekly Brawls to earn a Ticket to
                the Monthly Showdown tournament.
              </p>
            </div>
          </div>
          <div
            className="surface sm:rounded-lg p-4 relative flex flex-col items-stretch animate-slide-in-bottom animate-delay"
            style={{ "--delay": "calc( 4 * 0.05s)" }}
          >
            <div className="absolute -top-6 -left-4 -rotate-12 pointer-events-none">
              <img
                src="https://res.cloudinary.com/gloot/image/upload/v1658472557/Marketing/2022_prototype/Reward-decoration-showdown.webp"
                width="140"
                height="auto"
                alt=""
              />
            </div>
            <div className="pl-24 border-b border-ui-700 pb-4">
              <h2 className="text-2xl">Showdown</h2>
            </div>
            <div className="flex-1 flex flex-col items-stretch justify-start text-ui-300 space-y-2 leading-relaxed mt-4 py-4">
              <p>
                Monthly Showdowns are esports tournaments with a knockout format
                and prize money.{" "}
              </p>
              <p>
                Create your own party with your teammates or join solo, and
                we will match you with other G-Loot players to form a party.
              </p>
              <p>
                If you want to join the Showdown, you need to earn a Ticket.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
