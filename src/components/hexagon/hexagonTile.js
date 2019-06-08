import React, { Component } from "react";
import HexagonItem from "./hexagon-item";

import Styles from "./hexagon.scss";

class HexagonTile extends Component {
	constructor(props) {
		super(props);

		this.state = {
      color: "none",
      offset: {
        x: 219,
        y: 252
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
        {/* Column 1 */}
        <HexagonItem
					hexId={`${this.props.hexTileId}-top-left`}
					classes="hexagon-item"
					stroke="#999999"
					color={this.state.color}
					left="2px"
					top="2px"
				/>
				<HexagonItem
					hexId={`${this.props.hexTileId}-top-left`}
					classes="hexagon-item"
					stroke="#999999"
					color={this.state.color}
					left="2px"
					top="86px"
				/>
        <HexagonItem
					hexId={`${this.props.hexTileId}-top-left`}
					classes="hexagon-item"
					stroke="#999999"
					color={this.state.color}
					left="2px"
					top="170px"
				/>
        {/* Column 2 */}
        <HexagonItem
					hexId={`${this.props.hexTileId}-top-left`}
					classes="hexagon-item"
					stroke="#999999"
					color={this.state.color}
					left="75px"
					top="-40px"
				/>
        <HexagonItem
					hexId={`${this.props.hexTileId}-top-left`}
					classes="hexagon-item"
					stroke="#999999"
					color={this.state.color}
					left="75px"
					top="44px"
				/>
				<HexagonItem
					hexId={`${this.props.hexTileId}-top-left`}
					classes="hexagon-item"
					stroke="#999999"
					color={this.state.color}
					left="75px"
					top="128px"
				/>
        <HexagonItem
					hexId={`${this.props.hexTileId}-top-left`}
					classes="hexagon-item"
					stroke="#999999"
					color={this.state.color}
					left="75px"
					top="212px"
				/>
        {/* Column 3 */}
        <HexagonItem
					hexId={`${this.props.hexTileId}-top-left`}
					classes="hexagon-item"
					stroke="#999999"
					color={this.state.color}
					left="148px"
					top="2px"
				/>
        <HexagonItem
					hexId={`${this.props.hexTileId}-top-left`}
					classes="hexagon-item"
					stroke="#999999"
					color={this.state.color}
					left="148px"
					top="86px"
				/>
        <HexagonItem
					hexId={`${this.props.hexTileId}-top-left`}
					classes="hexagon-item"
					stroke="#999999"
					color={this.state.color}
					left="148px"
					top="170px"
				/>
        {/* Main Tile Hexagon */}
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
