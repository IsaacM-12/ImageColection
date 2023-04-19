-- Solo para h2 DEBE DESCOMENTARLO
--
-- insert into Image(id,description,url) values(1,'description','url');
-- insert into Image(id,description,url) values(2,'description2','url2');





-- ----------------------------------------------------------
-- MYSQL LO QUE DEBE CORRER EN LA BASE MYSQL
-- ----------------------------------------------------------

-- create database galery;
-- use galery;
--
-- --------------------------------- --------
-- -- -- TABLES
-- -- ---------------------------------------
--
-- CREATE TABLE image (
--                        id VARCHAR(100) PRIMARY KEY,
--                        description VARCHAR(500) NOT NULL,
--                        url VARCHAR(500) NOT NULL,
--                        upload_date TIMESTAMP not null DEFAULT NOW(),
--                        keywords VARCHAR(500),
--                        author_id VARCHAR(100) NOT NULL,
--                        owner_id VARCHAR(100),
--                        license ENUM('CC BY', 'CC BY-SA', 'CC BY-ND', 'CC BY-NC', 'CC BY-NC-SA', 'CC BY-NC-ND') not null
-- );
--
-- CREATE TABLE Person (
--                         id VARCHAR(100) PRIMARY KEY,
--                         name VARCHAR(100) NOT NULL,
--                         country VARCHAR(100) NOT NULL,
--                         phone VARCHAR(50) NOT NULL,
--                         email VARCHAR(100) NOT NULL,
--                         last_name VARCHAR(100) NOT NULL
-- );
--
-- CREATE TABLE Institution (
--                              id VARCHAR(100) PRIMARY KEY,
--                              name VARCHAR(100) NOT NULL,
--                              country VARCHAR(100) NOT NULL,
--                              phone VARCHAR(50) NOT NULL,
--                              email VARCHAR(100) NOT NULL,
--                              website VARCHAR(100) NOT NULL
-- );
--
-- --------------------------------- --------
-- -- -- PROCEDURES
-- -- ---------------------------------------
--
-- delimiter //
-- CREATE PROCEDURE searchByKeyWords(IN keyWord VARCHAR(255))
-- BEGIN
-- SELECT * FROM image WHERE description LIKE CONCAT('%', keyWord, '%');
-- END//
