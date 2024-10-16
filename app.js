const express = require('express');
const todoRoutes = require('./routes/todo.js');
const app = express();
const port = 3000;

app.use(express.json());

app.use('/todos', todoRoutes);
// Atur EJS sebagai view engine
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/contact', (req, res) => {
    res.render('contact'); // Render file contact.ejs
});

app.use((req, res) => {
    res.status(404).send('404 - Page Not Found');
});

// Menjalankan server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
