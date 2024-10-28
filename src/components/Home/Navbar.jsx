import { useState } from "react";
import { navLinks, logo, menuIcon } from "../../Constants/Navbar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-100 p-5 border-b-2 flex flex-col items-center">
      
      <a href="/" className="mb-2">
        {" "}
        
        <img src={logo.src} alt={logo.alt} className={logo.height} loading="lazy"  />
      </a>

      
      <button
        onClick={toggleMenu}
        className="md:hidden flex items-center p-2 rounded focus:outline-none"
        aria-label="Toggle Navigation"
      >
        <svg
          className={`${menuIcon.width} ${menuIcon.height}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={menuIcon.path}
          />
        </svg>
      </button>

      
      <ul
        className={`flex-col md:flex md:flex-row md:space-x-8 ${
          isOpen ? "flex" : "hidden"
        } md:flex`}
      >
        {navLinks.map((link, index) => (
          <li key={index}>
            <a
              href={link.href}
              style={{ color: link.color }} 
              className="hover:underline"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
