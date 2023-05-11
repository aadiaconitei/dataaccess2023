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

SELECT VERSION(),NOW();
-- comentariu

SELECT nume,prenume FROM student;


SELECT titlu_curs FROM cursuri;

SELECT * FROM `student` WHERE data_nastere >='1996-01-01';
SELECT * FROM `student` WHERE year(data_nastere) >='1996';

SELECT * FROM `student` WHERE year(data_nastere) >='1993' AND year(data_nastere) <='1995'
SELECT * FROM `student` WHERE year(data_nastere) BETWEEN '1993' AND '1995'


-- SELECT * FROM `profesor` WHERE grad_didactic !='III';
-- SELECT * FROM `profesor` WHERE grad_didactic='I'  OR  grad_didactic='II'
SELECT * FROM `profesor` WHERE grad_didactic IN ('I', 'II')


SELECT * FROM cursuri WHERE an =2 AND semestru=2

SELECT * FROM `student` WHERE prenume LIKE 'ion%'
SELECT * FROM `student` WHERE DATE_FORMAT(data_nastere,'%m-%d') ='09-21'


SELECT *, bursa*12 AS bursa_anuala FROM `student` WHERE bursa*12 >= 4000;


SELECT * FROM `student` ORDER BY data_nastere DESC LIMIT 10, 5


SELECT profesor.nume, profesor.prenume, cursuri.titlu_curs, note.valoare, note.id_curs FROM `profesor` 
LEFT JOIN didactic ON profesor.id = didactic.id_prof 
INNER JOIN cursuri ON cursuri.id_curs = didactic.id_curs
LEFT JOIN note ON cursuri.id_curs = note.id_curs
WHERE profesor.id =6 AND note.valoare IS NOT NULL


UPDATE `didactic` SET id_prof = 11 WHERE id_prof =10

