import { tambah, bagi } from './operasi.js';

//Contoh penggunaan
console.log(`Hasil tambah 5 + 3 = ${tambah(5, 3)}`); // Output: 8
console.log(`Hasil bagi 10 / 2 = ${bagi(10, 2)}`);     // Output: 5

//menampilkan di html
alert(`Hasil penjumlahan 5 + 3 = ${tambah(5, 3)}`);
alert(`Hasil pembagian 10 / 2 = ${bagi(10, 2)}`)