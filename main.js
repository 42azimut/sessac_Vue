// var, let, const

// String, Number, boolean, null, undefiend

const name = "Jayden";
let age = 33;
const isMale = true;
const isFemale = false;
let money = null;
let girlFriend = undefined;

console.log(typeof girlFriend);

console.log(name, age, isMale);

console.log(`my name is ${name} and i am ${age} it ok??`);

const animal = "tiger";
console.log(animal.substr(1, 3));  // 1번 인덱스 에서 3개 문자열 
console.log(animal.substring(0, 2)); // 0 부터 2번 인덱스 까지 문자열

let fruits = "사과, 딸기, 토마토";
console.log(fruits);
fruits = fruits.split(", ");   //object 배열 형태로 변환!
console.log(fruits);
console.log(fruits[2]);