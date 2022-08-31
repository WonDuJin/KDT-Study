/*const number = Array(10).fill().map((arr,i) => i +1);*/

/*console.log(number);*/

const randomList=[];
for(let i = 1; i < 3; i++){
  let random = Math.floor(Math.random()*20)+1;
  if (randomList.indexOf(random)=== -1){
    randomList.push(random);
  } else{
    i--
  }
}
console.log(randomList);

const average = randomList.reduce((a,c)=>a+c)/randomList.length;
console.log(average);

if(average >=10){
  console.log("over");
}if(average < 10){
  console.log("under");
}