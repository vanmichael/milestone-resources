'use strict';

const express = require('express');
const app = express();
const path = require('path');

app.use('/js', express.static(path.join(__dirname, 'js')));
app.use('/css', express.static(path.join(__dirname, 'css')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});

if (module === require.main) {
  const server = app.listen(process.env.PORT || 8081, () => {
    const port = server.address().port;
    console.log(`App listening on port ${port}`);
  });
}

module.exports = app;
