import React from 'react';
import { Code2, Database, Cloud, Users } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: 'Full Stack Development',
      description: 'Expert in Java, Spring Boot, React, and modern web technologies'
    },
    {
      icon: Database,
      title: 'Database Design',
      description: 'Experienced with MySQL, PostgreSQL, MongoDB, and Redis'
    },
    {
      icon: Cloud,
      title: 'Cloud Architecture',
      description: 'Proficient in AWS, Docker, Kubernetes, and microservices'
    },
    {
      icon: Users,
      title: 'Team Leadership',
      description: 'Led development teams and mentored junior developers'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Experienced Full Stack Developer
            </h3>
            <div className="prose prose-lg text-gray-600 space-y-4">
              <p>
                With 8+ years of professional experience, I specialize in building robust, 
                scalable enterprise applications using Java and modern web technologies. 
                My expertise spans the entire development lifecycle, from requirements 
                analysis to deployment and maintenance.
              </p>
              <p>
                I have a proven track record of delivering high-quality software solutions 
                that drive business growth. My experience includes working with large-scale 
                distributed systems, implementing microservices architectures, and leading 
                cross-functional development teams.
              </p>
              <p>
                I'm passionate about clean code, best practices, and staying current with 
                emerging technologies. I believe in continuous learning and enjoy sharing 
                knowledge with fellow developers through mentoring and code reviews.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300"
              >
                <highlight.icon className="h-12 w-12 text-blue-600 mb-4" />
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {highlight.title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
