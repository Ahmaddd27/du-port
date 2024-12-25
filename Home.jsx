import React from 'react';
import { Link } from 'react-router-dom'; // Impor Link dari react-router-dom
import homeImage from '../images/doscom.jpg'; // Ganti dengan path gambar Anda

const Home = () => {
  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold text-center">Welcome to My Portfolio</h1>
      <p className="mt-2 text-lg text-center">Ini adalah halaman utama dari portfolio saya.</p>
      <div className="flex justify-center mt-4">
        <img 
          src={homeImage} 
          alt="Deskripsi Gambar Home" 
          className="rounded shadow-lg h-80 w-80" 
        />
      </div>
      <div className="flex justify-center mt-6">
        <Link to="/about">
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
            Go to About
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;