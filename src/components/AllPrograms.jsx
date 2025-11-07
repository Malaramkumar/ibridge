   import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AllPrograms.scss';

const programs = [
  { title: 'Java Training', path: '/' },
  { title: 'Python Training', path: '/FooterCourse/python' },
  { title: 'AWS Training', path: '/FooterCourse/aws' },
  { title: 'Full-Stack Developer', path: '/FooterCourse/fullstack' },
  { title: 'Data Science', path: '/FooterCourse/data-science-python' },
  { title: 'DevOps Training', path: '/FooterCourse/devops' },
  { title: '.NET Training', path: '/FooterCourse/dotnet' },
  { title: 'Android Training', path: '/FooterCourse/android' },
  { title: 'Web Development', path: '/FooterCourse/webdev' },
  { title: 'Cloud Computing', path: '/FooterCourse/cloud' },
  { title: 'R Programming Training', path: '/FooterCourse/r' },
  { title: 'Mobile App Development', path: '/FooterCourse/mobileapp' },
  { title: 'VmWare Training', path: '/FooterCourse/vmware' },
  { title: 'Digital Marketing', path: '/FooterCourse/dm' },
  { title: 'UI / UX Training', path: '/FooterCourse/uiux' },
];

const AllPrograms = () => {
  const navigate = useNavigate();

  return (
    <section className="programs-grid-container">
      <h2>All Programs</h2>
      <div className="programs-grid">
        {programs.map((program, index) => (
          <div
            className="program-card"
            key={index}
            onClick={() => navigate(program.path)}
          >
            <h3>{program.title}</h3>
            <p>Brief description goes here.</p>
          </div>
        ))}
      </div>

      <div className="view-all">
        <button onClick={() => navigate('/courses')}>→ View All Courses</button>
      </div>
    </section>
  );
};

export default AllPrograms;
