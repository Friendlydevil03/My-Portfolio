import React, { useState, useRef, useEffect } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [projectType, setProjectType] = useState<'code' | 'design'>('code');
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

  const codeProjects = [
    {
      id: 1,
      title: 'Smart Vehicle Parking Management System',
      shortDescription: 'A application for space detection and parking management',
      fullDescription: 'Smart Vehicle Parking System is an AI-powered solution that uses computer vision for real-time vehicle detection, tracking algorithms (e.g., DeepSORT) for monitoring vehicles, and offers an intuitive interface for parking management. It detects open spaces, tracks vehicles, and provides analytics on parking usage.',
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
      title: 'RFID Fuel System Project',
      shortDescription: 'Real-time Fuel Management System using RFID',
      fullDescription: 'This RFID Fuel System represents a modern, full-stack TypeScript application that leverages contemporary web technologies to provide a comprehensive solution for both fuel station operators and customers. It integrates RFID technology for seamless fuel payments, digital wallets, and detailed analytics.',
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

  const designProjects = [
    {
      id: 101,
      title: 'Eco-Friendly Campaign Posters',
      shortDescription: 'A series of vibrant posters promoting environmental awareness',
      fullDescription: 'This series of poster designs was created for an environmental awareness campaign targeting young adults. The designs incorporate bold typography, vibrant gradients, and minimalist illustrations to convey important messages about sustainability and eco-friendly practices in an engaging way.',
      image: 'https://images.unsplash.com/photo-1576153192621-7a3be10b356e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      techStack: ['Adobe Illustrator', 'Adobe Photoshop', 'Procreate'],
      githubUrl: '',
      liveUrl: 'https://www.behance.net/',
      features: [
        'Bold typography with custom lettering',
        'Vibrant color gradients for visual impact',
        'Minimalist illustration style',
        'Responsive layout adapting to different display formats',
        'Concise messaging for quick comprehension',
        'Consistent visual language across the series'
      ]
    },
    {
      id: 102,
      title: 'Tech Startup Brand Identity',
      shortDescription: 'Complete brand identity design for an AI tech startup',
      fullDescription: 'This comprehensive brand identity was developed for a cutting-edge AI technology startup entering the market. The project includes logo design in various applications, typography guidelines, color palette development, and marketing materials. The design language balances innovation and trustworthiness through geometric shapes and a modern color scheme.',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      techStack: ['Adobe Illustrator', 'Adobe InDesign', 'Figma'],
      githubUrl: '',
      liveUrl: 'https://dribbble.com/',
      features: [
        'Responsive logo system adaptable across platforms',
        'Custom typography pairing for unique brand voice',
        'Strategic color palette reflecting company values',
        'Business card, letterhead, and stationery designs',
        'Social media asset templates',
        'Comprehensive brand guidelines document'
      ]
    },
    {
      id: 103,
      title: 'Mobile App UI Motion Design',
      shortDescription: 'Animated UI design for a fitness tracking application',
      fullDescription: 'This project showcases animated UI designs for a fitness tracking mobile application. The animations enhance user experience by providing visual feedback for interactions and guiding users through the app flow. Special attention was given to smooth transitions, micro-interactions, and performance optimization while maintaining the app\'s vibrant and energetic brand personality.',
      image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      techStack: ['Adobe After Effects', 'Principle', 'Figma', 'Lottie'],
      githubUrl: '',
      liveUrl: 'https://dribbble.com/',
      features: [
        'Microinteractions for immediate user feedback',
        'Screen transition animations',
        'Data visualization animations for workout metrics',
        'Loading state animations',
        'Achievement celebration animations',
        'Exported as Lottie files for developer implementation'
      ]
    }
  ];

  // Get current projects based on selected type
  const projects = projectType === 'code' ? codeProjects : designProjects;

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600 mb-8">Some of my recent work</p>

            {/* Toggle Switch */}
            <div className="flex justify-center mb-10">
              <div className="bg-gray-200 rounded-full p-1 flex w-72 h-12">
                <button
                  className={`flex-1 rounded-full flex items-center justify-center transition-all duration-300 ${
                    projectType === 'code' 
                      ? 'bg-blue-600 text-white shadow-lg transform scale-105' 
                      : 'text-gray-700 hover:bg-gray-300'
                  }`}
                  onClick={() => setProjectType('code')}
                >
                  <span className="font-medium">Code Projects</span>
                </button>
                <button
                  className={`flex-1 rounded-full flex items-center justify-center transition-all duration-300 ${
                    projectType === 'design' 
                      ? 'bg-purple-600 text-white shadow-lg transform scale-105' 
                      : 'text-gray-700 hover:bg-gray-300'
                  }`}
                  onClick={() => setProjectType('design')}
                >
                  <span className="font-medium">Graphic Design</span>
                </button>
              </div>
            </div>
          </div>

          {/* Project Grid with Animation */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer animate-fade-in"
                style={{ animationDelay: `${(project.id % 10) * 100}ms` }}
                onClick={() => setSelectedProject(project.id)}
              >
                <div className="relative overflow-hidden group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end">
                    <div className="p-4 text-white">
                      <h4 className="font-medium">{project.title}</h4>
                    </div>
                  </div>
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
                        className={`${
                          projectType === 'code' 
                            ? 'bg-blue-100 text-blue-800' 
                            : 'bg-purple-100 text-purple-800'
                        } px-2 py-1 rounded text-xs font-medium`}
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
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        className="flex items-center gap-1 text-gray-600 hover:text-gray-800 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={16} />
                        <span className="text-sm">Code</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Project Modal */}
          {selectedProject && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 animate-fade-in">
              <div
                ref={modalRef}
                className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-scale-in"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-2xl font-bold text-gray-800">
                      {[...codeProjects, ...designProjects].find(p => p.id === selectedProject)?.title}
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
                        src={[...codeProjects, ...designProjects].find(p => p.id === selectedProject)?.image}
                        alt={[...codeProjects, ...designProjects].find(p => p.id === selectedProject)?.title}
                        className="w-full h-64 object-cover rounded-lg"
                      />

                      <p className="text-gray-700 leading-relaxed">
                        {[...codeProjects, ...designProjects].find(p => p.id === selectedProject)?.fullDescription}
                      </p>

                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-3">Key Features</h4>
                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                          {[...codeProjects, ...designProjects].find(p => p.id === selectedProject)?.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-3">Tools & Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {[...codeProjects, ...designProjects].find(p => p.id === selectedProject)?.techStack.map((tech) => (
                            <span
                              key={tech}
                              className={`${
                                selectedProject < 100 
                                  ? 'bg-blue-100 text-blue-800' 
                                  : 'bg-purple-100 text-purple-800'
                              } px-3 py-1 rounded-full text-sm font-medium`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-4 pt-4">
                        {[...codeProjects, ...designProjects].find(p => p.id === selectedProject)?.githubUrl && (
                          <a
                            href={[...codeProjects, ...designProjects].find(p => p.id === selectedProject)?.githubUrl}
                            className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-2 rounded-lg font-medium transition-colors flex items-center gap-2"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github size={20} />
                            View Code
                          </a>
                        )}
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