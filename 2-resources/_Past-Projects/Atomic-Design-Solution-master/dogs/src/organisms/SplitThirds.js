import React from 'react';
import './SplitThirds.css';

function SplitThirds(props) {
  return (
    <div className="SplitThirds">
      <div className="SplitThirds__left">{props.left}</div>
      <div className="SplitThirds__right">{props.right}</div>
    </div>
  );
}

export default SplitThirds;