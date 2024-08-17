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
            <h3>demo</h3>
            <a href='http://communitii.earthpunk.art'>communitii</a>
            <a href='https://jupiterfalls.earthpunk.art'>jupiterFalls</a>
      </div>
      <br/>
      <div className='v'>
            <h3>inbound</h3>
            <div>techTree Academy</div>
            <div>gardenbot</div>
            <div>gardenSmart</div>
      </div>
    </div>
  );
};

export default Links;

