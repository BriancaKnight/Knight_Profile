import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <>
      <div className='projectsStyle'>
        <div className='projectsHeader'>
          <h2>Some of my favorite projects so far...</h2>
        </div>
        <div className='projectsExample'>
          <h3><a href='https://flowrise-prismic-pink.vercel.app/'>Flowrise</a></h3>

          <p>A mock website for Flowrise: A productivity app. Technologies utilized include TypeScript and Next.js, Tailwind for styling, and Prismic, a headless CMS. (Look around and try to find my lil easter egg!) </p><br />
          </div>
          
        <div className='projectsExample'>
          <h3><a href='https://github.com/BriancaKnight/beyondtipping'>beyondtipping</a></h3>

          <p>An application that lists restaurants that have removed the tipping model, opting for a flat price on menus or implementing a service fee. Technologies used include TypeScript, JavaScript, Python, HTML, and CSS. Role- UI/UX designer in this group project.</p><br />
        </div>
        <div className='projectsExample'>
          <h3><a href='https://github.com/BriancaKnight/Pierre_Sweet_Treats.Solution'>Pierre's Sweet Treats</a></h3>

          <p>This application serves as an online marketplace where a user can browse the bakery inventory by flavors or by treats. If a user is signed in with Identity they have manager-level access to create, edit, and delete items. Technologies used inclueds C#, HTML, CSS, & MySQL, created through MVC.</p><br />
        </div>
      
          <div className='projectsCloser'>
          <h3>Need to see more? <a href='https://github.com/BriancaKnight'>Check out my github!</a></h3>
          </div>
      </div>

    </>
  );
}

export default Projects;