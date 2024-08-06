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
        <h1 className='font-semibold text-xl my-2 mt-6'>Pelatihan Web Development oleh Jejak Pemuda Indonesia (JPI)</h1>
        <p className='text-lg my-4 md:text-md'>Pelatihan <i>web development</i> untuk pemuda Jawa Barat, kerja sama dari Jejak Pemuda Indonesia dengan Pemprov Jawa Barat (Dispora Jawa Barat).</p>
        <p className='text-lg my-4 md:text-md'>Food Wonder web app ini dibuat sebagai challenge dari  pelatihan </p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
