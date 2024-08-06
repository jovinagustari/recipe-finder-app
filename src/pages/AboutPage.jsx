// RecipePage.jsx
import { ArrowLeft } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AboutPage = () => {
  const navigate = useNavigate();

  return (
    <div className='bg=[#faf9fb] flex-1 p-10 min-h-screen'>
      <div className='max-w-screen-lg mx-auto'>
        <ArrowLeft size={"32"} onClick={() => navigate(-1)} className='mb-4 bg-slate-200 rounded-lg cursor-pointer'/>
        <div><img 
            src="/JPI.jpg" 
            alt="pelatihan singkat web dev | JPI" 
            className='rounded-xl w-auto h-full shadow-lg object-cover opacity-0 transition-opacity duration-500'
            onLoad={(e) => {
                e.currentTarget.style.opacity = 1;
                e.currentTarget.previousElementSibling.style.display = "none";
            }} // onload ini untuk menghindari gambar yg sedang loading, jdi ketika gambar loading dia bakal ngasih skeleton baru kalau udah selesai ditampilin gambarnya
        /></div>
        <div className='text-center'>
            <h1 className='font-semibold text-xl my-2 mt-6'>Pelatihan Web Development oleh Jejak Pemuda Indonesia (JPI)</h1>
            <p className='text-base md:text- lg:mx-28'>"Pelatihan <i>web development</i> untuk pemuda Jawa Barat, kerja sama dari Jejak Pemuda Indonesia dengan Pemprov Jawa Barat (Dispora Jawa Barat)."</p>
        </div>
        <p className='text-lg mb-7 mt-5 text-justify md:text-base'>Selamat datang di Food Wonder, platform yang dirancang untuk membantu menemukan resep masakan dari berbagai macam kuliner internasional. Website ini merupakan hasil dari Challenge dalam pelatihan tersebut, di mana kami menggunakan Edamam API untuk menyediakan beragam pilihan resep yang bisa  coba di rumah. Dengan fitur pencarian dan kemampuan untuk menyimpan resep favorit, kami bertujuan untuk memberikan pengalaman memasak yang menyenangkan dan inspiratif.</p>
      </div>
    </div>
  );
};

export default AboutPage;
