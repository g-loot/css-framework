import Ad from "../../../components/Ad/Ad";
import Countdown from "../../../components/Countdown/Countdown";
import Link from "next/link";
import PrototypeDataGames from "../../../mock-data/games.json";
import { useRouter } from "next/router";

export default function TabBrawlsHistory() {
  const { query } = useRouter();
  const hasAds = query.ads === "true" ? true : false;
  const selectedGame = !query.game ? 0 : query.game;

  return (
    <>
      <section
        className="py-8 animate-slide-in-bottom animate-delay"
        style={{ "--delay": "calc( 1 * 0.05s)" }}
      >
        <div className="flex items-center justify-between mb-2 px-4 sm:px-0">
          
        </div>
        
      </section>
      
    </>
  );
}
