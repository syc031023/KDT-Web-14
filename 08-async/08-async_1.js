// console.log(1);
// setTimeout(function(){
//     console.log(2);
    
// }, 2000); 
// //2초 기다리고 실행
// console.log(3);
// // 1 -> 3 -> 2 (비동기 특성때문)



// ex. 편의점에 가서 음료수를 사고 나오는 상황
// function goMart(){
//     console.log("마트에 가서 어떤 음료를 살지 고민이다.");
// }

// function pickDrink(){
//     //3초 기다린 후에 코드 실행
//     setTimeout(function(){
//         console.log("고민끝!");
//         product = "제로콜리";
//         price = 2000;
//     }, 3000)
// }

// function pay(product, price){
//     console.log(`상품명: ${this.product}, 가격: ${this.price}`);
// }

// let product;
// let price;

// goMart();
// pickDrink();
// pay(product, price);


function goMart(){
    console.log("마트에 가서 어떤 음료를 살지 고민이다.");
}

function pickDrink(callback){
    //3초 기다린 후에 코드 실행
    setTimeout(function(){
        console.log("고민끝!");
        product = "제로콜라";
        price = 2000;
        callback(product, price)  //pickDrink(pay) -> 함수 내에서 pay 함수 실행됨
    }, 3000)
}

function pay(product, price){
    console.log(`상품명: ${product}, 가격: ${price}`);
}

let product;
let price;

goMart();
pickDrink(pay);
// pay(product, price);