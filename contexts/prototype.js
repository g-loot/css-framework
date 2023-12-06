import {
  createContext,
  useContext,
  useState,
  useEffect
} from 'react';

import { dataClans } from '@/mock-data/data-clans';
import { dataGames } from '@/mock-data/data-games';
import { dataUsers } from '@/mock-data/data-users';
import { dataVouchers } from '@/mock-data/data-vouchers';
import { dataShopitems } from '@/mock-data/data-shopitems';
import { dataAchievements } from '@/mock-data/data-achievements';
import { dataMatches } from '@/mock-data/data-matches'; 
import { dataFeedItems } from '@/mock-data/data-feed';
import { useRouter } from "next/router";

export const PrototypeContext = createContext(
  undefined
);
const { Provider } = PrototypeContext;

export const PrototypeProvider = ({ children }) => {
  const { query } = useRouter();
  const clans = dataClans;
  const games = dataGames;
  const users = dataUsers;
  const vouchers = dataVouchers;
  const shopitems = dataShopitems;
  const achievements = dataAchievements;
  const matches = dataMatches;
  const feedItems = dataFeedItems;
  const [defaultGameID, setDefaultGameID] = useState(1);
  const [isPremium, setIsPremium] = useState(false);
  const [showDemo, setShowDemo] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const loggedout = query.loggedout === "true" ? true : false;
  const [isLoggedOut, setIsLoggedOut] = useState(false);

  useEffect(() => {
    const savedValue = localStorage.getItem('defaultGameID');
    if (savedValue) {
      setDefaultGameID(savedValue);
    } else {
      setDefaultGameID(1);
      localStorage.setItem('defaultGameID', 1);
    }
  }, []);

  useEffect(() => {
    setIsLoggedOut(loggedout)
  }, [loggedout]);
  
  const getGameByID = (id) => {
    return games.find(game => {
      return game.id === parseInt(id);
    })
  }
  const getUserByID = (id) => {
    return users.find(user => {
      return user.id === parseInt(id);
    })
  }
  const getUserProfile = () => {
    return users.find(user => {
      return user.isYou === true;
    })
  }
  const getGameBySlug = (slug) => {
    return games.find(game => {
      return game.slug === slug;
    })
  }
  const getMissionByID = (slug, id) => {
    const selectedGame = getGameBySlug(slug);
    const selectedMission = selectedGame?.missions?.find(mission => {
      return mission.id === parseInt(id);
    });
    return selectedMission;
  }
  const getLadderByID = (slug, id) => {
    const selectedGame = getGameBySlug(slug);
    const selectedLadder = selectedGame?.ladders?.find(ladder => {
      return ladder.id === parseInt(id);
    });
    return selectedLadder;
  }
  const getClanLeaderboardByID = (slug, id) => {
    const selectedGame = getGameBySlug(slug);
    const selectedLadder = selectedGame?.clanLeaderboards?.find(ladder => {
      return ladder.id === parseInt(id);
    });
    return selectedLadder;
  }
  const getCurrentClanLeaderboard = (slug, id) => {
    const selectedGame = getGameBySlug(slug);
    const selectedLadder = selectedGame?.clanLeaderboards?.find(ladder => {
      return ladder.isCurrent === true;
    });
    return selectedLadder;
  }
  const getTournamentByID = (slug, id) => {
    const selectedGame = getGameBySlug(slug);
    const selectedTournament = selectedGame.tournaments?.find(tournament => {
      return tournament.id === parseInt(id);
    });
    return selectedTournament;
  }
  const getClanByID = (id) => {
    return clans.find(clan => {
      return clan.id === parseInt(id);
    })
  }
  const getUserClan = () => {
    return clans.find(clan => {
      return clan.isYou === true;
    })
  }
  const getVoucherByID = (id) => {
    return vouchers.find(voucher => {
      return voucher.id === parseInt(id);
    })
  }
  const getShopsectionByID = (id) => {
    return shopitems.find(shopsection => {
      return shopsection.id === parseInt(id);
    })
  }
  const getShopitemByID = (id, itemId) => {
    const selectedShopsection = getShopsectionByID(id);
    const selectedItem = selectedShopsection.items.find(item => {
      return item.id === parseInt(itemId);
    });
    return selectedItem;
  }
  const getAchievementsectionByID = (id) => {
    return achievements.find(achievementsection => {
      return achievementsection.id === parseInt(id);
    })
  }
  const getAchievementitemByID = (id, itemId) => {
    const selectedAchievementsection = getAchievementsectionByID(id);
    const selectedItem = selectedAchievementsection.items.find(item => {
      return item.id === parseInt(itemId);
    });
    return selectedItem;
  }
  const getMatchByID = (id) => {
    return matches.find(match => {
      return match.id === parseInt(id);
    })
  }
  const getFeedItemByID = (id) => {
    return feedItems.find(feedItem => {
      return feedItem.id === parseInt(id);
    })
  }
  const getUserFeedItems = (id) => {
    return feedItems
  .filter(item => item.type === "match")
  .map(item => ({
    ...item,
    match: dataMatches.find(match => match.id === item.itemID)
  }))
  .filter(item => item.match && item.match.user === parseInt(id)); 
  }
  const getUserFeedItemsWithHighlights = (id) => {
    return feedItems
  .filter(item => item.type === "match")
  .map(item => ({
    ...item,
    match: dataMatches.find(match => match.id === item.itemID)
  }))
  .filter(item => item.match && item.match.user === parseInt(id) && item.meta?.media?.videoUrl); 
  }
  const getUserMatches = (id) => {
    return matches.filter((match) => {
      return match.user === parseInt(id);
    });
  }
  function getURLparams(prep) {
    const hasAds = query.ads === "true" ? true : false;
    const freeEntry = query.freeentry === "true" ? true : false;
    const avatarFrame = Math.round(query.avatarframe) || false;
    const Prep = prep === undefined ? "?" : prep;
    if(hasAds && freeEntry) {
      const param = "freeentry=true&ads=true";
      return(Prep+param);
    } else if(hasAds && !freeEntry) {
      const param = "ads=true";
      return(Prep+param);
    } else if(!hasAds && freeEntry) {
      const param = "freeentry=true";
      return(Prep+param);
    } else if(avatarFrame) {
      const param = `avatarframe=${avatarFrame}`;
      return(Prep+param);
    }else {
      return("");
    }
  }
  const defineDefaultGameID = (id) => {
    localStorage.setItem('defaultGameID', id);
    setDefaultGameID(id);
  }
  const togglePremium = () => {
    setIsPremium(!isPremium);
  }
  const toggleClient = () => {
    setIsClient(!isClient);
  }
  const handleKeyDown = (e) => {
    if (e.key === "Control" || e.keyCode === 17) {
      setShowDemo(true);
    } else if (e.key === "Escape" || e.keyCode === 27) {
      setShowDemo(false);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <Provider
      value={{
        games,
        users,
        clans,
        vouchers,
        achievements,
        matches,
        feedItems,
        defaultGameID,
        isPremium,
        showDemo,
        isClient,
        isLoggedOut,
        getGameByID,
        getGameBySlug,
        getUserByID,
        getUserProfile,
        getMissionByID,
        getLadderByID,
        getTournamentByID,
        getClanByID,
        getUserClan,
        getVoucherByID,
        getShopsectionByID,
        getShopitemByID,
        getAchievementsectionByID,
        getAchievementitemByID,
        getURLparams,
        defineDefaultGameID,
        togglePremium,
        toggleClient,
        getClanLeaderboardByID,
        getCurrentClanLeaderboard,
        getMatchByID,
        getFeedItemByID,
        getUserFeedItems,
        getUserFeedItemsWithHighlights,
        getUserMatches,
        setIsPremium,
        setShowDemo,
        setIsClient,
        setIsLoggedOut,
      }}
    >
      {children}
    </Provider>
  );
};

export const usePrototypeData = () => {
  const context = useContext(PrototypeContext);
  if (context === undefined) {
    throw new Error('usePrototypeData must be used within a PrototypeProvider');
  }
  return context;
};
