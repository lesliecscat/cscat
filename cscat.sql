SET NAMES UTF8;
DROP DATABASE IF EXISTS cs;
CREATE DATABASE cs CHARSET=UTF8;
USE cs;
CREATE TABLE cs_user(
    uid INT PRIMARY KEY AUTO_INCREMENT,
    uname VARCHAR(32),
    upwd VARCHAR(32),
    phone VARCHAR(16)                     
);
INSERT INTO cs_user VALUES(null,"cat","123456","18525303902");
INSERT INTO cs_user VALUES(null,"leslie","12345678","15016748213");
INSERT INTO cs_user VALUES(null,"liuhuan","123456123","15836478846");
INSERT INTO cs_user VALUES(null,"huijie","123456","15939081319");
CREATE TABLE cs_evalue(
    uname VARCHAR(32),
    ucontent VARCHAR(256)               
);
CREATE TABLE cs_list(
        lid INT PRIMARY KEY AUTO_INCREMENT,
        title VARCHAR(128),
        pic VARCHAR(128),
        price DECIMAL(6,2)
);
INSERT INTO cs_list VALUES(null,"Lorem ipsum dolor sit amet consectetur","images/glist1.jpg",1200.00);
INSERT INTO cs_list VALUES(null,"Lorem ipsum dolor sit amet consectetur","images/glist2.jpg",1200.00);
INSERT INTO cs_list VALUES(null,"Lorem ipsum dolor sit amet consectetur","images/glist3.jpg",1200.00);
INSERT INTO cs_list VALUES(null,"Lorem ipsum dolor sit amet consectetur","images/glist4.jpg",1200.00);
INSERT INTO cs_list VALUES(null,"Lorem ipsum dolor sit amet consectetur","images/glist10.jpg",1200.00);
INSERT INTO cs_list VALUES(null,"Lorem ipsum dolor sit amet consectetur","images/glist6.jpg",1200.00);
INSERT INTO cs_list VALUES(null,"Lorem ipsum dolor sit amet consectetur","images/glist7.jpg",1200.00);
INSERT INTO cs_list VALUES(null,"Lorem ipsum dolor sit amet consectetur","images/glist8.jpg",1200.00);
INSERT INTO cs_list VALUES(null,"Lorem ipsum dolor sit amet consectetur","images/glist9.jpg",1200.00);
INSERT INTO cs_list VALUES(null,"Lorem ipsum dolor sit amet consectetur","images/glist9.jpg",1200.00);
INSERT INTO cs_list VALUES(null,"Lorem ipsum dolor sit amet consectetur","images/glist8.jpg",1200.00);
INSERT INTO cs_list VALUES(null,"Lorem ipsum dolor sit amet consectetur","images/glist7.jpg",1200.00);
INSERT INTO cs_list VALUES(null,"Lorem ipsum dolor sit amet consectetur","images/glist6.jpg",1200.00);
INSERT INTO cs_list VALUES(null,"Lorem ipsum dolor sit amet consectetur","images/glist10.jpg",1200.00);
INSERT INTO cs_list VALUES(null,"Lorem ipsum dolor sit amet consectetur","images/glist4.jpg",1200.00);
INSERT INTO cs_list VALUES(null,"Lorem ipsum dolor sit amet consectetur","images/glist3.jpg",1200.00);
INSERT INTO cs_list VALUES(null,"Lorem ipsum dolor sit amet consectetur","images/glist2.jpg",1200.00);
INSERT INTO cs_list VALUES(null,"Lorem ipsum dolor sit amet consectetur","images/glist1.jpg",1200.00);
INSERT INTO cs_list VALUES(null,"Lorem ipsum dolor sit amet consectetur","images/glist1.jpg",1200.00);
INSERT INTO cs_list VALUES(null,"Lorem ipsum dolor sit amet consectetur","images/glist2.jpg",1200.00);
INSERT INTO cs_list VALUES(null,"Lorem ipsum dolor sit amet consectetur","images/glist3.jpg",1200.00);
INSERT INTO cs_list VALUES(null,"Lorem ipsum dolor sit amet consectetur","images/glist4.jpg",1200.00);
INSERT INTO cs_list VALUES(null,"Lorem ipsum dolor sit amet consectetur","images/glist10.jpg",1200.00);
INSERT INTO cs_list VALUES(null,"Lorem ipsum dolor sit amet consectetur","images/glist6.jpg",1200.00);
INSERT INTO cs_list VALUES(null,"Lorem ipsum dolor sit amet consectetur","images/glist7.jpg",1200.00);
INSERT INTO cs_list VALUES(null,"Lorem ipsum dolor sit amet consectetur","images/glist8.jpg",1200.00);
INSERT INTO cs_list VALUES(null,"Lorem ipsum dolor sit amet consectetur","images/glist9.jpg",1200.00);
INSERT INTO cs_list VALUES(null,"Lorem ipsum dolor sit amet consectetur","images/glist9.jpg",1200.00);
INSERT INTO cs_list VALUES(null,"Lorem ipsum dolor sit amet consectetur","images/glist8.jpg",1200.00);
INSERT INTO cs_list VALUES(null,"Lorem ipsum dolor sit amet consectetur","images/glist7.jpg",1200.00);
INSERT INTO cs_list VALUES(null,"Lorem ipsum dolor sit amet consectetur","images/glist6.jpg",1200.00);
INSERT INTO cs_list VALUES(null,"Lorem ipsum dolor sit amet consectetur","images/glist10.jpg",1200.00);
INSERT INTO cs_list VALUES(null,"Lorem ipsum dolor sit amet consectetur","images/glist4.jpg",1200.00);
INSERT INTO cs_list VALUES(null,"Lorem ipsum dolor sit amet consectetur","images/glist3.jpg",1200.00);
INSERT INTO cs_list VALUES(null,"Lorem ipsum dolor sit amet consectetur","images/glist2.jpg",1200.00);
INSERT INTO cs_list VALUES(null,"Lorem ipsum dolor sit amet consectetur","images/glist1.jpg",1200.00);