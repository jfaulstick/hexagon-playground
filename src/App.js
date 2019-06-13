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
      
        <HexagonTile hexTileId="5" left="1" top="0.5" />
        <HexagonTile hexTileId="6" left="3" top="0.5" />
        <HexagonTile hexTileId="7" left="5" top="0.5" />

        <HexagonTile hexTileId="9" left="0" top="1" />
        <HexagonTile hexTileId="10" left="2" top="1" />
        <HexagonTile hexTileId="11" left="4" top="1" />

        <HexagonTile hexTileId="13" left="1" top="1.5" />
        <HexagonTile hexTileId="14" left="3" top="1.5" />
        <HexagonTile hexTileId="15" left="5" top="1.5" />

        <HexagonTile hexTileId="17" left="0" top="2" />
        <HexagonTile hexTileId="18" left="2" top="2" />
        <HexagonTile hexTileId="19" left="4" top="2" />

        <HexagonTile hexTileId="21" left="1" top="2.5" />
        <HexagonTile hexTileId="22" left="3" top="2.5" />
        <HexagonTile hexTileId="23" left="5" top="2.5" />

        <HexagonTile hexTileId="25" left="0" top="3" />
        <HexagonTile hexTileId="26" left="2" top="3" />
        <HexagonTile hexTileId="27" left="4" top="3" />

        <HexagonTile hexTileId="29" left="1" top="3.5" />
        <HexagonTile hexTileId="30" left="3" top="3.5" />
        <HexagonTile hexTileId="31" left="5" top="3.5" />

        <HexagonTile hexTileId="33" left="0" top="4" />
        <HexagonTile hexTileId="34" left="2" top="4" />
        <HexagonTile hexTileId="35" left="4" top="4" />
        
        <HexagonTile hexTileId="38" left="1" top="4.5" />
        <HexagonTile hexTileId="39" left="3" top="4.5" />
        <HexagonTile hexTileId="40" left="5" top="4.5" />

        <HexagonTile hexTileId="33" left="0" top="4" />
        <HexagonTile hexTileId="34" left="2" top="4" />
        <HexagonTile hexTileId="35" left="4" top="4" />

        <HexagonTile hexTileId="38" left="1" top="4.5" />
        <HexagonTile hexTileId="39" left="3" top="4.5" />
        <HexagonTile hexTileId="40" left="5" top="4.5" />
      
        <HexagonTile hexTileId="33" left="0" top="5" />
        <HexagonTile hexTileId="34" left="2" top="5" />
        <HexagonTile hexTileId="35" left="4" top="5" />
        
        <HexagonTile hexTileId="38" left="1" top="5.5" />
        <HexagonTile hexTileId="39" left="3" top="5.5" />
        <HexagonTile hexTileId="40" left="5" top="5.5" />

        <HexagonTile hexTileId="33" left="0" top="6" />
        <HexagonTile hexTileId="34" left="2" top="6" />
        <HexagonTile hexTileId="35" left="4" top="6" />

        <HexagonTile hexTileId="38" left="1" top="6.5" />
        <HexagonTile hexTileId="39" left="3" top="6.5" />
        <HexagonTile hexTileId="40" left="5" top="6.5" />

        <HexagonTile hexTileId="33" left="0" top="7" />
        <HexagonTile hexTileId="34" left="2" top="7" />
        <HexagonTile hexTileId="35" left="4" top="7" />

        <HexagonTile hexTileId="38" left="1" top="7.5" />
        <HexagonTile hexTileId="39" left="3" top="7.5" />
        <HexagonTile hexTileId="40" left="5" top="7.5" />

        <HexagonTile hexTileId="33" left="0" top="8" />
        <HexagonTile hexTileId="34" left="2" top="8" />
        <HexagonTile hexTileId="35" left="4" top="8" />

        <HexagonTile hexTileId="38" left="1" top="8.5" />
        <HexagonTile hexTileId="39" left="3" top="8.5" />
        <HexagonTile hexTileId="40" left="5" top="8.5" />

        <HexagonTile hexTileId="33" left="0" top="9" />
        <HexagonTile hexTileId="34" left="2" top="9" />
        <HexagonTile hexTileId="35" left="4" top="9" />

        <HexagonTile hexTileId="38" left="1" top="9.5" />
        <HexagonTile hexTileId="39" left="3" top="9.5" />
        <HexagonTile hexTileId="40" left="5" top="9.5" />
        
      </div>
    </div>
  );
}

export default App;
