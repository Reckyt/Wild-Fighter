import React from 'react';
import { useDrop } from 'react-dnd';

const Slot = () => {
  const [, drop] = useDrop({
    accept: 'box',
    drop: () => ({ name: 'Slot' })
  });

  return (
    <div ref={drop}>
      <img
        className="slot"
        src="http://trophy01.np.community.playstation.net/trophy/np/NPWR08498_00_006857D27B1AB8BFE81DCA50388C6B51D6F24551B1/0DF5813C76D4467408A4D62DFBC8EF7F6EF3353B.PNG"
        alt="insert coin"
      />{' '}
    </div>
  );
};
export default Slot;
