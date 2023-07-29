// function promise1(flag) {
//     return new Promise((resolve, reject)=> {
//        if(flag) {
//            resolve('promise 상태는 fulfilled, then으로 연결,  이때 flug값은 true');
//        }  else {
//            reject('promise 상태는 rejected, catch로 연결, 이때 fulg값은 false');
//        }
//     });
// }
// console.log(promise1(false));

// promise1(false)
//     .then((result)=> {
//     console.log(result);
//     })
// .catch((error)=> {
//     console.log(error);
// });

// ######################
// Promise 체이닝

//  체이닝 사용 안한 경우

function add(n1, n2) {
    return new Promise((resolve, reject)=> {
        setTimeout(()=> {
            let result = n1 + n2;
            resolve(result);
        }, 1000);
    });
}

function  mul(n) {
    return new Promise((resolve, reject)=> {
        setTimeout(()=> {
            let result = n * 2;
            resolve(result);
        }, 700);
    });

}

function sub(n) {
    return new Promise((resolve, reject)=> {
        setTimeout(()=> {
            let result = n - 1;
           // resolve(result);
            reject(new Error('에러 처리'));
        }, 500);
    });
}

add(4, 3)
    .then((result)=> {
    console.log('1 : ' + result);
    return mul(result);
    })
    .then((result)=> {
        console.log('2 : ' + result);
        return sub(result);
    })
    .then((result)=> {
    console.log('3 : ' + result);
    })
    .catch((err)=> {
        console.log(err);
    })