function call(name){
    return new Promise((resolve, reject) =>{
        setTimeout(function (){
            console.log(name);
            resolve(name);
        }, 3000);
    });
}

function back(){
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log('back');
            resolve('back');
        }, 3000);
    });
}

function hell(){
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            resolve('callback hell');
        },3000);
    });
}

// call('kim')
// .then((name) => {
//     console.log(name + '반가워');
//     return back();
// })
// .then((txt) => {
//     console.log(txt + '을 실행했구나');
//     return hell();
// })
// .then((message) => {
//     console.log(('여기는' + message)); 
// });

async function exec(){
    let name = await call('kim');
    console.log(name + '반가워');

    let txt = await back();
    console.log(txt + '을 실행했구나');

    let message = await hell();
    console.log(('여기는' + message)); 
}

exec();