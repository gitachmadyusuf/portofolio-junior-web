var keranjang = [
    {id: 1, barang:'T-shirt', harga: 80000, banyak:2},
    {id: 2, barang: 'Jeans', harga: 90000, banyak: 1}
];

function hitungTotal(dataKeranjang) {
    return dataKeranjang.reduce((total, item) => total + (item.harga * item.banyak), 0);
}

console.log("Total belanja: ", hitungTotal(keranjang));