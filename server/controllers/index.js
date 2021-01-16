var db = require('../db');
var Promise = require('bluebird');

// var userFields = ['username']
// var messageFields = ['message', 'username', 'roomname' ]

module.exports = {
  messages: {
    get: function (req, res) {
      db.Message.findAll({ include: [db.User] })
        .then(function (messages) {
          res.json(messages);
        });
    },
    post: function (req, res) {
      db.Message.create({
        userid: db.user.id,
        text: req.body.message,
        roomname: req.body.roomname
      }).then(res.sendStatus(200));
    }
  },

  users: {
    get: function (req, res) {
      db.User.findAll()
        .then(function (users) {
          res.json(users);
        });
    },
    post: function (req, res) {
      db.User.create({ where: { username: req.body.username } })
        .then(res.sendStatus(200));



      // findOrCreate returns multiple resutls in an array
      // use spread to assign the array to function arguments
      // .spread(function(user, created) {
      //   if (created) {
      //     res.sendStatus(200);
      //   }
      //   res.sendStatus(201);
      // });
    }
  }
};

// module.exports = {
//   messages: {
//     get: function (req, res) {
//       models.messages.get((err, data) => {
//         if (err) {
//           res.status(500).send('An error occurred while trying to retrieve a message!');
//         } else {
//           res.send(data);
//         }
//       });

//     }, // a function which handles a get request for all messages
//     post: function (req, res) {
//       models.messages.post((err, data) => {
//         if (err) {
//           res.status(500).send('An error occurred while trying to create a message!');
//         } else {
//           res.send(data);
//         }
//       });
//     } // a function which handles posting a message to the database
//   },

//   users: {
//     // Ditto as above
//     get: function (req, res) {
//       models.users.get((err, data) => {
//         if (err) {
//           res.status(500).send('An error occurred while trying to retrieve a user!');
//         } else {
//           res.send(data);
//         }
//       });
//     },
//     post: function (req, res) {
//       models.users.post((err, data) => {
//         if (err) {
//           res.status(500).send('An error occurred while trying to create a user!');
//         } else {
//           res.send(data);
//         }
//       });
//     }
//   }
// };
