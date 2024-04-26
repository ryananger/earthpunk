import React, {useEffect, useState} from 'react';

import st from 'ryscott-st';

import Grain from './Grain.jsx';

const Card = function({}) {
  const tileSize = st.tileSize;

  return (
    <div className='card v' style={{...style, width: tileSize + 'px'}}>
      <div className='tile v'>
        <Grain/>
      </div>
    </div>
  );
};

export default Card;

