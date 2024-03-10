const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, './tabia/build')));


app.get('/tabia', (req, res) => {
  res.sendFile(path.join(__dirname, './tabia/build', 'index.html'));
});


app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
