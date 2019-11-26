import React from 'react';
import { Link } from 'react-router-dom';

import '../../styles/css/selectMap&Char/FightButton.css';

class FightButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleSound = () => {
    const bothReadySound = new Audio(require('../../styles/sounds/07046025.wav'));
    bothReadySound.play();
  };

  handleReadyToFight = () => {
    let fightClass = 'fight';

    if (this.props.bothReady) {
      fightClass = `${fightClass} fightReady`;
      this.handleSound();
    }
    return (
      <Link to={this.props.bothReady && '/fightZone/FightZone'}>
        <button className={fightClass}>FIGHT</button>
      </Link>
    );
  };

  render() {
    return <div className="button-fight">{this.handleReadyToFight()}</div>;
  }
}

export default FightButton;
