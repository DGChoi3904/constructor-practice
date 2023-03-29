const studentList = [
  "강지민",
  "곽윤호",
  "권예준",
  "김동주",
  "김은아",
  "김종윤",
  "김지섭",
  "김형진",
  "노수민",
  "류은이",
  "박달재",
  "박수연",
  "박준형",
  "성해경",
  "이경택",
  "이세민",
  "이재권",
  "임지성",
  "장루빈",
  "정성철",
  "정지은",
  "정희은",
  "최대건",
  "한유진",
  "허진",
];
/*
const example = {
  order:0,
  name: "강지민"
}
// ? 생성자 함수 방식
//규격화한 사용자 객체형태로 찍어내는 방식.
function student (order, name) {
  this.order = order;
  this.name = name;
  //setter 정의(이건 좀더 파악이 필요하다.)
  function order(order) {
    if(typeof(order) === "number") {
      return this._order;
    }
  }
}
// ? 객체 리턴 방식
// 이 경우 규격이 정해지지 않은 객체로서 반환된다. 
function makeObject (order, name) {
  if(typeof(order) === "number"){
    return {
      order: order,
      name: name
    }
  }else{
    console.error(`${order}는 숫자형이어야 합니다.`)
  }
}
const stdList = [];
let count = 0;
studentList.forEach(value=>{
  stdList.push(new student(count, value))
  count++;
})

console.dir(stdList);
console.log(typeof (stdList[0]) === typeof (example));
*/
//Java식 클래스 방식 정의
class User {
  constructor(order, name){
    this.order = order;
    this.name = name;
  }
  set order(order) {
    if(typeof (order) === "number"){
      this._order = order;
    }
  }
}
let test = [];
studentList.forEach((student,index)=> {
  test.push(new User(index,student));
})
let test2 = new User("one", "student");
console.log(test2);
//console.log(test);