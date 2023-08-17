import React, { useEffect, useRef, useState } from "react";

import Accordion from "@/components/Accordion/Accordion";
import Footer from "@/components/Footer/Footer";
import TopbarMarketing from "@/components/TopBarMarketing/TopbarMarketing";
import TournamentLeaderboard from "../../../api/pubg-season-6/data";
import { getLayout } from "@/components/Prototype/PrototypeLayout";
import Link from "next/link";
import TopBarMarketing from "./components/TopbarMarketing";

function randomArrayShuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

const PrototypePage = () => {
  const [SelectedTournament, setSelectedTournament] = useState(0);
  const [SelectedRound, setSelectedRound] = useState(0);
  const [SelectedGroup, setSelectedGroup] = useState(0);
  const [SelectedGame, setSelectedGame] = useState(0);
  const [Loading, setLoading] = useState(false);

  function switchLeaderboard(Tournament, Round, Group, Game) {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
      setSelectedTournament(Tournament);
      setSelectedRound(Round);
      setSelectedGroup(Group);
      setSelectedGame(Game);
    }, 1000);
    return () => clearTimeout(timer);
  }

  function selectLeaderboard(e) {
    const selectLeaderboardTarget = e.target.value.split(",");
    const selectTournament = selectLeaderboardTarget[0];
    const selectRound = selectLeaderboardTarget[1];
    const selectGroup = selectLeaderboardTarget[2];
    const selectGame = selectLeaderboardTarget[3];
    switchLeaderboard(selectTournament, selectRound, selectGroup, selectGame);
  }

  const screenshotRef = useRef();

  return (
    <>
     <TopBarMarketing />

<hr className="my-16" />
      <Footer />
    </>
  );
};

PrototypePage.getLayout = getLayout;

export default PrototypePage;
