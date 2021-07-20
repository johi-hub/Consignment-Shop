if (process.env.NODE_ENV !== 'production') require('dotenv').config();

require('dotenv').config();
const express = require('express');
const app = require('./app'),
  port = process.env.PORT || 8080;

  app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
  });

app.listen(port, () => console.log(`Express server is up on port ${port}`));