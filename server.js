var express = require('express');

var app = express();

// Static route for files in public folder
app.use(express.static('public'));

// Route for About page
app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/public/about.html');
});

// Route for Blog Page
app.get('/blog', (req, res) => {
  res.sendFile(__dirname + '/public/blog.html');
});

// Route for Contact page
app.get('/contact', (req, res) => {
  res.sendFile(__dirname + '/public/contact.html');
});

// Listen on port 3000
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
