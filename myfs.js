const fs = require("fs");
try{
  console.log("is it read?")
  fs.readFile("./index.html",{encoding: "utf-8"}, function(error, data){
    if(error){
      console.error(`${error}is happen. please fix it.`);
    } else {
      console.log("read it please");
      console.log("data");
      let convertedtoJSON = JSON.parse(data);
      fs.writeFileSync("./newindex.html", data,"utf-8");
      console.log(data);
      console.log(convertedtoJSON);
    }
  })
} catch {
}
