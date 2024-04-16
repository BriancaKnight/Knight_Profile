import React from 'react';
import './Bio.css';
import { setSelectedLink } from '../redux/linkSlice';
import { useDispatch } from 'react-redux';

function Bio() {
  const dispatch = useDispatch();

  const handleLinkClick = (link) => {
    dispatch(setSelectedLink(link));
  };

  return (
    <>
      <div className='bioStyle'>
        <div className='bioHeader'>
          <h2>Hi there.</h2>
        </div>
        <div className='bioP'>
          <p>I’m Brianca, a junior developer zooming towards a career in UI design. Equipped with a background in the arts, marketing, and community engagement I’ve spent the last 5 years crafting campaigns for small businesses, non-profits, and artists alike. My new goal? To blend my creative flair with intuitive design to craft a little digital magic.</p>
          <p>Please, take a little time to browse my projects and resume. If you're intrigued, feel free to reach out! Can't wait to hear from you.</p>
        </div>
        <div className='linkContainer'>
          <h4 className='bioLink' onClick={() => handleLinkClick('PROJECTS')}>PROJECTS</h4>
          <h4 className='bioLink' onClick={() => handleLinkClick('RESUME')}>RESUME</h4>
          <h4 className='bioLink' onClick={() => handleLinkClick('CONTACT')}>CONTACT</h4>
        </div>
      </div>
    </>
  );
}

export default Bio;
