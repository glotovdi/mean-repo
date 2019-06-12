exports.connect = function() {
  console.log('Example app listening on port 3000!');
};

exports.response = function(req, res) {
  res.send({ title: 'success' });
};
