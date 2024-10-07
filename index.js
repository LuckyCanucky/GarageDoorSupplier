const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Set the directory for the views
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Route for pages
app.get('/', (req, res) => {
  res.render('index', { title: 'Home Page' });
});
app.get('/garagedoors.ejs', (req, res) => {
  res.render('garagedoors', { title: 'Garage Doors' });
});
app.get('/modern.ejs', (req, res) => {
  res.render('modern', { title: 'Modern Garage Doors' });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
