CREATE DATABASE stock_app;
USE stock_app;
/******* Table Category *******/

CREATE TABLE category (
idcategory integer PRIMARY KEY AUTO_INCREMENT,
nom VARCHAR(255) NOT NULL,
image VARCHAR(255) NOT NULL,
id_parent integer NOT NULL,
final_level integer not null
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

/******* Table Charges *******/

CREATE TABLE charges (
idCharges integer PRIMARY KEY AUTO_INCREMENT,
typeCharges VARCHAR(255) not null,
montantCharges integer,
dateCharges VARCHAR(255)
);
/**************************************/

/******* Table Facture *******/

CREATE TABLE facture (
idFacture integer PRIMARY KEY AUTO_INCREMENT,
designationFacture VARCHAR(255) not null,
dateFacturation VARCHAR(255),
montantHt integer,
montantTtc integer,
datePaiement VARCHAR(255),
modePaiement VARCHAR(255),
statusFacture integer,
articles VARCHAR(255),
clientID integer,
FOREIGN KEY (clientID) REFERENCES client_physique(idclient_p)
);
/**************************************/

/******* Table Produit/Facture *******/

CREATE TABLE produitFacture (
idproduitFacture integer PRIMARY KEY AUTO_INCREMENT,
produitID integer not null,
FOREIGN KEY (produitID) REFERENCES produit(idproduit),
factureID integer not null,
FOREIGN KEY (factureID) REFERENCES facture(idFacture),
quantiteProduit integer
);
/**************************************/

/******* Table Comptes *******/

CREATE TABLE comptes (
idCompte integer PRIMARY KEY AUTO_INCREMENT,
username VARCHAR(255) not null,
password VARCHAR(255) not null,
role integer
);
/**************************************/

/******* Table notes *******/

CREATE TABLE notes (
idNote integer PRIMARY KEY AUTO_INCREMENT,
description VARCHAR(255) not null,
created_at VARCHAR(255) not null
);
/**************************************/

/******* Table Stocks *******/

CREATE TABLE stocks (
idStock int(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
Quantite int(11) DEFAULT 0,
Disponible int(11) DEFAULT 0,
produitID integer not null,
FOREIGN KEY (produitID) REFERENCES produit(idproduit)
);
/**************************************/

/******* Table SubCategory *******/

CREATE TABLE SubCategory (
idSubCategory int(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
title VARCHAR(255) NOT NULL,
subDescription VARCHAR(255),
parentID integer not null,
FOREIGN KEY (parentID) REFERENCES category(idcategory)
);
/**************************************/

/******* Table Avances *******/

CREATE TABLE avances (
idCompte integer PRIMARY KEY AUTO_INCREMENT,
username VARCHAR(255) not null,
password VARCHAR(255) not null,
role integer
);
/**************************************/
/**********************************/
SELECT PF.*, P.*, F.*
From produitFacture as PF
INNER JOIN produit as P
ON PF.produitID = P.idproduit
INNER JOIN facture as F
ON PF.factureID = F.idFacture


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

DROP TABLE category;

INSERT INTO piece_jointes (fichier)
VALUES
("fichier1");

SELECT fournisseur.*, piece_jointes.*
    FROM fournisseur
    JOIN piece_jointes ON fournisseur.piecejointes = piece_jointes.idpj;


select c.* from category as c 
union all
    select c.*, s.* from SubCategory as s
    join category as c
    on s.parentID = c.idcategory

select c.nom, s.title
from category c
    join SubCategory s on s.parentID = c.idcategory 

