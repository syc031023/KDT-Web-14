// math 모듈 불러와서 사용

// const add = require("./03_math");
// console.log(add(5, 7));

// 한 개만 불러올 경우 이름 달라도 상관없음
const hello = require("./03_math");
console.log(hello(3, 4));

/////////////////////////
// math2 모듈 불러오기
const math2 = require("./05_math2"); // 객체 형태로 담긴 math2
console.log(math2.add(3, 4))
console.log(math2.PI);

// 구조분해할당
const {add, PI} = require("./05_math2");
console.log(add(5, 6));
console.log(PI);



