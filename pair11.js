//x가 n번 만큼 증가한 값을 배열로 반환하는 함수
//수식 쓰는법 반드시 익히기

var x = 2;
var n = 3; // answer = [2,4,6]

function solution(x, n) {
  var answer = []; //배열을 만들었고, 배열에 넣을 값은 따로 설정해야함!!!
  //2*1, 2*2, 2*3
  //결국은 x * 인덱스 값이 되기때문에, 인덱스를 1부터 시작하는 것.

  for (i = 1; i <= n; i++) {
    answer.push(x * i);
  }
  return answer;
}

console.log(solution(x, n));
