var arr = [1,2,3,4,5,6,7,8,9,10];

// 만약 마지막 원소가 10이면 출력해줘 아니면 뭐해죠

//1.벼열에 마지막 원소를 getting하면 편해질 것 같은데?
//2. 비교할 놈과 조건을 맞추면 될 것 같은데?

console.log(arr[9]);

if( arr[arr.length-1]===10){

  console.log("맞는디!")

  for(let i = 0 ; i < arr.length; i++){

    console.log(arr[i])+"값";

  }
}else ("아니지롱!");




