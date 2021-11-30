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

const animal2 = "tiger";
console.log(animal2.substr(1, 3));  // 1번 인덱스 에서 3개 문자열 
console.log(animal2.substring(0, 2)); // 0 부터 2번 인덱스 까지 문자열

let fruits = "사과, 딸기, 토마토";
console.log(fruits);
fruits = fruits.split(", ");   //object 배열 형태로 변환!
console.log(fruits);
console.log(fruits[2]);


// array
const animals = ["lion", "tiger", "rabbit", "dragon"];
animals.push('elephant')  // push 마지막에 넣기

animals.unshift('dog')  // unshift 맨 앞에 넣기

animals.pop()   //값 뺄때 배열 뒤에서 부터 1개 빠짐!
animals.pop()   
animals.pop()   

console.log(animals);

const stars = "jay, jane, kay, kyler, trumph";
isArray = Array.isArray(stars)  //배열 인가 아닌가에 땨라 실행해라 조건문 사용!

console.log(isArray);

console.log(stars.indexOf('jane'));

// array 연습
const animals3 = ["lion", "tiger", "rabbit", "dragon", "cat", "zebra"];

//ani = animals3.splice(0, 3);  //0 부터 3 개의 원소를 뽑아냄! 
//console.log(ani);
//console.log(animals3);

//indexOf_animals3 = animals3.splice(animals3.indexOf("tiger"), 2)
//console.log(indexOf_animals3);


// splice   배열 자체를 바꿈
// slice    배열 바꾸지 않고 값을 반환!!!!
let ani3 = animals3.slice(2, 4)  // 2번 인덱스에서 4번 인덱스 전까지
console.log(ani3);


// 객체 object    {속성: "값", ...} 
const monkey = {
    name: 'kiki',
    age: 5,
    weight: 40,
    gender: "male",
    isCute: true,
    food: ["banana", "carrot", "potato"],
    home: {
        location: "zoo",
        size: "big",
        price: 3000,
    }
}

console.log(monkey);
console.log(monkey["name"]);  //이거 보다는 아래로 접근!
console.log(monkey.name);
console.log(monkey.age);
console.log(monkey.food[2]);
console.log(monkey.home.size);
monkey.gender = 'female'
console.log(monkey);
monkey.home.size = "medium"
// ** 객체 값만 바꾸기 때문에 const 에서 값을 변경가능하다! 그 객체 자체를 {} 를 변경은 안된다


// json  (javscirpt object notation)
console.log(monkey);
const monkeyJSON = JSON.stringify(monkey);   //json 형태로 변경!
console.log(monkeyJSON);

// 위  json 형태에서 다시 객체로 변경하려면 파싱 parse()
const parsedJSON = JSON.parse(monkeyJSON);
console.log(parsedJSON);


