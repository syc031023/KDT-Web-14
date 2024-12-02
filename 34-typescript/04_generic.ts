// generic
// 선언을 할 때 타입을 지정하기 어려운 케이스가 존재
// = 데이터 타입을 외부에서 지정 = 생성 시점에 타입을 명시 = 타입을 변수처럼 사용
// => 재사용성 증가
// <T> 형태로 주로 사용 (T, U, V, ...)

function numArrLen(arr: number[]): number {
    return arr.length;
}

function strArrLen(arr: string[]): number {
    return arr.length;
}

numArrLen([1, 2, 3]);
// numArrLen(['ad']) -> error

// <T>를 이용해서 매개변수를 선언하는 공간을 하나 더 만듦
function arrLen<T>(arr: T[]) {
    return arr.length;
}
arrLen([1, 2, 3]);
arrLen(['1', '2', '3']);
arrLen<string | number>(["일", 2]);

// 퀴즈
// 두 개의 매개변수를 넘겨 받아서 콘솔로 출력하는 함수 generic 이용해 만들고 호출
function printSome<T>(x:T, y:T){
    console.log(x, y);
}
printSome<string[]>(["hi"], ["hello"]);
printSome(1, 2);


///////////////////////
// interface와 generic
interface Phone<T> {
    company: string;
    createdAt: Date;
    option: T;
};

type iphoneOption = {
    color: string;
    storage: number;
};

const iphone16: Phone<iphoneOption> = {
    company: "apple",
    createdAt: new Date("2024-11-01"),
    option: {
        color: "pink",
        storage: 256,
    },
};

type galaxyOption = {
    color: string;
    isBuz: boolean;
};