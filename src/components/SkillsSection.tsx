import React from 'react';

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 bg-gray-900 text-center">
      <h3 className="text-3xl font-bold mb-12">Skills & Technologies</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        <div className="bg-white bg-opacity-10 p-6 rounded-lg hover:shadow-xl transition">
          <h4 className="text-xl font-semibold mb-2">Frontend</h4>
          <p className="text-gray-300">HTML, CSS, JavaScript, React, Tailwind CSS</p>
        </div>
        <div className="bg-white bg-opacity-10 p-6 rounded-lg hover:shadow-xl transition">
          <h4 className="text-xl font-semibold mb-2">Backend</h4>
          <p className="text-gray-300">Node.js, Express, MongoDB, PostgreSQL</p>
        </div>
        <div className="bg-white bg-opacity-10 p-6 rounded-lg hover:shadow-xl transition">
          <h4 className="text-xl font-semibold mb-2">Dev Tools</h4>
          <p className="text-gray-300">Git, Docker, Firebase, Vercel</p>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
