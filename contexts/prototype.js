import PrototypeDataGames from '../mock-data/games.json';

import {
  createContext,
  useContext
} from 'react';

export const PrototypeContext = createContext(
  undefined
);
const { Provider } = PrototypeContext;

export const PrototypeProvider = ({ children }) => {
  const data = PrototypeDataGames;
  const getGameByID = (id) => {
    return data.find(game => {
      return game.id === parseInt(id);
    })
  }
  const getGameBySlug = (slug) => {
    return data.find(game => {
      return game.slug === slug;
    })
  }
  return (
    <Provider
      value={{
        data,
        getGameByID,
        getGameBySlug
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
