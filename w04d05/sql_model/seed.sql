DROP TABLE IF EXISTS post;

-- rest the table
CREATE TABLE post (

	id SERIAL PRIMARY KEY,
	title VARCHAR,
	body TEXT

);



INSERT INTO post (title, body) VALUES ('Post 1', 'Body text 1');
INSERT INTO post (title, body) VALUES ('Post 1', 'Body text 2');
INSERT INTO post (title, body) VALUES ('Post 1', 'Body text 3');
INSERT INTO post (title, body) VALUES ('Post 1', 'Body text 4');
INSERT INTO post (title, body) VALUES ('Post 1', 'Body text 5');
