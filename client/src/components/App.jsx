import React, {useEffect, useState} from 'react';

import '../styles/style.css';
import st from 'ryscott-st';
import {mouse} from 'util';

import Tile from './Tile.jsx';
import Tiles from './Tiles.jsx';
import Earthpunk from './Earthpunk.jsx';
import Info from './Info.jsx';

const isMobile = st.isMobile = window.innerWidth < 720;
const isTablet = window.innerWidth > 720 && window.innerHeight > window.innerWidth;
const tileSize = st.tileSize = isMobile ? 32 : window.innerHeight < 900 ? 54 : 60;

st.startX = 0;
st.startY = tileSize * 2;

const App = function() {
  const [view, setView] = st.newState('view', useState(null));

  const views = {
    '15puzzl': <Info name='15puzzl'/>,
    numberful: <Info name='numberful'/>,
    sudoku:    <Info name='sudoku'/>
  };

  return (
    <div id='app' className='app v'>
      {!isMobile && !isTablet &&
        <div id='box'>
          <div className='anchor'>
            <Earthpunk/>
            {views[view]}
          </div>
        </div>
      }
      <Tiles/>
    </div>
  );
};

export default App;

