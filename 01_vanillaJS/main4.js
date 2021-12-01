const coronaCases = [
    {city: 'Seoul', case: 1000},
    {city: 'DaeJeon', case: 3000},
    {city: 'Daegu', case: 99000},
    {city: 'Busan', case: 200},
    {city: 'Gwangju', case: 100},
]

// 삼항 연산자

//const num3 = 10;

// 삼항연산자  (조건) ? 성립할떄 : 성림안할떄;
//num3 > 10 ? console.log(true) : console.log(false);;

// forEach, map reduce filter

// forEach  (원소, 인덱스)
// coronaCases.forEach(function (corona, index) {
//     console.log(corona, index);
// })


// map  : 어떠한 배열을 가공하여 새로운 형태로 배열을 만들때 사용

const coronaCities = coronaCases.map((corona) => {
    //console.log(corona);
    return `${corona.city}의 확진자 발생 수는 ${corona.case}입니다.`;
})

console.log(coronaCities);

//filter : 배열에서 특정한 값을 가진 데이터를 뽑을떄 사용
const dangerousCity = coronaCases.filter(function (corona, index) {
    return corona.case < 300;
})
console.log(dangerousCity);

// reduce : 배열의 값을 이용하여 특정 값을 도출하거나 재가공(합치거나 계산할떄 사용)
const numbers = [10, 20, 345, 22, 55];
const totalNumbers = numbers.reduce((acc, cur) => {
    console.log(acc, cur);
    return acc + cur
}, 0)
console.log(totalNumbers);

const totalCases = coronaCases.reduce((acc, cur) => {
    return acc + cur.case;
}, 0)
console.log(totalCases);