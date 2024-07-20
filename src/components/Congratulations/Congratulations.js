import React from 'react';
import './Congratulations.css';

const Congratulations = ({ show }) => {
  if (!show) return null;

  return (
    <div className="congratulations">
      <h2>Great job, Daisy!</h2>
      <p>Congratulations on using the potty!</p>
    </div>
  );
};

export default Congratulations;
