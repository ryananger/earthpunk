import React, {useEffect, useState} from 'react';

import st from 'ryscott-st';

import Tile from './Tile.jsx';

let strs = {
  earthpunk: null,
  '15puzzl': null,
  numberful: null,
  sudoku: null
};

const Tiles = function() {
  const [lines, setLines] = useState([]);
  const [strings, setStrings] = useState(strs);
  const [config, setConfig] = useState(Math.floor(Math.random() * 5));

  const tileSize = st.tileSize;

  var loadTiles = function() {
    for (var key of tileConfig[config].order.split(' ')) {
      if (strings[key] !== key) {
        var newStrings = {...strings};

        if (strings[key] === null) {
          newStrings[key] = key[0];
        } else {
          newStrings[key] = newStrings[key] + key[newStrings[key].length];
        }

        setTimeout(()=>{setStrings(newStrings);}, 50);
        return;
      }
    }
  };

  var renderTiles = function(str, startX, startY, vertical, skip) {
    if (!str) {return};

    var rendered = [];

    for (var i = 0; i < str.length; i++) {
      if (skip === i) {
        continue;
      }

      let coords = vertical === true ? {x: startX, y: i + startY} : {x: i + startX, y: startY};

      rendered.push(<Tile key={str[i] + coords.x + coords.y} input={str[i]} coords={coords} name={str}/>);
    }

    return rendered;
  };

  var getLines = function() {
    let lines = [];

    for (let i = 1; i < 12; i++) {
      let perc = 50 + (Math.random() * 50);
      let opac = 0.2 + Math.random();

      if (Math.random() < 0.2) {
        perc += 50;
      }

      let rowStyle = {top: (tileSize * i) + 'px', width: perc + '%', opacity: opac};
      let colStyle = {left: (tileSize * i) + 'px', height: perc + '%', opacity: opac};

      lines.push(<div key={'row' + i} className='rowLine' style={rowStyle}/>);
      lines.push(<div key={'column' + i} className='columnLine' style={colStyle}/>);
    }

    setLines(lines);
  };

  const tileConfig = [
    {
      order: 'earthpunk 15puzzl numberful sudoku',
      tiles: (
        <>
        {renderTiles(strings.earthpunk, 0, 0)}
        {renderTiles(strings['15puzzl'], 5, -2, true, 2)}
        {renderTiles(strings.numberful, 7, 0, true, 0)}
        {renderTiles(strings.sudoku, 6, 7, false, 1)}
        </>
      )
    },
    {
      order: 'earthpunk numberful 15puzzl sudoku',
      tiles: (
        <>
        {renderTiles(strings.earthpunk, 1, 3)}
        {renderTiles(strings.numberful, 1, -1, true, 4)}
        {renderTiles(strings['15puzzl'], 7, 0, true, 3)}
        {renderTiles(strings.sudoku, 9, -1, true, 4)}
        </>
      )
    },
    {
      order: 'earthpunk numberful 15puzzl sudoku',
      tiles: (
        <>
        {renderTiles(strings.earthpunk, 2, 4)}
        {renderTiles(strings.numberful, 4, -1, true, 5)}
        {renderTiles(strings['15puzzl'], 1, 0, false, 3)}
        {renderTiles(strings.sudoku, 3, 6, false, 1)}
        </>
      )
    },
    {
      order: 'earthpunk numberful sudoku 15puzzl',
      tiles: (
        <>
        {renderTiles(strings.earthpunk, 2, 4)}
        {renderTiles(strings.numberful, 4, -1, true, 5)}
        {renderTiles(strings.sudoku, 3, 0, false, 1)}
        {renderTiles(strings['15puzzl'], 1, 6, false, 3)}
        </>
      )
    },
    {
      order: 'earthpunk numberful 15puzzl sudoku',
      tiles: (
        <>
        {renderTiles(strings.earthpunk, 2, 4)}
        {renderTiles(strings.numberful, 4, -1, true, 5)}
        {renderTiles(strings['15puzzl'], 1, 6, false, 3)}
        {renderTiles(strings.sudoku, 10, 0, true, 4)}
        </>
      )
    }
  ];

  useEffect(getLines, []);
  useEffect(loadTiles, [strings]);

  return (
    <div id='tiles' className='tiles v' style={{width: (tileSize * 12) + 'px', aspectRatio: 1}}>
      {lines}
      {tileConfig[config].tiles}
    </div>
  );
};

export default Tiles;

