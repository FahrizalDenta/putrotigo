import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero = ({ scrollToMenu, scrollDown }) => (
  <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/fototentang1.png')"}}/>
    <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-red-900/50 to-black/60 backdrop-blur-[2px]" />
    <div className="relative z-10 text-center px-4 max-w-5xl mx-auto text-white">
      <div className="inline-flex items-center gap-2 bg-yellow-400/20 border border-yellow-400/40 text-yellow-300 text-sm font-semibold px-5 py-2.5 rounded-full mb-6 backdrop-blur-sm">
        <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
        Buka Hari Senin - Jumat, Pukul 10.00 – 20.00 
      </div>
      <h1 className="text-5xl md:text-8xl font-extrabold mb-6 leading-tight">
        Warung Padang <br /> <span className="bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">Putro Tigo</span>  
      </h1>
      <p className="text-xl md:text-2xl text-red-100 mb-12">Warung padang dengan konsep nasi ambil sendiri di Semarang yang memiliki rasa yang enak dan harga yang murah.</p>
      <div className="flex flex-col sm:flex-row gap-5 justify-center">
        <button onClick={scrollToMenu} className="bg-[#FFCC00] text-[#990000] font-bold text-xl px-10 py-5 rounded-full hover:scale-105 transition-all">Lihat Menu Favorit</button>
        <a href="https://wa.me/6281234567890" className="bg-white/10 border border-white/40 text-white font-semibold text-xl px-10 py-5 rounded-full backdrop-blur-sm hover:scale-105 transition-all">Hubungi Kami</a>
      </div>
    </div>
    <button onClick={scrollDown} className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 hover:text-[#FFCC00] animate-bounce">
      <ChevronDown size={32} />
    </button>
  </section>
);

export default Hero;