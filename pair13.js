// // 2023년 1월 1은 일요일입니다.
// //var a =4, b=7 이라면 result 는 FRI
// // var date = "2023-04-07";

// var a = 4;
// var b = 7;
// var date = `2016-${a}-${b}`;
// function getDayOfWeek(date) {
//   const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

//   const dayOfWeek = week[new Date(date).getDay()];

//   return dayOfWeek;
// }

// console.log(getDayOfWeek(date));

// const day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

function solution(a, b) {
  return new Date(2016, a - 1, b).toString().slice(0, 3).toUpperCase();
}
console.log(solution(5, 24));

var a = 5;
var b = 24; //1월 1일은 금요일 즉 week 인덱스의 5번째부터 시작
//1월 1일부터 5월 24일까지 경과한 날 수는

function solution(a, b) {
  const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const leapYear = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let day = b + 4;
  for (let i = 0; i < a - 1; ++i) {
    day += leapYear[i];
  }
  return week[day % 7];
}

console.log(solution(a, b));
