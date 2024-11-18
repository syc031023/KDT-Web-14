const nickObjs = {hello: "안녕", apple: "사과"};

// Object.values(): object에서 value만 뽑아서 배열로 만듦
console.log(Object.values(nickObjs));
// 배열 메서드
// 있으면 인덱스 없으면 -1 리턴
console.log(Object.values(nickObjs).indexOf("사과"));