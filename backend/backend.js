const fs = require("fs");
// global.require();
// node.js 실행 환경에서 전역객체는 window가 아닌 'global' 이라는 이름으로 되어있다.
// window 전역객체처럼 삭제하고 사용할 수 있게끔 마련되어있다.
// require(); 메서드는 자바스크립트 공식적으로 '모듈'기능을 지원하기전 node.js 환경을 만들기위해
// 마련된 모듈 처리 방식 중의 하나이다. 요청이라는 '함수'를 가져오기(import) 한것처럼 사용한 것으로
// 이러한 방식을 사용하는 것을 cjs, commonJS 라고 부른다.

// 태초에 모듈자체가 없었던 자바스크립트의 역사적인 특징덕에 궁여지책으로 사용하고 있는 방식이고 지금도 그 명맥을 유지하고 있다.
// 내보내기(export)방식도 다르므로 확인 할 것
// 주요 키워드 moduleJS, mJS
// 주요 키워드 commonJS, cJS
// 추후 번들링(컴파일) 방식도 소개할 예정(webpack)

let directoryName = "hello-filesystem";

fs.mkdir("./" + directoryName, function (err) {
  // fs 모듈은 'OS 레벨의 파일 시스템에 접근하는 기능'을 고루갖춘 node.js 표준 모델이다.
  // mkdir : make directory
  // mkdir("내용", "콜백함수 에러처리");
  // 메서드 자체는 찾아가면서 활용해야 하는 부분이지만, 대부분 에러처리가 같이 갖추어져 있다는 것에 주목할 필요가 있다.
  // mkdir은 리눅스에서도 사용할 수 있는 주요 커맨드 방식이기도 하다.
  if (err) {
    console.log(err);
  }
});
//나만의 요약 : 파일시스템을 이용하여 디렉토리 폴더를 생성하는 방법!
