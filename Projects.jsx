import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const Projects = () => {
  useEffect(() => {
    gsap.from('.animate', { duration: 1, y: -50, opacity: 0 });
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-3xl animate">My Projects</h1>
      <p className="mt-2">Here are some of the projects I have worked on.</p>
    </div>
  );
};

export default Projects;