const itsMe = {
  firstName: "daegon",
  lastName: "choi",
  age: 34,
  email: "dgchoi3904@gmail.com",
  phone: "000-XXXX-OOOO",
  address: "모모시 모모구 모모동 모모층",
  like: "모를 좋아함",
  hate: "오를 싫어함",
  hobby: "취미?",
  coffee: "커피구나",
  food: "음식",
  sleepTime : "자고싶을 때",
}

//생성자 함수. 위의 것을 일일이 지정할 필요 없이 아래 함수만 부르면 되는 형태.
function gaeIn(firstName, lastName, age, email, phone, address, like, hate, hobby, coffee, food, sleepTime) {
  this.fristName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.email = email;
  this.phone = phone;
  this.address = address;
  this.like = like;
  this.hate = hate;
  this.hobby = hobby;
  this.coffee = coffee;
  this.food = food;
  this.sleepTime = sleepTime;
}
