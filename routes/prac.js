function call(name) {
    return new Promise((resolve, reject)=> {
       setTimeout(()=> {
           console.log(name);
           resolve(name);
       }, 1000);
    });
}

function back() {
    return new Promise((resolve, reject)=> {
        setTimeout(()=> {
            console.log('back');
            resolve('back');
        }, 1000);
    })
}

function hell() {
    return new Promise((resolve, reject)=> {
        setTimeout(()=> {
            resolve('callback hell');
        }, 1000);
    })
}

// call('kim')
// .then((result)=> {
//     console.log(result + ' 반가워');
//     return back();
// })
// .then((result)=> {
//     console.log(result + ' 을 실행했구나');
//     return hell();
// })
//     .then((result)=> {
//         console.log('여기는 ' + result);
//     })

async function exec() {
    let name = await call('kim');
    console.log(name + ' 반가워');
    let a =await back();
    console.log(a + ' 을 실행했구나');
    let b = await hell();
    console.log('여기는 ' + b);
}

exec();