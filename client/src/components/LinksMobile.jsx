import React, {useState, useEffect} from 'react';

import st from 'ryscott-st';

const Links = function() {
  const [vis, setVis] = useState('hidden');

  var handleClick = function(link) {
    st.setView(link);
    setTimeout(()=>{
        document.getElementById(link).scrollIntoView({behavior: 'smooth'});
    }, 10);
  };

  useEffect(()=>{
    setTimeout(()=>{
      setVis('visible');
    }, 2500);
  }, []);

  return (
    <div id='links' className={'info texture v c ' + vis}>
        <div className='h'>
          <h3 className='link' onClick={()=>{handleClick('mission')}}>mission</h3>&emsp;
          <h3 className='link' onClick={()=>{handleClick('strategy')}}>strategy</h3>&emsp;
          {/* <h3 onClick={()=>{handleClick('blog')}}>blog</h3> */}
          <h3 className='link' onClick={()=>{handleClick('contact')}}>contact</h3>&emsp;
          <h3 className='link' onClick={()=>{handleClick('donate')}}>donate</h3>&emsp;
        </div>
      <br/>
      <div className='v'>
        <h3>projects</h3>
        <a href='https://15puzzl.earthpunk.art'>puzzles</a>
        <a href='https://communitii.net'>communitii</a>
        <a href='https://jupiterfalls.earthpunk.art'>jupiterFalls</a>
        <a href='https://techtree.academy'>techTree Academy</a>
        <a href='https://stokk.biz'>stokk</a>
        <a href='https://skwok.me'>skwok</a>
      </div>
    </div>
  );
};

export default Links;

