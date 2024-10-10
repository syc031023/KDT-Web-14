// math module
// 하나의 파일에 한 개 정의

// add 더하기 함수 정의
const add = (a, b) => a + b;

// add 라는 함수를 다른 js 파일에서 쓸 수 있도록 내보내기
module.exports = add;

