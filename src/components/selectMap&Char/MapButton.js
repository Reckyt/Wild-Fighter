import React, { Component } from 'react';
import pictureCity from './PicCity';
import cityButton from './CityButton';
import mapFighter from '../../styles/assets/MAP2.png';
import '../../styles/css/MapButton.css';
import selectMap from '../../styles/assets/selectMap.gif';
import PlayersSelection from './PlayersSelection';

class MapButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      label: 0,
      button: true,
      flag:
        'https://www.pinclipart.com/picdir/middle/12-121404_placeholder-map-marker-position-pinpoint-png-clipart.png',
      displayPlayers: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
  }

  componentDidMount() {
    this.destinySound();
  }

  destinySound = () => {
    const chooseyourdestiny = new Audio(require('../../styles/sounds/chooseyourdestiny.mp3'));
    chooseyourdestiny.play();
  };

  mapSelSound = () => {
    const mapselected = new Audio(require('../../styles/sounds/mapselected.mp3'));
    mapselected.play();
  };

  handleClick(e) {
    this.setState({
      label: e.target.value
    });
  }

  handleClick2() {
    this.setState({
      button: !this.state.button
    });
  }

  handleShareMap = share => {
    localStorage.setItem('flag', share.flag);
  };

  handleScrollToChars = () =>
    setTimeout(function() {
      window.scrollTo({ top: 2000, behavior: 'smooth' });
    }, 200);

  render() {
    return (
      <div className="mapButtonSelection">
        {/* <div className="onlyMap"> */}
        <img className="map" id="mapSelection" src={mapFighter} alt="map" />
        {/* </div> */}
        <div className="citiesMap">
          {cityButton.map(x => (
            <button
              style={{
                top: x.topVal,
                left: x.leftVal,
                'background-color': x.bg,
                'border-radius': x.br,
                position: x.position,
                padding: x.pad
              }}
              value={x.id}
              onMouseOver={this.handleClick}
              onClick={() => {
                this.state.button === true &&
                  this.setState({
                    flag: x.flag,
                    displayPlayers: true
                  });
                this.handleClick2();
                this.handleShareMap(x);
                this.handleScrollToChars();
                this.mapSelSound();
              }}
            />
          ))}
          {cityButton[this.state.label].country.map(x => (
            <img className="single-flag" src={pictureCity[x].flag} alt={x.id} />
          ))}
          {this.state.button ? <img src={selectMap} id="selectMap" alt="map selected" /> : ''}
        </div>
        <iframe
          title="rocky"
          width="0"
          height="0"
          src="https://www.youtuberepeater.com/watch?v=ov-CGRnyYH0#gsc.tab=0"
          frameborder="0"
          allowfullscreen
        ></iframe>
        <div
          style={this.state.displayPlayers === false ? { display: 'none' } : { display: 'block' }}
        >
          <PlayersSelection id="PlaySel" bkgImage={this.state.flag} />
        </div>
      </div>
    );
  }
}

export default MapButton;
