calculadora/* 7-days-of-code/day7.js */
function calculadora() {
  let n = parseInt(readLine());
  let arr = readLine().split(' ').map(Number);
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += arr[i];
  }
  console.log(sum);
}