var Sequelize = require('Sequelize');
var orm = new Sequelize('chat', 'root', '', {
  dialect: 'mysql'
});

var Promise = require('bluebird');

var User = orm.define('User', {
  username: Sequelize.STRING
});

var Message = orm.define('Message', {
  text: Sequelize.STRING,
  roomname: Sequelize.STRING,
});

User.hasMany(Message);
Message.belongsTo(User);

User.sync();
Message.sync();

exports.User = User;
exports.Message = Message;

// var mysql = require('mysql');

// var dbConnection = {
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'chat',
//   dialect: 'mysql',
//   pool: {
//     max: 5,
//     min: 0,
//     acquire: 30000,
//     idle: 10000
//   }
// };

// var dbConnection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'chat',
//   dialect: 'mysql',
// });

// dbConnection.connect((err) => {
//   if (err) {
//     throw err;
//   }
//   console.log('Connected!');
// });

// module.exports = dbConnection;