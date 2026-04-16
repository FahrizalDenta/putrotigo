import React from 'react';
import { MapPin, Star, Clock, CheckCircle } from 'lucide-react';

const Tentang = () => {
  const features = [
    'Nasi ambil sendiri dengan pilihan lauk lengkap',
    'Sambal hijau segar dimasak setiap hari',
    'Daun singkong dan aneka kuah yang khas',
    'Bahan-bahan pilihan tanpa pengawet',
  ];

  return (
    <section id="tentang" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
              <img src="/images/fotodepan.png" alt="Putro Tigo" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="text-left">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
              Tentang Kami <br /> <span className="text-[#CC0000]">Putro Tigo</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              <strong className="text-gray-900">Putro Tigo</strong> menyajikan masakan rumahan yang lezat dengan konsep <em>nasi ambil sendiri</em>. Tersedia berbagai pilihan lauk yang menggugah selera dan di lengkapi dengan sambal hijau, daun singkong dan aneka kuah. Setiap hidangan siap memberikan pengalaman makan yang puas dan mengenyangkan.
            </p>
            <ul className="space-y-3 mb-8">
              {features.map((f, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700 text-left">
                  <CheckCircle className="w-5 h-5 text-[#CC0000] mt-1 flex-shrink-0" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tentang;