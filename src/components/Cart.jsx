import { X, Trash2, Plus, Minus, ShoppingBag, MessageCircle, MapPin, User } from 'lucide-react';
import { useState } from 'react';

export default function Cart({ isOpen, onClose, items, total, onUpdateQuantity, onRemove, onClear }) {
  // State Identitas & Pengiriman
  const [customerName, setCustomerName] = useState("");
  const [address, setAddress] = useState("");
  const [region, setRegion] = useState("Semarang Timur");
  const [selectedAdmin, setSelectedAdmin] = useState("admin1");

  // Konfigurasi Admin & Ongkir
  const admins = [
    { id: "admin1", name: "Admin 1", wa: "628159516543" },
    { id: "admin2", name: "Admin 2", wa: "6282116552216" }
  ];

  const regionRates = {
    "Semarang Timur": 0,
    "Semarang Tengah": 5000,
    "Semarang Barat": 10000,
    "Semarang Selatan": 10000,
  };

  const shippingCost = regionRates[region] || 0;
  const grandTotal = total + shippingCost;

  const formatPrice = (price) =>
    new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(price);

  const handleLihatMenu = () => {
    onClose();
    const menuSection = document.getElementById('menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const buildWhatsAppMessage = () => {
    const lines = items.map(
      item => `- ${item.nama} x${item.quantity} = ${formatPrice(item.harga * item.quantity)}`
    );

    const message = `*PESANAN BARU - PUTRO TIGO* 🍱\n` +
      `----------------------------------\n` +
      `*Nama:* ${customerName || '-'}\n` +
      `*Alamat:* ${address || '-'}\n` +
      `*Wilayah:* ${region}\n` +
      `----------------------------------\n` +
      `*Detail Pesanan:*\n${lines.join('\n')}\n\n` +
      `*Total Menu:* ${formatPrice(total)}\n` +
      `*Ongkos Kirim:* ${formatPrice(shippingCost)}\n` +
      `*TOTAL BAYAR:* ${formatPrice(grandTotal)}\n` +
      `----------------------------------\n` +
      `Mohon segera diproses, terima kasih!`;

    return encodeURIComponent(message);
  };

  const handleOrder = () => {
    if (!customerName || !address) {
      alert("Mohon lengkapi Nama dan Alamat terlebih dahulu!");
      return;
    }
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
        <div className="flex items-center justify-between px-6 py-5 bg-[#990000] text-white shadow-lg">
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
            <p className="text-sm text-center mt-2 text-gray-500">Pilih menu favoritmu di halaman utama.</p>
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
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-gray-50/50">
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

            {/* Form Data & Footer */}
            <div className="p-6 border-t bg-white rounded-t-[2.5rem] shadow-[0_-15px_40px_rgba(0,0,0,0.05)]">
              
              {/* INPUT IDENTITAS */}
              <div className="space-y-3 mb-6">
                <div className="relative">
                  <User className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                  <input 
                    type="text" 
                    placeholder="Nama Anda"
                    className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-100 rounded-xl text-sm focus:ring-2 focus:ring-red-500 outline-none transition-all"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                  />
                </div>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                  <textarea 
                    placeholder="Alamat Pengiriman (Jalan, No Rumah, RT/RW)"
                    className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-100 rounded-xl text-sm focus:ring-2 focus:ring-red-500 outline-none transition-all h-16"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
                
                {/* SELECT WILAYAH */}
                <div className="bg-gray-50 rounded-xl px-3 py-2 border border-gray-100">
                  <label className="text-[10px] font-black uppercase text-gray-400 block mb-1">Wilayah / Ongkir</label>
                  <select 
                    className="w-full bg-transparent border-none text-sm font-bold focus:ring-0 outline-none cursor-pointer"
                    value={region}
                    onChange={(e) => setRegion(e.target.value)}
                  >
                    {Object.keys(regionRates).map(r => (
                      <option key={r} value={r}>{r} ({regionRates[r] === 0 ? 'Gratis' : `+${formatPrice(regionRates[r])}`})</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* PILIH ADMIN */}
              <div className="mb-6">
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Kirim Pesanan Ke:</p>
                <div className="grid grid-cols-2 gap-2">
                  {admins.map((admin) => (
                    <button
                      key={admin.id}
                      onClick={() => setSelectedAdmin(admin.id)}
                      className={`py-2 px-3 rounded-xl text-[11px] font-bold border-2 transition-all ${
                        selectedAdmin === admin.id 
                        ? 'border-[#CC0000] bg-red-50 text-[#CC0000]' 
                        : 'border-white bg-white text-gray-400 shadow-sm'
                      }`}
                    >
                      {admin.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* RINGKASAN HARGA */}
              <div className="space-y-1 mb-5">
                <div className="flex justify-between text-xs font-medium text-gray-400">
                  <span>Subtotal Menu</span>
                  <span>{formatPrice(total)}</span>
                </div>
                <div className="flex justify-between text-xs font-medium text-gray-400">
                  <span>Ongkos Kirim ({region})</span>
                  <span className={shippingCost === 0 ? 'text-green-500 font-bold' : ''}>
                    {shippingCost === 0 ? 'GRATIS' : formatPrice(shippingCost)}
                  </span>
                </div>
                <div className="flex justify-between items-center pt-2 mt-2 border-t border-dashed border-gray-200">
                  <span className="font-bold text-gray-600 text-sm">TOTAL BAYAR</span>
                  <span className="text-2xl font-black text-[#CC0000]">{formatPrice(grandTotal)}</span>
                </div>
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