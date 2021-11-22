
// 기명 즉시 실행 함수 1
(function sqaure(x) {
  console.log(x * x)
})(2);

// 기명 즉시 실행 함수 2
(function square(x) { 
  console.log(x*x); 
}(2));


// 익명 즉시 실행함수 1
(function (x) { 
  console.log(x*x); 
})(2); 



// 익명 즉시 실행함수 2
(function (x) { 
  console.log(x*x); 
}(2));