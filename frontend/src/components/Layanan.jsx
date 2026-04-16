import React from 'react';
import { Utensils, Truck, Award, Star, ShieldCheck, Heart, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Layanan = () => {
  const services = [
    { 
      icon: <Utensils size={36}/>, 
      title: 'Dine In / Makan Sini', 
      desc: 'Konsep nasi ambil sepuasnya dengan suasana warung yang bersih dan nyaman',
      tag: 'Terpopuler' 
    },
    { 
      icon: <Truck size={36}/>, 
      title: 'Delivery Order', 
      desc: 'Layanan antar pesanan gratis dan cepat khusus untuk wilayah Semarang Timur, Selain itu bisa di komunikasikan lewat chat Whatsapp',
      tag: 'Cepat' 
    },
    { 
      icon: <Award size={36}/>, 
      title: 'Catering Acara', 
      desc: 'Solusi nasi box higienis untuk kantor, pengajian, hingga hajatan besar dengan menu custom.',
      tag: 'Higienis' 
    }
  ];

  return (
    <section id="layanan" className="py-32 bg-white relative overflow-hidden">
      {/* DEKORASI BACKGROUND */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-red-50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 opacity-60"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-50 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 opacity-60"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-[#CC0000]/10 text-[#CC0000] px-4 py-2 rounded-full text-xs font-black uppercase tracking-[0.2em] mb-6"
          >
            <Star size={14} fill="currentColor" /> Pelayanan Terbaik
          </motion.div>
          <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
            Komitmen Kami Memberikan <span className="text-[#CC0000]">Kepuasan</span> Maksimal
          </h3>
          <p className="text-gray-500 font-medium text-lg">
            Bukan sekadar warung makan biasa, kami mengutamakan kebersihan, kecepatan, dan kenyamanan Anda.
          </p>
        </div>

        {/* GRID LAYANAN */}
        <div className="grid md:grid-cols-3 gap-10">
          {services.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -15 }}
              className="relative bg-white p-12 rounded-[3rem] border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.03)] group hover:shadow-2xl hover:shadow-red-100/50 transition-all duration-500"
            >
              {/* TAG POJOK */}
              <div className="absolute top-6 right-8 text-[10px] font-black uppercase tracking-widest text-gray-300 group-hover:text-[#CC0000] transition-colors">
                {item.tag}
              </div>

              {/* ICON DENGAN LINGKARAN GRADASI */}
              <div className="relative w-24 h-24 mb-10 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-[#CC0000] to-red-800 rounded-[2rem] rotate-6 group-hover:rotate-12 transition-transform duration-500 opacity-10 group-hover:opacity-100"></div>
                <div className="relative w-full h-full bg-white rounded-[2rem] flex items-center justify-center text-[#CC0000] shadow-sm border border-gray-50 group-hover:bg-transparent group-hover:text-white transition-all duration-500">
                  {item.icon}
                </div>
              </div>

              <h5 className="text-2xl font-black mb-4 text-gray-900">{item.title}</h5>
              <p className="text-gray-500 font-medium leading-relaxed mb-8">
                {item.desc}
              </p>

              {/* GARIS DEKORATIF */}
              <div className="w-12 h-1 bg-gray-100 group-hover:w-full group-hover:bg-[#CC0000] transition-all duration-500 mx-auto rounded-full"></div>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM BADGE */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-24 flex flex-wrap justify-center gap-10 opacity-40 grayscale hover:grayscale-0 transition-all duration-500"
        >
          <div className="flex items-center gap-2 font-bold text-gray-600 uppercase tracking-tighter text-sm">
            <ShieldCheck size={20} /> Higienis Terjamin
          </div>
          <div className="flex items-center gap-2 font-bold text-gray-600 uppercase tracking-tighter text-sm">
            <Heart size={20} /> Dimasak Dengan Cinta
          </div>
          <div className="flex items-center gap-2 font-bold text-gray-600 uppercase tracking-tighter text-sm">
            <CheckCircle size={20} /> Tanpa Pengawet
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Layanan;