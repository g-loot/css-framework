import {
  createContext,
  useContext,
  useState
} from 'react';

import { dataClans } from '../mock-data/data-clans';
import { dataGames } from '../mock-data/data-games';
import { dataUsers } from '../mock-data/data-users';
import { dataVouchers } from '../mock-data/data-vouchers';
import { dataShopitems } from '../mock-data/data-shopitems';
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
  const [defaultGameID, setDefaultGameID] = useState(1);
  
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
  const getLadderByID = (slug, id) => {
    const selectedGame = getGameBySlug(slug);
    const selectedLadder = selectedGame.ladders.find(ladder => {
      return ladder.id === parseInt(id);
    });
    return selectedLadder;
  }
  const getTournamentByID = (slug, id) => {
    const selectedGame = getGameBySlug(slug);
    const selectedTournament = selectedGame.tournaments.find(tournament => {
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
    setDefaultGameID(id);
  }
  return (
    <Provider
      value={{
        games,
        users,
        clans,
        vouchers,
        defaultGameID,
        getGameByID,
        getGameBySlug,
        getUserByID,
        getUserProfile,
        getLadderByID,
        getTournamentByID,
        getClanByID,
        getUserClan,
        getVoucherByID,
        getShopsectionByID,
        getShopitemByID,
        getURLparams,
        defineDefaultGameID,
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
