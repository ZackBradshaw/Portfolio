import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-6">
      <div className="container mx-auto text-center">
        <p>
          © {new Date().getFullYear()} ZackBradshaw. All rights reserved.
        </p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="https://github.com/ZackBradshaw?tab=repositories" target="_blank" rel="noopener noreferrer">
            <img src="/images/github.png" alt="Github" className="h-6 w-6" />
          </a>
          <a href="https://www.linkedin.com/in/zack-bradshaw-54898b18a/" target="_blank" rel="noopener noreferrer">
            <img src="/images/linkedin.png" alt="Linkedin" className="h-6 w-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;