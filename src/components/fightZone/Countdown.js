import React from 'react';

import '../../styles/css/fightZone/DisplayCountdown.css';

class Countdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    if (this.props.modaleIsOpen) {
      this.props.setTimeOut();
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.modaleIsOpen !== this.props.modaleIsOpen && this.props.counter !== -1) {
      this.props.setTimeOut();
    }
    if (prevProps.counter !== this.props.counter && this.props.counter !== -1) {
      this.props.setTimeOut();
    }
  }

  render() {
    return <div className="count-button">{this.props.counter}</div>;
  }
}

export default Countdown;
