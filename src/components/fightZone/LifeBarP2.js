import React from 'react';
import '../../styles/css/fightZone/Lifebar.css';

class LifeBarP2 extends React.Component {
  render() {
    const { PV2 } = this.props;

    return (
      <div className="backLifeBar">
        <div className="activeLifeBar" style={{ width: `${PV2 / 10}%` }} />
      </div>
    );
  }
}

export default LifeBarP2;

// style={{ width: `${localStorage.getItem('strengthP2')}%` }}
