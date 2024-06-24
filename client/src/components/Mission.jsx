import React, {useState, useEffect} from 'react';

import st from 'ryscott-st';

const Mission = function() {
  return (
    <div id={'mission'} className={'info texture v'}>
      <div className='circle texture' onClick={()=>{st.setView(null)}}/>
      At earthpunk, we are committed to empowering communities through the development of local resilience,
      with tools that enable and encourage sustainable growth by building synergistic systems, that act in the interest of life in general.
      <br/><br/>
      Nature has already provided so many solutions from which we've drawn inspiration, in our aircraft, and submarines, and medicine, and more,
      and we believe it is time to listen to what the earth has been telling us elsewhere.
      <br/><br/>
      We need to fix our food, our education, our communities,
      we need to use these technologies that we've created to grant people the means to survive in their own right,
      and we need to do all of that in a way that genuinely promotes a healthy and sustainable environment.
      <br/><br/>
      This is our mission.
    </div>
  );
};

export default Mission;

