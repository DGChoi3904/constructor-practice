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
console.log(commentOne.id);