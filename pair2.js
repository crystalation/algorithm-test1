//짝수 , 홀수 구분하기! 출력을 어떻게 하는지 다시 한번 연습하기
var num = 3;
function solution(num) {
  var answer = "";
  if (num % 2 == 0) {
    return (answer = "Even");
  } else {
    return (answer = "Odd");
  }
  return answer;
}

console.log(solution(num));
