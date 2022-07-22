import {
  createContext,
  useContext
} from 'react';

import PrototypeDataClans from '../mock-data/clans.json';
import PrototypeDataGames from '../mock-data/games.json';
import PrototypeDataUsers from '../mock-data/users.json';

export const PrototypeContext = createContext(
  undefined
);
const { Provider } = PrototypeContext;

export const PrototypeProvider = ({ children }) => {
  const clans = PrototypeDataClans;
  const games = PrototypeDataGames;
  const users = PrototypeDataUsers;
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
  
  return (
    <Provider
      value={{
        games,
        users,
        clans,
        getGameByID,
        getGameBySlug,
        getUserByID,
        getUserProfile,
        getBrawlByID,
        getClanByID,
        getUserClan,
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
