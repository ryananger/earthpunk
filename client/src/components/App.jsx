import React, {useEffect, useState} from 'react';

import '../styles/style.css';
import st from 'ryscott-st';
import {mouse} from 'util';

import Tile from './Tile.jsx';
import Tiles from './Tiles.jsx';
import Earthpunk from './Earthpunk.jsx';
import Info from './Info.jsx';
import Links from './Links.jsx';
import Mission from './Mission.jsx';
import Strategy from './Strategy.jsx';
import Contact from './Contact.jsx';
import Donate from './Donate.jsx';
import Blog from './Blog.jsx';

const tileSize = st.tileSize = window.innerHeight < 900 ? 54 : 60;

st.startX = 0;
st.startY = tileSize * 2;

const App = function() {
  const [view, setView] = st.newState('view', useState(null));

  const infoView = st.infoView = ('15puzzl numberful sudoku').includes(view);

  const views = {
    '15puzzl': <Info name='15puzzl'/>,
    numberful: <Info name='numberful'/>,
    sudoku:    <Info name='sudoku'/>,
    mission:   <Mission/>,
    strategy:  <Strategy/>,
    contact:   <Contact/>,
    donate:    <Donate/>,
    blog:      <Blog/>
  };

  return (
    <div id='app' className='app v'>
      <Tiles/>
        <div id='box'>
          <div className='anchor h'>
            <div className='leftWing v'>
              <Earthpunk/>
              <Links/>
            </div>
            <div className='midWing v'>
              {!infoView && views[view]}
            </div>
            <div className='rightWing v'>
              {infoView && views[view]}
            </div>
          </div>
        </div>
    </div>
  );
};

export default App;

