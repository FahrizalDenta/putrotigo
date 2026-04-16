const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5001;

app.use(cors());
app.use(express.json());

// Data menu dummy
const menuData = [
  { 
    id: 1, 
    nama: "Rendang", 
    harga: 12000, 
    category: "Makanan", 
    image: "/images/rendang.png" 
  },
  { 
    id: 2, 
    nama: "Koyor", 
    harga: 11000, 
    category: "Makanan", 
    image: "/images/koyor.png" 
  },
  { 
    id: 3, 
    nama: "Ayam Goreng", 
    harga: 8000, 
    category: "Makanan", 
    image: "/images/ayamgoreng.png" 
  },
  { 
    id: 4, 
    nama: "Ayam Gulai", 
    harga: 8000, 
    category: "Makanan", 
    image: "/images/ayamgulai.png" 
  },
  { 
    id: 5, 
    nama: "Ikan Lele", 
    harga: 8000, 
    category: "Makanan", 
    image: "/images/lele.png" 
  },
  { 
    id: 6, 
    nama: "Ikan Nila", 
    harga: 8000, 
    category: "Makanan", 
    image: "/images/nila.png" 
  },
  { 
    id: 7, 
    nama: "Telur Dadar", 
    harga: 5000, 
    category: "Makanan", 
    image: "/images/telurdadar.png" 
  },
  { 
    id: 8, 
    nama: "Telur Balado", 
    harga: 5000, 
    category: "Makanan", 
    image: "/images/telurbalado.png" 
  },
  { 
    id: 9, 
    nama: "Nasi Putih", 
    harga: 5000, 
    category: "Makanan", 
    image: "/images/nasi.png" 
  },
  { 
    id: 10, 
    nama: "Es Teh", 
    harga: 3000, 
    category: "Minuman", 
    image: "/images/esteh.png" 
  },
  { 
    id: 11, 
    nama: "Teh Panas", 
    harga: 3000, 
    category: "Minuman", 
    image: "/images/tehpanas.png" 
  },
  { 
    id: 12, 
    nama: "Es Jeruk", 
    harga: 4000, 
    category: "Minuman", 
    image: "/images/esjeruk.png" 
  },
  { 
    id: 13, 
    nama: "Jeruk Panas", 
    harga: 4000, 
    category: "Minuman", 
    image: "/images/jerukpanas.png" 
  },
  { 
    id: 14, 
    nama: "Es Air putih/ panas", 
    harga: 2000, 
    category: "Minuman", 
    image: "/images/airputihes.png" 
  },
  { 
    id: 15, 
    nama: "Aneka Kopi", 
    harga: 5000, 
    category: "Minuman", 
    image: "/images/kopi.png" 
  },
  { 
    id: 16, 
    nama: "Kerupuk", 
    harga: 1000, 
    category: "Pelengkap", 
    image: "/images/kerupuk.png" 
  },
  { 
    id: 17, 
    nama: "Tempe", 
    harga: 3000, 
    category: "Pelengkap", 
    image: "/images/tempe.png" 
  },
  { 
    id: 18, 
    nama: "Perkedel", 
    harga: 5000, 
    category: "Pelengkap", 
    image: "/images/perkedel.png" 
  }
];

// Endpoint API
app.get('/api/menu', (req, res) => {
  res.json(menuData);
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Dapur Siap di http://127.0.0.1:${PORT}`);
});