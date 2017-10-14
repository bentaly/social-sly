const express = require('express');
const path = require('path');
const http = require('http');
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const passport = require('passport');
const flash = require('connect-flash');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const cors = require('cors');
const morgan = require('morgan');
const app = express();
const configDB = require('./server/config/database.js');

mongoose.Promise = require('bluebird');

mongoose.connect(configDB.url, {
  useMongoClient: true,
  socketTimeoutMS: 0,
  keepAlive: true,
  reconnectTries: 30
}); // connect to our database


mongoose.connection.on('open', function () {
  console.log('connection open!!!')
  // mongoose.connection.db.collections(function (error, names) {
  //   if (error) {
  //     throw new Error(error);
  //   } else {
  //     names.map(function (name) {
  //       console.log('found collection %s', name.s.name);
  //     });
  //   }
  // });
});

// set up our express application
// app.use(morgan('dev')); // log every request to the console
//may not need this due to express-session
app.use(cookieParser()); // read cookies (needed for auth)

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

app.use(session({
  resave: false,
  saveUninitialized: false,//dont know about this
  secret: 'ilovescotchscotchyscotchscotch'
})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

require('./server/config/passport')(passport); // pass passport for configuration
require('./server/routes/routes')(app, passport);

// app.use(function(req, res, next) {
//   res.header('Access-Control-Allow-Credentials', true);
//   res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
//   res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
//   res.header('Access-Control-Allow-Headers', 'appid, X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
//   next();
// });

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

//app.user(bodyParser.json());
// after the code that uses bodyParser and other cool stuff
var originsWhitelist = [
  'http://localhost:4200',      //this is my front-end url for development
  'http://localhost:3000',      //this is my back-end url for development, needed?
  // 'http://www.myproductionurl.com'
];
var corsOptions = {
  origin: function (origin, callback) {
    var isWhitelisted = originsWhitelist.indexOf(origin) !== -1;
    callback(null, isWhitelisted);
  },
  credentials: true
}

app.use(cors(corsOptions));
// app.use(cors());
app.set('port', port);

const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));
