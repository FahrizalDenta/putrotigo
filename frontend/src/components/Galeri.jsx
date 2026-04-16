import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, PlayCircle } from 'lucide-react';

const Galeri = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const assets = [
    { type: 'image', url: "/images/fotodepan.png", title: "Foto Warung" },
    { type: 'image', url: "/images/foto1.png", title: "Foto Warung" },
    { type: 'image', url: "/images/foto2.png", title: "Foto Warung" },
    { type: 'image', url: "/images/foto3.png", title: "Foto Warung" },
    { type: 'image', url: "/images/foto4.png", title: "Foto Warung" },
    { type: 'image', url: "/images/brosurputrotigo.png", title: "Brosur Kami" },
    { type: 'video', url: "/videos/video1.mp4", title: "Suasana Warung" },
    { type: 'video', url: "/videos/video2.mp4", title: "Suasana Warung" },
    { type: 'video', url: "/videos/video3.mp4", title: "Suasana Warung" },
    { type: 'video', url: "/videos/video4.mp4", title: "Suasana Warung" },
    { type: 'video', url: "/videos/video5.mp4", title: "Suasana Warung" },
  ];

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0,
      scale: 0.95
    }),
    center: { zIndex: 1, x: 0, opacity: 1, scale: 1 },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 500 : -500,
      opacity: 0,
      scale: 0.95
    })
  };

  const next = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev === assets.length - 1 ? 0 : prev + 1));
  };

  const prev = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev === 0 ? assets.length - 1 : prev - 1));
  };

  return (
    <section id="galeri" className="py-16 md:py-32 bg-[#FCFAFB] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[800px] h-[300px] md:h-[800px] bg-red-100/30 rounded-full blur-[80px] md:blur-[120px] -z-10"></div>

      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="max-w-3xl mx-auto mb-10 md:mb-16">
          <h4 className="text-[#CC0000] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-xs md:text-sm mb-3">Dokumentasi Visual</h4>
          <h3 className="text-3xl md:text-5xl font-black text-gray-900 mb-4 md:mb-6">Cerita Dalam <span className="text-[#CC0000]">Setiap Rasa</span></h3>
          <p className="text-gray-500 font-medium text-sm md:text-base">Lihat lebih dekat suasana warung dan kualitas pilihan kami.</p>
        </div>

        <div className="relative group max-w-6xl mx-auto h-[400px] sm:h-[500px] md:h-[650px]">
          
          <div className="relative w-full h-full rounded-[2rem] md:rounded-[3.5rem] overflow-hidden shadow-2xl border-[6px] md:border-[12px] border-white bg-gray-900">
            
            {/* AMBIENT BACKGROUND */}
            <AnimatePresence initial={false}>
              <motion.img
                key={`bg-${currentSlide}`}
                src={assets[currentSlide].type === 'image' ? assets[currentSlide].url : ''}
                className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-20 scale-110"
                alt=""
              />
            </AnimatePresence>

            {/* KONTEN UTAMA */}
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentSlide}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.3 } }}
                className="absolute inset-0 flex items-center justify-center p-2 md:p-10"
              >
                {assets[currentSlide].type === 'image' ? (
                  <img 
                    src={assets[currentSlide].url} 
                    className="max-w-full max-h-full object-contain rounded-lg md:rounded-2xl shadow-xl" 
                    alt="Gallery" 
                  />
                ) : (
                  <div className="relative w-full h-full flex items-center justify-center">
                    <video autoPlay muted loop playsInline className="max-w-full max-h-full rounded-lg md:rounded-2xl">
                      <source src={assets[currentSlide].url} type="video/mp4" />
                    </video>
                    <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md p-1.5 rounded-full text-white">
                       <PlayCircle size={18} />
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            {/* INFO & NAVIGASI (RESPONSIVE FIX) */}
            {/* Di HP: Info pindah ke pojok kiri atas, Tombol di samping tengah */}
            {/* Di Desktop: Tetap seperti desain awal */}
            
            {/* INFO BOX */}
            <div className="absolute top-4 left-4 md:top-auto md:bottom-10 md:left-10 z-20">
              <div className="bg-black/40 md:bg-black/20 backdrop-blur-xl px-4 py-2 md:px-8 md:py-4 rounded-xl md:rounded-[2rem] border border-white/20 text-white flex items-center gap-3 md:gap-4">
                <div className="w-7 h-7 md:w-10 md:h-10 bg-[#FFCC00] rounded-full flex items-center justify-center text-[#990000] font-black text-xs md:text-base">
                  {currentSlide + 1}
                </div>
                <div className="text-left">
                  <p className="hidden md:block text-[10px] font-black uppercase tracking-widest text-white/60 leading-none mb-1">Kategori Visual</p>
                  <p className="font-bold text-xs md:text-lg leading-none">{assets[currentSlide].title}</p>
                </div>
              </div>
            </div>

            {/* BUTTONS (Pindah ke tengah samping di HP) */}
            <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between items-center z-30 pointer-events-none md:inset-x-auto md:bottom-10 md:right-10 md:top-auto md:translate-y-0 md:justify-end md:gap-4">
              <button 
                onClick={prev}
                className="pointer-events-auto w-10 h-10 md:w-14 md:h-14 bg-white/20 md:bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-[#CC0000] transition-all"
              >
                <ChevronLeft size={20} md:size={28} />
              </button>
              <button 
                onClick={next}
                className="pointer-events-auto w-10 h-10 md:w-14 md:h-14 bg-white/20 md:bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-[#CC0000] transition-all"
              >
                <ChevronRight size={20} md:size={28} />
              </button>
            </div>
          </div>

          {/* INDICATOR DOTS (Lebih kecil di HP) */}
          <div className="flex justify-center gap-1.5 md:gap-3 mt-6 md:mt-10 overflow-x-auto py-2">
            {assets.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentSlide ? 1 : -1);
                  setCurrentSlide(index);
                }}
                className={`h-1.5 md:h-2 rounded-full transition-all duration-500 shrink-0 ${
                  currentSlide === index ? 'w-8 md:w-12 bg-[#CC0000]' : 'w-1.5 md:w-2 bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Galeri;