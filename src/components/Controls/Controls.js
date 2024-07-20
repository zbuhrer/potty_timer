import React, { useContext } from 'react';
import { TimerContext } from '../../context/TimerContext';
import './Controls.css';

const Controls = () => {
  const { isRunning, startTimer, pauseTimer, resetTimer } = useContext(TimerContext);

  return (
    <div className="controls">
      {!isRunning ? (
        <button onClick={startTimer}>Start</button>
      ) : (
        <button onClick={pauseTimer}>Pause</button>
      )}
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
};

export default Controls;
