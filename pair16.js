//문자열의 갯수를 비교할때는 숫자 0을 이용한 함수식을 만든다.
//문자열의 요소는 s[i], 손에 익혀둘 것

const str1 = "pPoooyY"; //answer 는 true, p의 개수가 2개, y의 개수가 2개로 같기때문에
const str2 = "ppy";

function solution(s) {
  s = s.toUpperCase();
  var answer = true;

  var num = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "P") {
      num++;
    }
    if (s[i] === "Y") {
      num--;
    }
  }

  if (num === 0) {
    answer = true;
  } else {
    answer = false;
  }
  return answer;
}

console.log(solution(str2));

// function solution(s) {
//   var answer = true;
//   s = s.toUpperCase();
//   console.log(s);

//   //2. for 문을 통해서 문자열의 요소 하나하나씩을 비교
//   //2-1. p,y와 비교
//   var num = 0;

//   for (var i = 0; i < s.length; i++) {
//     //여기에서 비교 (0이 p와 일치하면 +해주고, y와 일치하면 -해준다..0이라는 숫자를 통해 p,y 파악. ex)결국 0이 0으로 남으면 p,y 갯수가 같다!)
//     if (s[i] === "P") {
//       num++;
//     }
//     if (s[i] === "Y") {
//       num--;
//     }
//   }
//   //3. 개수 체크 (p,y 갯수가 같은지)

//   if (num === 0) {
//     answer = true; //굳이 안써도됌, 처음부터 answer=true였기 때문에=>이 부분도 이해 불가...
//   } else {
//     answer = false;
//   }

//   console.log(s); //2.str을 임의로 지정한 후에 console에서 s를 받아오는 단계부터 이해불가, 맨 처음에 console.log('Hello~')는 왜 있었던거임?..

//   return answer;
// }

// var str1 = "pPoooyY"; //이 두개로 할꺼면 제한 사항은 왜줌..?
// var str2 = "Pyy";

// solution(str1); //1.solution에 str1을 넣고
// console.log(solution(str1));
