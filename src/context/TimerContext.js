import React, { createContext } from 'react';
import useTimer from '../hooks/useTimer';

export const TimerContext = createContext();

export const TimerProvider = ({ children }) => {
  const timer = useTimer(600); // 10 minutes

  return (
    <TimerContext.Provider value={timer}>
      {children}
    </TimerContext.Provider>
  );
};