/*
* Nice tutorial:
* https://scotch.io/tutorials/learn-to-use-the-new-router-in-expressjs-4
*/

import express from 'express';
import path from 'path';


const port = process.env.PORT || 8080;
let app = express();

app.get('/', (req, res) => {
  //res.send("Hello world");
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/hello', (req, res) => {
  res.send("Hello world");
});

app.get('/api', (req, res) => {
  res.send({success: true});
});

app.get('/api/err', (req, res) => {
  res.status(400).send({success: false});
});

app.listen(port, () => console.log("Running on localhost:" + port));
