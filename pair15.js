var a = [1, 2, 3, 4];
var b = [-3, -1, 0, 2];

function solution(a, b) {
  var answer = 0;
  for (let i = 0; i < a.length; i++) {
    answer += a[i] * b[i];
  }
  return answer;
}
console.log(solution(a, b));