// bcrypt
// : 비밀번호 암호화하는 알고리즘 중 하나
// : 주로 강력한 보안 필요할 때 사용
// : blowfish 암호를 기반으로 설계된 단방향 암호화 함수

const bcrypt = require("bcrypt");

const originalPw = '1234';
const saltRounds = 10; // 솔트 라운드 수를 정의

// 1. 비밀번호 해싱 함수
function hashPassword(password) {
    return bcrypt.hashSync(password, saltRounds); // salt 자동 생성
}

// 2. 원본 비밀번호와 해시된 비밀번호가 일치하는지 확인하는 함수
function comparePassword(password, hashedPw){
    return bcrypt.compareSync(password, hashedPw);
}


// 사용 예제
// 원본 비밀번호를 해싱한 결과
const hashedPw = hashPassword(originalPw);
console.log(`Hashed Password: ${hashedPw}`);

// 원본 비밀번호와 해시된 비밀번호가 일치하는지 확인
const isMatch1 = comparePassword(originalPw, hashedPw);
console.log(`비밀번호 일치: ${isMatch1}`);

const isMatch2 = comparePassword("ABCD", hashedPw);
console.log(`비밀번호 일치: ${isMatch2}`);

