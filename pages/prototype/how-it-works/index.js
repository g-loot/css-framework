import PrototypeStructure from "../../../components/Prototype/PrototypeStructure";
import useFetch from "../../../hooks/use-fetch";
import { useRouter } from "next/router";

export default function HowItWorks() {
  const router = useRouter();
  const { data, loading } = useFetch("/api/brawls", { delay: 1000 });

  return (
    <>
      <PrototypeStructure title="Premium">
        <div
          className="animate-slide-in-bottom animate-delay"
          style={{ "--delay": "calc(2 * 0.05s)" }}
        >
          <section>
            <div className="flex flex-col items-center justify-center">
              <img width="220" height="auto" className="my-12" src="https://res.cloudinary.com/gloot/image/upload/v1636647109/glootcom/v2-202111/gloot_logo.svg" alt="G-Loot logo" />
            </div>

            <div className="text-center px-4 sm:px-0 max-w-[50ch] mx-auto">
              <h1 className="mb-2 h3">
                How it works
              </h1>
              <div className="text-lg text-gradient bg-gradient-to-b from-main to-blue-300 space-y-2">
                <p>
                  G-Loot is an esports platform for PC where you can track your gaming stats, play G-Loot Missions in your favorite games, and compete in competitions and tournaments.
                </p>
                <p>
                Prove to the world (and yourself) that you have got the skills and win cool prizes.
                </p>
              </div>
            </div>
          </section>

          <section>
            <div className="flex flex-col md:flex-row items-center justify-between pb-24 md:pb-32">
              <div className="w-full relative z-10 md:w-8/12 md:-ml-16">

              </div>
              <div className="relative z-20 md:w-4/12 flex flex-col items-center md:items-start text-center md:text-left">
                <h2 className="h4 leading-none">
                  Missions
                </h2>
                <div className="text-lg text-ui-300 space-y-2">
                  <p>
                    Missions add a little extra challenge to your game by giving you objectives to achieve while you play. These could range from winning a certain number of rounds to getting kills with a particular weapon and are available across all of our supported games.
                  </p>
                  <p>
                    To start competing in Missions, all you need to do is run the G-Loot Tracker while you play. Each time you successfully complete a Mission, you earn XP, which you use to claim Mission Rewards. You can complete a set number of Missions each day, and new ones appear every 24 hours. Keep an eye on the Tracker and gloot.com to see your progress and check out what&#39;s new.
                  </p>
                </div>

              </div>
            </div>
          </section>

        </div>
      </PrototypeStructure>
    </>
  );
}
