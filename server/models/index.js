var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      db.query('SELECT * FROM messages', (err, rows) => {
        if (err) {
          throw err;
        } else {
          callback(null, rows);
        }
      });
    }, // a function which produces all the messages

    post: function () {
      const message = { username: '' , messages: '', roomname: '' };
      db.query('INSERT INTO messages SET ?', message, (err, res) => {
        if (err) {
          throw err;
        } else {
          callback(null, res);
        }
      });
    } // a function which can be used to insert a message into the database
  },


  users: {
    // Ditto as above.
    get: function (callback) {
      db.query('SELECT * FROM users', (err, rows) => {
        if (err) {
          throw err;
        } else {
          callback(null, rows);
        }
      });
    },
    post: function () {}
  }
};

