import React, { useEffect, useState } from "react";

import Chat from "../../../../components/Chat/Chat";
import { usePrototypeData } from "../../../../contexts/prototype";
import { useRouter } from "next/router";

export default function TabClanChat() {
  const router = useRouter();
  const { query } = useRouter();
  const prototype = usePrototypeData();
  const [selectedClan, setSelectedClan] = useState(null);
  const { clan_id } = router.query;
  const hasAds = query.ads === "true" ? true : false;

  useEffect(() => {
    setSelectedClan(prototype.getClanByID(clan_id));
  }, [clan_id]);

  return (
    <>
      {selectedClan && (
          <>
            <Chat variant="secondary" maxheight={`h-auto !overflow-hidden`} isdisabled={!selectedClan.isYou} />
          </>
        )}
    </>
  );
}
