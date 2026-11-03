<?php
// Sertakan file fungsi utama
include_once 'bug-nilai.php';

// Data Uji Kasus 1
$dataTest1 = ['Sari' => 90, 'Budi' => 68, 'Citra' => 82, 'Dewi' => 70];
$avg1 = hitungRataRata($dataTest1);
$lulus1 = hitungLulus($dataTest1);

// Sesuaikan target dengan hasil perhitungan matematis yang benar (Rata-rata: 77.5, Lulus: 3)
echo "<h3>Hasil Pengujian Otomatis (Lab 4)</h3>";
echo "Rata-rata aktual: " . $avg1 . " (Target: 77.5) -> " . ($avg1 == 77.5 ? "<b>PASS</b>" : "<b>FAIL</b>") . "<br>";
echo "Jumlah lulus aktual: " . $lulus1 . " (Target: 3) -> " . ($lulus1 == 3 ? "<b>PASS</b>" : "<b>FAIL</b>") . "<br>";

if ($avg1 == 77.5 && $lulus1 == 3) {
    echo "<h3 style='color: green;'>Semua Kasus Uji Lab 4 Berhasil Dilewati (PASS)!</h3>";
} else {
    echo "<h3 style='color: red;'>Pengujian Gagal.</h3>";
}
?>