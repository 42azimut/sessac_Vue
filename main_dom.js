// DOM Document Object Model

// const title = document.getElementById('title');   //id 값을 가져옴
// const list = document.getElementsByClassName('list');  // class 들만 가져옴

// querySelector  ==> 구분없이 값을 가져옴  -- 인자를 # 과 . 으로 구분한다!
const title = document.querySelector("#title");
const list = document.querySelector(".list");
const items = document.querySelectorAll(".item");
const btn = document.querySelector("#btn");
const naver = document.querySelector(".naver");


// title.style.color = 'red'
// btn.innerText = 'button';
// title.style.backgroundColor = 'green';
// title.innerHTML = "<input type='text' />"

// // list.remvoe();
// list.firstElementChild.remove();
// list.lastElementChild.innerHTML = "<a>link</a>";

// btn.addEventListener("행위", "작동");
btn.addEventListener("click", function () {
  alert("홍콩반점");
});

naver.addEventListener("click", (e) => {
  e.preventDefault();  //페이지 이동을 문법을 => 디폴트(안하게함)
  console.log(e);
  alert("naver gogogo!");
})