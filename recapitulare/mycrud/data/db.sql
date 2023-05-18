CREATE TABLE `jsusers` (
  `id` int(10) UNSIGNED NOT NULL,
  `prenume` varchar(50) NOT NULL,
  `nume` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `datanastere` date NOT NULL,
  `telefon` char(10) NOT NULL,
  `dataadaugare` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `jsusers` (`id`, `prenume`, `nume`, `email`, `datanastere`, `telefon`, `dataadaugare`) VALUES
(1, 'Ion', 'Ionescu', 'ion@demo.com', '2022-05-01', '0723232323', '2022-05-24 10:59:59'),
(2, 'Dan', 'Dobrescu', 'dan@test.ro', '2022-05-09', '0754354323', '2022-05-24 10:59:59'),
(3, 'Ana', 'Popescu', 'ana@ana.com', '2022-05-11', '0788888434', '2022-05-24 11:01:44'),
(4, 'Vali', 'Vasilescu', 'vali@vali.eu', '2022-05-15', '0755553333', '2022-05-24 11:01:44');

ALTER TABLE `jsusers`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email_unic` (`email`);
ALTER TABLE `jsusers`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
