let loginform = "user_id=asdf&user_password=12345"
let split = loginform.split('&');
console.log(split);
if(split[0].startsWith('user_id')){
  console.log(split[0].substring(split[0].indexOf('=')+1, split[0].length));
}
if(split[1].startsWith('user_password')){
  console.log(split[1].substring(split[1].indexOf('=')+1, split[1].length));
}