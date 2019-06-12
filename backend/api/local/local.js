exports.users = function(req, res) {
  res.send([{ id: 0, name: 'testUser' }, { id: 1, name: 'Ivanov Ivan' }]);
};
