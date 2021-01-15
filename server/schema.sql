DROP DATABASE IF EXISTS chat;

CREATE DATABASE chat;

USE chat;

/* Create other tables and define schemas for them here! */
CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(20) NOT NULL,
  PRIMARY KEY (ID)
);

CREATE TABLE roomname (
  roomname VARCHAR(20) NOT NULL,
  PRIMARY KEY (roomname)
);

CREATE TABLE messages (
  messageID INT AUTO_INCREMENT,
  messages VARCHAR(140) NOT NULL,
  username VARCHAR(20) NOT NULL,
  roomname VARCHAR(20) NOT NULL,
  PRIMARY KEY (messageID)
);


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

