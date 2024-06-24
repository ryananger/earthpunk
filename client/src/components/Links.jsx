import React, {useState, useEffect} from 'react';

import st from 'ryscott-st';

const Links = function() {
  const [vis, setVis] = useState('hidden');

  useEffect(()=>{
    setTimeout(()=>{
      setVis('visible');
    }, 2500);
  }, []);

  return (
    <div id='links' className={'info texture v ' + vis}>
      <h3 className='link' onClick={()=>{st.setView('mission')}}>mission</h3>
      {/* <h3 onClick={()=>{st.setView('blog')}}>blog</h3> */}
      <h3 className='link' onClick={()=>{st.setView('contact')}}>contact</h3>
      <h3 className='link' onClick={()=>{st.setView('donate')}}>donate</h3>
      <br/>
      <h3>demo</h3>
      <a href='http://communitii.earthpunk.art'>communitii</a>
      <a href='https://jupiterfalls.earthpunk.art'>jupiterFalls</a>
      <br/>
      <h3>inbound</h3>
      <div>techTree Academy</div>
      <div>gardenbot</div>
      <br/>
    </div>
  );
};

export default Links;

