function changeColor(color){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve(); //반환값이 필요없기 때문에 아무 매개변수 안넣음
        }, 1000);
    });
}

async function exec(){
    await changeColor('red');
    await changeColor('orange');
    await changeColor('yellow');
    await changeColor('green');
    await changeColor('blue');
}

exec();
