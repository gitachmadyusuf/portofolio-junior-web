const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 8000;

const server = http.createServer((req, res) => {
  try {
    // Logika 1: Mengembalikan "hello world" saat endpoint "/" diakses via GET
    if (req.method === "GET" && req.url === "/") {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("hello world");
    }
    // Logika 2: Static file server untuk rute lainnya
    else if (req.method === "GET") {
      // Mengambil path file yang diminta, diasumsikan berada di folder 'public'
      const filePath = path.join(__dirname, "public", req.url);

      fs.readFile(filePath, (err, data) => {
        if (err) {
          // Penanganan error jika file tidak ditemukan (404)
          if (err.code === "ENOENT") {
            res.writeHead(404, { "Content-Type": "text/plain" });
            res.end("404 File Not Found");
          } else {
            // Penanganan error sistem file lainnya (500)
            res.writeHead(500, { "Content-Type": "text/plain" });
            res.end("500 Internal Server Error");
          }
        } else {
          // Jika file ada, kirimkan isinya
          res.writeHead(200);
          res.end(data);
        }
      });
    }
    // Penanganan jika method bukan GET
    else {
      res.writeHead(405, { "Content-Type": "text/plain" });
      res.end("405 Method Not Allowed");
    }
  } catch (error) {
    // Logika 3: Penanganan error (Try-Catch) agar aplikasi minim crash
    console.error("Terjadi kesalahan pada request:", error);
    res.writeHead(500, { "Content-Type": "text/plain" });
    res.end("Terjadi kesalahan tidak terduga pada server.");
  }
});

// Penanganan error pada level server utama
server.on("error", (err) => {
  console.error("Server mengalami crash/error kritis:", err);
});

server.listen(PORT, () => {
  console.log(`Server berhasil berjalan di http://localhost:${PORT}`);
});
