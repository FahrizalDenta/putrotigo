import { useState } from 'react';
import { ShoppingCart, Check } from 'lucide-react';

export default function MenuCard({ item, onAdd }) {
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    onAdd(item);
    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 1500);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl overflow-hidden group transition-all duration-300 hover:-translate-y-1 border border-gray-100">

      {/* IMAGE */}
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={item.image}
          alt={item.nama}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          onError={(e) => {
            e.target.src =
              'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600';
          }}
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* CATEGORY */}
        <span className="absolute top-3 left-3 bg-[#CC0000] text-white text-xs font-semibold px-3 py-1 rounded-full">
          {item.category}
        </span>
      </div>

      {/* CONTENT */}
      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#CC0000] transition-colors duration-200">
          {item.nama}
        </h3>

        {/* DESKRIPSI (optional kalau ada) */}
        {item.deskripsi && (
          <p className="text-gray-500 text-sm mb-4 line-clamp-2">
            {item.deskripsi}
          </p>
        )}

        {/* PRICE + BUTTON */}
        <div className="flex items-center justify-between">
          <span className="text-[#CC0000] font-extrabold text-xl">
            {formatPrice(item.harga)}
          </span>

          <button
            onClick={handleAdd}
            className={`flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${
              added
                ? 'bg-green-500 text-white scale-95'
                : 'bg-[#CC0000] hover:bg-[#990000] text-white hover:scale-105'
            }`}
          >
            {added ? (
              <>
                <Check className="w-4 h-4" />
                Ditambah
              </>
            ) : (
              <>
                <ShoppingCart className="w-4 h-4" />
                Pesan
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}