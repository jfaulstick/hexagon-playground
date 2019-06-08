import React from 'react'
import HexagonItem from './hexagon-item';

import Styles from './hexagon.scss';

function HexagonFlower(props) {
  const offset = {
    x: 219,
    y: 98
  };

  const color = props.color || 'white';

  return (
    <div 
      hexId={`hex-flower-${props.hexFlowerId}`}
      className="hexagon-flower-container"
      style={{
        top: props.top,
        right: props.right,
        left: props.left, 
        bottom: props.bottom
      }}
    >
      <HexagonItem hexId={`${props.hexFlowerId}-top-left`} color={color} top="42px" />
      <HexagonItem hexId={`${props.hexFlowerId}-top`} color={color} left="73px" />
      <HexagonItem hexId={`${props.hexFlowerId}-top-right`} color={color} left="146px" top="42px" />
      <HexagonItem hexId={`${props.hexFlowerId}-center`} color={color} left="73px" top="84px" />
      <HexagonItem hexId={`${props.hexFlowerId}-bottom-right`} color={color} left="146px" top="126px"/>
      <HexagonItem hexId={`${props.hexFlowerId}-bottom`} color={color} left="73px" top="168px" />
      <HexagonItem hexId={`${props.hexFlowerId}-bottom`} color={color} top="126px" />
    </div>
  )
}

export default HexagonFlower;