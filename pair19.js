var n1 = 10; //수박수박
var n2 = 3; //수박
var n3 = 1;

function solution(n) {
  var result = "";
  for (let i = 0; i < n; i++) {
    if (i % 2 == 0) {
      result += "수";
    } else {
      result += "박";
    }
  }
  return result;
}

console.log(solution(n1));
