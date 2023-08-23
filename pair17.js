//for 문을 돌면서 요소가 숫자인지 아닌지만 비교하면됌,
//isNaN 함수로 쉽게 해결.

var s1 = "a134"; //false
var s2 = "1234"; //true
var s3 = "sdfs"; //false

function solution(s) {
  var answer = true;
  for (let i = 0; i < s.length; i++) {
    if (isNaN(s[i])) {
      answer = false;
    } else {
      var answer = ture;
    }
    return answer;
  }
}
console.log(solution(s3));

//여기서 else문을 따로 안써줘도되나? 숫자가 아니거나, 숫자이기때문에?
