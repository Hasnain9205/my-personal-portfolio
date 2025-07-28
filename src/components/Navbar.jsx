import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  // Reusable class for underline animation
  const navItemClass =
    "relative hover:text-yellow-400 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-yellow-400 after:w-0 hover:after:w-full after:transition-all after:duration-300 font-semibold";

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0b1e39] text-white z-50 shadow-md">
      <div className="max-w-full mx-auto px-6 md:px-20 py-3 flex justify-between items-center">
        <div className="text-3xl font-bold text-amber-400">Portfolio</div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6">
          <li>
            <a href="#home" className={navItemClass}>
              Home
            </a>
          </li>
          <li>
            <a href="#experience" className={navItemClass}>
              Experience
            </a>
          </li>
          <li>
            <a href="#skills" className={navItemClass}>
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className={navItemClass}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className={navItemClass}>
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col gap-4 items-center bg-[#0b1e39] py-4">
          <li>
            <a href="#home" onClick={toggleMenu} className={navItemClass}>
              Home
            </a>
          </li>
          <li>
            <a href="#experience" onClick={toggleMenu} className={navItemClass}>
              Experience
            </a>
          </li>
          <li>
            <a href="#skills" onClick={toggleMenu} className={navItemClass}>
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" onClick={toggleMenu} className={navItemClass}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" onClick={toggleMenu} className={navItemClass}>
              Contact
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}
