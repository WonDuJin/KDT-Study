/*const number = Array(10).fill().map((arr,i) => i +1);*/

/*console.log(number);*/

const inputData=[];
for(let i = 1; i <= 3; i+=1){
  let random = Math.floor(Math.random()*20)+1;
  // 랜덤으로 20까지의 숫자중에 3개를 뽑는다.
  if (inputData.indexOf(random)=== -1){
    // indexOf 메서드를 활용하여 뽑은 숫자가 inputData 배열안에 없으면 인덱스 -1을 반환하여 그 값에 해당하는 요소를 inputData에 push메서드를활용하여 집어 넣는다. 
    
    inputData.push(random);
  } else{
    i--
    // 만약 이미 inputData 배열에 들어있다면 중복된 값이므로 다시 뽑을 기회를 주어 랜덤으로 다시 숫자를 뽑는다.
  }
}
console.log(inputData);

const average = inputData.reduce((a,c)=>a+c)/inputData.length;
console.log(average); //메서드 reduce를 활용하여 평균값을 구함

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
