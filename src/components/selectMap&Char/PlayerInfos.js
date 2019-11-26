import React, { Component } from 'react';
import CheatPlayers from './CheatPlayer';
import Characters from '../fightZone/Characters';
import '../../styles/css/PlayerInfos.css';

class PlayerInfos extends Component {
  constructor(props) {
    super(props);
    this.state = Object.assign(
      {
        cheatCount: 0,
        charSelected: false
      },
      this.defaultState()
    );
  }

  defaultState() {
    return {
      name: 'Select',
      strength: 0,
      defence: 0,
      avatar:
        'http://www.pmslweb.com/the-blog/wp-content/uploads/2014/04/32-default-facebook-profile-picture-fingers-funny.jpg'
    };
  }

  charSelSound = () => {
    const charselected = new Audio(require('../../styles/sounds/charselected.mp3'));
    charselected.play();
  };

  getState = nameSel => {
    this.setState({ name: nameSel });
  };

  onClickHandler = () => {
    this.setState({
      cheatCount: this.state.cheatCount + 1
    });
  };

  handleShareStats = faritas => {
    if (this.props.reverse) {
      localStorage.setItem('id2', faritas.id);
      localStorage.setItem('nameP2', faritas.name);
      localStorage.setItem('strengthP2', faritas.powerstats.strength);
      localStorage.setItem('defP2', faritas.powerstats.durability);
      localStorage.setItem('avatarP2', this.getAvatar(faritas.id));
      localStorage.setItem('Kick2', this.getKick(faritas.id));
      localStorage.setItem('Punch2', this.getPunch(faritas.id));
    } else {
      localStorage.setItem('id1', faritas.id);
      localStorage.setItem('nameP1', faritas.name);
      localStorage.setItem('strengthP1', faritas.powerstats.strength);
      localStorage.setItem('defP1', faritas.powerstats.durability);
      localStorage.setItem('avatarP1', this.getAvatar(faritas.id));
      localStorage.setItem('Kick1', this.getKick(faritas.id));
      localStorage.setItem('Punch1', this.getPunch(faritas.id));
    }
  };

  getAvatar = cagouille => {
    let charMatch = Characters.filter(char => char.id === parseInt(cagouille));
    return charMatch[0].avatar;
  };
  getKick = cagouille => {
    let charMatchK = Characters.filter(char => char.id === parseInt(cagouille));
    return charMatchK[0].kick;
  };
  getPunch = cagouille => {
    let charMatchP = Characters.filter(char => char.id === parseInt(cagouille));
    return charMatchP[0].punch;
  };

  renderMiniDefault() {
    return this.props.defPlayers.map(tsouintsouin => (
      <img
        className="miniPic"
        style={this.props.reverse && { transform: `scaleX(-1)` }}
        src={tsouintsouin && tsouintsouin.image.url}
        alt={tsouintsouin && tsouintsouin.name}
        onMouseOver={
          () =>
            !this.state.charSelected &&
            this.setState({
              name: tsouintsouin.name,
              strength: tsouintsouin.powerstats.strength,
              defence: tsouintsouin.powerstats.durability,
              avatar: tsouintsouin.image.url
            })
          // this.getAvatar(tsouintsouin.id)
          // console.log(tsouintsouin.id)
        }
        onMouseOut={() => !this.state.charSelected && this.setState(this.defaultState)}
        onClick={() => {
          // !this.state.charSelected &&
          this.setState({
            name: tsouintsouin.name,
            strength: tsouintsouin.powerstats.strength,
            defence: tsouintsouin.powerstats.durability,
            avatar: tsouintsouin.image.url,
            charSelected: true
          });
          this.props.handlePlayerReady();
          this.handleShareStats(tsouintsouin);
          this.charSelSound();
        }}
      />
    ));
  }

  renderMiniCheat() {
    return CheatPlayers.map(wesh => (
      <img
        className="miniPic"
        style={
          this.props.reverse && {
            transform: `scaleX(-1)`,
            boxSizing: `border-box`,
            border: `0.2vw solid yellow`
          }
        }
        src={wesh.miniPic}
        alt={wesh.name}
        onMouseOver={() =>
          !this.state.charSelected &&
          this.setState({
            name: wesh.name,
            strength: wesh.powerstats.strength,
            defence: wesh.powerstats.durability,
            avatar: wesh.image.url
          })
        }
        onMouseOut={() => !this.state.charSelected && this.setState(this.defaultState)}
        onClick={() => {
          !this.state.charSelected &&
            this.setState({
              name: wesh.name,
              strength: wesh.powerstats.strength,
              defence: wesh.powerstats.durability,
              avatar: wesh.image.url,
              charSelected: true
            });
          this.props.handlePlayerReady();
          this.handleShareStats(wesh);
          this.charSelSound();
        }}
      />
    ));
  }

  renderMiniChars() {
    let clickAvatar = this.state.cheatCount;
    if (clickAvatar !== 0 && clickAvatar % 5 === 0) {
      return this.renderMiniCheat();
    }
    return this.renderMiniDefault();
  }

  render() {
    return (
      <div>
        <div className={this.props.reverse ? 'selectedChar rev' : 'selectedChar'}>
          <img
            src={
              this.state.avatar
                ? this.state.avatar
                : 'http://www.pmslweb.com/the-blog/wp-content/uploads/2014/04/32-default-facebook-profile-picture-fingers-funny.jpg'
            }
            className="charPics"
            style={this.props.reverse && { transform: `scaleX(-1)` }}
            onClick={() => this.onClickHandler()}
            alt="Portrait"
          />
          <div className="charInfos">
            <p className="nameChar">{this.state.name}</p>
            <div className="statBarsContainer">
              <p>Strength</p>
              <div className="emptyStatBar">
                <div
                  className={this.props.reverse ? 'barAnim revBar' : 'barAnim'}
                  id="strengthBarChar"
                  style={{ width: `${this.state.strength}%` }}
                />
              </div>
              <p>Defence</p>
              <div className="emptyStatBar">
                <div
                  className={this.props.reverse ? 'barAnim revBar' : 'barAnim'}
                  id="defBarChar"
                  style={{ width: `${this.state.defence}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        <div style={this.props.reverse ? { textAlign: 'right' } : { textAlign: 'left' }}>
          {this.renderMiniChars()}
        </div>
      </div>
    );
  }
}

export default PlayerInfos;
