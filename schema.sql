CREATE DATABASE stock_app;
USE stock_app;

CREATE TABLE category (
idcategory integer PRIMARY KEY AUTO_INCREMENT,
nom VARCHAR(255) NOT NULL,
image VARCHAR(255) NOT NULL,
id_parent integer NOT NULL,
final_level integer not null,
);

CREATE TABLE fournisseur (
idfournisseur integer PRIMARY KEY AUTO_INCREMENT,
raison_sociale VARCHAR(255) NOT NULL,
adresse VARCHAR(255) NOT NULL,
tel integer NOT NULL,
mail VARCHAR(255) NOT NULL,
type integer,
matricule_fiscale VARCHAR(255) NOT NULL,
logo VARCHAR(255) ,
rib bigint not null,
etat integer,
piece_jointes VARCHAR(255)
);

INSERT INTO category(nom, image, id_parent)
VALUES
('First Category', 'about something', 1),
('Second Category', 'football note', 2);


UPDATE category
SET nom = "oussama" , image = "fpikdfka" , id_parent = 7
WHERE idcategory = 3;

ALTER TABLE category
ADD final_level integer;

ALTER TABLE fournisseur
DROP COLUMN rib;