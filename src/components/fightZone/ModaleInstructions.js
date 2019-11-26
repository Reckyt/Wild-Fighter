import React, { Component } from 'react';

import '../../styles/css/fightZone/ModaleInstructions.css';
import rouleau from '../../styles/assets/rouleau.png';

class ModaleInstructions extends Component {
  render() {
    const { modaleIsOpen, closeModal } = this.props;
    return (
      <div className={modaleIsOpen ? 'modale_close' : 'modale_open'}>
        <img className={modaleIsOpen ? 'rouleau_close' : 'rouleau'} src={rouleau} alt="parchemin" />
        <div className={modaleIsOpen ? 'instructions_close' : 'instructions'}>
          <div>
            <h2>How to play :</h2>
          </div>
          <ul>
            <p>Player One :</p>
            <p>play with S and Z</p>
            <br />
            <p>Player Two :</p>
            <p>play with O and K</p>
            <br />
            <p>Have a g'O_O'd game</p>
          </ul>
          <button onClick={() => closeModal()}>Play now</button>
        </div>
      </div>
    );
  }
}

export default ModaleInstructions;
