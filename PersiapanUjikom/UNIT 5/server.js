const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware Body-Parser untuk format JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 4. Script koneksi ke database 'ujian'
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '', // Sesuaikan jika ada password MySQL-mu
    database: 'ujian'
});

db.connect((err) => {
    if (err) {
        console.error('Koneksi ke database gagal:', err);
        return;
    }
    console.log('Berhasil terhubung ke database MySQL.');
});

// 5. Membuat endpoint '/' dengan method GET yang mengembalikan JSON data users
app.get('/', (req, res) => {
    const query = 'SELECT * FROM users';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Gagal mengambil data:', err);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
        // Format output JSON dengan properti 'data' sesuai soal
        res.json({ data: results });
    });
});

// Menjalankan web server di port 3000
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});