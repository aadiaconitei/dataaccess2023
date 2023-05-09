
CREATE DATABASE mydb2023;
CREATE TABLE `mydb2023`.`produse` ( 
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT , 
    `nume_produs` VARCHAR(100) NOT NULL , 
    `descriere` TEXT NULL , 
    `pret` DECIMAL(7,2) NOT NULL , 
    `stoc` INT NOT NULL DEFAULT      , 
    `producator` VARCHAR(250) NOT NULL , 
    `user_at` INT NOT NULL , 
    `data_adaugare` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP , 
    PRIMARY KEY (`id`)) ENGINE = InnoDB;

INSERT INTO `produse` (
    `id`, `nume_produs`, `descriere`, `pret`, `stoc`, `producator`, `user_at`, `data_adaugare`)
 VALUES 
    (NULL, 'Pix', 'Pix albastru de grosime 0.7', '22.5', '10', 'Big', '1', CURRENT_TIMESTAMP);

UPDATE `produse` SET `producator` = 'Bic' WHERE `produse`.`id` = 1;

SELECT * FROM `produse`;
-- comentariu 
DELETE FROM `produse` WHERE `produse`.`id` = "2";

CREATE USER 'mydb2023'@'localhost' 
IDENTIFIED VIA mysql_native_password USING '***';
GRANT SELECT, INSERT, UPDATE, DELETE, FILE ON *.* TO 'mydb2023'@'localhost' REQUIRE NONE WITH MAX_QUERIES_PER_HOUR 0 MAX_CONNECTIONS_PER_HOUR 0 MAX_UPDATES_PER_HOUR 0 MAX_USER_CONNECTIONS 0;


SELECT * FROM `jsusers` WHERE nume LIKE 'ion%'  OR nume LIKE 'ioa%'