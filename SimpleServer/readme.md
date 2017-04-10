# Express server

Here I have some examples of express server endpoints using ES6 syntax.

We can start the server in two modes:

* one is a simple mode:


    "start": "babel-node server.js --presets es2015,stage-2"

this script is invoked running 'npm start'. It uses --presets because there is no .babelrc config file.
We can add a .babelrc file with presets and we can write the command this way:
  
    "start": "babel-node server.js"   
  
  
* the second mode has the advantage the server is restarted if its code is changed (good in developing)


    "nmon": "nodemon --watch server.js --exec babel-node server.js --presets es2015,stage-2",


this script is invoked running 'npm run nmon'. It uses nodemon to watch the server code.

