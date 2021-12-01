// 객체지향 연습 -인스턴스

// function Song(singer, title, release) {
//     this.singer = singer;
//     this.title = title;
//     this.release = new Date(release);  //시스템 날짜로 사용!
//     this.getReleaseDay = function () {
//         return this.release.getDay()
//     }
//     //console.log(this);  // this는 윈도우를 가리킴!
// }

// Song.prototype.getInfo = function () {
//         return `이 노래는 ${this.singer}의 노래이고, 제목은 ${this.title} 입니다.`;
// }

// const song1 = Song(); // this는 윈도우를 가리킴!
// const song2 = new Song("bts", 'DNA', '2017-10-24'); // 인스턴스 this가 가리킴 떠ㅏ라서 new를 사용하여 인스턴스화 시킴!
// const song3 = new Song('black pink', 'nanana', '2020-2-15');

// console.log(song2.release.getDate());

// console.log(song3.getReleaseDay());

// console.log(song3.getInfo());

// console.log(song2);

// console.log(song2.getInfo);


// class 사용  ==> 위와 신택스 만 다르고 완전히 같은 기능!
class Song {
  constructor(singer, title, release) {
  this.singer = singer;
  this.title = title;
  this.release = new Date(release);
}
  getInfo() {
    return `이 노래는 ${this.singer}의 노래이고, 제목은 ${this.title} 입니다.`;
  }
  getReleaseDay() {
    return this.release.getDay();
  }
}

// 인스턴스화!
const song2 = new Song("bts", 'DNA', '2017-10-24'); // 인스턴스 this가 가리킴 떠ㅏ라서 new를 사용하여 인스턴스화 시킴!
const song3 = new Song('black pink', 'nanana', '2020-2-15');

console.log(song2, song3);