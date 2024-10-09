const express = require('express');
const app = express();
const port = 3000;

// Atur EJS sebagai view engine
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});

// Route untuk halaman kontak
app.get('/contact', (req, res) => {
    res.render('contact'); // Render file contact.ejs
});

// Route untuk halaman tidak ditemukan (404)
app.use((req, res) => {
    res.status(404).send('404 - Page Not Found');
});

// Menjalankan server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
