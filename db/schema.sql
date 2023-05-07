-- DROP DATABASE
DROP DATABASE IF EXISTS ecommerce_db;
-- CREATE DATABASE
CREATE DATABASE ecommerce_db;

USE ecommerce_db;

CREATE TABLE Category (
    id INT AUTO_INCREMENT NOT NULL,
    category_name VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE Product (
    id INT AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(255) NOT NULL,
    price INT NOT NULL,
    stock INT NOT NULL,
    FOREIGN KEY (category_id) REFERENCES Category (id), PRIMARY KEY (id)
);

CREATE TABLE Tag (
    id INT AUTO_INCREMENT NOT NULL,
    tag_name VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE ProductTag (
    id INT AUTO_INCREMENT NOT NULL,
    product_id VARCHAR(255) NOT NULL,
    FOREIGN KEY (tag_id) REFERENCES Tag,
    FOREIGN KEY (product_id) REFERENCES Product (id), (id)PRIMARY KEY (id)
);
