import {
  createContext,
  useContext
} from 'react';

import { dataClans } from '../mock-data/data-clans';
import { dataGames } from '../mock-data/data-games';
import { dataUsers } from '../mock-data/data-users';
import { dataVouchers } from '../mock-data/data-vouchers';

export const PrototypeContext = createContext(
  undefined
);
const { Provider } = PrototypeContext;

export const PrototypeProvider = ({ children }) => {

  const clans = dataClans;
  const games = dataGames;
  const users = dataUsers;
  const vouchers = dataVouchers;
  
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
  const getBrawlByID = (slug, id) => {
    const selectedGame = getGameBySlug(slug);
    const selectedBrawl = selectedGame.brawls.find(brawl => {
      return brawl.id === parseInt(id);
    });
    return selectedBrawl;
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
  
  return (
    <Provider
      value={{
        games,
        users,
        clans,
        vouchers,
        getGameByID,
        getGameBySlug,
        getUserByID,
        getUserProfile,
        getBrawlByID,
        getTournamentByID,
        getClanByID,
        getUserClan,
        getVoucherByID,
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
