let agreeEmailAddress = [
  "gmail.com", "hanmail.net", "yahoo.com", "naver.com"
]
function emailChecker(email, agreeEmailAddress){
  //받은 이메일이 '문자열로 이루어져 있는지 확인.
  if(typeof (email) === "string" && Array.isArray(agreeEmailAddress) === true){
    //email은 문자열이기에 forEach를 쓸수 없다. 하지만 Array 형식이기에 Array.from으로 불러올 수 있다.
    Array.from(email).forEach(element => {
      //매개변수 element, 한 char씩 가져온다.
      if(element === "@") { // if char에 @가 있을 경우
        console.log("이메일 형식이 맞습니다.");
        //split 쓸 준비를 함. split받을 array 준비.
        let emailSplit = [];
        //문자열 email을 @을 기준으로 쪼갬. 인덱스 0 엔 @ 이전 문자열이, 1에는 @ 이후의 문자열이.
        emailSplit = email.split("@");
        //문자열 확인 텍스트
        console.log(emailSplit);
        agreeEmailAddress.filter(elment=>{
          if(element === emailSplit[1]){
            console.log("이메일 도메인이 일치합니다.");
            return true;
          } else {
            console.error("이메일 도메인이 일치하지 않습니다.");
          }
        });
      }else {
        console.error("이메일 형식이 아닙니다.")
      }
    })
  } else {
    console.error("이메일은 문자열이어야 합니다.")
  }
}
//export default emailChecker;
console.log(emailChecker("dgchoi3904@gmail.com",agreeEmailAddress));