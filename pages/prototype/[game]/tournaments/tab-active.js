import Accordion from "../../../../components/Accordion/Accordion";
import { useRouter } from "next/router";

export default function TabTournamentsActive() {
  const { query } = useRouter();
  const hasAds = query.ads === "true" ? true : false;
  const selectedGame = !query.game ? 0 : query.game;

  return (
    <>
      <section
        className="pb-8 animate-slide-in-bottom animate-delay"
        style={{ "--delay": "calc( 1 * 0.05s)" }}
      >
        <div className='flex-1 surface accordion rounded-lg'>
          <Accordion header={(
            <>
              <div className='item'>
                <div className='item-image'>
                  <figure className="avatar avatar-xs avatar-simple">
                    <div>
                      <span className="icon icon-reading" />
                    </div>
                  </figure>
                </div>
                <div className='item-body'>
                  <div className='p-2 item-title font-headings text-lg italic'>
                    Brawl details / how to play
                  </div>
                </div>
                <div className='item-actions'>
                  <div>
                    <span className='icon icon-24 icon-arrow-sm-down'/>
                  </div>
                </div>
              </div>
            </>
          )}>
            <div className=''>
              <ul className='gap-2 p-2 grid grid-cols-3 grid-rows-2'>
                <li className='p-3 rounded bg-gradient-to-b from-ui-800 to-ui-700/25'>
                  <h4 className='font-headings text-base uppercase text-ui-200 mb-1'>Objective</h4>
                  <p className='text-sm text-ui-300 leading-relaxed'>
                  Your score is based on your kills and assists. Kills provide twice as many points as assists towards your match score.
                  </p>
                </li>
                <li className='p-3 rounded bg-gradient-to-b from-ui-800 to-ui-700/25'>
                  <h4 className='font-headings text-base uppercase text-ui-200 mb-1'>Game mode</h4>
                  <p className='text-sm text-ui-300 leading-relaxed'>
                    Competitive 2v2 &amp; 3v3 (Ranked only).
                  </p>
                </li>
                <li className='p-3 rounded bg-gradient-to-b from-ui-800 to-ui-700/25'>
                  <h4 className='font-headings text-base uppercase text-ui-200 mb-1'>Brawl points</h4>
                  <p className='text-sm text-ui-300 leading-relaxed'>
                    Your total Brawl points are based on your combined [number] best Solo matches. Clan Brawl points are based on your Clan&#39;s players with the highest Brawl points from their matches.
                  </p>
                </li>
                <li className='p-3 rounded bg-gradient-to-b from-ui-800 to-ui-700/25'>
                  <h4 className='font-headings text-base uppercase text-ui-200 mb-1'>Tiebreaker</h4>
                  <p className='text-sm text-ui-300 leading-relaxed'>
                    Damage.
                  </p>
                </li>
                <li className='p-3 rounded bg-gradient-to-b from-ui-800 to-ui-700/25'>
                  <h4 className='font-headings text-base uppercase text-ui-200 mb-1'>Brawl type</h4>
                  <p className='text-sm text-ui-300 leading-relaxed'>
                  Solo and Clan. Your matches count toward both the Solo and Clan leaderboards. At least x members of the Clan must compete in the Brawl for your Clan to appear on the leaderboard.
                  </p>
                </li>
                <li className='p-3 rounded bg-gradient-to-b from-ui-800 to-ui-700/25'>
                  <h4 className='font-headings text-base uppercase text-ui-200 mb-1'>Brawl size</h4>
                  <p className='text-sm text-ui-300 leading-relaxed'>
                    Infinite. Each group has their own leaderboard which contains up to [number] players in each Solo leaderboard. Clan leaderboards don&#39;t have a limit.
                  </p>
                </li>
              </ul>
              <div className='border-t border-ui-700 py-2 flex gap-2 items-center justify-center'>
                <h4 className='font-headings text-base uppercase text-ui-200'>Brawl ID</h4>
                <button type='button' className='button button-sm button-secondary'>
                  <span>Copy</span>
                  <span className='icon icon-document-copy'/>
                </button>
              </div>
            </div>
          </Accordion>
        </div>
        
      </section>
      
    </>
  );
}
