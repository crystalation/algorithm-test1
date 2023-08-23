//나누어 떨어지는 숫자 배열

var arr = [5, 9, 7, 10];
var divisor = [5]; //result 는 5,10

function solution(arr, divisor) {
  var answer = [];
  for (let i = 0; i < 4; i++) {
    if (arr[i] % divisor == 0) {
      answer.push(arr[i]);
    }
  } //여기까지 배열이 나왔고, 그 배열에 값이 아무것도 나오지 않았다면, 즉 나눠떨어지는것이 한개도 없었다면,

  if (answer.length == 0) {
    answer.push("-1");
  }
  return answer.sort((a, b) => a - b);
}

console.log(solution(arr, divisor));

// var s = "abceds";

// function solution(s) {
//   var answer = "";

//   if (s.length % 2 == 0) {
//     answer = s[s.length / 2 - 1] + s[s.length / 2];
//   } else {
//     answer = s[Math.floor(s.length / 2)];
//   }
//   return answer;
// }

// console.log(solution(s));
