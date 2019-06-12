var connect = require('../../db/config');

exports.devices = function(req, res) {
  const collection = connect.client.db('test').collection('devices');

  collection.find({}).toArray(function(err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send(JSON.stringify(result));
    }
  });
};
