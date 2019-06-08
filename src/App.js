import React from 'react';
import './App.scss';

import NavBar from './components/navbar/navbar';
import HexagonTile from './components/hexagon/hexagonTile';

function App() {
  return (
    <div className="App">
      {/* <NavBar /> */}

      <div className="hex-grid-container">
        <HexagonTile hexTileId="1" left="0" top="0"/>
        <HexagonTile hexTileId="2" left="2" top="0" />
        <HexagonTile hexTileId="3" left="4" top="0" />
        <HexagonTile hexTileId="4" left="6" top="0" />
        <HexagonTile hexTileId="4" left="8" top="0" />

        <HexagonTile hexTileId="5" left="1" top="0.5" />
        <HexagonTile hexTileId="6" left="3" top="0.5" />
        <HexagonTile hexTileId="7" left="5" top="0.5" />
        <HexagonTile hexTileId="8" left="7" top="0.5" />

        <HexagonTile hexTileId="9" left="0" top="1" />
        <HexagonTile hexTileId="10" left="2" top="1" />
        <HexagonTile hexTileId="11" left="4" top="1" />
        <HexagonTile hexTileId="12" left="6" top="1" />
        <HexagonTile hexTileId="12" left="8" top="1" />

        <HexagonTile hexTileId="13" left="1" top="1.5" />
        <HexagonTile hexTileId="14" left="3" top="1.5" />
        <HexagonTile hexTileId="15" left="5" top="1.5" />
        <HexagonTile hexTileId="16" left="7" top="1.5" />

        <HexagonTile hexTileId="17" left="0" top="2" />
        <HexagonTile hexTileId="18" left="2" top="2" />
        <HexagonTile hexTileId="19" left="4" top="2" />
        <HexagonTile hexTileId="20" left="6" top="2" />
        <HexagonTile hexTileId="20" left="8" top="2" />

        <HexagonTile hexTileId="21" left="1" top="2.5" />
        <HexagonTile hexTileId="22" left="3" top="2.5" />
        <HexagonTile hexTileId="23" left="5" top="2.5" />
        <HexagonTile hexTileId="24" left="7" top="2.5" />

        <HexagonTile hexTileId="25" left="0" top="3" />
        <HexagonTile hexTileId="26" left="2" top="3" />
        <HexagonTile hexTileId="27" left="4" top="3" />
        <HexagonTile hexTileId="28" left="6" top="3" />
        <HexagonTile hexTileId="28" left="8" top="3" />

        <HexagonTile hexTileId="21" left="1" top="3.5" />
        <HexagonTile hexTileId="22" left="3" top="3.5" />
        <HexagonTile hexTileId="23" left="5" top="3.5" />
        <HexagonTile hexTileId="24" left="7" top="3.5" />
        
      </div>
    </div>
  );
}

export default App;
