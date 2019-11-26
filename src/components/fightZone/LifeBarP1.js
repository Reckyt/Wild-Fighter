import React from 'react';
import '../../styles/css/fightZone/Lifebar.css';

class LifeBarP1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { PV1 } = this.props;
    return (
      <div className="backLifeBar">
        <div className="activeLifeBar" style={{ width: `${PV1 / 10}%` }} />
      </div>
    );
  }
}

export default LifeBarP1;

// style={{ width: `${localStorage.getItem('strengthP1')}%` }}
