const animals4 = [
    {name: 'lion', size: 'big'},
    {name: 'monkey', size: 'medium'},
    {name: 'dog', size: 'small'},
]

console.log(animals4);

const num = 10;

// if (num === 10) {
//     console.log('10 입니다.');
// }
// num === 10 과 == 두개의 차이! 
// === 데이터 타입까지 맞아야 함!

if (num < 10) {
    console.log('10보대 작습니다.');
} else if (num === 10) {
    console.log("10 같아요");
} else {
    console.log('10 보다 큽니다.');
}

// switch - case 

//const zoo = 'lion' 
for (let i = 0; i < animals4.length; i++) {
    const zoo = animals4[i].name
    switch (zoo) {
        case 'lion':
            console.log('사자입니다.');
            break;
        case 'monkey':
            console.log('멍키 입니다');
            break;
        default:
            console.log("동물이 아님");
            break;
    }
}

console.log('=================');

// loop 
for (let i = 0; i < animals4.length; i++) {
    console.log(animals4[i].name);
}

console.log('=================');

for (let ani of animals4) {
    console.log(ani.size);
}

console.log('=================');

let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}

