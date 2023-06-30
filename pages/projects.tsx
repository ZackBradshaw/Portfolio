import { GetStaticProps } from 'next';
import { ProjectCard } from '../components/ProjectCard';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { getProjects } from '../lib/github';

interface Project {
  name: string;
  description: string;
  html_url: string;
}

interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <div className="dark:bg-gray-800 dark:text-white min-h-screen">
      <Header />
      <main className="container mx-auto p-4">
        <h1 className="text-4xl mb-4">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const projects = await getProjects('ZackBradshaw');
  return {
    props: {
      projects,
    },
  };
};