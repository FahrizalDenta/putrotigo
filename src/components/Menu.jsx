import React, { useState } from 'react';
import MenuCard from './MenuCard'; // pastikan path benar

const CATEGORIES = ['Semua', 'Makanan', 'Minuman', 'Pelengkap'];

const Menu = ({ menu, loading, addToCart }) => {
  const [activeCategory, setActiveCategory] = useState('Semua');

  const filtered =
    activeCategory === 'Semua'
      ? menu
      : menu.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 bg-[#FCFAFB]">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Pilihan <span className="text-[#CC0000]">Menu Kami</span>
          </h2>

          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Semua masakan dibuat dengan rempah segar setiap hari untuk menjaga cita rasa autentik.
          </p>
        </div>

        {/* CATEGORY */}
        {!loading && (
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full font-semibold text-sm transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-[#CC0000] text-white shadow-md shadow-red-200'
                    : 'bg-white text-gray-600 border border-gray-200 hover:bg-red-50 hover:text-[#CC0000]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {/* LOADING */}
        {loading ? (
          <div className="flex justify-center py-20">
            <div className="w-12 h-12 border-4 border-[#CC0000] border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <>
            {/* GRID MENU */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filtered.map((item) => (
                <MenuCard
                  key={item.id}
                  item={item}
                  onAdd={addToCart} // 🔥 penting
                />
              ))}
            </div>

            {/* EMPTY */}
            {filtered.length === 0 && (
              <p className="text-center text-gray-400 py-12 text-lg">
                Tidak ada menu dalam kategori ini.
              </p>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default Menu;