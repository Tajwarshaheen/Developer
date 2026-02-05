import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='fixed w-full bg-blue-950 z-50 shadow-md'>
      <div className='max-w-6xl mx-auto px-6 py-4 flex justify-between items-center'>
        {/* Logo */}
        <h1 className='text-xl font-bold text-white'>MY Portfolio</h1>

        {/* Desktop Links */}
        <div className='space-x-6 hidden md:flex'>
          <a href="#home" className='text-white hover:text-blue-400 transition-colors'>Home</a>
          <a href="#about" className='text-white hover:text-blue-400 transition-colors'>About</a>
          <a href="#skills" className='text-white hover:text-blue-400 transition-colors'>Skills</a>
          <a href="#projects" className='text-white hover:text-blue-400 transition-colors'>Projects</a>
          <a href="#contact" className='text-white hover:text-blue-400 transition-colors'>Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <div className='md:hidden'>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className='text-white focus:outline-none cursor-pointer text-2xl'
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className='md:hidden bg-blue-900 px-6 py-4 flex flex-col space-y-4'>
          <a href="#home" onClick={() => setIsOpen(false)} className='text-white border-b border-blue-800 pb-2'>Home</a>
          <a href="#about" onClick={() => setIsOpen(false)} className='text-white border-b border-blue-800 pb-2'>About</a>
          <a href="#skills" onClick={() => setIsOpen(false)} className='text-white border-b border-blue-800 pb-2'>Skills</a>
          <a href="#projects" onClick={() => setIsOpen(false)} className='text-white border-b border-blue-800 pb-2'>Projects</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className='text-white'>Contact</a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;