// math2 module
// 하나의 파일에 여려개 모듈

const add = (a, b) => a+b;
const PI = 3.141592;

// case 1. 객체로 감싸서 내보내기
module.exports = {
    add: add,
    PI: PI,
};