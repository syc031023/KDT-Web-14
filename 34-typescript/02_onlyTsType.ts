//// 2. Type
type Bp1 = 500 | 700 | 1000;
// enum Bp2 = {
//     SM = 500,
//     MD = 700,
//     LG = 1000
// }

const width: Bp1 = 1000;
// const width2: Bp2 = Bp2.SM;

// 교차 타입: 두개 이상의 타입을 합치는 것
interface Toy {
    name: string;
    start(): void;
}

interface Car {
    name: string,
    color: string;
    price: number;
}

type ToyCar = Toy & Car;

const toyCar: ToyCar = {
    name: "tayo",
    start() {
        console.log("출발");
    },
    color: "blue",
    price: 5000,
}

type Gender = "F" | "M";
type Person = {
    name: string;
    age?: number;
    like?: string[];
    gender: Gender;
}