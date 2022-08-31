/*const number = Array(10).fill().map((arr,i) => i +1);*/

/*console.log(number);*/

const inputData=[];
for(let i = 1; i <= 3; i+=1){
  let random = Math.floor(Math.random()*20)+1;
  if (inputData.indexOf(random)=== -1){
    inputData.push(random);
  } else{
    i--
  }
}
console.log(inputData);

const average = inputData.reduce((a,c)=>a+c)/inputData.length;
console.log(average);

if(average >=10){
  console.log("over");
}if(average < 10){
  console.log("under");
}
const objectData = { first : 0, second : 0, third: 0};
function insert (object, inputData){
  object["first"] = inputData[0];
  object["second"] = inputData[1];
  object["third"] = inputData[2];
}
insert(objectData,inputData);

console.log(objectData);
