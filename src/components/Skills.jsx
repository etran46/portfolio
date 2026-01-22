import React from 'react';

const Skills = () => {
  const skillsData = [
    {
      icon: '💻',
      title: 'Frontend',
      skills: ['React', 'JavaScript', 'HTML/CSS', 'Tailwind CSS']
    },
    {
      icon: '⚙️',
      title: 'Backend',
      skills: ['Node.js', 'Python', 'Express', 'MongoDB', 'PostgreSQL']
    },
    {
      icon: '🛠️',
      title: 'Tools',
      skills: ['Git', 'Docker', 'Figma']
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="skills-grid">
          {skillsData.map((skillCategory, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon">{skillCategory.icon}</div>
              <h3 className="skill-title">{skillCategory.title}</h3>
              <ul className="skill-list">
                {skillCategory.skills.map((skill, skillIndex) => (
                  <li key={skillIndex}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

