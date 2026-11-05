/**
 * Fungsi untuk mengecek bilangan genap dari 1 sampai batas tertentu
 * @param {Number} max - Batas angka maksimal.
 * @returns {Array} Array yang berisi daftar angka genap
 */

function getEvenNumbers(max) {
  let evenNumbers = [];

  for (let i = 1; i <= max; i++) {
    if (i % 2 === 0) {
      evenNumbers.push(i);
    }
  }
  return evenNumbers;
}

console.log("Daftar angka genap: ", getEvenNumbers(10));
