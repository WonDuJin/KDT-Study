let numberData = [444,23,2022,8,16,12,22];

// Q. 가장 큰 수는 numberData[2]에 있는 2022이다.이것을 console 에 출력해보기


let saveValue = 0;
let max = Math.max.apply(null, numberData);
console.log(max); 

let result = numberData[0];

for (let i = 0; i < numberData.length; i++){
  
}


//1. 나 배열에 있는 값을 조회할거야 -> 반복문
//배열 크기만큼 반복해서 돌릴거야.
for (let i = 0; i < numberData.length; i++){

  // 배열요소 중 하나가 임시로 저장된 변수(saveValue)보다 높은 값이 확인될 경우
  if(saveValue < numberData[i]) {
    
    // 임시변수에 그 값을 저장한다.
    saveValue = numberData[i];
  }
}

console.log(saveValue);
