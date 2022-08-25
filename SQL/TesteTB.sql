CREATE TABLE tbl_autores (
 ID_Autor integer CONSTRAINT pk_id_autor PRIMARY KEY,
 Nome_Autor varchar(30) NOT NULL, 
 Sobrenome_Autor varchar(40) NOT NULL,
 Data_Nasc date
);

SELECT * FROM tbl_autores
values('30','afonso','silva','1990');