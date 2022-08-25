const ho = {
  lecter : {
    name : "KDT",
    place : "305",
    time : "9시"
  },
  tutor :{
    name : "미남",
    age : 18
  },
  study : ["html", "css", "js", "react"],
  eunjoo :{
    home : "대전",
    address :{
      region:{
        name : "서구",
        dong : "둔산동",
        detail:{
          first : "오라클 빌딩",
          second : "그린학원",
          third : "305호"
        }
      }
    }
  }
}

let {
  lecter : {
    name : lecterName,
    place,
    time
  },
  tutor :{
    name : tuterName ,
    age
  },
  study : [study1,study2, study3, study4],
  eunjoo :{
    home,
    address :{
      region:{
        name : regionName,
        dong,
        detail:{
          first,
          second,
          third
        }
      }
    }
  }
} = ho


function change(ho){
  console.log(ho.lecter.lecterNamepush("공욱재"));
}



/*console.log(ho.study[ho.study.length-1]);

//명령으로 접근
ho.study[ho.study.length] = "hacker";

// 선언으로 접근
console.log(ho.study.push("cracker"));

//리터럴로 작업하는 것은 어려울것
ho.study[5] = "jung won";


console.table(ho);*/


/*let value = ho.eunjoo.address.region.detail.second;*/

/*let thirdho = ho.eunjoo.address.region.detail.third;/*


/*const {eunjoo:{address:{region:{detail:{third:value}}}}} = ho;*/

/*console.log(value);*/

  
  /*if(thirdho === "305호"){
  
        thirdho = "406호";
        
        console.log(thirdho);
  
      }else {
  
        console.log("아니지롱");
      } */
      
  
  


