import React, {useState, useEffect} from 'react';

import st from 'ryscott-st';

const Links = function() {
  const [vis, setVis] = useState('hidden');

  var handleClick = function(link) {
    st.setView(link);
  };

  useEffect(()=>{
    setTimeout(()=>{
      setVis('visible');
    }, 2500);
  }, []);

  return (
    <div id='links' className={'info texture v ' + vis}>
      <h3 className='link' onClick={()=>{handleClick('mission')}}>mission</h3>
      <h3 className='link' onClick={()=>{handleClick('strategy')}}>strategy</h3>
      {/* <h3 onClick={()=>{handleClick('blog')}}>blog</h3> */}
      <h3 className='link' onClick={()=>{handleClick('contact')}}>contact</h3>
      <h3 className='link' onClick={()=>{handleClick('donate')}}>donate</h3>
      <br/>
      <h3>demo</h3>
      <a href='http://communitii.earthpunk.art'>communitii</a>
      <a href='https://jupiterfalls.earthpunk.art'>jupiterFalls</a>
      <br/>
      <h3>inbound</h3>
      <div>techTree Academy</div>
      <div>gardenbot</div>
      <div>gardenSmart</div>
      <br/>
    </div>
  );
};

export default Links;

