CREATE TABLE visitor (
    id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(10) NOT NULL,
    comment mediumtext 
);

INSERT INTO visitor (name, comment) VALUES ('홍길동', '내가왔다');
INSERT INTO visitor (name, comment) VALUES ('이찬혁', '으라차차');


-- user 생성
CREATE USER 'user'@'localhost' identified by '1234';
-- user 계정에 DB 권한 부여 (모든 DB에 접근 가능하도록)
GRANT ALL PRIVILAGES ON *.* TO 'user'@'localhost' WITH GRANT OPTION;