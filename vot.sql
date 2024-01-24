DROP database vot;
CREATE DATABASE vot;
Use vot;
CREATE TABLE tasks(
	id int PRIMARY KEY AUTO_INCREMENT,
    task varchar(200) not null
)