import React, {useEffect, useState} from 'react';

import '../styles/style.css';
import st from 'ryscott-st';
import {mouse} from 'util';

import Tile from './Tile.jsx';
import TilesMobile from './TilesMobile.jsx';
import Earthpunk from './Earthpunk.jsx';
import Info from './Info.jsx';
import Links from './LinksMobile.jsx';
import Mission from './Mission.jsx';
import Strategy from './Strategy.jsx';
import Contact from './Contact.jsx';
import Donate from './Donate.jsx';
import Blog from './Blog.jsx';

const tileSize = st.tileSize = window.innerHeight < 720 ? 32 : 54;
const isMobile = st.isMobile = true;

st.startX = 0;
st.startY = tileSize * 2;

const App = function() {
  const [view, setView] = st.newState('view', useState(null));
  const [overflow, setOverflow] = useState(false);

  const views = {
    mission:   <Mission/>,
    strategy:  <Strategy/>,
    contact:   <Contact/>,
    donate:    <Donate/>,
    blog:      <Blog/>
  };

  useEffect(function() {
    setTimeout(()=>{
        setOverflow(true);
    }, 3000);
  }, []);

  return (
    <div id='app' className='app v' style={!overflow ? {overflow: 'scroll'} : {}}>
        <TilesMobile/>
        <Earthpunk/>
        <Links/>
        {views[view]}
    </div>
  );
};

export default App;

