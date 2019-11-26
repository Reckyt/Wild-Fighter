import React from 'react';

import Countdown from './Countdown';
import '../../styles/css/fightZone/DisplayCountdown.css';

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { setTimeOut, counter, modaleIsOpen } = this.props;
    return (
      <div className="fightZone">
        <Countdown counter={counter} setTimeOut={setTimeOut} modaleIsOpen={modaleIsOpen} />
      </div>
    );
  }
}

export default Display;
