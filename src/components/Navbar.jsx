import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false); // Close menu on link click

  return (
    <nav className="fixed w-full top-0 bg-green-900/80 backdrop-blur-md text-green-100 px-6 py-4 flex justify-between items-center z-50">
      <h1 className="text-xl font-bold">Horseman</h1>

      {/* Desktop Links */}
      <div className="hidden md:flex space-x-6">
        <Link to="/" onClick={closeMenu} className="hover:text-green-300">Home</Link>
        <Link to="/photography" onClick={closeMenu} className="hover:text-green-300">Photography</Link>
        <Link to="/digital-design" onClick={closeMenu} className="hover:text-green-300">Digital Design</Link>
        <Link to="/website-building" onClick={closeMenu} className="hover:text-green-300">Websites</Link>
        <Link to="/travel-plans" onClick={closeMenu} className="hover:text-green-300">Travel Plans</Link>
        <Link to="/contact" onClick={closeMenu} className="hover:text-green-300">Contact</Link>
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="focus:outline-none text-green-100 text-2xl">
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-green-900/95 flex flex-col items-center py-4 space-y-4 md:hidden">
          <Link to="/" onClick={closeMenu} className="hover:text-green-300">Home</Link>
          <Link to="/photography" onClick={closeMenu} className="hover:text-green-300">Photography</Link>
          <Link to="/digital-design" onClick={closeMenu} className="hover:text-green-300">Digital Design</Link>
          <Link to="/website-building" onClick={closeMenu} className="hover:text-green-300">Websites</Link>
          <Link to="/travel-plans" onClick={closeMenu} className="hover:text-green-300">Travel Plans</Link>
          <Link to="/contact" onClick={closeMenu} className="hover:text-green-300">Contact</Link>
        </div>
      )}
    </nav>
  );
}