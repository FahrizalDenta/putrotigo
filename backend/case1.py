fruits = [
    {"fruitId": 1, "fruitName": 'Apel', "fruitType": 'IMPORT', "stock": 10},
    {"fruitId": 2, "fruitName": 'Kurma', "fruitType": 'IMPORT', "stock": 20},
    {"fruitId": 3, "fruitName": 'apel', "fruitType": 'IMPORT', "stock": 50},
    {"fruitId": 4, "fruitName": 'Manggis', "fruitType": 'LOCAL', "stock": 100},
    {"fruitId": 5, "fruitName": 'Jeruk Bali', "fruitType": 'LOCAL', "stock": 10},
    {"fruitId": 5, "fruitName": 'KURMA', "fruitType": 'IMPORT', "stock": 20},
    {"fruitId": 5, "fruitName": 'Salak', "fruitType": 'LOCAL', "stock": 150}
]

def solve_case_1():
    # 1. Buah apa saja yang dimiliki Andi? (Case-insensitive unique names)
    # Menggunakan set untuk menghindari duplikasi nama buah
    buah_anda = sorted(list(set(f['fruitName'].lower() for f in fruits)))
    print(f"1. Buah yang dimiliki Andi: {', '.join(buah_anda)}")

    # 2 & 3. Pemisahan wadah berdasarkan tipe dan total stok
    containers = {}
    for f in fruits:
        f_type = f["fruitType"]
        if f_type not in containers:
            containers[f_type] = {"items": set(), "total_stock": 0}
        
        containers[f_type]["items"].add(f["fruitName"].lower())
        containers[f_type]["total_stock"] += f["stock"]

    print(f"\n2. Jumlah wadah yang dibutuhkan: {len(containers)}")
    for t, data in containers.items():
        print(f"   - Wadah {t}: {', '.join(data['items'])}")

    print("\n3. Total stock di masing-masing wadah:")
    for t, data in containers.items():
        print(f"   - Total Wadah {t}: {data['total_stock']}")

    # 4. Komentar terkait kasus di atas
    print("\n4. Komentar:")
    print("   - Terdapat inkonsistensi penulisan nama buah (huruf besar/kecil seperti 'Apel' dan 'apel').")
    print("   - Ada duplikasi fruitId nomor 5 untuk buah yang berbeda (Jeruk Bali, KURMA, Salak).")
    print("   - Sebaiknya fruitId bersifat unik untuk setiap jenis buah.")

if __name__ == "__main__":
    solve_case_1()