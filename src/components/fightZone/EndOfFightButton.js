import React from 'react';
import Slot from './Slot';
import Coin from './Coin';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

const Container = props => {
  console.log(props);
  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        <div style={{ overflow: 'hidden', clear: 'both' }}>
          <Coin {...props} />
        </div>
        <div style={{ overflow: 'hidden', clear: 'both' }}>
          <Slot />
        </div>
      </div>
    </DndProvider>
  );
};

export default Container;
