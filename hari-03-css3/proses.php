<?php
// Pastikan halaman diakses melalui metode POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // 1. Tangkap dan amankan data teks dari form
    $nama   = htmlspecialchars($_POST['nama']);
    $email  = htmlspecialchars($_POST['email']);
    $hp     = htmlspecialchars($_POST['hp']);
    $lahir  = htmlspecialchars($_POST['lahir']);
    $jk     = isset($_POST['jk']) ? htmlspecialchars($_POST['jk']) : '';
    $kelas  = htmlspecialchars($_POST['kelas']);
    $alamat = htmlspecialchars($_POST['alamat']);

    // 2. Tangkap data checkbox (minit berupa array)
    $minat  = isset($_POST['minat']) ? $_POST['minat'] : [];
    $str_minat = !empty($minat) ? implode(", ", $minat) : "Tidak ada";

    // 3. Proses Upload Foto (jika ada file yang diunggah)
    $nama_foto = "Tidak ada foto yang diunggah";
    if (isset($_FILES['foto']) && $_FILES['foto']['error'] == 0) {
        $target_dir = "uploads/";

        // Buat folder uploads jika belum ada
        if (!is_dir($target_dir)) {
            mkdir($target_dir, 0777, true);
        }

        $file_name = basename($_FILES["foto"]["name"]);
        $target_file = $target_dir . time() . "_" . $file_name; // Tambahkan timestamp agar nama unik
        $imageFileType = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));

        // Validasi ekstensi file (hanya JPG, JPEG, PNG)
        $allowed_types = array("jpg", "jpeg", "png");
        if (in_array($imageFileType, $allowed_types)) {
            if (move_uploaded_file($_FILES["foto"]["tmp_name"], $target_file)) {
                $nama_foto = $target_file;
            } else {
                $nama_foto = "Gagal mengunggah foto.";
            }
        } else {
            $nama_foto = "Format file tidak didukung (harus JPG/PNG).";
        }
    }
?>

    <!DOCTYPE html>
    <html lang="id">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Hasil Pendaftaran</title>
        <link rel="stylesheet" href="css/style.css">
    </head>

    <body>
        <div class="kontainer" style="max-width: 600px; margin-top: 2rem;">
            <div class="kartu">
                <h2>Data Pendaftaran Berhasil Diterima!</h2>
                <hr style="margin: 1rem 0; border: 0; border-top: 1px solid #e5e7eb;">

                <p><strong>Nama Lengkap:</strong> <?php echo $nama; ?></p>
                <p><strong>Email:</strong> <?php echo $email; ?></p>
                <p><strong>No. HP:</strong> <?php echo $hp; ?></p>
                <p><strong>Tanggal Lahir:</strong> <?php echo $lahir; ?></p>
                <p><strong>Jenis Kelamin:</strong> <?php echo ($jk == 'L') ? 'Laki-laki' : 'Perempuan'; ?></p>
                <p><strong>Pilihan Kelas:</strong> <?php echo ucfirst($kelas); ?></p>
                <p><strong>Minat:</strong> <?php echo $str_minat; ?></p>
                <p><strong>Alamat:</strong> <?php echo nl2br($alamat); ?></p>
                <p><strong>Status Foto:</strong> <?php echo $nama_foto; ?></p>

                <br>
                <a href="daftar.html" class="tombol">Kembali ke Form</a>
            </div>
        </div>
    </body>

    </html>

<?php
} else {
    // Jika file diakses secara langsung tanpa submit form, kembalikan ke halaman daftar
    header("Location: daftar.html");
    exit();
}
?>