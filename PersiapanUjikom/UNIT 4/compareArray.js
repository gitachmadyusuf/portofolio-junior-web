function compareArrays(array1, array2) {
  // 1. Cek apakah jumlah elemennya (panjang array) sama
  if (array1.length !== array2.length) {
    return false;
  }

  // 2. Jika panjangnya sama, cek isi tiap elemen satu per satu
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }

  // Jika semua pengecekan lolos, berarti kedua array sama
  return true;
}

// Uji Coba:
console.log(compareArrays([1, 2, 3], [1, 2, 3])); // Output: true
console.log(compareArrays([1, 2], [1, 2, 3])); // Output: false
console.log(compareArrays(["a", "b"], ["a", "c"])); // Output: false
