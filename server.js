// server.js
const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 8080;

// Zmień 'your-app-name' na folder z dist/ z angular.json
app.use(express.static(path.join(__dirname, 'dist/rozio-app')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/rozio-app/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
