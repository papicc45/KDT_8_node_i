//async , await

//구조
//함수 앖에 async 키워드 붙이기
//비동기처리 메서드 앞에 await 붙이기(기다려줄 것)
//async, await 항상 같이쓰기

let product;
let price;
exec();

function goMart() {
    console.log('마트에 와서 어떤 음료 마실까?');
}

function pickDrink() {
    return new Promise((resolve, reject)=> {
        setTimeout(()=> {
            console.log('고민 끝 !!');
            product = '제로콜라';
            price = 2000;
            resolve();
        }, 2000);
    })
}

function pay() {
    console.log(`상품 명 : ${product}, 가격 : ${price}`);
}

async function exec() {
    goMart();   //1번으로 실행
    await pickDrink();
    pay();
}