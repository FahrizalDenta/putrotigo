import React, { useState } from 'react';
import MenuCard from './MenuCard';

const CATEGORIES = ['Semua', 'Makanan', 'Minuman', 'Pelengkap'];

// DATA DISAMAKAN DENGAN server.js
const DUMMY_MENU = [
  { id: 1, nama: "Rendang", harga: 12000, category: "Makanan", image: "/images/rendang.png" },
  { id: 2, nama: "Koyor", harga: 11000, category: "Makanan", image: "/images/koyor.png" },
  { id: 3, nama: "Ayam Goreng", harga: 8000, category: "Makanan", image: "/images/ayamgoreng.png" },
  { id: 4, nama: "Ayam Gulai", harga: 8000, category: "Makanan", image: "/images/ayamgulai.png" },
  { id: 5, nama: "Ikan Lele", harga: 8000, category: "Makanan", image: "/images/lele.png" },
  { id: 6, nama: "Ikan Nila", harga: 8000, category: "Makanan", image: "/images/nila.png" },
  { id: 7, nama: "Telur Dadar", harga: 5000, category: "Makanan", image: "/images/telurdadar.png" },
  { id: 8, nama: "Telur Balado", harga: 5000, category: "Makanan", image: "/images/telurbalado.png" },
  { id: 9, nama: "Nasi Putih", harga: 5000, category: "Makanan", image: "/images/nasi.png" },
  { id: 10, nama: "Es Teh", harga: 3000, category: "Minuman", image: "/images/esteh.png" },
  { id: 11, nama: "Teh Panas", harga: 3000, category: "Minuman", image: "/images/tehpanas.png" },
  { id: 12, nama: "Es Jeruk", harga: 4000, category: "Minuman", image: "/images/esjeruk.png" },
  { id: 13, nama: "Jeruk Panas", harga: 4000, category: "Minuman", image: "/images/jerukpanas.png" },
  { id: 14, nama: "Es Air putih/ panas", harga: 2000, category: "Minuman", image: "/images/airputihes.png" },
  { id: 15, nama: "Aneka Kopi", harga: 5000, category: "Minuman", image: "/images/kopi.png" },
  { id: 16, nama: "Kerupuk", harga: 1000, category: "Pelengkap", image: "/images/kerupuk.png" },
  { id: 17, nama: "Tempe", harga: 3000, category: "Pelengkap", image: "/images/tempe.png" },
  { id: 18, nama: "Perkedel", harga: 5000, category: "Pelengkap", image: "/images/perkedel.png" }
];

const Menu = ({ menu, loading, addToCart }) => {
  const [activeCategory, setActiveCategory] = useState('Semua');

  // Gunakan data dari server jika ada, jika tidak (Vercel) gunakan DUMMY_MENU
  const displayMenu = menu && menu.length > 0 ? menu : DUMMY_MENU;

  const filtered =
    activeCategory === 'Semua'
      ? displayMenu
      : displayMenu.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 bg-[#FCFAFB]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 text-left md:text-center">
            Pilihan <span className="text-[#CC0000]">Menu Kami</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto text-left md:text-center">
            Semua masakan dibuat dengan rempah segar setiap hari untuk menjaga cita rasa autentik Minang.
          </p>
        </div>

        {/* CATEGORY SELECTOR */}
        <div className="flex flex-wrap justify-start md:justify-center gap-3 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-[#CC0000] text-white shadow-lg shadow-red-200'
                  : 'bg-white text-gray-600 border border-gray-100 hover:bg-red-50 hover:text-[#CC0000]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* GRID MENU */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filtered.map((item) => (
            <MenuCard
              key={item.id}
              item={item}
              onAdd={addToCart}
            />
          ))}
        </div>

        {/* EMPTY STATE */}
        {filtered.length === 0 && (
          <div className="text-center py-20 bg-white rounded-[3rem] border border-dashed border-gray-200">
            <p className="text-gray-400 text-lg font-medium">Menu belum tersedia.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Menu;