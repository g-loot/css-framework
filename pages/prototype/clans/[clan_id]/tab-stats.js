import React, { useEffect, useState, useContext } from "react";

import { UiContext } from "../../../../contexts/ui";
import { usePrototypeData } from "../../../../contexts/prototype";
import { useRouter } from "next/router";
import Link from "next/link";
import Avatar from "../../../../components/Avatar/Avatar";
import GameIcon from "../../../../components/GameIcon/GameIcon";
import ModalGiftTokens from "../modal-gift-tokens";
import ButtonSorting from "../../../../components/Button/ButtonSorting";
import Tooltip from "../../../../components/Tooltip/Tooltip";

export default function TabClanStats() {
  const router = useRouter();
  const { query } = useRouter();
  const prototype = usePrototypeData();
  const uiContext = useContext(UiContext);
  const [selectedClan, setSelectedClan] = useState(null);
  const { clan_id } = router.query;
  const modalGiftTokens = query.modalgifttokens === "true" ? true : false;
  const [hasOnlyOne, setHasOnlyOne] = useState(false);
  const [selectedUser, setSelectedUser] = useState(
    prototype.getUserByID(2).nickname
  );

  function openModalGiftTokens() {
    uiContext.openModal(
      <ModalGiftTokens selectedUser={selectedUser}></ModalGiftTokens>
    );
  }

  useEffect(() => {
    if (modalGiftTokens) {
      openModalGiftTokens();
    }
  }, [modalGiftTokens]);

  function RandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  useEffect(() => {
    setSelectedClan(prototype.getClanByID(clan_id));
  }, [clan_id]);

  return (
    <>
      {selectedClan && (
        <>
         
        </>
      )}
    </>
  );
}
