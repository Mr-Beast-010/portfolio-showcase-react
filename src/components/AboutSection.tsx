import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-black bg-opacity-20 text-center">
      <div className="max-w-4xl mx-auto">
        <img src="https://randomuser.me/api/portraits/men/75.jpg" className="mx-auto rounded-full w-32 mb-6" alt="Profile" />
        <h3 className="text-3xl font-bold mb-2">About Me</h3>
        <p className="mb-4 text-gray-300">Passionate Developer with 5+ Years of Experience</p>
        <p className="text-gray-400 mb-6">I specialize in React, Node.js, and modern stacks, with a keen eye for design and user experience.</p>
        <div className="flex justify-center space-x-10">
          <div>
            <p className="text-2xl font-bold">50+</p>
            <p className="text-sm">Projects</p>
          </div>
          <div>
            <p className="text-2xl font-bold">25+</p>
            <p className="text-sm">Clients</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
