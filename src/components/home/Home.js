import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import gloves from '../../styles/assets/gloves.gif';
import texture from '../../styles/assets/texture2.gif';
import '../../styles/css/home/Home.css';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      punchy: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      punchy: !this.state.punchy
    });
  }
  punchy = () => {
    const sound = new Audio(require('../../styles/assets/sons-bruitages/Coup_de_poing.mp3'));
    if (this.state.punchy === false) {
      sound.play();
    }
  };
  render() {
    return (
      <div className="Home">
        <img className="bkg" id="bkg" src={texture} alt="bkg" />
        <div className="title">
          <p className="name-left">Wild</p>
          <p className="name-right">Fighter</p>
        </div>
        <div className="Home_animation">
          <div className="Home_button">
            <Link to="/selectMap/MapButton">
              <img
                className="gloves"
                id="gloves"
                src={gloves}
                alt="gloves"
                onMouseOver={this.punchy}
              />
            </Link>
          </div>
        </div>
        {/* <iframe
          title="rocky"
          width="0"
          height="0"
          src="https://www.youtuberepeater.com/watch?v=ov-CGRnyYH0#gsc.tab=0"
          frameborder="0"
          allowfullscreen
        ></iframe> */}
      </div>
    );
  }
}

export default Home;
