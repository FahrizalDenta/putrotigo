import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Camera, // Pengganti Instagram yang lebih stabil
  MessageCircle, 
  Home, 
  Utensils, 
  Truck, 
  Award,
  ChevronRight,
  Globe
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0F172A] text-white pt-24 pb-12 text-left border-t border-white/5 font-sans">
      <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* KOLOM 1: PROFIL & SOSMED */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="bg-[#CC0000] p-2 rounded-lg text-[#FFCC00] font-black text-xl">PT</div>
              <h1 className="text-xl font-bold tracking-tighter uppercase">PUTRO TIGO</h1>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Putro Tigo — Warung Padang terpercaya dengan konsep nasi ambil sendiri. Menyajikan cita rasa otentik untuk Semarang.
            </p>
            <div className="flex gap-3">
              {[
                { icon: <Camera size={18} />, link: "#" }, // Ikon Kamera untuk IG
                { icon: <MessageCircle size={18} />, link: "#" }, // Untuk TikTok/WA
                { icon: <Mail size={18} />, link: "#" }
              ].map((social, index) => (
                <a 
                  key={index} 
                  href={social.link} 
                  className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-[#FFCC00] hover:text-[#990000] transition-all duration-300 border border-white/10"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* KOLOM 2: TAUTAN CEPAT */}
          <div>
            <h5 className="text-lg font-bold mb-8">Tautan Cepat</h5>
            <ul className="space-y-4 text-gray-400 text-sm">
              {['Home', 'Tentang Kami', 'Layanan', 'Menu Favorit', 'Kontak'].map((item) => (
                <li key={item} className="group">
                  <a href={`#${item.toLowerCase().replace(' ', '')}`} className="hover:text-white flex items-center gap-2 transition-colors">
                    <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform text-gray-600" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* KOLOM 3: LAYANAN KAMI */}
          <div>
            <h5 className="text-lg font-bold mb-8">Layanan Kami</h5>
            <ul className="space-y-4 text-gray-400 text-sm">
              {[
                { icon: <Utensils size={16} />, text: 'Makan di Tempat' },
                { icon: <Truck size={16} />, text: 'Layanan Antar' },
                { icon: <Award size={16} />, text: 'Catering Acara' },
              ].map((service, index) => (
                <li key={index} className="flex items-center gap-3 group hover:text-white transition-colors cursor-pointer">
                  <span className="text-white/20 group-hover:text-[#FFCC00] transition-colors">
                    {service.icon}
                  </span>
                  {service.text}
                </li>
              ))}
            </ul>
          </div>

          {/* KOLOM 4: HUBUNGI KAMI */}
          <div>
            <h5 className="text-lg font-bold mb-8">Hubungi Kami</h5>
            <div className="space-y-6 text-sm">
              <div className="flex gap-4 text-gray-400">
                <MapPin size={20} className="text-[#CC0000] shrink-0" />
                <p>
                  Jl. Malangsari, Kec Pedurungan<br />
                  Sebelah Home Coffee<br />
                  Kota Semarang, Jawa Tengah
                </p>
              </div>
              <div className="flex gap-4 text-gray-400">
                <Phone size={20} className="text-[#CC0000] shrink-0" />
                <div className="space-y-1">
                  <p>+62 815 9516 543</p>
                  <p>+62 821 1655 2216</p>
                </div>
              </div>
              <div className="flex gap-4 text-gray-400">
                <Mail size={20} className="text-[#CC0000] shrink-0" />
                <p>padangmurahputrotigo@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* BARIS TERAKHIR: COPYRIGHT */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-gray-500 font-bold uppercase tracking-widest">
          <p>© 2026 Putro Tigo Semarang. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;