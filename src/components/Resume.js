import React from 'react';
import myResume from '../assets/images/BKDevRes.jpg'
import './Resume.css';


function Resume() {
  return (
    <>
      <div className='resumeStyle'>
        <div className='resumeHeader'>
          <h2>Knight Resume '24</h2>
        </div>
        <div className='img'>
          <img src={myResume} alt="Knight Resume '24" />
        </div>
        <div className='resumeCloser'>
          <h2><a href='https://docs.google.com/document/d/12SpFm5WpzF0i7a3B_bZj9BwZbocDREYVlnyBV92EMBY/edit?usp=sharing' download>Download a copy of my resume here.</a></h2>
        </div>

      </div>

    </>
  );
}

export default Resume;
