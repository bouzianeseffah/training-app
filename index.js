//require needed modules
const { query } = require('express');
const express = require('express');
//initialize the app object
const app = express();
// get the environment vaariable
require('dotenv').config()

// homepage route
app.get('/', (req, res) => {
       res.send( 'hello world')

   
    
})

//listen for connection
app.listen(process.env.PORT, () => {
 console.log('awake')
})