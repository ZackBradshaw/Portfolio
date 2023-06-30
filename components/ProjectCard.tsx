import React from 'react';

interface ProjectProps {
  title: string;
  description: string;
  githubUrl: string;
}

const ProjectCard: React.FC<ProjectProps> = ({ title, description, githubUrl }) => {
  return (
    <div className="bg-gray-800 rounded-lg p-6">
      <h2 className="text-xl font-bold text-white">{title}</h2>
      <p className="text-gray-400">{description}</p>
      <a href={githubUrl} className="text-blue-500 hover:text-blue-400 mt-4 inline-block">
        View on Github
      </a>
    </div>
  );
};

export default ProjectCard;