const express = require('express');
const router = require('./router/router.js');
require('dotenv').config();
//server will be listening on this port, located in .env file of the project
const PORT = process.env.PORT; 

const app = express();
// main router for all APIs urls
app.use(router);

//error for non existed URLs
app.use(function(req, res) {
    return res.status(404).send({url: req.originalUrl + ' not found'})
});


try {
    //starting server to listen port
    app.listen(PORT, () => {
      console.info(`Express App Listening on Port ${PORT}`);
    });
  } catch (error) {
    console.error(`An error occurred: ${JSON.stringify(error)}`);
    process.exit(1);
  }

module.exports = {
   console
};
