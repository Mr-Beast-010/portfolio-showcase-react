import React from 'react';

const Navigation = () => {
  return (
    <header className="bg-black bg-opacity-30 fixed w-full z-50 shadow-md">
      <nav className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-xl font-bold">Romio</h1>
        <ul className="flex space-x-6 text-sm font-medium">
          <li><a href="#home" className="hover:text-pink-400">Home</a></li>
          <li><a href="#about" className="hover:text-pink-400">About</a></li>
          <li><a href="#skills" className="hover:text-pink-400">Skills</a></li>
          <li><a href="#projects" className="hover:text-pink-400">Projects</a></li>
          <li><a href="#contact" className="hover:text-pink-400">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
