let second = function(){
  console.log("익명이지롱");
}


function first(text, callback){
  if(typeof (text) ==="string"){

    console.log(text + "했지롱");
    callback();
    return "반환했지롱";
  }else {
    console.log("콘솔확인해")
  }
}

first("밥먹었",second);
