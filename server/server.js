const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const port = process.env.port || 3000;
const apiRouter = require('./routes/api');
// uncomment the below for proxy challenge
const mongoURI = 'mongodb://localhost:27017/webStore';

mongoose.connect(mongoURI, {useNewUrlParser: true,useUnifiedTopology: true});

mongoose.createConnection(mongoURI);

const db = mongoose.connection;

db.once('open', () => {
  console.log('Database connected', mongoURI);
})

app.use(express.json());



// statically serve everything in the build folder on the route '/build'
app.use('/build', express.static(path.join(__dirname, '../build')));

app.use('/api', apiRouter);
// serve index.html on the route '/'
// if (process.env.NODE_ENV === 'production') {
    app.get('/', (req, res) => res.status(200).sendFile(path.join(__dirname, '../index.html')));
  // }

//global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(port, () => {
  console.log(`App listening on port: ${port}`);
}); //listens on port 3000 -> http://localhost:3000/

