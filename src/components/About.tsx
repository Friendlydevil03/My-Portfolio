
import React from 'react';
import { Infinity, Palette, Code, Globe } from 'lucide-react';

const About = () => {
  const interests = [
    { icon: Infinity, title: 'DevOps', description: 'Automation' },
    { icon: Palette, title: 'Graphic Designer', description: 'Creative' },
    { icon: Code, title: 'Web Developer', description: 'Amazing Applications' },
    { icon: Globe, title: 'Cloud Computing', description: 'Scalable infrastructure' }
  ];

  const techStack = [
    'JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'Java',
    'PostgreSQL', 'MongoDB', 'AWS', 'Docker', 'Git', 'TensorFlow','Photoshop','Adobe Illustrator', 'Figma', 'Canva','Adobe XD'
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
            <p className="text-xl text-gray-600">Get to know me better</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Bio Section */}
            <div>
              <div className="prose prose-lg text-gray-700">
                <p className="mb-6" style={{ textAlign: 'justify' }}>
                  I am a multidisciplinary professional with a strong foundation in both technology and design. With a passion for solving problems creatively and efficiently, I have developed a unique skill set that combines system automation and visual storytelling. This dual expertise allows me to contribute to both the technical and creative aspects of a project, making me adaptable across diverse teams and workflows.
                </p>
                
                <p className="mb-6" style={{ textAlign: 'justify' }}>
                  In the field of DevOps, I focus on streamlining development lifecycles through automation, continuous integration/deployment (CI/CD), and infrastructure as code. I have hands-on experience with tools like Docker, Kubernetes, Jenkins, Git, and various cloud platforms such as AWS and Azure. My approach emphasizes reliability, scalability, and speed — ensuring that systems run smoothly, securely, and with minimal downtime.
                </p>

                <p style={{ textAlign: 'justify' }}>
                  As a Graphic Designer, I specialize in creating clean, engaging visuals that communicate ideas clearly and effectively. I am skilled in tools such as Adobe Creative Suite, Figma, and Canva, with experience in branding, UI/UX design, and digital media. My design work is guided by a strong sense of layout, color theory, and user experience, allowing me to create designs that are both functional and visually appealing.
                </p>
              </div>

              {/* Tech Stack */}
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Interests Grid */}
            <div className="grid grid-cols-2 gap-6">
              {interests.map((interest, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100 hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <interest.icon className="text-white" size={24} />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">
                    {interest.title}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {interest.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default About;
