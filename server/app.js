// import db
require('dotenv').config();
require('./db/config');

const express = require('express'),
app = express(),
morgan = require('morgan'),
cookieParser = require('cookie-parser'),
storeRouter = require('./routes/secure/stores'),
openRoutes = require('./routes/open'),
passport = require('./middleware/authentication'),
fileUpload = require('express-fileupload'),
path = require('path');


// Parse incoming JSON into objects
app.use(express.json());
// Log all requests
app.use(morgan('dev'));


// Unauthenticated routes
app.use('/api/users', openRoutes);

app.use(cookieParser());

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.resolve(__dirname, '..', 'client', 'build')));
}

app.use(
    fileUpload({
      useTempFiles: true,
      tempFileDir: '/tmp/images'
    })
  );
  
//  Authentication Middleware
app.use('/api/*', passport.authenticate('jwt', { session: false }));

// Authenticated Routes
app.use('/stores', storeRouter);
// We'll add more stuff in between in a little bit.

if (process.env.NODE_ENV === 'production') {
  // Handle React routing, return all requests to React app
  app.get('*', (request, response) => {
    response.sendFile(
      path.resolve(__dirname, '..', 'client', 'build', 'index.html')
    );
  });
}


module.exports = app;