import { X, Trash2, Plus, Minus, ShoppingBag, MessageCircle } from 'lucide-react';
import { useState } from 'react';

export default function Cart({ isOpen, onClose, items, total, onUpdateQuantity, onRemove, onClear }) {
  // State untuk memilih admin mana yang akan dihubungi
  const [selectedAdmin, setSelectedAdmin] = useState("admin1");

  const admins = [
    { id: "admin1", name: "Admin 1", wa: "628159516543" },
    { id: "admin2", name: "Admin 2", wa: "6282116552216" }
  ];

  const formatPrice = (price) =>
    new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(price);

  // Fungsi untuk scroll ke menu dan tutup keranjang
  const handleLihatMenu = () => {
    onClose(); // Tutup sidebar
    const menuSection = document.getElementById('menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const buildWhatsAppMessage = () => {
    const lines = items.map(
      item => `- ${item.nama} x${item.quantity} = ${formatPrice(item.harga * item.quantity)}`
    );
    const message = `Halo Warung Padang Putro Tigo!\nSaya ingin memesan:\n\n${lines.join('\n')}\n\nTotal: ${formatPrice(total)}\n\nTerima kasih!`;
    return encodeURIComponent(message);
  };

  const handleOrder = () => {
    const admin = admins.find(a => a.id === selectedAdmin);
    const url = `https://wa.me/${admin.wa}?text=${buildWhatsAppMessage()}`;
    window.open(url, '_blank');
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-[100] backdrop-blur-sm" onClick={onClose} />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-white z-[110] shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 bg-[#990000] text-white">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#FFCC00]" />
            <h2 className="text-lg font-bold">Keranjang Pesanan</h2>
          </div>
          <button onClick={onClose} className="hover:rotate-90 transition-transform duration-300">
            <X className="w-7 h-7" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-gray-400 px-6">
            <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-4">
               <ShoppingBag className="w-10 h-10 text-gray-200" />
            </div>
            <p className="text-lg font-bold text-gray-900">Wah, keranjang kosong!</p>
            <p className="text-sm text-center mt-2">Perut lapar butuh diisi, yuk pilih menu favoritmu dulu.</p>
            <button 
              onClick={handleLihatMenu} 
              className="mt-8 bg-[#CC0000] text-white px-10 py-3 rounded-full font-black shadow-lg shadow-red-100 transform active:scale-95 transition-all"
            >
              LIHAT MENU
            </button>
          </div>
        ) : (
          <>
            {/* List Item */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
              {items.map(item => (
                <div key={item.id} className="flex gap-3 bg-white rounded-2xl p-3 border border-gray-100 shadow-sm">
                  <img src={item.image} alt={item.nama} className="w-16 h-16 object-cover rounded-xl" />
                  <div className="flex-1 text-left">
                    <p className="font-bold text-gray-900 text-sm leading-tight">{item.nama}</p>
                    <p className="text-[#CC0000] font-black text-xs mt-1">{formatPrice(item.harga)}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)} className="w-7 h-7 rounded-lg bg-gray-100 text-gray-600 flex items-center justify-center hover:bg-red-100 hover:text-red-600 transition-colors"><Minus size={14}/></button>
                      <span className="font-black text-sm w-4 text-center">{item.quantity}</span>
                      <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)} className="w-7 h-7 rounded-lg bg-gray-100 text-gray-600 flex items-center justify-center hover:bg-green-100 hover:text-green-600 transition-colors"><Plus size={14}/></button>
                    </div>
                  </div>
                  <button onClick={() => onRemove(item.id)} className="text-gray-300 hover:text-red-500 self-start p-1 transition-colors"><Trash2 size={18}/></button>
                </div>
              ))}
            </div>

            {/* Footer Keranjang */}
            <div className="p-6 border-t bg-gray-50 rounded-t-[2rem] shadow-[0_-10px_30px_rgba(0,0,0,0.03)]">
              
              {/* FITUR PILIH ADMIN */}
              <div className="mb-6 text-left">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1 mb-2 block">Kirim Pesanan Ke:</label>
                <div className="grid grid-cols-2 gap-2">
                  {admins.map((admin) => (
                    <button
                      key={admin.id}
                      onClick={() => setSelectedAdmin(admin.id)}
                      className={`py-2 px-3 rounded-xl text-[11px] font-bold border-2 transition-all ${
                        selectedAdmin === admin.id 
                        ? 'border-[#CC0000] bg-red-50 text-[#CC0000]' 
                        : 'border-white bg-white text-gray-400'
                      }`}
                    >
                      {admin.name}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex justify-between items-center mb-4">
                <span className="font-bold text-gray-500 uppercase text-xs tracking-widest">Estimasi Total</span>
                <span className="text-2xl font-black text-[#CC0000]">{formatPrice(total)}</span>
              </div>

              <button 
                onClick={handleOrder} 
                className="w-full bg-green-500 hover:bg-green-600 text-white font-black py-4 rounded-2xl shadow-xl shadow-green-100 flex items-center justify-center gap-3 transition-all transform active:scale-95 mb-4"
              >
                <MessageCircle size={20} /> PESAN VIA WHATSAPP
              </button>
              
              <button onClick={onClear} className="w-full text-gray-400 text-[10px] font-black uppercase tracking-[0.2em] hover:text-red-600 transition-colors">Kosongkan Keranjang</button>
            </div>
          </>
        )}
      </div>
    </>
  );
}