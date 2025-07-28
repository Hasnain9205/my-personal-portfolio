import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0b1e39] text-white z-50 shadow-md">
      <div className="max-w-full mx-auto px-20 py-3 flex justify-between items-center">
        <div className="text-xl font-bold">Portfolio</div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6">
          <li>
            <a href="#home" className="hover:text-yellow-400">
              Home
            </a>
          </li>
          <li>
            <a href="#experience" className="hover:text-yellow-400">
              Experience
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-yellow-400">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-yellow-400">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-yellow-400">
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col gap-4 items-center bg-[#0b1e39] py-4">
          <li>
            <a href="#home" onClick={toggleMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#experience" onClick={toggleMenu}>
              Experience
            </a>
          </li>
          <li>
            <a href="#skills" onClick={toggleMenu}>
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" onClick={toggleMenu}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" onClick={toggleMenu}>
              Contact
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}
