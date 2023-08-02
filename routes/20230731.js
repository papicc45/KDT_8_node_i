// 구조분해
const lists = ['apple', 'grape'];


const [item1, item2] = lists; //웹브라우저 실행이 아닌 스크립트 단일 실행이면 타입 지정해줘야 함
console.log(item1, item2);
// 인텔리제이에서 위에것만 안됨..

//교환
// let x = 1, y = 3;
// [x, y] = [y, x];
// console.log(x, y);

//객체
// const Person = {
//     name: 'DongJun',
//     age: 27,
//     gender: 'M',
//     friends: ['Alex', 'Kevin'],
//     hello: () => {
//         console.log('hello');
//     },
//     "j-1": "America",
// }
//
// console.log(Person.name);
// console.log(Person['name']); //위와 같음
// Person.age = 29;
// console.log(Person.age);
// Person.hello();
// console.log(Person['j-1']) //키 값이 문자열일때 보통 사용(특수문자)
// Person.city = 'Seoul';  //객체 필드와 값 추가
// console.log(Person);
//
// //객체 구조분해
// const {name, city, gender, key1 = 'Hi'} = Person;  //동일한 키값을 가져옴
// console.log(name, city, gender, key1);
//
//
// //spread 연산자
// const a = [1, 2, 3];
// const b = [4, 5];
// const spread = [...a, ...b];
// console.log(spread);
//
// const c = [...'hello'];  //문자열은 인덱스단위 쪼개서 배열형식
// console.log(c);
//
// const person2 = {
//     name: 'DongJun',
//     age: 27,
// };
//
// console.log({...person2});
//
// console.log('--------------------------------');
//
// //rest
//
// function get(a, ...rest) {
//     console.log(a);
//     console.log(rest);
// }
//
// get(10, 20, 30, 40, 50);
//
// //클래스
//
// console.log('--------------------------------');
//
// class Cat {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//
//     mew() {
//         console.log('야옹');
//     }
//
//     eat() {
//         console.log('먹이를 먹습니다.');
//     }
// }
//
// const cat1 = new Cat('나비', 1);
// const cat2 = new Cat('길냥', 3);
// console.log(cat1);
// cat1.mew();
//
