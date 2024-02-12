-- DDL --

DROP DATABASE IF EXISTS DB;
CREATE DATABASE DB;
USE DB;

DROP TABLE IF EXISTS user;
DROP TABLE IF EXISTS roles;

CREATE TABLE user (
userId INT PRIMARY KEY AUTO_INCREMENT,
username VARCHAR(50),
email VARCHAR(50),
password VARCHAR(50)
);

CREATE TABLE roles (
roleId INT PRIMARY KEY AUTO_INCREMENT,
role VARCHAR(10)
);

-- TEST DML --

INSERT INTO roles (role) 
VALUES

('user'),
('admin'),
('moderator');

INSERT INTO user (username, email, password)
VALUES

('user1', 'user1@mail.com', 'user11');

-- DQL --

SELECT * FROM roles;