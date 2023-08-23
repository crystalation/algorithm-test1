//음양 더하기
//absolutes- 정수배열 signs-매개변수
//signs[i]가 참이면 absolutes[i]가 양수, 아니면 음수

var absolutes = [4, 7, 12];
var signs = [true, false, true];
function solution(absolutes, signs) {
  //return해야 하는 answer 생성
  var answer = 0;
  for (var i = 0; i < 3; i++) {
    if (signs[i] === true) {
      answer = answer + absolutes[i];
    } else if (signs[i] === false) {
      answer = answer - absolutes[i];
      //값이 false인 경우 -음수
    }
  }

  return answer; //이건 ab 배열을 다 돌았을때 나오는 값
}

console.log(solution(absolutes, signs));
