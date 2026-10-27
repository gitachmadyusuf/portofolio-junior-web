const peserta = [
  { id: 1, nama: "Sari", kelas: "Web", nilai: 90, aktif: true },
  { id: 2, nama: "Budi", kelas: "Web", nilai: 68, aktif: true },
  { id: 3, nama: "Citra", kelas: "Data", nilai: 82, aktif: false },
  { id: 4, nama: "Dewi", kelas: "Web", nilai: 75, aktif: true },
  { id: 5, nama: "Eko", kelas: "Data", nilai: 88, aktif: true },
  { id: 6, nama: "Fajar", kelas: "Web", nilai: 55, aktif: false },
  { id: 7, nama: "Gita", kelas: "Data", nilai: 92, aktif: true },
  { id: 8, nama: "Hadi", kelas: "Web", nilai: 78, aktif: true },
  { id: 9, nama: "Intan", kelas: "Data", nilai: 64, aktif: false },
  { id: 10, nama: "Joko", kelas: "Web", nilai: 85, aktif: true },
];

//1. Tampilkan Peserta Aktif
function getPesertaAktif(data) {
    return data.filter(p => p.aktif);
}

console.log("---1. Peserta Aktif ---");
console.log(getPesertaAktif(peserta));

//2. Urutkan Nama (sort dengan localCompare) Tanpa mengubah Array Asli
//Karena method .sort() bawaan JavaScript mengubah array asli (mutating), kita harus menyalin array terlebih dahulu menggunakan spread operator [...data] atau toSorted(). Gunakan .localeCompare() di dalam fungsi pembanding untuk perbandingan string abjad yang akurat.
function urutkanBerdasarkanNama(data) {
    return [...data].sort((a, b) => a.nama.localeCompare(b.nama) );
}

console.log("--- 2. Urut Berdasarkan Nama ---");
console.log(urutkanBerdasarkanNama(peserta));

//3. Cari Peserta Berdasarkan id(find) dan Tangani Bila Tidak Ditemukan
function cariPesertaById(data, idCari) {
    const hasil = data.find(p=> p.id === idCari);
    if (!hasil) {
        return 'Peserta dengan ID ${idCari} tidak ditemukan.';
    }
    return hasil;
}

console.log("--- 3. Cari Peserta by ID ---");
console.log(cariPesertaById(peserta, 4));   //Ditemukan (Dewi)
console.log(cariPesertaById, 99);           //Tidak ditemukan

//4. Hitung Jumlah Peserta Per Kelas dengan Objek Penghitung
function hitungPesertaPerKelas(data) {
  const penghitung = {};
  data.forEach(p => {
    // Jika kelas sudah ada, tambahkan 1; jika belum, mulai dari 1
    penghitung[p.kelas] = (penghitung[p.kelas] || 0) + 1;
  });
  return penghitung;
}

console.log("--- 4. Jumlah Peserta Per Kelas ---");
console.log(hitungPesertaPerKelas(peserta));

//5. Tambah, Ubah, dan Hapus Peserta
function demoCRUD(data) {
  // Salin array asli agar data awal aman
  let dataKerja = [...data];

  // A. Tambah Peserta Baru (.push)
  dataKerja.push({ id: 11, nama: 'Kiki', kelas: 'Data', nilai: 80, aktif: true });
  console.log("Setelah Tambah:", dataKerja.length);

  // B. Ubah Nilai Peserta ID 2 (Budi) menjadi 95
  dataKerja = dataKerja.map(p => p.id === 2 ? { ...p, nilai: 95 } : p);
  console.log("Setelah Ubah (ID 2):", dataKerja.find(p => p.id === 2));

  // C. Hapus Peserta ID 3 (.filter)
  dataKerja = dataKerja.filter(p => p.id !== 3);
  console.log("Setelah Hapus (ID 3):", dataKerja.map(p => p.id));

  return dataKerja;
}

console.log("--- 5. Tambah, Ubah, Hapus ---");
demoCRUD(peserta);

//6.	Ubah array menjadi objek berindeks id (reduce) sehingga pencarian berdasar id menjadi O(1).
function indekskanById(data) {
    return data.reduce((akumulator, p) => {
        akumulator[p.id] = p;
        return akumulator;
    },    {})
}

console.log("--- 6. Ubah ke Objek Berindeks ID ---");
const pesertaObjek = indekskanById(peserta);
console.log(pesertaObjek);

//Contoh pencarian 0(1) yang sangat cepat:
console.log("Pencarian instan ID 5:", pesertaObjek[5]);