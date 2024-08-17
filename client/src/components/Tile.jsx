import React, {useEffect, useState} from 'react';

import st from 'ryscott-st';

import Grain from './Grain.jsx';

const Tile = function({input, coords, name}) {
  const tileSize = st.tileSize;
  const actualPos = {x: st.startX + (coords.x * tileSize), y: st.startY + (coords.y * tileSize)};

  const [{x, y}, setPos] = useState(getRandomPosition());
  const [val, setVal] = useState(input);
  const [mounted, setMounted] = useState(false);
  const [scrambled, setScrambled] = useState(false);

  const style = {top: y + 'px', left: x + 'px', width: tileSize + 'px'};
  const bounce = name !== 'earthpunk';

  const handleClick = function() {
    if (name === 'earthpunk') {return};

    var link = document.getElementById(input + x + y + 'link');

    link.click();
  };

  const handleEnter = function() {
    if (scrambled || name === 'earthpunk') {return};

    st.setView(name);
  };

  const handleExit = function() {
    if (scrambled || name === 'earthpunk') {return};

    st.setView(null);
  };

  useEffect(()=>{
    if (!mounted || window.innerWidth < window.innerHeight) {
      return;
    }

    if (st.infoView || st.view === null) {
      setPos(actualPos);
      setTimeout(()=>{
        setScrambled(false);
      }, 100);
      return;
    }

    if (scrambled) {
      return;
    }

    setPos({x: 720 + (Math.random() * 160), y: y - 80 + (Math.random() * 160)});
    setScrambled(true);
  }, [st.view]);

  useEffect(()=>{
    setTimeout(()=>{
      setPos(actualPos);

      setTimeout(()=>{
        setMounted(true);
      }, 100);
    }, 100);
  }, []);

  return (
    <div className={`tileContainer v ${bounce ? 'bounce' : ''}`} style={style} onClick={handleClick} onMouseEnter={handleEnter} onMouseLeave={handleExit}>
      {name === 'earthpunk' && (
        <div className='tile v'>
          <Grain/>
          {val}
        </div>
      )}
      {name !== 'earthpunk' && (
        <a className='tile v' href={`https://${name}.earthpunk.art`}>
          <Grain/>
          {val}
        </a>
      )}
    </div>
  );
};

const getRandomPosition = function() {
  let x = (-window.innerWidth) + (Math.random() * window.innerWidth * 2);
  let y = (window.innerHeight * 2) + (Math.random() * 2000);

  if (Math.random() < 0.5) {
    x *= -1;
  }

  return {x, y};
};

export default Tile;

