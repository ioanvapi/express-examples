/*
* Nice tutorial at:
* https://scotch.io/tutorials/learn-to-use-the-new-router-in-expressjs-4
*/

import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';

let app = express();

// middleware for this server to parse json body of requests
app.use(bodyParser.json());

// respond with a simple text
app.get('/', (req, res) => {
  res.send("this is home page");
});


// respond with a simple text
app.get('/hello', (req, res) => {
  res.send("Hello world");
});

// respond sending an html file
app.get('/salut', (req, res) => {
  res.sendFile(path.join(__dirname, 'salut.html'));
});

//==============================================================
//this is to handle both GET and POST methods of a request
//ex. GEt is to get the login page and POST is to post the credentials
app.route('/login')
  .get((req, res) => {
    res.send("here is the login form");
  })
  .post((req, res) => {
    res.send("here there are the login credentials - aka form processing");
  });


//==============================================================
// define a router
let router = express.Router();
app.use('/api', router);

app.listen(3000, () => console.log("Running on localhost:3000"));

// response with error data
router.get('/err', (req, res) => {
  const errors = {
    code: 400,
    msg: 'ala bala portocala'
  };

  // 400 = bad request
  res.status(400).json(errors);
});


// access it with /api/users
router.get('/users', (req, res) => {
  console.log("req.headers", req.headers);

  res.json([
    {
      name: 'Gigi',
      age: 14
    },
    {
      name: 'Maria',
      age: 19
    },
  ])
});

// getting the request params
router.post('/users/add', (req, res) => {
  // req.body contains the post params
  console.log("req.body", req.body);

  res.json({success: true})
});


//==============================================================
//define and use a middleware router
let mr = express.Router();
mr.use((req, res, next) => {
  console.log("in middleware:", req.method, req.url);
  //put something in request body and get it below, in get
  req.body = {ceva: "cucu"};
  next();
});

mr.get('/', (req, res) => {
  // get the info from body, changed in middleware
  console.log("getting the home page and request body:", req.body);
  res.send("here is the home page")
});

app.use('/mw', mr);