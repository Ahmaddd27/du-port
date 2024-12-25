import React from 'react';
import contactImage from '../images/yulia2.jpg'; // Ganti dengan path gambar Anda

const Contact = () => {
  return (
    <section className="min-h-screen p-6 bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center">
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-lg shadow-md"> {/* Mengubah max-w-md menjadi max-w-2xl */}
        <h2 className="text-3xl font-bold text-center mb-4">Kontak Saya</h2>
        <div className="text-center mb-4">
          <img 
            src={contactImage} 
            alt="Kontak" 
            className="rounded-lg mb-4 w-80 h-80 object-cover" // Menambahkan gambar
          />
          <p className="text-lg mb-2">
            <span className="font-bold">Email:</span> ahmad.ariffi@example.com
          </p>
          <p className="text-lg mb-4">
            <span className="font-bold">Nomor HP:</span> +62 812-3456-7890
          </p>
        </div>
        <div className="flex justify-center">
          <a
            href="mailto:ahmad.ariffi@example.com"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Kirim Email
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;