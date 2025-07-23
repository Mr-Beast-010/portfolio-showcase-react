import React from 'react';

const HeroSection = () => {
  return (
    <section id="home" className="pt-32 pb-24 text-center">
      <h2 className="text-5xl md:text-6xl font-extrabold mb-4">Hi, I'm Romio</h2>
      <p className="text-xl md:text-2xl mb-6">Full Stack Developer & UI/UX Designer</p>
      <p className="max-w-xl mx-auto text-gray-300 mb-8">
        I create beautiful, functional, and user-centered digital experiences that make a difference.
      </p>
      <div className="flex justify-center space-x-4">
        <a href="#contact" className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-lg shadow transition">
          Hire Me
        </a>
        <a href="#projects" className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-2 rounded-lg transition">
          My Work
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
