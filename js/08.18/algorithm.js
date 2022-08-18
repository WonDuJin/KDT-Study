// * 함수 만들기

function one() {
  // 함수 one을 호출하면 콘솔에 "첫번째 함수"라는 메세지를 출력하게끔 '알고리즘'을 작성하세요.
  console.log("첫번쨰 함수");
}
one();


function two() {
  // 함수 two를 호출하면 숫자 10 이라는 값이 콘솔에 출력되게끔 '알고리즘'을 작성하세요.
  return 10;
  
  //return 10이라는 값을 반환시킴
  
}
console.log(two());


function three(parameter) {
  // 첫번째 매개변수 parameter에 "KDT"를 입력하면
  // "KDT"의 데이터 타입이 콘솔에 출력되게끔 알고리즘을 작성하세요.

  console.log(typeof parameter);

  //"KDT"의 타입이 스트링이므로 호출의 인수인 "KDT"입력받았으니 당연히 데이터 타입또한 같다.
  
  
}
three("KDT");
console.log(typeof three("KDT"));

function four(param) {
  // 첫번째 매개변수 param에 "KDT"값이 들어오면
  // 콘솔화면에서 "K-digital training"이라는 문구가 출력되도록 '알고리즘'을 작성하세요.
  // "KDT"가 아니라면, "한컴타자놀이"가 출력되게끔 '알고리즘'을 추가하세요.

  if (param === "KDT") {

    console.log("K-digital training");

    //four("KDT")를 호출하여 인수를 입력했으므로 매개변수는 "KDT"가 되므로 참 이므로 결과값또한 참의 결과값이 나옴
  } else{

    console.log("한컴타자놀이");
    //four("공욱재미남")이 인수로 들어가면 조건문이 거짓이므로 거짓의 값이 출력
  }


  }
four("KDT");
four("공욱재미남");

function a() {
  return 1;
}

function b() {
  return 2;
}

function five(paramOne, paramTwo) {
  // 위에 먼저 선언된 함수 a(), b()을 덧셈하여 나온값을
  // 콘솔에 출력되게끔 '알고리즘'을 작성하세요.
  let plus = paramOne + paramTwo;
  //지역변수 활용하여 함수에 선언된 값 a(10), b(20)의 값을 합쳐서 출력


  console.log(plus);
  
  return plus;
  
  
  
}

console.log(a(), b());
console.log(five(10,20)+a());





//console.log(five(/* 매개변수 두개 */) + a()); // 덧셈이 실행되어 어떠한 //'숫자값' 이 나오도록 작성하세요.




function developer(who){
  console.log (who + "머리가 좀 아픔");
  return "job";

}
developer("너의");