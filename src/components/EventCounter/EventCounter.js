import React, { useState } from 'react';
import './EventCounter.css';

const EventCounter = () => {
  const [peeCount, setPeeCount] = useState(0);
  const [poopCount, setPoopCount] = useState(0);

  return (
    <div className="event-counter">
      <div className="counter">
        <button onClick={() => setPeeCount(peeCount + 1)}>Pee</button>
        <span>Pee Count: {peeCount}</span>
      </div>
      <div className="counter">
        <button onClick={() => setPoopCount(poopCount + 1)}>Poop</button>
        <span>Poop Count: {poopCount}</span>
      </div>
    </div>
  );
};

export default EventCounter;