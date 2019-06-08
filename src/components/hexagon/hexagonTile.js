import React, { Component } from "react";
import HexagonItem from "./hexagon-item";

import Styles from "./hexagon.scss";

class HexagonTile extends Component {
	constructor(props) {
		super(props);

		this.state = {
      color: "none",
      offset: {
        x: 146,
        y: 168
      }
    };
    
    this.setColor = this.setColor.bind(this);
	}

	setColor() {
    if (this.state.color !== 'orange') {
      this.setState({
        color: 'orange'
      });
    } else {
      this.setState({
        color: 'none'
      });
    }
  }

	render() {
		return (
			<div
				hexId={`hex-tile-${this.props.hexTileId}`}
        className="hexagon-tile-container"
        onClick={this.setColor}
        // onMouseEnter={this.setColor}
        // onMouseLeave={this.setColor}
				style={{
					top: `${this.props.top * this.state.offset.y}px`,
					right: this.props.right,
					left: `${this.props.left * this.state.offset.x}px`,
					bottom: this.props.bottom
				}}
			>
				<HexagonItem
					hexId={`${this.props.hexTileId}-top-left`}
					classes="hexagon-item"
					stroke="#999999"
					color={this.state.color}
					left="1px"
					top="43px"
				/>
				<HexagonItem
					hexId={`${this.props.hexTileId}-top-left`}
					classes="hexagon-item"
					stroke="#999999"
					color={this.state.color}
					left="74px"
					top="1px"
				/>
				<HexagonItem
					hexId={`${this.props.hexTileId}-top-left`}
					classes="hexagon-item"
					stroke="#999999"
					color={this.state.color}
					left="74px"
					top="85px"
				/>
				<HexagonItem
					hexId={`${this.props.hexTileId}-top-left`}
					classes="hexagon-tile-item"
					stroke="#000000"
					color={this.state.color}
					z-index="2"
				/>
			</div>
		);
	}
}

export default HexagonTile;
