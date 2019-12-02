const express = require('express');
const router = require('./router.js');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.resolve(__dirname, '../public')));

app.use('/', router);

app.listen(port, () => {
  console.log(`listenin to port ${port}`);
});