import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../css/Navbar.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 992);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 992);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="Navbar">
      <div className="flex items-center justify-between mt-5 text-2xl">
        <div className="w-1/5">
          <i className="fa-solid fa-code"></i>
        </div>
        <div className="w-3/5">
          {!isMobile && (
            <ul className="flex justify-between">
              <li className="cursor-pointer hover:text-green-600 hover:underline">
                <Link to="home" smooth={true} duration={500}>
                  Home
                </Link>
              </li>
              <li className="cursor-pointer hover:text-green-600 hover:underline">
                <Link to="about" smooth={true} duration={500}>
                  About
                </Link>
              </li>
              <li className="cursor-pointer hover:text-green-600 hover:underline">
                <Link to="skills" smooth={true} duration={500}>
                  Skills
                </Link>
              </li>
              <li className="cursor-pointer hover:text-green-600 hover:underline">
                <Link to="projects" smooth={true} duration={500}>
                  Projects
                </Link>
              </li>
            </ul>
          )}
        </div>
        <div className="w-1/5 text-right flex justify-end items-center">
          {isMobile && (
            <button onClick={toggleMenu} className="text-3xl">
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          )}
          {!isMobile && (
            <a href="mailto:sitanshupathania5234@gmail.com" target="_blank" rel="noopener noreferrer">
              <button className="p-3 border-2 border-green-600 rounded-2xl hover:bg-green-600">
                Contact
              </button>
            </a>
          )}
        </div>
      </div>
      {menuOpen && isMobile && (
        <div className="fixed top-0 right-0 w-3/4 h-full bg-white shadow-lg z-50 p-5">
          <div className="flex justify-end mb-5">
            <button onClick={toggleMenu} className="text-3xl">
              <FaTimes />
            </button>
          </div>
          <ul className="flex flex-col items-center space-y-5">
            <li className="cursor-pointer hover:text-green-600 hover:underline">
              <Link to="home" smooth={true} duration={500} onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li className="cursor-pointer hover:text-green-600 hover:underline">
              <Link to="about" smooth={true} duration={500} onClick={toggleMenu}>
                About
              </Link>
            </li>
            <li className="cursor-pointer hover:text-green-600 hover:underline">
              <Link to="skills" smooth={true} duration={500} onClick={toggleMenu}>
                Skills
              </Link>
            </li>
            <li className="cursor-pointer hover:text-green-600 hover:underline">
              <Link to="projects" smooth={true} duration={500} onClick={toggleMenu}>
                Projects
              </Link>
            </li>
            <li className="cursor-pointer hover:text-green-600 hover:underline">
              <a href="mailto:sitanshupathania5234@gmail.com" target="_blank" rel="noopener noreferrer" onClick={toggleMenu}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
