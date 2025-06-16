import React, { useState, useRef, useEffect } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // Handle clicks outside the modal
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setSelectedProject(null);
      }
    }

    // Add event listener when modal is open
    if (selectedProject !== null) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    // Clean up the event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [selectedProject]);

  const projects = [
    {
      id: 1,
      title: 'Smart Vechile Parking Managment System',
      shortDescription: 'A application for space detection and parking management',
      fullDescription: 'Smart Vehicle Parking System is an AI-powered solution that uses computer vision for real-time vehicle detection, tracking algorithms (e.g., DeepSORT) for monitoring vehicle movement, and XGBoost for predicting parking demand. This system optimizes space allocation, reduces congestion, and enables efficient parking management through automated detection, intelligent sorting, and accurate demand forecasting.',
      image: 'https://asite.aim.edu/wp-content/uploads/2022/08/LT1-ML3_Miguel-Carlo-Pingol.png',
      techStack: ['Python', 'TKinter', 'OpenCV', 'Pillow', 'NumPy','YOLO','Deepsort','PyTorch','SciPy','XGBoost','Matplotlib'],
      githubUrl: 'https://github.com/Friendlydevil03/Smart-Vehicle-Parking-Managment-System.git',
      features: [
        'Real-time detection of occupied and free parking spaces',
        'Vehicle tracking and counting using YOLO and DeepSORT',
        'Visual interface built with Tkinter',
        'Support for multiple video sources including webcams and video files',
        'Customizable parking space setup through a graphical interface',
        'Logging and statistics for parking usage',
      ]
    },
    {
      id: 2,
      title: 'A RFID Fuel System Project',
      shortDescription: 'Real-time Fuel Management System using RFID',
      fullDescription: 'This RFID Fuel System represents a modern, full-stack TypeScript application that leverages contemporary web technologies to provide a comprehensive solution for both fuel consumers and station operators. The system is designed with scalability, security, and user experience as primary considerations.',
      image: 'https://www.team-bhp.com/sites/default/files/styles/check_extra_large_for_review/public/skoda-fuel-payment.jpg',
      techStack: ['Node.js', 'Express', 'TypeScript', 'Neon Database'],
      githubUrl: 'https://github.com/Friendlydevil03/RfidFuelSystemProject.git',
      features: [
        'User authentication with secure login, registration, and session management',
        'Vehicle management for registering and tracking multiple vehicles per user',
        'RFID tag system for contactless identification and payments at fuel stations',
        'Digital wallet for maintaining balance and processing fuel payments',
        'Multiple payment methods including cards, UPI, and wallet top-ups via Stripe',
        'Transaction history with detailed records and digital receipts',
        'Fuel station finder showing nearby RFID-enabled stations with pricing',
        'Real-time notifications for transactions and account activities via WebSockets',
        'Fuel consumption analytics showing spending patterns and usage statistics',
        'Station management dashboard with sales metrics and transaction processing',
        'Transaction reporting with filtering, searching, and export capabilities',
        'Responsive UI built with React and Tailwind CSS for cross-device compatibility',
        'PostgreSQL database with Drizzle ORM for efficient data management',
        'Security features including password hashing, input validation, and rate limiting',
      ]
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600">Some of my recent work</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
                onClick={() => setSelectedProject(project.id)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {project.shortDescription}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="text-gray-500 text-xs">
                        +{project.techStack.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  <div className="flex gap-3">
                    <a
                      href={project.githubUrl}
                      className="flex items-center gap-1 text-gray-600 hover:text-gray-800 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github size={16} />
                      <span className="text-sm">Code</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Project Modal */}
          {selectedProject && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
              <div 
                ref={modalRef}
                className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-2xl font-bold text-gray-800">
                      {projects.find(p => p.id === selectedProject)?.title}
                    </h3>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="text-gray-500 hover:text-gray-700 transition-colors"
                    >
                      <X size={24} />
                    </button>
                  </div>

                  {selectedProject && (
                    <div className="space-y-6">
                      <img
                        src={projects.find(p => p.id === selectedProject)?.image}
                        alt={projects.find(p => p.id === selectedProject)?.title}
                        className="w-full h-64 object-cover rounded-lg"
                      />
                      
                      <p className="text-gray-700 leading-relaxed">
                        {projects.find(p => p.id === selectedProject)?.fullDescription}
                      </p>

                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-3">Key Features</h4>
                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                          {projects.find(p => p.id === selectedProject)?.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-3">Tech Stack</h4>
                        <div className="flex flex-wrap gap-2">
                          {projects.find(p => p.id === selectedProject)?.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-4 pt-4">
                        <a
                          href={projects.find(p => p.id === selectedProject)?.githubUrl}
                          className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-2 rounded-lg font-medium transition-colors flex items-center gap-2"
                        >
                          <Github size={20} />
                          View Code
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;