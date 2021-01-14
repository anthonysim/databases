DROP DATABASE IF EXISTS chat;

CREATE DATABASE chat;

USE chat;

/* Create other tables and define schemas for them here! */
CREATE TABLE username (
  -- userID INT AUTO_INCREMENT,
  username VARCHAR(20) NOT NULL,
  -- PRIMARY KEY (userID, username)
  PRIMARY KEY (username)
);

CREATE TABLE roomname (
  -- roomID INT AUTO_INCREMENT,
  roomname VARCHAR(20) NOT NULL,
  -- PRIMARY KEY (roomID, roomname)
  PRIMARY KEY (roomname)
);

CREATE TABLE messages (
  messageID INT AUTO_INCREMENT,
  messages VARCHAR(140) NOT NULL,
  username VARCHAR(20) NOT NULL,
  roomname VARCHAR(20) NOT NULL,
  PRIMARY KEY (messageID),
  -- userID INT,
  -- roomID INT
);


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

