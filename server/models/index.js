var db = require('../db');

module.exports = {

  messages: {
    get: function (callback) {
      db.query('SELECT * FROM messages', (err, rows) => {
        if (err) {
          throw err;
        } else {
          console.log(rows);
          callback(null, rows);
        }
      });
    }, // a function which produces all the messages

    post: function (callback) {
      let message = { messages: 'Javier is a cool guy', username: 'Javier', roomname: 'Lobby' };
      db.query('INSERT INTO messages SET ?', message, (err, res) => {
        if (err) {
          throw err;
        } else {
          console.log(res);
          callback(null, res);
        }
      }); // a function which can be used to insert a message into the database
    },


    users: {
      // Ditto as above.
      get: function (callback) {
        db.query('SELECT * FROM users', (err, rows) => {
          if (err) {
            throw err;
          } else {
            console.log(rows);
            callback(null, rows);
          }
        });
      },
      post: function () {
        let user = { username: 'Javier' };
        db.query('INSERT INTO username SET ?', user, (err, res) => {
          if (err) {
            throw err;
          } else {
            console.log(res);
            callback(null, res);
          }
        });
      }
    }
  }
};