var express = require('express');
var app = express();
var dbResponses = require('./api/db/db.data');
var infrastructure = require('./api/infrastructure/infrastructure');
var local = require('./api/local/local');

/** старт приложения */
app.listen(3000, infrastructure.connect);
/** Запрос к корню */

app.get('/', infrastructure.response);
/** запрос БД */

app.get('/db', dbResponses.devices);

/** Запрос внутренний */
app.get('/users', local.users);

app.use(function(req, res, next) {
  res.status(404).send('Sorry cant find that!');
});
