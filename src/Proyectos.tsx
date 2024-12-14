  // components/Portfolio.tsx
  import React, { useState } from 'react';
  import { Github, Mail, MapPin, ExternalLink, Code, Database, Globe, Book } from 'lucide-react';

  // types.ts
type Skill = {
    name: string;
    category: string;
  };
  
  type Experience = {
    title: string;
    company: string;
    period: string;
    description: string;
  };
  
  type Education = {
    title: string;
    institution: string;
    period: string;
    description?: string;
  };
  
  type Project = {
    id: string;
    title: string;
    description: string;
    image: string;
    tags: string[];
    url: string;
    category: string;
  };
  

  interface SkillCardProps {
    icon: React.ReactNode;
    title: string;
    skills: string[];
  }
  
  interface FilterButtonProps {
    category: string;
    isActive: boolean;
    onClick: () => void;
  }
  
  interface ProjectCardProps {
    project: Project;
  }
  
  const Proyectos: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  
    const skills: Skill[] = [
      { name: 'JavaScript', category: 'Frontend' },
      { name: 'TypeScript', category: 'Frontend' },
      { name: 'HTML 5', category: 'Frontend' },
      { name: 'Tailwind', category: 'Frontend' },
      { name: 'NodeJS', category: 'Backend' },
      { name: 'NextJS', category: 'Backend' },
      { name: 'Español (Nativo)', category: 'Idiomas' },
      { name: 'English (Medio)', category: 'Idiomas' },
      { name: 'Networking', category: 'Otros' },
      { name: 'Data Base', category: 'Otros' },
    ];
  
    const projects: Project[] = [
      {
        id: '1',
        title: 'REST API',
        description: 'Desarrollo de una aplicación web interactiva utilizando un front-end que consume recursos de la API de Naruto. Implementación de una API REST para gestionar datos y ofrecer una experiencia de usuario dinámica.',
        image: '/api/placeholder/400/300',
        tags: ['JavaScript', 'REST API', 'Typescript'],
        url: 'https://juanpguirao.github.io/naruto/',
        category: 'Frontend'
      },
      {
        id: '2',
        title: 'Ventarron Wine',
        description: 'Sitio web para bodega con catálogo de productos, blog y sistema de reservas para degustaciones.',
        image: '/api/placeholder/400/300',
        tags: ['WordPress', 'SEO', ''],
        url: 'https://ventarronwine.com',
        category: 'WordPress'
      },
      {
        id: '3',
        title: 'Buzz Recovery',
        description: 'Plataforma de servicios médicos con sistema de citas y gestión de pacientes.',
        image: '/api/placeholder/400/300',
        tags: ['Wordpress', 'Elementor'],
        url: 'https://buzzrecovery.com',
        category: 'Wordpress'
      },
      // ... más proyectos
    ];
  
    const categories = ['Todos', 'WordPress', 'React', 'Frontend'];
  
    const filteredProjects = projects.filter(project => 
      selectedCategory === 'Todos' ? true : project.category === selectedCategory
    );
  
    return (
        <div>  
        {/* Projects Section */}
        <section id='proyectos' className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">Proyectos</h2>
            
            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              {categories.map((category) => (
                <FilterButton
                  key={category}
                  category={category}
                  isActive={selectedCategory === category}
                  onClick={() => setSelectedCategory(category)}
                />
              ))}
            </div>
  
            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>
  
        {/* ... otros sections ... */}
      </div>
    );
  };
  
  const FilterButton: React.FC<FilterButtonProps> = ({ category, isActive, onClick }) => {
    return (
      <button 
        onClick={onClick}
        className={`px-4 py-2 rounded-full border transition-colors duration-300 
          ${isActive 
            ? 'bg-blue-500 text-white border-blue-500' 
            : 'border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white'
          }`}
      >
        {category}
      </button>
    );
  };
  
  const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    const [isHovered, setIsHovered] = useState<boolean>(false);
  
    return (
      <div 
        className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative h-48 overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-300"
            style={{
              transform: isHovered ? 'scale(1.1)' : 'scale(1)'
            }}
          />
          <div 
            className={`absolute inset-0 bg-blue-900 bg-opacity-75 transition-opacity duration-300 
              flex items-center justify-center ${isHovered ? 'opacity-100' : 'opacity-0'}`}
          >
            <a 
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white hover:text-blue-200"
            >
              <ExternalLink className="w-6 h-6" />
              <span>Ver Proyecto</span>
            </a>
          </div>
        </div>
  
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
          <p className="text-gray-600 mb-4">{project.description}</p>
          
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  const SkillCard: React.FC<SkillCardProps> = ({ icon, title, skills }) => {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center gap-2 mb-4">
          {icon}
          <h3 className="font-bold text-lg">{title}</h3>
        </div>
        <ul className="space-y-2">
          {skills.map((skill, index) => (
            <li key={index} className="text-gray-600">{skill}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Proyectos;