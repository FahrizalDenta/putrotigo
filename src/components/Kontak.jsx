import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, MessageSquare, Clock, Send, Video, ChevronRight } from 'lucide-react'; 

const Kontak = () => {
  const contactInfo = [
    {
      icon: <Clock size={22} />,
      title: "Jam Buka",
      desc: "Senin – Jumat (10.00 – 20.00)",
      color: "bg-blue-50 text-blue-600"
    },
    {
      icon: <MapPin size={22} />,
      title: "Lokasi",
      desc: "Malangsari, Semarang (Samping Home Coffee)",
      link: "https://maps.google.com", 
      color: "bg-red-50 text-red-600"
    },
    {
      icon: <Video size={22} />,
      title: "TikTok",
      desc: "@padangmurahputrotigo",
      link: "https://tiktok.com/@padangmurahputrotigo",
      color: "bg-gray-100 text-gray-900"
    }
  ];

  const waNumbers = [
    { label: "Admin 1", tel: "0815-9516-543", link: "https://wa.me/628159516543" },
    { label: "Admin 2", tel: "0821-1655-2216", link: "https://wa.me/6282116552216" }
  ];

  return (
    <section id="kontak" className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-10 items-start">    
          
          {/* SISI KIRI: INFO & WA (LEBIH PADAT) */}
          <div className="lg:col-span-6">
            <div className="text-left mb-8">
              <h2 className="text-4xl font-black text-gray-900">Kontak <span className="text-[#CC0000]">Kami</span></h2>
            </div>

            {/* INFO LIST VERTIKAL RINGKAS */}
            <div className="space-y-4 mb-8">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.link || "#"}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-[#FCFAFB] border border-gray-50 group transition-all hover:bg-white hover:shadow-lg hover:shadow-yellow-100/40"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all group-hover:bg-[#FFCC00] group-hover:text-[#990000] ${item.color}`}>
                    {item.icon}
                  </div>
                  <div className="text-left">
                    <h5 className="font-bold text-gray-900 text-sm leading-tight">{item.title}</h5>
                    <p className="text-gray-500 text-xs mt-0.5">{item.desc}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* WHATSAPP LAYOUT SEBELUMNYA */}
            <div className="bg-[#EFFFF4] border border-green-100 p-8 rounded-[2.5rem] relative overflow-hidden group">
              <div className="absolute right-[-20px] top-[-20px] text-green-200/50 group-hover:scale-110 transition-transform">
                <Phone size={120} />
              </div>
              
              <div className="relative z-10 text-left">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white">
                    <Phone size={20} />
                  </div>
                  <h5 className="font-black text-green-900 uppercase tracking-widest text-sm">Layanan WhatsApp</h5>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  {waNumbers.map((wa, i) => (
                    <a key={i} href={wa.link} className="flex flex-col group/wa">
                      <span className="text-[10px] font-black text-green-700/60 uppercase mb-1">{wa.label}</span>
                      <span className="text-xl font-black text-green-900">{wa.tel}</span>
                      <span className="text-xs font-bold text-green-600 mt-2 flex items-center gap-1 group-hover/wa:gap-3 transition-all">
                        Hubungi Admin <ChevronRight size={14}/>
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* SISI KANAN: FORMULIR */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="lg:col-span-6 bg-white p-8 md:p-10 rounded-[3rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] border border-gray-50 text-left relative"
          >
            <div className="absolute -top-5 -right-5 w-16 h-16 bg-[#FFCC00] rounded-2xl flex items-center justify-center -rotate-12 shadow-lg text-[#990000]">
              <MessageSquare size={28} />
            </div>

            <h4 className="text-2xl font-black mb-2">Kirim Pesan</h4>
            <p className="text-gray-500 mb-8 text-sm">Saran atau pesanan catering? Kami siap membantu.</p>

            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Nama</label>
                  <input type="text" className="w-full bg-gray-50 border-none rounded-xl px-5 py-3.5 focus:ring-2 focus:ring-[#FFCC00] outline-none transition-all" placeholder="Nama Anda" />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">WhatsApp</label>
                  <input type="text" className="w-full bg-gray-50 border-none rounded-xl px-5 py-3.5 focus:ring-2 focus:ring-[#FFCC00] outline-none transition-all" placeholder="0812..." />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Pesan</label>
                <textarea rows="4" className="w-full bg-gray-50 border-none rounded-xl px-5 py-3.5 focus:ring-2 focus:ring-[#FFCC00] outline-none resize-none transition-all" placeholder="Tuliskan pesan Anda..."></textarea>
              </div>
              <button className="w-full bg-[#CC0000] hover:bg-[#FFCC00] hover:text-[#990000] text-white font-black py-4 rounded-xl shadow-lg transition-all transform hover:scale-[1.01] active:scale-95 flex items-center justify-center gap-3">
                Kirim Sekarang <Send size={18} />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Kontak;