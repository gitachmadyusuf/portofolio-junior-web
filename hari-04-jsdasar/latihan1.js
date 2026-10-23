//deklarasi variabel
let nama = "Ahmad";
let umur = 25;
let tinggiBadan= 1.7;
let statusAktif = true;
console.log(nama, umur, tinggiBadan, statusAktif);
console.log(`Halo, ${nama}! umur saya ${umur} tahun`);
console.log(`Tinggi badan: ${tinggiBadan} m, Status aktif: ${statusAktif}`);

console.log(`\n`);

//cek tipe data
console.log('5 + 3:', '5' + 3, typeof ('5' + 3));
console.log('5 * 3:', '5' * 3, typeof ('5' * 3));
console.log('0.1 + 0.2:', 0.1 + 0.2, typeof (0.1 + 0.2));
console.log("Number('abc'):", Number('abc'), typeof Number('abc'));
console.log('10 / 3:', 10 / 3, typeof (10 / 3));
console.log('10 % 3:', 10 % 3, typeof (10 % 3));
console.log('2 ** 10:', 2 ** 10, typeof (2 ** 10));

console.log(`\n`);

//hitung luas dan keliling lingkaran
let jari = 10;
let luasLingkaran = Math.PI * jari ** 2;
console.log(`Luas lingkaran dengan jari-jari ${jari} adalah ${luasLingkaran}`);

let kelilingLingkaran = 2 * Math.PI * jari;
console.log(`Keliling lingkaran dengan jari-jari ${jari} adalah ${kelilingLingkaran}`)

console.log(`\n`);

//hitung detik dalam 1 hari
let detikPerHari = 24 * 60 * 60
console.log(`Jumlah detik per hari adalah ${detikPerHari}`);

console.log(`\n`);

//konversi suhu Celcius ke Fahrenheit
let suhuC= 100;
let suhuF = (suhuC * 9/5) + 32;
console.log(`${suhuC} derajat Celcius sama dengan ${suhuF} derajat Fahrenheit`);

//Grade Nilai A-B dan Tahun Kabisat atau bukan
// Program A: konversi nilai ke huruf
const nilai = Number(prompt('Nilai (0-100):')); let grade;
if (nilai >= 85) grade = 'A'; else if (nilai >= 70) grade = 'B'; else if (nilai >= 55) grade = 'C'; else grade = 'D'; console.log(`Grade: ${grade}`);
// Program B: tahun kabisat
const tahun = Number(prompt('Tahun:'));
const kabisat = (tahun % 4 === 0 && tahun % 100 !== 0) || tahun % 400 === 0; console.log(kabisat ? 'Kabisat' : 'Bukan kabisat');

console.log(`\n`);