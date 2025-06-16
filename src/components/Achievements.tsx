
import React from 'react';
import { Award, Trophy, Star, Medal } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: Trophy,
      title: 'Best Innovation Award',
      description: 'Recognized for developing an AI-powered healthcare solution',
      issuer: 'TechCrunch Disrupt 2023',
      date: '2023',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: Award,
      title: 'AWS Certified Solutions Architect',
      description: 'Professional level certification for cloud architecture',
      issuer: 'Amazon Web Services',
      date: '2023',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: Star,
      title: 'Top Contributor',
      description: 'Recognized as top contributor to open-source projects',
      issuer: 'GitHub',
      date: '2022',
      color: 'from-green-400 to-blue-500'
    },
    {
      icon: Medal,
      title: 'Hackathon Winner',
      description: 'First place in blockchain development challenge',
      issuer: 'ETHGlobal Hackathon',
      date: '2022',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Award,
      title: 'Google Cloud Professional',
      description: 'Certified in Google Cloud Platform architecture',
      issuer: 'Google Cloud',
      date: '2023',
      color: 'from-red-400 to-yellow-500'
    },
    {
      icon: Trophy,
      title: 'Dean\'s List',
      description: 'Academic excellence recognition for 4 consecutive semesters',
      issuer: 'University of Technology',
      date: '2021',
      color: 'from-indigo-500 to-purple-600'
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Achievements & Certifications</h2>
            <p className="text-xl text-gray-600">Recognition and milestones</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
              >
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${achievement.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <achievement.icon className="text-white" size={28} />
                </div>

                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {achievement.title}
                </h3>

                <p className="text-gray-600 mb-3 text-sm leading-relaxed">
                  {achievement.description}
                </p>

                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500 font-medium">
                    {achievement.issuer}
                  </span>
                  <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                    {achievement.date}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-16 bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
              Professional Highlights
            </h3>

            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="group hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>

              <div className="group hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-bold text-green-600 mb-2">5</div>
                <div className="text-gray-600">Certifications</div>
              </div>

              <div className="group hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-bold text-purple-600 mb-2">3+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>

              <div className="group hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-bold text-red-600 mb-2">10k+</div>
                <div className="text-gray-600">Lines of Code</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
