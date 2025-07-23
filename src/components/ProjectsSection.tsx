import React from 'react';

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 bg-black bg-opacity-30">
      <h3 className="text-3xl font-bold text-center mb-12">Featured Projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-6">
        <div className="bg-white bg-opacity-10 p-6 rounded-lg hover:shadow-lg transition">
          <img src="https://via.placeholder.com/400x200" className="rounded mb-4" alt="Project" />
          <h4 className="text-xl font-semibold">E-Commerce Dashboard</h4>
          <p className="text-gray-300 mb-2">A dashboard for tracking sales, inventory, and customer metrics.</p>
          <div className="space-x-4">
            <a href="#" className="text-pink-400 underline">Live Demo</a>
            <a href="#" className="text-pink-400 underline">GitHub</a>
          </div>
        </div>
      </div>
      <div className="text-center mt-10">
        <a href="#" className="bg-purple-600 px-6 py-2 rounded-lg">View All Projects</a>
      </div>
    </section>
  );
};

export default ProjectsSection;
