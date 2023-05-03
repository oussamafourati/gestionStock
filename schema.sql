CREATE DATABASE stock_app;
USE stock_app;

CREATE TABLE category (
idcategory integer PRIMARY KEY AUTO_INCREMENT,
nom VARCHAR(255) NOT NULL,
image VARCHAR(255) NOT NULL,
id_parent integer NOT NULL
);

INSERT INTO category(nom, image, id_parent)
VALUES
('First Category', 'about something', 1),
('Second Category', 'football note', 2);


UPDATE category
SET nom = "oussama" , image = "fpikdfka" , id_parent = 7
WHERE idcategory = 3;