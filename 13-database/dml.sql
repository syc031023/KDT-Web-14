CREATE TABLE customer (
    custid CHAR(10) PRIMARY KEY,
    custname VARCHAR(10) NOT NULL,
    addr CHAR(10) NOT NULL,
    phone CHAR(11),
    birth DATE
);

create table orders (
	orderid int primary key auto_increment,
    custid char(10) not null, -- FK
    prodname char(6) not null,
    price int not null,
    amount smallint not null,
    foreign key (custid) references customer(custid) on update cascade on delete cascade
);
-- 외래키 제약 조건
-- 두 테이블 사이의 관계를 맺음
-- 기준 테이블: 기본키를 갖는 테이블 (customer)
-- 참조 테이블: 외래키가 있는 테이블 (orders)
-- 형식: foreign key (열 이름) references 기준_테이블(열 이름)
-- on update cascade: 기준 테이블의 데이터가 변경되면 참조 테이블의 데이터도 변경
-- on delete cascade: 기준 테이블의 데이터가 삭제되면 참조 테이블의 데이터도 삭제

-- 테이블 삭제 순서 !
-- customer, orders 테이블이 customer, custid를 기준으로 "관계" 맺음
-- customer 테이블에 존재하는 회원만 orders 테이블에 데이터로 추가될 수 있음
-- 만약 orders 테이블이 있는데, customer 테이블을 삭제하면 ?
-- pk - fk 연결된 테이블은 외래키가 설정됨 테이블(참조 테이블)이 먼저 삭제되어야 함


-- < INSERT >
INSERT INTO customer (custid, custname, addr, phone, birth) VALUES
('lucky', "강해원", "미국 뉴욕", 01022223333, '2003-02-10');

INSERT INTO customer (addr, phone, birth, custid, custname) VALUES
('대한민국 부산', 01033334444, '2001-01-07', 'wow', '이지은');

INSERT INTO customer VALUES ('happy', '최시은', '일본 오키나와', 01044445555, '2000-09-07');

-- 여러 튜플 추가
INSERT INTO customer (custid, custname, addr, phone, birth) VALUES
('lu', "강해원", "미국 뉴욕", 01022223333, '2003-02-10'),
('대한민국 부산', 01033334444, '2001-01-07', 'w', '이지은'),
('ha', '최시은', '일본 오키나와', 01044445555, '2000-09-07');

-- UPDATE 수정
-- custid가 happy 인 고객의 주소를 대한민국 서울로 변경
UPDATE customer SET addr = '대한민국 서울' WHERE custid = 'happy';

-- DELETE 삭제
-- custid가 happy인 고객의 정보를 테이블에서 삭제
DELETE from customer WHERE custid = 'happy'; 

-- SELECT 조회
SELECT * FROM customer; -- '*' 와일드 카드

-- 모든 고객의 아이디를 검색
SELECT custid FROM customer;

-- 모든 고객의 아이디와 생년월일 검색
SELECT custid, birth FROM customer;

-- 고객 테이블에 있는 모든 주소를 검색, 중복 제거
SELECT DISTINCT addr FROM customer;

-- < WHERE 조건 >
-- 비교: =, <, >, <=, >=
-- 범위: BETWEEN
-- 집합: IN, NOT IN
-- 패턴: LIKE
-- NULL: IS NULL: IS NOT NULL
-- 복합조건: AND, OR, NOT

-- 비교
-- 고객이름이 강해린인 고객의 생일 검색
SELECT birth FROM customer WHERE custname = '강해린';

-- 고객이름이 강해린이 아닌 고객의 생일 검색
SELECT birth FROM customer WHERE custname != '강해린';

-- 사전순으로 박민지보다 뒤에 위치한 고객의 모든 정보 검색
select * from customer where custname > '박민지';


-- 범위
-- 1995년 이상 2000년 이하 출생 고객 검색
SELECT * FROM customer WHERE birth BETWEEN '1995-01-01' AND '2000-12-31';
SELECT * FROM customer WHERE birth >= '1995-01-01' AND birth <= '2000-12-31';


-- 집합
-- 주소가 서울 혹은 런던인 고객 검색
SELECT * FROM customer WHERE addr IN ("대한민국 서울", "영국 런던");
SELECT * FROM customer WHERE addr = "대한민국 서울" or addr = "영국 런던";

-- 주소가 서울 혹은 런던이 아닌 고객 검색
SELECT * FROM customer WHERE addr NOT IN ("대한민국 서울", "영국 런던");


-- 패턴
-- 주소가 미국 로스앤젤레스인 고객을 검색
SELECT * FROM customer WHERE addr LIKE '미국 로스앤젤레스';

-- 주소에 미국이라는 문자열이 포함되어 있는 고객 검색
SELECT * FROM customer WHERE addr LIKE '미국%';

-- 고객 이름의 두 번째 글자가 '지'인 고객 검색
SELECT * FROM customer WHERE custname LIKE '_지%';

-- 고객 이름의 세 번쨰 글자가 '수'인 고객 검색
SELECT * FROM customer WHERE custname LIKE '__수%';

-- 복합조건
-- 주소지가 대한민국이고, 2000년생 이후 출생 고객 검색
SELECT * FROM customer WHERE addr LIKE '대한민국%' AND birth >= '2000-01-01';

-- 주소지가 미국이거나 영국인 고객 검색
SELECT * FROM customer WHERE addr LIKE '미국%' OR addr LIKE '영국%';

-- 휴대폰 번호 마지막 자리가 4가 아닌 고객 검색
SELECT * FROM customer WHERE phone NOT LIKE '%4';


-- < ORDER BY >
-- order by 없음: pk 기준으로 오름차순 정렬

SELECT * FROM customer ORDER BY custname;
SELECT * FROM customer ORDER BY custname DESC;

-- where절과 order by 같이 사용 (이때 where보다 Orderby가 뒤에 위치해야 함)
-- 2000년생 이후 출생자 중에서 주소를 기준으로 내림차순 검색
SELECT * FROM customer WHERE birth >= '2000-01-01' ORDER BY addr DESC;

-- 2000년생 이후 출생자 중에서 주소를 기준으로 내림차순 그리고 아이디를 기준으로 내림차순 검색
SELECT * FROM customer WHERE birth >= '2000-01-01' ORDER BY addr DESC, custid DESC;


-- < LIMIT >
-- 행의 개수 제한
SELECT * FROM customer WHERE birth >= '2000-01-01' LIMIT 2;


-- < 집계 함수 >
-- 계산하여 어떤 값을 리턴하는 함수
-- group by 절과 함께 쓰이는 케이스가 많음

-- 주문 테이블에서 상품의 총 판매 개수 검색
SELECT SUM(amount) FROM orders; 

-- 주문 테이블에서 상품의 총 판매 개수 검색 + 의미있는 열 이름으로 변경
SELECT SUM(amount) as "total amount" FROM orders; 

-- 주문 테이블에서 총 판매 개수, 평균 판매 개수, 최저가, 최고가 검색
SELECT 
SUM(amount) as "total amount", 
AVG(amount) as "average", 
MIN(price) as "min_price", 
MAX(price) as "max_price" 
from orders;