import  { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Search } from 'lucide-react';
import TiltCard from '../components/TiltCard';

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with payment processing, inventory management, and admin dashboard.',
      image: 'https://www.psevenrwanda.com/static/media/logo.2266b8f15b5e47c9955e.png',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
      category: 'web',
      liveLink: 'https://www.psevenrwanda.com/',
      githubLink: 'https://github.com/Cktripa-source/pseven-web',
      featured: true
    },
   
  ];
  
  const categories = ['all', 'web', 'mobile', 'featured'];
  
  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    
    if (activeFilter === 'all') {
      return matchesSearch;
    } else if (activeFilter === 'featured') {
      return matchesSearch && project.featured;
    } else {
      return matchesSearch && project.category === activeFilter;
    }
  });
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };
  
  return (
    <div className="pt-24 pb-16">
      <motion.h1 
        className="section-header relative"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My Projects
        <div className="absolute -bottom-2 left-0 w-1/4 h-1 bg-gradient-to-r from-primary to-transparent"></div>
      </motion.h1>
      
      <motion.p 
        className="mb-12 max-w-3xl text-gray-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Here's a collection of my most significant work across web and mobile platforms.
        Each project represents challenges I've tackled and skills I've developed.
      </motion.p>
      
      <div className="mb-12 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="flex flex-wrap gap-3">
          {categories.map((category, index) => (
            <motion.button
              key={category}
              className={`px-4 py-2 rounded-full capitalize ${activeFilter === category ? 'bg-primary text-white' : 'bg-dark-tertiary text-gray-300 hover:text-white'}`}
              onClick={() => setActiveFilter(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              {category}
            </motion.button>
          ))}
        </div>
        
        <motion.div 
          className="relative w-full md:w-auto"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          <div className="absolute inset-y-0 left-3 flex items-center">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-64 pl-10 pr-4 py-2 bg-dark-tertiary border border-white/5 rounded-full text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
          />
        </motion.div>
      </div>
      
      {filteredProjects.length === 0 ? (
        <motion.div 
          className="text-center py-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xl text-gray-400">No projects found matching your criteria.</p>
          <p className="text-gray-500 mt-2">Try adjusting your search or filter.</p>
        </motion.div>
      ) : (
        <motion.div 
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group relative" // Apply group class directly here
            >
              <TiltCard className="h-full" glare>
                <div className="project-card h-full flex flex-col">
                  <div className="relative overflow-hidden h-48">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-secondary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="w-full p-4 flex justify-between items-center">
                        <div className="flex space-x-2">
                          {project.technologies.slice(0, 3).map((tech, index) => (
                            <span 
                              key={index} 
                              className="bg-primary/20 backdrop-blur-sm text-white text-xs px-2 py-1 rounded"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 3 && (
                            <span className="bg-primary/20 backdrop-blur-sm text-white text-xs px-2 py-1 rounded">
                              +{project.technologies.length - 3}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-300 mb-4 flex-1">{project.description}</p>
                    <div className="mt-auto flex justify-between items-center">
                      <a 
                        href={project.liveLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn btn-primary py-2 px-4 text-sm flex items-center"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                      <a 
                        href={project.githubLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-dark-tertiary text-white hover:bg-primary/20 transition-colors duration-300"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default Projects;
 