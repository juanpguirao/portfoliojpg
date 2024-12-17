import React, { ReactNode } from 'react';
import { Github, Mail, MapPin, ExternalLink, Code, Database, Globe, Book } from 'lucide-react';
import img from './img/yo.jpg'

const About = () => {



  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white ">
        <div className="container mx-auto px-6 py-20">
          <div className="flex flex-col w-full md:flex-row items-center justify-center md:space-x-20">
            <div className='flex flex-col items-center '>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Juan Guirao</h1>
              <h2 className="text-2xl md:text-3xl text-blue-200 mb-6">Web Developer</h2>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  <a href="mailto:juanpguirao@gmail.com" className="hover:text-blue-200">
                    juanpguirao@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  <span>Mendoza, Argentina</span>
                </div>
              </div>
            </div>
            <div className="flex items-center border border-black justify-center mt-8 md:mt-0">
              <div className=' h-[12rem] w-[12rem] rounded-full overflow-hidden border border-sky-300 border-opacity-20 shadow-md shadow-slate-400'>
                <img
                  src={img} // Reemplaza con tu logo o imagen
                  alt="Logo"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="flex items-center justify-center flex-col  container mx-auto px-6">
          <h2 className=" text-3xl font-bold mb-8 text-gray-800">Sobre mí</h2>
          <p className=" text-lg text-gray-600 max-w-3xl text-center ">
            Apasionado por la tecnología y el desarrollo, busco innovar aplicando tecnologías modernas
            de forma eficiente. Valoro el trabajo en equipo, la adaptación al cambio y el aprendizaje
            continuo para mantenerme actualizado y ofrecer soluciones de calidad.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Aptitudes</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <SkillCard icon={<Code />} title="Frontend" skills={['JavaScript', 'TypeScript', 'HTML 5', 'Tailwind']} />
            <SkillCard icon={<Database />} title="Backend" skills={['NodeJS', 'NextJS']} />
            <SkillCard icon={<Globe />} title="Idiomas" skills={['Español (Nativo)', 'English (Medio)']} />
            <SkillCard icon={<Book />} title="Otros" skills={['Networking', 'Data Base']} />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id='experience' className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Experiencia Profesional</h2>
          <div className="space-y-8">
            <ExperienceCard
              title="Administrador Informático"
              company="Salud Natural - USA"
              period="2021 - PRESENTE"
              description="Realicé actualizaciones y desarrollé sitios web utilizando WordPress, PHP y técnicas de SEO. Gestioné dominios y hosting con proveedores como BlueHost, Hostinger y AWS."
            />
            <ExperienceCard
              title="Desarrollador de páginas WEB"
              company="KEY WORD MKT"
              period="2020 - PRESENTE"
              description="Realicé y desarrollé sitios web utilizando WordPress y diversos plugins, implementando sistemas de usuarios, listas de productos diferenciadas, pasarelas de pago y diseños web personalizados."
            />
            <ExperienceCard
              title="Proyectos Personales"
              company="Web Developer"
              period="2019 - 2021"
              description="Realicé proyectos propios implementando diferentes tecnologías como TypeScript, ReactJS, Tailwind, entre otras."
            />
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section  className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Educación</h2>
          <div className="space-y-6">
            <EducationCard
              title="Full Stack MERN"
              institution="CODER HOUSE"
              period="2022 - 2023"
            />
            <EducationCard
              title="Desarrollo Web"
              institution="Self-taught"
              period="2023 - 2024"
              description="TypeScript, Tailwind"
            />
            <EducationCard
              title="Programación"
              institution="Self-taught"
              period="2020 - 2022"
              description="Programacion Orientada a objetos, Java, HTML y más"
            />
          </div>
        </div>
      </section>
  
    </div>
  );
};
interface skillProps {
  icon: ReactNode;
  title: string;
  skills: string[];
}

const SkillCard = ({ icon, title, skills }: skillProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex flex-row items-center justify-center gap-2 mb-4 border-b-2">
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
interface experienceCard {
  title: string;
  company: string;
  period: string;
  description: string;
}

const ExperienceCard = ({ title, company, period, description }: experienceCard) => {
  return (
    <div className="border-l-4 border-blue-500 pl-4">
      <h3 className="font-bold text-xl text-gray-800">{title}</h3>
      <div className="text-blue-600 font-medium">{company}</div>
      <div className="text-gray-500 text-sm mb-2">{period}</div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

interface educationCard {
  title: string;
  institution: string;
  period: string;
  description?: string;
}
const EducationCard = ({ title, institution, period, description }: educationCard) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="font-bold text-xl text-gray-800">{title}</h3>
      <div className="text-blue-600 font-medium">{institution}</div>
      <div className="text-gray-500 text-sm mb-2">{period}</div>
      {description && <p className="text-gray-600">{description}</p>}
    </div>
  );
};

export default About;