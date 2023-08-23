let str1 = ["Jane", "Kim", "Crystal"];
//seoul 안에서 x(Kim)을 찾아 x를
//'김서방은 ${x}에 있다'를 반환

function solution(seoul) {
  var answer = "";

  for (let i = 0; i < seoul.length; i++) {
    if (seoul[i] === "Kim") return `김서방은 ${i}에 있다`;
  }
}

console.log(solution(str1));
