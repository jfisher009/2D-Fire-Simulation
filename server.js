// File: server.js 
// Author: Julian Fisher
// Date: 07/03/2021
//
// server.js contains code to make a simple http webserver serve public/index.html
//
// Modification Log:
// 

// import the expressexpress server
const express = require("express");

// application constants
const PORT = 3000;

// create the http app
const app = express();

// add a router
const router = express.Router();
app.use(router);

app.use(express.static('public'))

app.listen(PORT, (err) => {
    if (err) 
        console.log("Server startup failed.");
    else
        console.log(`Server listening on port ${PORT}`);
});