const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// servir carpeta public
app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});