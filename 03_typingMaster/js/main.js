const wordInput = document.querySelector("#word-input");
const currentWord = document.querySelector("#current-word");
const scoreDisplay = document.querySelector("#score");
const timeDisplay = document.querySelector("#time");
const messageDisplay = document.querySelector("#message");

const GAME_TIME = 5;   //변하지 않는 수_컨벤션 언더스코어 사용!

const API_URL = "https://random-word-api.herokuapp.com/word?number=100";
//let words = ["banana", "key", "car", "python", "azimut"];
let words = [];
let score = 0;  //점수 초기화
let time = 0;
let timeInterval;
let isPlaying = false;
let isReady = false;

init()

// promse 방식(1) 순서대로 진행! 아래와 같은 기능!
// function init() {
//   const res = fetch(API_URL)
//     .then((res) => { return res.json() })
//     .then((data) => words = data);
//   console.log(res);
// }

// async await 방식(2)  << 최근 많이 사용하는 추세!
async function init() {
  const res = await fetch(API_URL);
  const data = await res.json();
  words = data.filter(item => item.length < 7)
  isReady = true;
  console.log(words);
}



wordInput.addEventListener("input", (e) => {
  const typedText = e.target.value;
  const currentText = currentWord.innerText;
  if (typedText.toUpperCase() === currentText.toUpperCase() && isReady){
    addScore()
    setNewWord()
  }
})

//게임 종료
function gameover() {
  isPlaying = false;
  clearInterval(timeInterval)
  timeInterval = null;
  messageDisplay.innerText = "GAME OVER!!";
  scoreDisplay.innerText = 0;
}

// 시간 카운트 다운
function countDown() {
  //console.log(time);
  time = time - 1;
  timeDisplay.innerText = time;
  if (time === 0) {
    gameover();
  }
}

function setNewWord() {
  time = GAME_TIME;
  wordInput.value = "";
  messageDisplay.innerText = "Now Playing!!!";
  const randomIndex = Math.floor(Math.random() * words.length);
  currentWord.innerText = words[randomIndex];

  if (!isPlaying) {
    timeInterval = setInterval(countDown, 1000)
    isPlaying = true;
  }

}
//Math.floor()  //소수점 내림

function addScore() {
  score = score + 1;
  scoreDisplay.innerText = score;
}

