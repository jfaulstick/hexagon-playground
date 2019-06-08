import React from 'react'
import Hexagon from 'react-hexagon'

import Styles from './hexagon.scss';

function HexagonItem(props) {
  const color = props.color || 'white';

  return (
    <div 
      id={`hex-${props.hexId}`}
      className="hexagon-item-container"
      style={{
        top: props.top,
        right: props.right,
        left: props.left, 
        bottom: props.bottom
      }}
    >
      <Hexagon
        className={`${props.classes}`}
        style={{stroke: `${props.stroke}`, fill: color}}
        target="none"
        flatTop="true"
      />
    </div>
  )
}

export default HexagonItem;