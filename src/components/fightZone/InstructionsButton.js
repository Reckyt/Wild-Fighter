import React from 'react';
import { Link } from 'react-router-dom';

class InstructionsButton extends React.Component {
  render() {
    return (
      <div className="instructionsButton">
        <Link to="/fightZone/FightZone">
          <button className="launchFightButton">Got it, Let's fight !</button>
        </Link>
      </div>
    );
  }
}

export default InstructionsButton;
