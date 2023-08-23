//가운데 글자 가져오기! 짝수일 경우 가져와야되는 것을 수학적 공식으로 이해하지 못하면 풀지 못하는.. 문제.. 수포자는 힘들다..
var s = "abceds";

function solution(s) {
  var answer = "";

  if (s.length % 2 == 0) {
    answer = s[s.length / 2 - 1] + s[s.length / 2];
  } else {
    answer = s[Math.floor(s.length / 2)];
  }
  return answer;
}

console.log(solution(s));
