const item1 = 3000;
const item2 = 2000;
const item3 = 5000;

const loyalty = 3300;

// function
function showPrice(price) {
    return price + loyalty;
}

const price1 = showPrice(item1)
const price2 = showPrice(item2)
const price3 = showPrice(item3)

console.log(price1);
console.log(price2);
console.log(price3);


// 함수를 변수에 담기
const showPriceFn = function (p) {
    return p + loyalty;
}
console.log(showPriceFn(item1));

// 최신 자스 함수 축약형! 화살표 함수!!!
const showPfn = (price) => {
    console.log(price + loyalty);
}
showPfn(item3)


// 함수와 화살표 함수 차이! 윈도우 객체에서 있다!
// 일반형 함수는 윈도우 객체에 등록이 되는 반면, 축약형 화살표 함수는 윈도우에 등록 안됨!
// 그렇다면 일반 함수는 함수를 선언전 호출해도 정상작동! 반면에
// 화살표 함수는 작동이 안된다! 반드시 선언 뒤에 작성해야 한다!
//

// console.log(this);   //window 객체
const obj = {
    name: 'test',
    test1: function () {
        console.log(this);
    },
    test2: () => {
        console.log(this);
    }
}

// obj.test1();   // 테스트1 함수의 this는 윈도우가 아니라 obj 자체를 가리킴
// obj.test2();   // 윈도우를 가리킨다

const a = obj.test1;
const b = obj.test2;

a();    // 위 변수에 담은 방식과 그렇지 않은 방식에서 윈도우일수 잇고 아닐수도 잇다.
b();   // 위 어떤 방식으로 함수를 부르던 같은 방식으로 윈도우를 가리킴
// 이러한 혼동을 막기 위해 화살표 함수를 사용하는 이유가 여기서 나온다!