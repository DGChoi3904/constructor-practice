class Comment {
  constructor(id, comment, date){
    this.id = id;
    this.comment = comment;
    this.date = date;
  }
  set id(id){
    if(typeof(id)=== "string"){
      this._id = id;
    }
  }
  set comment(comment){
    if(typeof(comment) === "string"){
      this.Acomment = comment;
    }
  }
  set date(date){
    if(typeof(date) === "string"){
      this.zdate = date;
    }
  }
  get id() {
    return this._id;
  }
}
let commentOne = new Comment("0001","이거 니아이디 맞냐?","2023-03-13");
console.log(commentOne);
/*
출력되는 콘솔 Comment {_id:"0001", Acomment:"이거 니아이디 맞냐?", zdate:"2023-03-13"}
constructor에서 지정된 생성자가 아닌, set에 지정된 생성자 명으로 세트된다.
*/
console.log(commentOne.id);
/*
출력되는 콘솔 0001
get에 return으로 this._id를 반환하게 하였기에 지정했던 값을 반환하게 된다.
*/

class numbers {
  consturctor(teamNumber, favoriteNumber, )
}