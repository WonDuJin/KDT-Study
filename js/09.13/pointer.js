/*let a = [1,2,3];
let b = [1,2,3];

//이름만 다르고 같은 값이다 = 얕은 복사

b.push(4);

console.log(a);
console.log(b);*/

let a = [2,3,4];
let b = a.map((value)=> value);

a.map(function(value){
  return value;

})


function cdmMap(arr){
  let temp = [];
  arr.forEach(function(value){
    temp.push(value);
  });
  return temp;
}

function cdmMapTwo (arr){
  let temp = [];
  for (let i = 0 ; i < arr.length; i++){
    temp[temp.length] = arr[i];
  }
  return temp;
}

console.log(a===b);