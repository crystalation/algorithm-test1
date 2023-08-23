var price = 3; //이용금액
var count = 4;
var money = 20; //4번 타고 싶음 --> 3+6+9+12 =30
//n번째 이용: 이용료*n

//1. 4번 타고싶을때의 금액을 먼저 구하고 그 금액에서 갖고있는 금액을 뺌.

function solution(price, money, count) {
  let total = 0;
  for (let i = 1; i <= count; i++) {
    total += price * i; // 3 + 6 + 9
  }
  return money > total ? 0 : total - money; //논리연산자 써보기..
  //   if (money >= total) {
  //     return 0;
  //   } else {
  //     return total - money;
  //   }
}

console.log(solution(price, money, count));

// return money > total ? 0 : total - money
