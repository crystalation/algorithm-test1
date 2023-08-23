// var s = "try hello world"; //단어 기준으로 index 홀짝을 판별
// 답은 'TrY HeLlO WoRlD' //try의 홀수번째, hello의 홀수번째etc

// 인덱스 별로 홀짝을 지정해줘야하니 try hello world를 배열화 시켜야하나?

// let sToArry=s.split("")쳤는데 h,e,l,l,o 이렇게 나옴..그 이유는 " "<사이에 공백을 안줬기때문!!! ""안의 문자를 기준으로 나누는 것이기에 필수로 쳤어야하거늘 ..

// 'try','hello','world' 가 나왔으면 이제 각각의 요소를 또 요소로 나눠주어야함, 그 작업은?

// 막힌 부분: 각각의 요소를 다시 나누는 작업, 즉 [i]의 [j]를 구해야하고,
// 그 [j]의 요소번째!!를 나눠야함.
// 나는 [j]번째 즉 요소 그 자체의 자리를 나눌 생각을 안하고 단어의 length를 나누려했다.

// 각각의 요소를 j를 이용해서 풀어야 된다는 것, 배열의 수를 %2해서 값을 구해야한다는 개념까지 접근했다!!
// 해결 : 배열안의 요소의 요소를 돌아야하니 for문안에서 for문을 돌려 각 단어의 위치를 %2 하여 남는 값으로 대문자화, 소문자화를 결정함.

var s = "try hello world";

function solution(s) {
  let sToArry = s.split(" ");
  let result = [];

  for (let i = 0; i < sToArry.length; i++) {
    let word = sToArry[i]; //각 요소 'try','hello','world'
    let newWord = ""; //홀수 번째 문자를 대문자화 시킬 단어

    for (let j = 0; j < word.length; j++) {
      if (j % 2 === 0) {
        newWord += word[j].toUpperCase();
      } else {
        newWord += word[j];
      }
    } //여기까지가 for문 조건 끝, 즉 대문자화 끝. 대문자로 만든 문자를 새로운 배열로 만들어야함.

    result.push(newWord);
  }
  return result.join(" ");
}
console.log(solution(s));
