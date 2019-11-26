import React from 'react';

import '../../styles/css/fightZone/FightZone.css';
import DisplayCountdown from './DisplayCountdown';
import ModaleInstructions from './ModaleInstructions';
import KeyboardEventHandler from 'react-keyboard-event-handler';
import LifeBarP1 from './LifeBarP1';
import LifeBarP2 from './LifeBarP2';
import Tap from './Tap';
import EndOfFightButton from './EndOfFightButton';

class FightZone extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modaleIsOpen: false,
      close: true,
      counter: 30,
      winP1: false,
      winP2: false,
      kick: null,
      punch: null,
      PV1: 1000,
      PV2: 1000,
      fight: true,
      avatarKick1: false,
      avatarPunch1: false,
      avatarKick2: false,
      avatarPunch2: false
    };

    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleSetTimeOut = this.handleSetTimeOut.bind(this);
  }

  componentDidMount() {
    this.mapSound();
  }

  mapSound = () => {
    const feuerfrei = new Audio(require('../../styles/sounds/feuerfrei.mp3'));
    feuerfrei.play();
  };

  mkSound = () => {
    const fight = new Audio(require('../../styles/sounds/mk.mp3'));
    fight.play();
  };

  winSound = () => {
    const youwin = new Audio(require('../../styles/sounds/youwin.mp3'));
    youwin.play();
  };

  handleCloseModal = () => {
    this.setState({ modaleIsOpen: !this.state.modaleIsOpen });
    this.setState({ close: !this.state.close });
    this.mkSound();
  };

  handleSetTimeOut = () => {
    var root = this;
    const x = this;
    const { counter, winP2, winP1 } = this.state;

    setTimeout(function() {
      console.log(counter);
      if (counter === 0) {
        console.log('win', winP2, winP1);
        root.winner();
        root.setState({ fight: false });
      } else if ((counter > 0 && root.state.PV1 <= 0) || (counter > 0 && root.state.PV2 <= 0)) {
        root.winwin();
      } else if (counter > 0) {
        root.winwin();
        x.setState({ counter: counter - 1 });
      }
    }, 1000);
  };

  fightMobile1 = () => {
    const strengthP1 = localStorage.getItem('strengthP1');
    const def2 = localStorage.getItem('defP2');

    this.setState({ kick: 10 * (1 + strengthP1 / 100) * ((100 - def2 / 2) / 100) });
    this.setState({ PV2: Math.round(this.state.PV2 - this.state.kick) });
  };

  fightMobile2 = () => {
    const strengthP2 = localStorage.getItem('strengthP2');
    const def1 = localStorage.getItem('defP1');

    this.setState({ kick: 10 * (1 + strengthP2 / 100) * ((100 - def1 / 2) / 100) });
    this.setState({ PV2: Math.round(this.state.PV2 - this.state.kick) });
  };

  fight = key => {
    const { fight } = this.state;
    const strengthP1 = localStorage.getItem('strengthP1');
    const strengthP2 = localStorage.getItem('strengthP2');
    const def1 = localStorage.getItem('defP1');
    const def2 = localStorage.getItem('defP2');
    if (fight === true) {
      if (key === 's') {
        this.setState({ kick: 10 * (1 + strengthP1 / 100) * ((100 - def2 / 2) / 100) });
        this.setState({ PV2: Math.round(this.state.PV2 - this.state.kick) });
        this.fightSound(key);
        this.setState({ avatarKick1: true });
        const x = this;
        setTimeout(function() {
          x.setState({ avatarKick1: false });
        }, 100);
      }
      if (key === 'z') {
        this.setState({ punch: 5 * (1 + strengthP1 / 100) * ((100 - def2 / 2) / 100) });
        this.setState({ PV2: Math.round(this.state.PV2 - this.state.punch) });
        this.fightSound(key);
        this.setState({ avatarPunch1: true });
        const x = this;
        setTimeout(function() {
          x.setState({ avatarPunch1: false });
        }, 100);
      }
      if (key === 'k') {
        this.setState({ kick: 10 * (1 + strengthP2 / 100) * ((100 - def1 / 2) / 100) });
        this.setState({ PV1: Math.round(this.state.PV1 - this.state.kick) });
        this.fightSound(key);
        this.setState({ avatarKick2: true });
        const x = this;
        setTimeout(function() {
          x.setState({ avatarKick2: false });
        }, 100);
      }
      if (key === 'o') {
        this.setState({ punch: 5 * (1 + strengthP2 / 100) * ((100 - def1 / 2) / 100) });
        this.setState({ PV1: Math.round(this.state.PV1 - this.state.punch) });
        this.fightSound(key);
        this.setState({ avatarPunch2: true });
        const x = this;
        setTimeout(function() {
          x.setState({ avatarPunch2: false });
        }, 100);
      }
    }
  };

  fightSound = key => {
    const punch1Sound = new Audio(require('../../styles/assets/sons-bruitages/Coup_de_poing.mp3'));
    const kick1Sound = new Audio(require('../../styles/assets/sons-bruitages/cp3.mp3'));
    const punch2Sound = new Audio(require('../../styles/assets/sons-bruitages/cp2.mp3'));
    const kick2Sound = new Audio(require('../../styles/assets/sons-bruitages/kick1.mp3'));

    if (key === 's') {
      kick1Sound.play();
    }
    if (key === 'z') {
      punch1Sound.play();
    }
    if (key === 'k') {
      kick2Sound.play();
    }
    if (key === 'o') {
      punch2Sound.play();
    }
  };

  startfight = () => {
    const { close } = this.state;
    if (close === true) {
      return;
    }
    if (!close) {
      return (
        <KeyboardEventHandler
          handleKeys={['a', 'z', 's', 'k', 'o', 'p']}
          onKeyEvent={(key, e) => this.fight(key)}
        />
      );
    }
  };

  winwin = () => {
    const { PV1, PV2 } = this.state;
    if (PV1 <= 0) {
      this.setState({ winP2: true });
      this.setState({ fight: false });
      this.winSound();
    }
    if (PV2 <= 0) {
      this.setState({ winP1: true });
      this.setState({ fight: false });
      this.winSound();
    }
  };

  winner = () => {
    const { PV1, PV2, winP1, winP2 } = this.state;

    console.log('debut fonction winner', 'winP2 :', winP2, 'winP1 :', winP1);
    // this.setState({ fight: false });
    if (PV1 > PV2) {
      this.setState({ winP1: true });
      this.winSound();
    }
    if (PV2 > PV1) {
      this.setState({ winP2: true });
      this.winSound();
    }
  };

  whichClass = () => {
    const { winP1, winP2 } = this.state;

    if (winP1 === false && winP2 === false) {
      return 'positionNone';
    } else if (winP1 === true) {
      return 'position1Win';
    } else if (winP2 === true) {
      return 'position2Win';
    }
  };

  whichAv1 = () => {
    const { avatarKick1, avatarPunch1 } = this.state;
    const P1 = localStorage.getItem('avatarP1');
    const K1 = localStorage.getItem('Kick1');
    const H1 = localStorage.getItem('Punch1');

    if (avatarKick1 === false && avatarPunch1 === false) {
      return P1;
    } else if (avatarKick1 === true) {
      return K1;
    } else if (avatarPunch1 === true) {
      return H1;
    }
  };

  whichAv2 = () => {
    const { avatarKick2, avatarPunch2 } = this.state;
    const P2 = localStorage.getItem('avatarP2');
    const K2 = localStorage.getItem('Kick2');
    const H2 = localStorage.getItem('Punch2');

    if (avatarKick2 === false && avatarPunch2 === false) {
      return P2;
    } else if (avatarKick2 === true) {
      return K2;
    } else if (avatarPunch2 === true) {
      return H2;
    }
  };

  render() {
    const { close, modaleIsOpen, counter, PV1, PV2, winP1, winP2 } = this.state;
    console.log(winP1, winP2);

    return (
      <div className="mapFond">
        {this.startfight()}
        <div className={this.whichClass()}>
          <div className="winnerIs">
            <p>YOU WIN</p>
          </div>
        </div>
        <img className="fightMap" src={localStorage.getItem('flag')} alt="Zone de Combat" />
        <ModaleInstructions
          closeModal={this.handleCloseModal}
          modaleIsOpen={modaleIsOpen}
          close={close}
        />
        {(winP1 || winP2) && (
          <div>
            <div>
              <div>
                <EndOfFightButton history={this.props.history} />
              </div>
            </div>
          </div>
        )}

        <div className="fighters">
          <div className="leftPlayer">
            <LifeBarP1 PV1={PV1} />
            <Tap fight={this.fightMobile1} close={close} />
            <img className="fighter1" src={this.whichAv1()} alt="Figther 1" />
          </div>
          <DisplayCountdown
            counter={counter}
            setTimeOut={this.handleSetTimeOut}
            modaleIsOpen={modaleIsOpen}
          />

          <div className="rightPlayer">
            <LifeBarP2 PV2={PV2} reverse={true} />
            <Tap fight={this.fightMobile2} close={close} reverse={true} />
            <img
              className="fighter2"
              src={this.whichAv2()}
              alt="Figther 2"
              style={{ transform: 'scaleX(-1)' }}
            />
          </div>
        </div>
        {/* <EndOfFightButton /> */}

        {/* <DndProvider backend={HTML5Backend}> */}
        {/* <div className="EndOfFight">
          <div className="coin">
            <Coin />
          </div>

          <Slot />
        </div> */}
        {/* </DndProvider>
         */}
      </div>
    );
  }
}

export default FightZone;
