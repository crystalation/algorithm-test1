//두 정수 사이의 합 구하기

//a가 큰지 b가 큰지 모르는 상황에서 a 와 b값을 구해야함
//예를 들어 a=5, b=10의 상황에서 a,b값을 비교하려면,
//a,b값을 비교할때 경우의 수는?
//a>b, a=b, a<b 즉 a>=b의 조건과 a<b의 식으로 풀 수 있음!!

var a = 5;
var b = 3;

function solution(a, b) {
  var answer = 0;
  if (a >= b) {
    for (let i = b; i <= a; i++) {
      answer += i;
    }
  } else {
    for (let j = a; j <= b; j++) {
      answer += j;
    }
  }
  return answer;
}

console.log(solution(a, b));
