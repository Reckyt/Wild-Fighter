import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/home/Home';
import MapButton from './components/selectMap&Char/MapButton';
import PageInstructions from './components/fightZone/PageInstructions';
import FightZone from './components/fightZone/FightZone';

import './App.css';
import './styles/css/reset.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/selectMap/MapButton" component={MapButton} />
        <Route path="/fighZone/PageInstructions" component={PageInstructions} />
        <Route path="/fightZone/FightZone" component={FightZone} />
      </Switch>
    </div>
  );
}

export default App;
