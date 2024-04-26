import React, {useState, useEffect} from 'react';

const Earthpunk = function() {
  const [vis, setVis] = useState('hidden');

  useEffect(()=>{
    setTimeout(()=>{
      setVis('visible');
    }, 2500);
  }, []);

  return (
    <div id='earthpunk' className={'info texture v ' + vis}>
      <h2>earth·punk</h2>
      <small>/ərTH pəNGk/</small>
      <p>
        1. A radical appreciation for the Earth and its inhabitants, intent on the creation of harmony between technology and nature.
      </p>
      <p>
        2. Any organism or entity engaged in practices that promote the health and sustainability of the ecosystem at all levels.
      </p>
    </div>
  );
};

export default Earthpunk;

