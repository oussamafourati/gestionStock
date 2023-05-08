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
logo LONGTEXT ,
rib bigint not null,
etat integer,
piecejointes LONGTEXT
);

INSERT INTO fournisseur (raison_sociale, adresse, tel, mail, type, matricule_fiscale, logo, rib, etat, piecejointes)
VALUES
("foazrazr", "tunis", "14785236", "test@gmail.com", 1, "hello147852", "logo", 14785, 1,1);


UPDATE category
SET nom = "oussama" , image = "fpikdfka" , id_parent = 7
WHERE idcategory = 3;

ALTER TABLE fournisseur
ADD idpk integer;

ALTER TABLE fournisseur
DROP COLUMN rib;

CREATE TABLE piece_jointes (
idpj integer PRIMARY KEY AUTO_INCREMENT,
fichier VARCHAR(255) NOT NULL
);

INSERT INTO fournisseur ("foazrazr", "tunis", "14785236", "test@gmail.com", 1, "hello147852", "logo", 14785, 1)
SELECT fichier
FROM idfournisseur
WHERE idcategory = piecejointes;

ALTER TABLE fournisseur
ADD FOREIGN KEY (piece_jointes) REFERENCES piece_jointes(idpj);

DROP TABLE fournisseur;

INSERT INTO piece_jointes (fichier)
VALUES
("fichier1");

SELECT fournisseur.*, piece_jointes.*
    FROM fournisseur
    JOIN piece_jointes ON fournisseur.piecejointes = piece_jointes.idpj;

CREATE TABLE client_physique (
idclient_p integer PRIMARY KEY AUTO_INCREMENT,
raison_sociale VARCHAR(255) NOT NULL,
cin integer not null,
adresse VARCHAR(255) NOT NULL,
tel integer NOT NULL,
mail VARCHAR(255) NOT NULL,
avatar text ,
rib bigint not null,
etat integer,
remarque text,
crédit float,
piecejointes integer,
FOREIGN KEY (piecejointes) REFERENCES piece_jointes(idpj)
);

