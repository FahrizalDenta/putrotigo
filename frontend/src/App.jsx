import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';

// Import Komponen dari folder components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Tentang from './components/Tentang';
import Galeri from './components/Galeri';
import Layanan from './components/Layanan';
import Menu from './components/Menu';
import Kontak from './components/Kontak'; 
import Footer from './components/Footer';
import Cart from './components/Cart'; 
const App = () => {
  // --- STATE MANAGEMENT ---
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]); // Berisi daftar item di keranjang
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Untuk menu mobile (hamburger)
  const [isCartOpen, setIsCartOpen] = useState(false); // Untuk membuka sidebar keranjang

  // --- DATA NAVIGASI ---
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Tentang', href: '#tentang' },
    { name: 'Galeri', href: '#galeri' },
    { name: 'Layanan', href: '#layanan' },
    { name: 'Menu', href: '#menu' },
    { name: 'Kontak', href: '#kontak' },
  ];

  // --- FETCH DATA DARI BACKEND ---
  useEffect(() => {
    fetch('http://localhost:5001/api/menu')
      .then((res) => res.json())
      .then((data) => {
        setMenu(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Gagal mengambil data menu:", err);
        setLoading(false);
      });
  }, []);

  // --- LOGIKA KERANJANG (CART) ---

  // 1. Tambah ke Keranjang
  const addToCart = (product) => {
    setCart((prevCart) => {
      const isExist = prevCart.find((item) => item.id === product.id);
      if (isExist) {
        // Jika sudah ada, tambah jumlahnya saja
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      // Jika belum ada, tambah item baru dengan quantity 1
      // Kita gunakan 'nama' dan 'harga' agar sesuai dengan data backend kamu
      return [...prevCart, { ...product, quantity: 1 }];
    });
    // Opsional: Langsung buka keranjang saat klik pesan
    // setIsCartOpen(true);
  };

  // 2. Update Jumlah (Tambah/Kurang)
  const onUpdateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) {
      onRemove(id);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // 3. Hapus Satu Item
  const onRemove = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // 4. Hapus Semua (Clear)
  const onClear = () => setCart([]);

  // 5. Hitung Total Harga
  const total = cart.reduce((acc, item) => acc + item.harga * item.quantity, 0);

  // --- NAVIGASI SCROLL ---
  const scrollToMenu = () => {
    document.querySelector('#menu')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollDown = () => {
    document.querySelector('#tentang')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="font-sans bg-[#FCFAFB] text-gray-900 scroll-smooth">
      
      {/* 1. NAVBAR */}
      <Navbar 
        navLinks={navLinks} 
        cart={cart} 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen}
        onOpenCart={() => setIsCartOpen(true)} // <-- Kirim fungsi ini ke Navbar
      />

      {/* 2. MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-[76px] w-full bg-white z-40 border-b md:hidden shadow-xl"
          >
            <div className="flex flex-col p-6 space-y-4 font-bold text-left">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMenuOpen(false)} 
                  className="text-lg py-2 border-b border-gray-50 uppercase hover:text-[#CC0000]"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3. SECTIONS */}
      <main>
        <Hero scrollToMenu={scrollToMenu} scrollDown={scrollDown} />
        <Tentang />
        <Galeri />
        <Layanan />
        <Menu 
          menu={menu} 
          loading={loading} 
          addToCart={addToCart} 
        />
      </main>
      <Kontak />
      {/* 4. FOOTER */}
      <Footer />

      {/* 5. SIDEBAR KERANJANG (CART) */}
      <Cart 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        items={cart}
        total={total}
        onUpdateQuantity={onUpdateQuantity}
        onRemove={onRemove}
        onClear={onClear}
      />

    </div>
  );
};

export default App;