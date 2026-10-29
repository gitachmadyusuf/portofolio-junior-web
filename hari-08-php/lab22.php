<?php 
declare(strict_types=1); 
 
$peserta = [ 
    ['nama' => 'Sari', 'kelas' => 'Web', 'nilai' => 90], 
    ['nama' => 'Budi', 'kelas' => 'Web', 'nilai' => 68], 
    ['nama' => 'Citra', 'kelas' => 'Data', 'nilai' => 82], 
]; 
// hitungRataRata(array $daftar):
// float dan cariTertinggi(array $daftar): ?array
function hitungRataRata(array $daftar): float {
    $total = array_sum(array_column($daftar, 'nilai'));
    return $total / count($daftar);
}

function cariTertinggi(array $daftar): ?array {
    $maxNilai = max(array_column($daftar, 'nilai'));
    $result = array_filter($daftar, function($item) use ($maxNilai) {
        return $item['nilai'] === $maxNilai;
    });
    return array_values($result)[0] ?? null;
}

echo '<h3>Hasil Fungsi</h3>';
$rataRata = hitungRataRata($peserta);
echo '<p>Rata-rata nilai: ' . $rataRata . '</p>';
$tertinggi = cariTertinggi($peserta);
if ($tertinggi) {
    echo '<p>Peserta dengan nilai tertinggi: ' .$tertinggi['nama']. ' adalah ' . $tertinggi['nilai']. '</p>';
} else {
    echo '<p>Tidak ada peserta.</p>';
}

// filterLulus(array $peserta, int $batas =70): array dengan array_filter.
function filterNilaiLebihDari70(array $daftar): array {
    $result = array_filter($daftar, function($item) {
        return $item['nilai'] > 70;
    });
    // array_values digunakan untuk mereset index array menjadi berurutan dari o
    return array_values($result);
}

$hasilFilter = filterNilaiLebihDari70($peserta);
// print_r($hasilFilter);

foreach ($hasilFilter as $siswa) {
    echo "Nama: " . $siswa['nama'] . " -Nilai: " . $siswa['nilai'] . "<br>";
}