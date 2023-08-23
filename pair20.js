// var participant1 = ["leo", "kiki", "eden"];
// var completion1 = ["eden", "kiki"]; //결과값은 "leo"

// var participant2 = ["marina", "josipa", "nikola", "vinko", "filipa"];
// var completion2 = ["josipa", "filipa", "marina", "nikola"];

var participant3 = ["ana", "stanko", "mislav", "mislav"];
var completion3 = ["stanko", "ana", "mislav"];

//participant 배열과 completion 의 배열을 비교해서 없는 값을 return 시키면 될듯?

//동명이인 중복된 값은 어떻게 구분할까?<<관건

// function solution(participant, completion) {
//   var answer = "";
//   for (let i = 0; i < participant.length; i++) {
//     return participant.filter((x) => !completion.includes(x)).join("");
//   }
//   return answer;
// }

// console.log(solution(participant3, completion3));

//여기서 sort를 이용할 수 있는 것 은, 오름차순으로 정리하게 되면 participant안에서 동명이인을 인덱스 순서대로 배정할 수 있고, completion안에서도 오름차순 정리가 되면 무조건 첫번째 index는 part의 2개 이름중 name1과 겹치게되므로 함수조건에 걸리지 않고 넘어간다, 따라서 그 후에 나오는 name2는 completion안의 다음 index와 비교하게되고 함수조건에 걸려 함수식은 종료되고 결과를 return한다.

//즉 배열의 길이는 다르지만 배열간의 중복된 내용을 비교할 때,
//비교할 한 배열 안에 또 중복값이 있을 때 sort 사용하면 효율적.

//배열의 길이가 다른데 비교할 수 있는 이유?
//for문으로 돌다가 조건을 충족하면 함수는 멈추기 때문.

// var participant2 = ["marina", "josipa", "nikola", "vinko", "filipa"];
// var completion2 = ["josipa", "filipa", "marina", "nikola"];

// var participant1 = ["leo", "kiki", "eden"];
// var completion1 = ["eden", "kiki"];

var participant3 = ["a", "b", "b", "c"];
var completion3 = ["a", "b", "c"];

function solution(participant, completion) {
  //   participant.sort();
  //   completion.sort();

  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) return participant[i];
  }
  return answer;
}

console.log(solution(participant3, completion3));

// function solution(participant, completion) {
//   const participantObj = {};
//   const completionObj = {};

//   for (let i = 0; i < participant.length; i++) {
//     if (participantObj[participant[i]]) {
//       //요소, 즉 이름이  parti 에 포함된다면,
//       participantObj[participant[i]]++;
//     } //요소에 값을 더해준다. 즉 a:2, b:1, c:1
//     else {
//       participantObj[participant[i]] = 1;
//     }
//   }

//   for (let i = 0; i < completion.length; i++) {
//     if (completionObj[completion[i]]) {
//       completionObj[completion[i]]++;
//     } else {
//       completionObj[completion[i]] = 1;
//     }
//   }
//   for (let i = 0; i < participant.length; i++) {
//     const name = participant[i];
//     if (participant[name] !== completion[name]) {
//       return name;
//     }
//   }
// }

// console.log(solution(participant3, completion3));
