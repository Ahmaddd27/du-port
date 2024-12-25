import React from 'react';
import { Link } from 'react-router-dom'; // Mengimpor Link dari react-router-dom
import { FaInstagram, FaGithub } from 'react-icons/fa'; // Mengimpor ikon dari react-icons
import logo from '../images/doscom.jpg'; // Ganti dengan path gambar logo Anda

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white mb-6"> {/* Menambahkan margin bawah */}
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-10 mr-2" /> {/* Menambahkan logo */}
        <span className="text-2xl font-extralight text-violet-500">Portofolio</span>
      </div>
      <ul className="flex space-x-10 font-extrabold ">
        <li><Link to="/" className="hover:text-indigo-500">Home</Link></li>
        <li><Link to="/about" className="hover:text-indigo-500">About</Link></li>
        <li><Link to="/projects" className="hover:text-indigo-500">Projects</Link></li>
        <li><Link to="/contact" className="hover:text-indigo-500">Contact</Link></li>
      </ul>
      <div className="flex space-x-4">
        <a href="https://www.instagram.com/ahmdrffiji" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
          <FaInstagram size={24} />
        </a>
        <a href="https://github.com/Ahmad27" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
          <FaGithub size={24} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;