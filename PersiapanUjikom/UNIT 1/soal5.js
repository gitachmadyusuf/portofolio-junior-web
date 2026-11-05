var etalase = [
  { id: 1, barang: "T-shirt", harga: 80000 },
  { id: 2, barang: "Jeans", harga: 90000 },
  { id: 3, barang: "Tote Bag", harga: 20000 },
  { id: 4, barang: "School Bag", harga: 25000 },
  { id: 5, barang: "Shoes", harga: 120000 },
];

function cariBarangTermurah(dataEtalase) {
  if (dataEtalase.length === 0) return null;
  return dataEtalase.reduce((termurah, item) => (item.harga < termurah.harga) ? item : termurah);
}

console.log(cariBarangTermurah(etalase));