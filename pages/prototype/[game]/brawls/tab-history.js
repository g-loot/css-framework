import React, { useEffect, useState } from "react";

import Link from "next/link";
import { usePrototypeData } from "../../../../contexts/prototype";
import { useRouter } from "next/router";

export default function TabBrawlsHistory() {
  const router = useRouter();
  const { query } = useRouter();
  const prototypeData = usePrototypeData();
  const [selectedGame, setSelectedGame] = useState(null);
  const hasAds = query.ads === "true" ? true : false;
  const isEmpty = query.empty === "true" ? true : false;
  const { game } = router.query;

  useEffect(() => {
    setSelectedGame(prototypeData.getGameBySlug(game));
  }, [game]);

  return (
    <>
    {isEmpty && (
      <>
        <div className="surface rounded-lg px-4 py-8 text-center">
          <div className='max-w-xs mx-auto'>
            <span className='icon icon-smile text-6xl text-ui-500'/>
            <div className='mt-2 mb-6'>
              <p className='text-sm text-ui-400'>
                You have not taken part in any Brawls yet.
              </p>
              <p className='text-lg text-ui-300'>
                Play tournaments and competitions to see the history of your earnings.
              </p>
            </div>
            <Link href="/prototype/valorant/brawls">
              <a className='button button-main'>
                <span>Browse Brawls</span>
              </a>
            </Link>
          </div>
        </div>
      </>
    )}
    {!isEmpty && (
      <>
        <div className="overflow-y-hidden overflow-x-auto scrollbar-desktop px-4 sm:px-0 pb-4">
            <table className="table table-rounded rounded-xl w-full">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Type</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {
                  selectedGame && selectedGame.brawls.map((brawl, brawlIndex) => (
                    <>
                    <tr key={brawl} className='animate-slide-in-bottom animate-delay' style={{ '--delay': 'calc('+brawlIndex+' * 0.05s)'}}>
                      <td>
                        {brawl.name}
                      </td>
                      <td>
                        
                      </td>
                      <td>
                        
                      </td>
                    </tr>
                    </>
                  ))
                }
              </tbody>
            </table>
          </div>
          <div className="text-center mt-4 mb-8">
            <button type="button" className="button button-sm button-primary">
              <span>Load more</span>
            </button>
          </div>
      </>
    )}
  </>
  );
}
