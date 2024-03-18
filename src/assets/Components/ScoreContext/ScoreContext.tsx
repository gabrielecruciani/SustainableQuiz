import React, { createContext, useContext, useState } from 'react';

interface ScoreContextType {
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  finalScore: number;
  setFinalScore: React.Dispatch<React.SetStateAction<number>>;
}

const ScoreContext = createContext<ScoreContextType | undefined>(undefined);

export const ScoreProvider: React.FC = ({ children }) => {
  const [score, setScore] = useState(0);
  const [finalScore, setFinalScore] = useState(0);

  return (
    <ScoreContext.Provider value={{ score, setScore, finalScore, setFinalScore }}>
      {children}
    </ScoreContext.Provider>
  );
};


export const useScore = () => {
  const context = useContext(ScoreContext);
  if (context === undefined) {
    throw new Error('useScore must be used within a ScoreProvider');
  }
  return context;
};