
import bodyParser from 'body-parser';
import express from 'express';
import { initMongoConnection } from './app/DB/index.js';
import trains from './app/routes/train.js';
// import dotenv from 'dotenv';
// dotenv.config({})
var app = express();

// let db = process.env.APP_DB;
let db = 'mongodb+srv://bhaskarpolepally66:5UZiqaPpeamTiwCi@cluster0.xtshl2n.mongodb.net/railways'
app.use((req, res, next) => {
  let origin = req.headers.origin || req.headers.referer || req.headers.host;

  if (origin) {

    res.header('Access-Control-Allow-Origin', origin);
  }

  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, Content-Encoding, X-Auth-Token, X-Referer');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); // Specify methods explicitly
  res.header('X-Powered-By', 'deScign');

  if (req.method === 'OPTIONS') {
    return res.status(200).json({});
  }

  next();
});

initMongoConnection(db);
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));

app.use('/api/trains', trains);

app.listen(3000, function () {
  console.log('========App listening on port 3000===============');
});
export default app; 