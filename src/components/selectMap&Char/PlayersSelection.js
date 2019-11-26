import React, { Component } from 'react';
import Versus from '../../styles/assets/versus.gif';
import PlayerInfos from './PlayerInfos';
import FightButton from './FightButton';
import '../../styles/css/PlayersSelection.css';
import axios from 'axios';

const CharSelection = [263, 63, 213, 140, 686, 176, 185, 208, 416, 717, 687, 70];

class PlayersSelection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedP1: false,
      selectedP2: false,
      apiPlayers: [],

      mapSelected: null
    };
    this.getPlayers();
  }

  handleP1ready = () => {
    this.setState({ selectedP1: true });
    console.log('P1');
  };

  handleP2ready = () => {
    this.setState({ selectedP2: true });
    console.log('P2');
  };

  getPlayers = () => {
    CharSelection.forEach(bouillette => {
      return axios
        .get(`https://www.superheroapi.com/api.php/10156616570523372/${bouillette}`)
        .then(response => {
          this.state.apiPlayers.push(response.data);
          this.setState({ apiPlayers: this.state.apiPlayers });
        });
    });
  };

  render() {
    const bg = this.props.bkgImage;

    return (
      <div>
        <div className="charsSelection" style={{ height: '100%', backgroundImage: `url(${bg})` }}>
          <div className="charsSelAndStats">
            <div id="player1">
              <PlayerInfos
                defPlayers={this.state.apiPlayers}
                handlePlayerReady={this.handleP1ready}
              />
            </div>
            <div className="between_Players">
              <div id="vsLocation">
                <img src={Versus} alt="VS" id="vsImage" />
              </div>
              <FightButton
                bothReady={
                  this.state.selectedP1 === true && this.state.selectedP2 === true ? true : false
                }
              />
            </div>
            <div id="player2">
              <PlayerInfos
                defPlayers={this.state.apiPlayers}
                reverse={true}
                handlePlayerReady={this.handleP2ready}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PlayersSelection;
