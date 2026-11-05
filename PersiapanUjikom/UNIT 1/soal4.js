var etalase = [
  { id: 1, barang: "T-shirt", harga: 80000 },
  { id: 2, barang: "Jeans", harga: 90000 },
  { id: 3, barang: "Tote Bag", harga: 20000 },
  { id: 4, barang: "School Bag", harga: 25000 },
  { id: 5, barang: "Shoes", harga: 120000 },
];

function urutkanHargaMurah(dataEtalase) {
  return [...dataEtalase].sort((a, b) => a.harga - b.harga);
}

console.log(urutkanHargaMurah(etalase));

function cariBarang(dataEtalase, kataKunci) {
    return dataEtalase.filter(item => item.barang.toLowerCase().includes(kataKunci.toLowerCase()));
}

console.log(cariBarang(etalase, "bag"));