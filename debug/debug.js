let a = 1;
let b = 2;

let c = [3, 4, 5];

function sumMapping(arr, operand) {
  let temp = arr.map((value) => value + operand);
  return temp;
}

function typeChecker(arr, type) {
  return arr.filter((value) => typeof value === type);
}

function outerFunc(arr, type, operand) {
  type =
    typeof type === "string"
      ? type
      : console.error("arguments[1] 파라미터는 문자열이어야함");
  let arrTypeCheckArray = typeChecker(arr, type);
  let tempArray = sumMapping(arrTypeCheckArray, operand);
  let result = tempArray.reduce((prev, curr) => {
    return prev + curr;
  });
  return result;
}

let test = outerFunc(c, "number", b);
console.log(test);
