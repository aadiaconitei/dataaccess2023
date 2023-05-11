CREATE SCHEMA `universitate2023` DEFAULT CHARACTER SET utf8 ;
CREATE TABLE `universitate2023`.`utilizatori` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `nume` VARCHAR(45) NOT NULL,
  `prenume` VARCHAR(45) NOT NULL,
  `email` VARCHAR(145) NULL,
  `telefon` CHAR(10) NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) )
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

INSERT INTO `universitate2023`.`utilizatori` (`id`, `nume`, `prenume`, `email`) VALUES ('1', 'Popescu', 'Dan', 'popescu@ion.ro');


CREATE SCHEMA `facultate` DEFAULT CHARACTER SET utf8 ;

CREATE TABLE `facultate`.`studenti` (
  `idstudent` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `nume` VARCHAR(45) NOT NULL,
  `prenume` VARCHAR(45) NOT NULL,
  `grupa` SET('1', '2', '3', '4') NULL,
  `email` VARCHAR(145) NULL,
  `data_add` VARCHAR(45) NULL,
  `status` ENUM('admin', 'respins', 'neevaluat') NULL DEFAULT 'neevaluat',
  PRIMARY KEY (`idstudent`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) ,
  UNIQUE INDEX `nume_unic` (`nume` ASC, `prenume` ASC) )
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;