import React from 'react';
import { useTimer } from '../../hooks/useTimer';
import './Timer.css';

const Timer = () => {
  const { time, isRunning } = useTimer();

  // Format time for display
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="timer">
      <h1>{formatTime(time)}</h1>
      <p>{isRunning ? 'Timer is running' : 'Timer is paused'}</p>
    </div>
  );
};

export default Timer;