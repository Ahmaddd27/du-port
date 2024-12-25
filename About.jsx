import React from 'react';
import profileImage from '../images/yulia2.jpg'; // Ganti dengan path gambar Anda

const About = () => {
  return (
    <section className="h-screen p-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white flex items-center justify-center">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-6">ABOUT ME</h2>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="flex justify-center mb-4 md:mb-0 md:mr-6">
            <img 
              src={profileImage} 
              alt="Profil" 
              className="rounded shadow-lg h-100 w-100" // Menggunakan object-cover
            />
          </div>
          <div className="md:text-left">
            <p className="text-lg mb-4">
            Halo, nama saya Ahmad Ariffi. Saat ini, saya sedang menempuh studi di jurusan Teknik Informatika di Universitas Dian Nuswantoro (UDINUS). Saya memiliki minat yang mendalam di bidang teknologi informasi, terutama dalam pengembangan perangkat lunak, kecerdasan buatan, dan data science.
            </p>
            <p className="text-lg">
            Selain itu, saya percaya bahwa pengembangan diri tidak hanya terbatas pada kemampuan teknis, tetapi juga penting untuk mengembangkan soft skills seperti komunikasi, manajemen waktu, dan kepemimpinan. Saya berharap, melalui studi di UDINUS, saya dapat lebih berkembang dan berkontribusi di dunia teknologi, serta siap menghadapi tantangan industri di masa depan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;