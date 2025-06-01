import React from 'react';
import './Features.css';

const Features = () => {
  const features = [
    {
      title: 'Industry-Aligned Curriculum',
      description: 'Programs designed to match real-world software development trends and best practices.'
    },
    {
      title: 'Experienced Instructors',
      description: 'Learn from professionals with corporate experience, not just theory.'
    },
    {
      title: 'Hands-On Learning',
      description: 'Go beyond theory with practical, project-based training in a simulated environment.'
    },
    {
      title: 'Career-Focused Training',
      description: 'Includes mock interviews, DSA, SQL, and soft skills sessions to prepare you for success.'
    },
    // {
    //   title: 'Interview & Job Prep',
    //   description: 'From core programming to real interview questions, we cover it all.'
    // }
  ];

  return (
    <section id='features' className="features-section">
      <h2 className="features-heading">Why Choose CodeBaseCamp?</h2>
      <div className="features-container">
        {features.map((feature, index) => (
          <div key={index} className="features-card">
            <div className="features-icon-wrapper">
              <span className="features-icon">✔</span>
            </div>
            <h3 className="features-title">{feature.title}</h3>
            <p className="features-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
