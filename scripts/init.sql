CREATE DATABASE IF NOT EXISTS tech4good;



CREATE USER 'tech4good'@'localhost' IDENTIFIED BY '123456';
GRANT ALL PRIVILEGES ON tech4good.* TO 'tech4good'@'localhost';