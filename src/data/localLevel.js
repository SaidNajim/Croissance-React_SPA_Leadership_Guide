import { createContext, useContext, useState } from 'react';

const LevelContext = createContext();

const LevelProvider = ({ children }) => {
  const [level, setLevel] = useState(0);

  return (
    <LevelContext.Provider value={{ level, setLevel }}>
      {children}
    </LevelContext.Provider>
  );
};

const useLevelContext = () => {
  const context = useContext(LevelContext);
  if (!context) {
    throw new Error('useLevelContext must be used within a LevelProvider');
  }
  return context;
};

export { LevelProvider, useLevelContext };
