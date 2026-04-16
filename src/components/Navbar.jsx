import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Menu as MenuIcon, X } from 'lucide-react';

const Navbar = ({ navLinks, cart, isMenuOpen, setIsMenuOpen, onOpenCart }) => {
  const [scrolled, setScrolled] = useState(false);

  // DETEKSI SCROLL
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Hitung total kuantitas barang di keranjang
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-lg shadow-sm border-b border-gray-100'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* LOGO */}
        <motion.div 
          whileHover={{ scale: 1.05 }} 
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <img
            src="/images/logo.png"
            alt="Logo Putro Tigo"
            className="h-12 w-auto object-contain"
          />
        </motion.div>

        {/* MENU DESKTOP */}
        <div
            className={`hidden md:flex space-x-10 font-bold text-base tracking-wider absolute left-1/2 -translate-x-1/2 transition-colors ${
                scrolled ? 'text-gray-500' : 'text-white'
            }`}
        >
            {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative group hover:text-[#FFCC00] transition"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FFCC00] transition-all group-hover:w-full"></span>
                </a>
            ))}
        </div>

        {/* ICON SHOPPING CART */}
        <div className="flex items-center gap-5">
          <div
            onClick={onOpenCart} // 🔥 INI ADALAH KUNCINYA
            className={`relative p-2.5 rounded-full cursor-pointer transition-all border ${
              scrolled
                ? 'bg-gray-50 border-gray-100 hover:bg-[#FFCC00]/20'
                : 'bg-white/10 border-white/20 hover:bg-white/20'
            }`}
          >
            <ShoppingCart
              size={22}
              className={scrolled ? 'text-gray-700' : 'text-white'}
            />

            {totalItems > 0 && (
              <motion.span 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-1 -right-1 bg-[#CC0000] text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center border-2 border-white"
              >
                {totalItems}
              </motion.span>
            )}
          </div>

          {/* MOBILE BUTTON */}
          <button
            className={scrolled ? 'text-gray-800 md:hidden' : 'text-white md:hidden'}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <MenuIcon size={28} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;