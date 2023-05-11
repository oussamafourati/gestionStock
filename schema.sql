CREATE DATABASE stock_app;
USE stock_app;
/******* Table Category *******/

CREATE TABLE category (
idcategory integer PRIMARY KEY AUTO_INCREMENT,
nom VARCHAR(255) NOT NULL,
image VARCHAR(255) NOT NULL,
id_parent integer NOT NULL,
final_level integer not null,
);
/**************************************/

/******* Table Fournisseur *******/

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
/**************************************/

/******* Table Client Physique *******/

CREATE TABLE client_physique (
idclient_p integer PRIMARY KEY AUTO_INCREMENT,
raison_sociale VARCHAR(255) NOT NULL,
cin integer not null,
adresse VARCHAR(255) NOT NULL,
tel integer NOT NULL,
mail VARCHAR(255) NOT NULL,
avatar LONGTEXT ,
rib bigint not null,
etat integer,
remarque text,
credit float,
piecejointes LONGTEXT
);
/**************************************/

/******* Table Client Morale *******/

CREATE TABLE client_moral (
idclient_m integer PRIMARY KEY AUTO_INCREMENT,
raison_sociale VARCHAR(255) NOT NULL,
mat integer not null,
adresse VARCHAR(255) NOT NULL,
tel integer NOT NULL,
mail VARCHAR(255) NOT NULL,
logo LONGTEXT ,
rib bigint not null,
etat integer,
remarque text,
credit float,
piecejointes LONGTEXT
);
/**************************************/

/******* Table Produit *******/

CREATE TABLE produit (
idproduit integer PRIMARY KEY AUTO_INCREMENT,
nomProduit VARCHAR(255) NOT NULL,
imageProduit LONGTEXT not null,
marque VARCHAR(255) NOT NULL,
prixAchatHt integer not null,
prixAchatTtc integer not null,
prixVente integer not null,
remise integer,
remarqueProduit VARCHAR(255),
categoryID int,
FOREIGN KEY (categoryID) REFERENCES category(idcategory),
fournisseurID int,
FOREIGN KEY (fournisseurID) REFERENCES fournisseur(idfournisseur)
);
/**************************************/

/******* Table Arrivage *******/

CREATE TABLE arrivage (
idArrivage integer PRIMARY KEY AUTO_INCREMENT,
designation VARCHAR(255),
montantTotal integer,
fournisseurID int,
FOREIGN KEY (fournisseurID) REFERENCES fournisseur(idfournisseur),
dateArrivage VARCHAR(255)
);
/**************************************/

/******* Table Arrivage-Produit *******/

CREATE TABLE arrivageProduit (
idArrivageProduit integer PRIMARY KEY AUTO_INCREMENT,
produitID integer not null,
FOREIGN KEY (produitID) REFERENCES produit(idproduit),
arrivageID integer not null,
FOREIGN KEY (arrivageID) REFERENCES arrivage(idArrivage),
quantite integer,
piecejointes LONGTEXT
);
/**************************************/

/**********************************/
SELECT AP.*, A.*, P.nomProduit
From arrivageProduit as A P
INNER JOIN arrivage as A 
ON AP.arrivageID = A.idArrivage
INNER JOIN produit as P 
ON AP.produitID = P.idproduit


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

DROP TABLE arrivage;

INSERT INTO piece_jointes (fichier)
VALUES
("fichier1");

SELECT fournisseur.*, piece_jointes.*
    FROM fournisseur
    JOIN piece_jointes ON fournisseur.piecejointes = piece_jointes.idpj;


