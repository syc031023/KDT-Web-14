// Tuple
let drink: [string, number];
drink = ["cola", 1];

// readonly는 데이터 변경할 수 없음
let drink3: readonly [string, number] = ["cola", 2500];

// Enum(열거형)
// 값들에 미리 이름을 정의하고 사용하는 타입
enum Auth {
    admin = 0,
    user = 1,
    guest = 2,
}

// Auth.admin, Auth.user, Auth.guest
// if(userType !== Auth.admin){
//     alert("관리자 권한이 없습니다.");
// }


enum Cake {
    choco,
    vanilla,
    strawberry,
}

console.log(Cake.choco); //0
console.log(Cake.vanilla); //1
console.log(Cake.strawberry); //2

//any(어떤 타입이든)
// 빈 배열을 먼저 선언하고 싶을 때
// 받아오는 데이터 타입이 확실하지 않을 때

// practice1

let olimpic_newgame: readonly [{}, boolean] = [
    {
        name: "쇼트트랙",
        type: "혼성 계주",
    },
    true,
]

// olimpic_newgame[1] = false;



// 사용자 정의 type
// interface

interface Student {
    name: string;
    grade: number;
    isPassed: boolean;
}

const student1:Student = {
    name: 'jh',
    grade: 2,
    isPassed: false,
}

// type

type Gender1 = "Female" | "male";
const gender:Gender1 = "Female";
// const gender2:Gender1 = "female"; => error


// practice 2

interface Game {
    title: string;
    price: number;
    desc?: string;
    category: string;
    platform: string;
}

let heroGame_A:Game = {
    title: 'DC 언체인드',
    price: 50000,
    desc: 'DC 히어로 & 빌런 각각은 개성은 물론, 액션의 재미까지',
    category: '액션',
    platform: '모바일'
}

let heroGame_B:Game = {
    title: 'MARVEL 퓨처파이트',
    price: 65000,
    category: '롤플레잉',
    platform: '모바일'
}

