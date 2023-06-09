CREATE DATABASE stock_app;
USE stock_app;
/******* Table Category *******/

CREATE TABLE category (
idcategory integer PRIMARY KEY AUTO_INCREMENT,
nom VARCHAR(255) NOT NULL,
image LONGTEXT NOT NULL,
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
PourcentageBenifice integer,
Benifice integer,
PrixRemise integer,
PourcentageRemise integer,
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
prixAchatHt integer,
prixAchatTtc integer,
prixVente integer,
remise integer,
PourcentageBenifice integer,
Benifice integer,
PrixRemise integer,
PourcentageRemise integer,
piecejointes LONGTEXT
);
/**************************************/

/******* Table Charges *******/

CREATE TABLE charges (
idCharges integer PRIMARY KEY AUTO_INCREMENT,
typeCharges VARCHAR(255) not null,
montantCharges integer,
dateCharges VARCHAR(255),
descriptionCharge VARCHAR(255),
piecejointes LONGTEXT
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

DROP TABLE charges;

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


SELECT SUM(montantCharges) AS prix_total
FROM charges

SELECT t1.nom FROM
category AS t1 LEFT JOIN category as t2
ON t1.idcategory = t2.id_parent
WHERE t2.idcategory IS NULL;

SELECT ANY_VALUE(CONCAT( REPEAT(' ', COUNT(parent.name) - 1), node.name)) AS name
FROM nested_category AS node,
        nested_category AS parent
WHERE node.lft BETWEEN parent.lft AND parent.rgt
ORDER BY node.name
GROUP BY node.lft;

CREATE TABLE category (
  idcategory int(10) unsigned NOT NULL AUTO_INCREMENT,
  nom varchar(255) NOT NULL,
  image varchar(255) NOT NULL,
  id_parent int(10) unsigned DEFAULT NULL,
  final_level integer not null,
  PRIMARY KEY (idcategory),
  FOREIGN KEY (id_parent) REFERENCES category (idcategory) 
    ON DELETE CASCADE ON UPDATE CASCADE
);

INSERT INTO category(nom,id_parent) 
VALUES('Laptops & PC',1);

INSERT INTO category(nom,id_parent) 
VALUES('Laptops',2);
INSERT INTO category(nom,id_parent) 
VALUES('PC',2);

INSERT INTO category(nom,id_parent) 
VALUES('Cameras & photo',2);
INSERT INTO category(nom,id_parent) 
VALUES('Camera',5);

INSERT INTO category(nom,id_parent) 
VALUES('Phones & Accessories',2);
INSERT INTO category(nom,id_parent) 
VALUES('Smartphones',7);

INSERT INTO category(nom,id_parent) 
VALUES('Android',8);
INSERT INTO category(nom,id_parent) 
VALUES('iOS',9);
INSERT INTO category(nom,id_parent) 
VALUES('Other Smartphones',8);

INSERT INTO category(nom,id_parent) 
VALUES('Batteries',7);
INSERT INTO category(nom,id_parent) 
VALUES('Headsets',7);
INSERT INTO category(nom,id_parent) 
VALUES('Screen Protectors',7);

WITH RECURSIVE category_path (idcategory, nom, id_parent) AS
(
  SELECT idcategory, nom, id_parent
    FROM category
    WHERE idcategory = 9 -- child node
  UNION ALL
  SELECT c.idcategory, c.nom, c.id_parent
    FROM category_path AS cp JOIN category AS c
      ON cp.id_parent = c.idcategory
)
SELECT * FROM category_path;

CREATE TABLE categories (
    category_id INT PRIMARY KEY,
    category_name VARCHAR(255),
    parent_category_id INT
);

WITH RECURSIVE nested_categories AS (
    SELECT
        idcategory,
        nom,
        id_parent,
        2 AS level
    FROM
        category
    WHERE
        id_parent IS NOT NULL
    
    UNION ALL
    
    SELECT
        c.idcategory,
        c.nom,
        c.id_parent,
        nc.level + 1 AS level
    FROM
        category c
    INNER JOIN
        nested_categories nc ON c.id_parent = nc.idcategory
)
SELECT
    idcategory,
    nom,
    level
FROM
    nested_categories
ORDER BY
    level, idcategory;


SELECT DISTINCT c1.nom
FROM category c1
INNER JOIN category c2 ON c1.idcategory = c2.id_parent
ORDER BY c1.nom;


select *
from `category`
where exists (
    select * from `SubCategory` where `category`.`idcategory` = `SubCategory`.`parentID`
);

select c.nom, 
from category c
    join SubCategory s on s.parentID = c.idcategory 
where s.parentID exists (
    select *
    from category c2
        join SubCategory s on c2.idcategory = s.parentID
    where c2.idcategory = c.idcategory
)

ALTER TABLE produit
ADD PourcentageRemise integer;
