import React, {useState, useEffect} from 'react';

import st from 'ryscott-st';

const Strategy = function() {
  return (
    <div id={'strategy'} className={'info texture v'}>
      <div className='circle texture' onClick={()=>{st.setView(null)}}/>
      <h2>strategy</h2>
      <small>
        Earthpunk is a multi-solving organization, founded in mid 2024, to create sustainable and integrative systems across various fields,
        with a focus on finding harmony between nature and technology.
        <br/><br/>
        We aim to address complex global challenges through interconnected and sustainable strategies that enhance social, environmental, and economic well-being.
      </small>
      <br/><br/>
      <div id='timeline' className='v'>
        <h3>2024</h3>
        <div className='list'>
          <li>Establish organization and begin development on communitii and early education projects.</li>
          <li>Seek investors and partners, and build founding staff.</li>
          <li>Launch techTree Academy, and use it as a recruitment and development tool.</li>
          <li>Begin creation of gardenbot intellectual property.</li>
        </div>
        <h3>2025</h3>
        <div className='list'>
          <li>Continue development on education projects, gardenSmart, and communitii.</li>
          <li>Build relationships with community organizations and begin user testing.</li>
          <li>Launch communitii and gardenSmart, and begin product integration.</li>
          <li>Expand techTree Academy and provide more advanced material, in topics such as AI, AR, and robotics.</li>
        </div>
        <h3>2026</h3>
        <div className='list'>
          <li>Expand userbase and community relations for all existing products.</li>
          <li>Launch augmented-reality and robotics divisions.</li>
          <li>Continue development on gardenbot intellectual property.</li>
          <li>Begin earnest development on gardenbot hardware and software, with gardenSmart as a foundation.</li>
        </div>
        <h3>2027</h3>
        <div className='list'>
          <li>Seek partnerships in anticipation of gardenbot.</li>
          <li>Release early augmented-reality apps.</li>
          <li>Launch gardenbot brain and app for DIY in advance of official robot.</li>
          <li>Official gardenbot release.</li>
        </div>
        <h3>2028</h3>
        <div className='list'>
          <li>Complete product integration with communitii.</li>
          <li>Expand augmented-reality support, gardenbot capabilities, and education suite.</li>
          <li>Begin point of sale kiosk development for communitii gardenbots.</li>
        </div>
        <h3>2029</h3>
        <div className='list'>
          <li>Gardenbot, the Movie.</li>
          <li>Earthpunk AR-RPG.</li>
          <li>Communitii Concerts.</li>
        </div>
      </div>
      <br/>
    </div>
  );
};

export default Strategy;

