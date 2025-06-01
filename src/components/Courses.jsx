// Courses.jsx
import React from 'react';
import './Courses.css';

const Courses = () => {
  const courseCategories = {
    'Programming Languages': ['Java Programming', 'Python Programming', 'C/C++ Programming'],
    'Fresher Interview Preparation': ['OOPs', 'SQL & DSA', 'Mock Interview', 'Interview Questions'],
    'Web Development': ['HTML', 'CSS', 'JavaScript', 'Angular', 'Mini Projects'],
    'Career Development': ['Soft Skills Development', 'Career Guidance Sessions'],
    'Corporate Training': ['Custom Programs for Teams', 'Real-World Project Training'],
  };

  return (
    <section id="courses"className="courses-section">
      <h2 className="courses-heading">Our Course Offerings</h2>
      <div className="courses-big-card">
        {Object.entries(courseCategories).map(([category, courses], index) => (
          <div key={index} className="courses-child-card">
            <h3 className="courses-category-title">{category}</h3>
            <ul className="courses-list">
              {courses.map((course, idx) => (
                <li key={idx} className="courses-item">{course}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Courses;
