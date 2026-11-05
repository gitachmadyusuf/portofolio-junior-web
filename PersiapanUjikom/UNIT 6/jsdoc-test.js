/*
 * Menjumlahkan dua nilai pertama dan mengambil karakter/elemen pertama dari parameter ketiga.
 * @param {Number} a - Angka pertama yang akan dijumlahkan.
 * @param {Number} b - Angka kedua yang akan dijumlahkan.
 * @param {Array|String} c - Array atau string di mana elemen/karakter pertamanya akan diambil.
 * @returns {Number|String} Hasil penjumlahan a dan b ditambah elemen pertama dari c.
 */

function call(a, b, c) {
    return a + b + c[0]
}

console.log(call(5, 10, "Halo"));