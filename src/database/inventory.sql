CREATE DATABASE inventory;

USE inventory;

CREATE TABLE users (
	id INT NOT NULL,
    name VARCHAR(50) NOT NULL,
    position VARCHAR(50),
    register_data TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(id)
);

CREATE TABLE itens (
	id INT AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    description VARCHAR(100),
    brand VARCHAR(50),
    quantity INT NOT NULL,
    unit VARCHAR(10),
    PRIMARY KEY(id)
);