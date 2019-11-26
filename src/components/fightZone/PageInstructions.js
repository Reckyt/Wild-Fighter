import React from 'react';
import InstructionsButton from './InstructionsButton';

class PageInstructions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedP1: null,
      selectedP2: null,
      selectedMap: null
    };
  }

  render() {
    return (
      <div className="page-instructions-combat">
        <div className="selectedMap">
          <div>Player1</div>
          <div>Player2</div>
        </div>
        <div className="Instructions">
          <p>P1 clicks "Tap"</p>
          <p>P2 clicks "Tap"</p>
          <b>Result of the assault</b>
          <p>Start over</p>
          <p>When counter gets to 0 or one of the opponent runs out of life, the fight is over</p>
          <InstructionsButton />
        </div>
      </div>
    );
  }
}

export default PageInstructions;
