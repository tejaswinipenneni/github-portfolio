import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Backend Technologies',
      skills: [
        { name: 'Java', level: 95 },
        { name: 'Spring Boot', level: 90 },
        { name: 'Spring Framework', level: 88 },
        { name: 'Hibernate/JPA', level: 85 },
        { name: 'Maven/Gradle', level: 80 },
        { name: 'JUnit/Mockito', level: 85 }
      ]
    },
    {
      title: 'Frontend Technologies',
      skills: [
        { name: 'React', level: 85 },
        { name: 'TypeScript', level: 80 },
        { name: 'HTML/CSS', level: 90 },
        { name: 'JavaScript', level: 88 },
        { name: 'Angular', level: 75 },
        { name: 'Bootstrap/Tailwind', level: 85 }
      ]
    },
    {
      title: 'Databases',
      skills: [
        { name: 'PostgreSQL', level: 88 },
        { name: 'MySQL', level: 85 },
        { name: 'MongoDB', level: 75 },
        { name: 'Redis', level: 70 },
        { name: 'Oracle DB', level: 80 },
        { name: 'SQL Optimization', level: 85 }
      ]
    },
    {
      title: 'DevOps & Cloud',
      skills: [
        { name: 'AWS', level: 80 },
        { name: 'Docker', level: 85 },
        { name: 'Kubernetes', level: 75 },
        { name: 'Jenkins', level: 80 },
        { name: 'Git/GitLab', level: 90 },
        { name: 'Linux/Unix', level: 85 }
      ]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-xl text-gray-600 mt-6">
            Technologies and tools I work with to build exceptional software
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
