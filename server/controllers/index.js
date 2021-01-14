var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get((err, data) => {
        if (err) {
          res.status(500).send('An error occurred while trying to retrieve a message!');
        } else {
          res.send(data);
        }
      });

    }, // a function which handles a get request for all messages
    post: function (req, res) {
      models.messages.post((err, data) => {
        if (err) {
          res.status(500).send('An error occurred while trying to create a message!');
        } else {
          res.send(data);
        }
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get((err, data) => {
        if (err) {
          res.status(500).send('An error occurred while trying to retrieve a user!');
        } else {
          res.send(data);
        }
      });
    },
    post: function (req, res) {
      models.users.post((err, data) => {
        if (err) {
          res.status(500).send('An error occurred while trying to create a user!');
        } else {
          res.send(data);
        }
      });
    }
  }
};

