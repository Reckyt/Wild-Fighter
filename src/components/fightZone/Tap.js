import React from 'react';
import '../../styles/css/fightZone/Tap.css';

class Tap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  startfightMobile = () => {
    const { close } = this.props;
    console.log(close);
    if (close === true) {
      return;
    }
    if (close === false) {
      // this.props.fight();
    }
  };

  render() {
    return (
      <div>
        {this.startfightMobile()}
        <button className="tap">Tap</button>
      </div>
    );
  }
}

export default Tap;
