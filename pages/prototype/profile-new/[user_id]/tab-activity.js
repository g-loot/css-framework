import React, { useEffect, useState } from "react";

import Link from "next/link";
import { usePrototypeData } from "../../../../contexts/prototype";
import { useRouter } from "next/router";

export default function TabProfileActivity() {
  const router = useRouter();
  const { query } = useRouter();
  const prototype = usePrototypeData();
  const isEmpty = query.empty === "true" ? true : false;
  const { game } = router.query;

  return (
    <>
      {isEmpty && (
        <>
          <div className="surface rounded-lg px-4 py-8 text-center">
            <div className="max-w-xs mx-auto">
              <span className="icon icon-smile text-6xl text-ui-500" />
              <div className="mt-2 mb-6">
                <p className="text-sm text-ui-400">
                  You have not taken part in any Ladders yet.
                </p>
                <p className="text-lg text-ui-300">
                  Play tournaments and competitions to see the history of your
                  earnings.
                </p>
              </div>
              <Link href="/prototype/valorant/ladders">
                <a className="button button-main">
                  <span>Browse Ladders</span>
                </a>
              </Link>
            </div>
          </div>
        </>
      )}
      {!isEmpty && (
        <>
          
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
