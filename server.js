// server.js
const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 8080;

const distFolder = path.join(__dirname, 'dist/rozio-app');

app.use(express.static(distFolder));

app.get('/', (req, res) => {
  res.sendFile(path.join(distFolder, 'index.html'));
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
