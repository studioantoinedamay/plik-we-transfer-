const express = require('express');
const path = require('path');
const app = express();

// Servir les fichiers statiques (logo, CSS, JS)
app.use(express.static('public'));

// Page d’upload à la racine
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
