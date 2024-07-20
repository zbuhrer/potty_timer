import React from 'react';
import { TimerProvider } from './context/TimerContext';
import Timer from './components/Timer/Timer';
import Controls from './components/Controls/Controls';
import EventCounter from './components/EventCounter/EventCounter';
import './App.css';

const App = () => {
  return (
    <TimerProvider>
      <div className="App">
        <Timer />
        <Controls />
        <EventCounter />
      </div>
    </TimerProvider>
  );
};

export default App;