import React, { useState, useRef, useEffect } from 'react';
import { ExternalLink, Github, X, ChevronLeft, ChevronRight, Download } from 'lucide-react';
import designImage1 from '../assets/final10.png';
import designImage2 from '../assets/nexus2.png';
import designImage3 from '../assets/conver.png';
import designImage4 from '../assets/1 fa.png';
import designImage5 from '../assets/1 faculty.png';
import designImage6 from '../assets/1 indusrty.png';
import designImage7 from '../assets/1 industry.png';
import designImage8 from '../assets/conv logo.png';
import designImage9 from '../assets/logo.jpg';
import designImage10 from '../assets/logo.png';
import designImage11 from '../assets/nexus logo.png';


interface BaseProject {
  id: number;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  techStack: string[];
  features: string[];
  githubUrl?: string;
  liveUrl?: string;
}

type CodeProject = BaseProject;



const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [projectType, setProjectType] = useState<'code' | 'design'>('code');
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);
  const [lightboxImage, setLightboxImage] = useState<string>('');
  const [lightboxTitle, setLightboxTitle] = useState<string>('');
  const modalRef = useRef<HTMLDivElement>(null);
  const lightboxRef = useRef<HTMLDivElement>(null);

  // Handle clicks outside modal/lightbox
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (selectedProject !== null && modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setSelectedProject(null);
      }
      if (lightboxOpen && lightboxRef.current && !lightboxRef.current.contains(event.target as Node)) {
        setLightboxOpen(false);
      }
    }

    if (selectedProject !== null || lightboxOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [selectedProject, lightboxOpen]);

  // Handle keyboard events for lightbox (escape to close, arrow keys for navigation)
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (lightboxOpen) {
        if (event.key === 'Escape') {
          setLightboxOpen(false);
        }
      }
    }

    if (lightboxOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [lightboxOpen]);

  const codeProjects: CodeProject[] = [
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
      image: designImage1,
    },
    {
      id: 102,
      image: designImage2,
    },
    {
      id: 103,
      image: designImage3,
    },{
      id: 104,
      image: designImage4,
    },{
      id: 105,
      image: designImage5,
    },{
      id: 106,
      image: designImage6,
    },{
      id: 107,
      image: designImage7,
    },{
      id: 108,
      image: designImage8,
    },{
      id: 109,
      image: designImage9,
    },{
      id: 110,
      image: designImage10,
    },
    {
      id: 111,
      title: 'Typography Exploration Series',
      shortDescription: 'Experimental typography and lettering',
      fullDescription: 'A personal exploration series focused on pushing the boundaries of typography and lettering. This project experiments with various techniques including hand-lettering, 3D typography, and animated type to create visually striking compositions.',
      image: designImage11,
      techStack: ['Adobe Illustrator', 'Procreate', 'Cinema 4D', 'After Effects'],
      githubUrl: '',
      liveUrl: 'https://www.instagram.com/',
      features: [
        'Custom hand-lettering',
        'Experimental 3D typography',
        'Animated type explorations',
        'Mixed media techniques',
        'Typography as visual art',
        'Weekly practice series'
      ],
      category: 'Typography'
    }
  ];

  // Get current projects based on selected type
  const projects = projectType === 'code' ? codeProjects : designProjects;

  // Find the currently selected project from all projects
  const selectedProjectData = [...codeProjects, ...designProjects].find(p => p.id === selectedProject);

  const openLightbox = (image: string, title: string) => {
    setLightboxImage(image);
    setLightboxTitle(title);
    setLightboxOpen(true);
  };

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

          {/* Project Display - Different layout based on project type */}
          {projectType === 'code' ? (
            // Code Projects Grid
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
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          className="flex items-center gap-1 text-gray-600 hover:text-gray-800 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink size={16} />
                          <span className="text-sm">Live Demo</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // Design Projects Gallery
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {designProjects.map((project) => (
                <div
                  key={project.id}
                  className="group relative overflow-hidden rounded-lg shadow-md transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${(project.id % 10) * 100}ms` }}
                  onClick={() => openLightbox(project.image, project.title)}
                >
                  <div className="aspect-[4/3] w-full">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-4">
                    <p className="text-white font-medium text-sm md:text-base">{project.title}</p>
                    <p className="text-gray-200 text-xs md:text-sm">{project.category}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Project Modal for Code Projects */}
          {selectedProject && selectedProjectData && projectType === 'code' && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 animate-fade-in">
              <div
                ref={modalRef}
                className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-scale-in"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-2xl font-bold text-gray-800">
                      {selectedProjectData.title}
                    </h3>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="text-gray-500 hover:text-gray-700 transition-colors"
                    >
                      <X size={24} />
                    </button>
                  </div>

                  <div className="space-y-6">
                    <img
                      src={selectedProjectData.image}
                      alt={selectedProjectData.title}
                      className="w-full h-64 object-cover rounded-lg"
                    />

                    <p className="text-gray-700 leading-relaxed">
                      {selectedProjectData.fullDescription}
                    </p>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-3">Key Features</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        {selectedProjectData.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-3">Tools & Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProjectData.techStack.map((tech) => (
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
                      {selectedProjectData.githubUrl && (
                        <a
                          href={selectedProjectData.githubUrl}
                          className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-2 rounded-lg font-medium transition-colors flex items-center gap-2"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github size={20} />
                          View Code
                        </a>
                      )}
                      {selectedProjectData.liveUrl && (
                        <a
                          href={selectedProjectData.liveUrl}
                          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors flex items-center gap-2"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink size={20} />
                          View Live
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Lightbox for Design Projects */}
          {lightboxOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4 animate-fade-in">
              <div
                ref={lightboxRef}
                className="relative max-w-6xl w-full h-full flex flex-col items-center justify-center animate-scale-in"
              >
                {/* Close button */}
                <button
                  onClick={() => setLightboxOpen(false)}
                  className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
                >
                  <X size={32} />
                </button>

                {/* Image */}
                <div className="relative w-full h-full flex items-center justify-center">
                  <img
                    src={lightboxImage}
                    alt={lightboxTitle}
                    className="max-w-full max-h-[85vh] object-contain"
                  />
                </div>

                {/* Caption */}
                <div className="absolute bottom-8 left-0 right-0 text-center text-white">
                  <h3 className="text-xl font-medium">{lightboxTitle}</h3>
                  <p className="text-gray-300 text-sm mt-1">
                    Click outside the image to close
                  </p>
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