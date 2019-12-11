const express = require('express');
const router = require('./router.js');
const path = require('path');
const app = express();
const port = 8080;
const cors = require('cors');

app.use(cors());
app.use('/', router);
app.use('/', express.static(path.resolve(__dirname, '../public')));
app.use('/:id/', express.static(path.resolve(__dirname, '../public')));


app.listen(port, () => {
  console.log(`listening to port ${port}`);
});