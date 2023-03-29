/*
const a = new Date();
console.log(a.getFullYear());

const b = {
  year : 2023,
  month: 3,
  day : 29
}
//직접 새긴 값, literal.
//직접 지정하지 않는 한 변경하기 쉽지 않다.(유지보수성 X)

function  User(id, name, password, email) {
  this.id = id;
  this.name = name;
  this.password = password;
  this.email = email;
}

const cdg = new User(0001, "DGC", "isthispw?", "email@email.com");
console.log(cdg);

//생성자 함수에 매우 가까운 작성법

function c(year, month, day) {
  return {
    year : year,
    month : month,
    day : day,
  }
}

//return이 객체기에 가능한 사용법
//아래와 같이 작성할 경우, 바꿔 넣기만 하면 수정이 가능하다.
//참고로 아래의 C 생성자 함수 형태의 return이 없는데도 객체를 받았다.
//const test = c(2023,3,29).year;
//console.log(test);

//자 이제 진짜 생성자 함수다!
function c(year, month, day) {
  this.year = year;
  this.month = month;
  this.day = day;
}
*/
//fs 사용해보기
const fs = require('fs');
//회원가입의 형태로 class 만들기
function user(id, password, email){
  this.id = id;
  this.password = password;
  this.email = email;
}
const d = new user('afkmaster','12345',"hello@email.com")
const e = new user('shopmaster','12345',"welcome@email.com")
const f = new user('attackmaster','12345',"bye@email.com")
console.log(d);
console.log(e);
console.log(f);

let names = ["김국진","김용만","김대건"];
let passwords = ["1234","2345","3456"];
let emails = ["김국진@email.com", "김용만@email.com","kimdaegun@email.com"]

let members = [];
for(let i = 0; i < 3; i++) {
  members.push(new user(names[i], passwords[i], emails[i]));
}
fs.writeFileSync("members.JSON", JSON.stringify(members, null, 4), "utf8");
console.dir(members);
