import React from 'react';
// import { Redirect } from 'react-router-dom';
import { useDrag } from 'react-dnd';
import piece from '../../styles/assets/coin.png';

const Coin = props => {
  console.log(props);
  const [{ isDragging }, drag] = useDrag({
    item: { type: 'box' },
    end: (item, monitor, propsOther) => {
      const dropResult = monitor.getDropResult(propsOther);
      if (item && dropResult) {
        props.history.push('/selectMap/MapButton');
        return;
      }
    },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  });
  const opacity = isDragging ? 0 : 1;
  return (
    <div>
      <img ref={drag} className="coin" src={piece} alt="coin" style={{ opacity }} />
    </div>
  );
};
export default Coin;

// "http://image.jeuxvideo.com/medias/149339/1493389041-5975-logo.png"
