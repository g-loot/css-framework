import React, { useContext, useEffect, useState } from "react";

import { UiContext } from "../../../contexts/ui";
import { usePrototypeData } from "../../../contexts/prototype";
import { useRouter } from "next/router";

export default function ShopHeader(props) {
  const router = useRouter();
  const prototype = usePrototypeData();
  const [selectedGame, setSelectedGame] = useState(null);
  const { game } = router.query;
  const { query } = useRouter();
  const uiContext = useContext(UiContext);
  const freeEntry = query.freeentry === "true" ? true : false;
  const breadcrumbs = props.breadcrumbs;

  useEffect(() => {
    setSelectedGame(prototype.getGameBySlug(game));
  }, [game, prototype]);

  useEffect(() => {
    if (selectedGame != null) {
      prototype.defineDefaultGameID(selectedGame.id);
    }
  }, [selectedGame]);

  return (
    <>
      <section className="relative mb-8">
        <div className="absolute z-0 bg-gradient-to-b from-ui-850 to-ui-800 -inset-x-12 xl:-inset-x-24 bottom-0 -inset-y-4 border-b border-ui-700">
          <span
            className="absolute inset-0 bg-cover bg-800"
            style={{
              backgroundImage:
                "url(https://res.cloudinary.com/gloot/image/upload/v1674691791/Stryda/demo/ladders_header_1.jpg)",
            }}
          />
        </div>
        <div className="relative z-10 pt-32 pb-4">
          <h1 className="animate-slide-in-left">Shop</h1>
          <p className="max-w-[70ch] mt-2">
            Turn your hard work and successes into rewards you can enjoy! Will
            you invest in some new gaming gear or just treat yourself to
            something you&#39;ve had your eye on? Earn more coins to spend in
            the shop by finishing Missions or competing in Ladders.
          </p>
        </div>
      </section>
    </>
  );
}
