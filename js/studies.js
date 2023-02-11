function sayHello(name) {
  return `Hello ${name}`
}
console.log(sayHello('Anton'));

function returnNeighboringNumbers(num) {
  return [--num, ++num, ++num]
}

console.log(returnNeighboringNumbers(7));

function getMathResult(num1, num2) {
  let result = num1;
  if (num2 <= 0 || typeof (num2) === 'string') {
    return num1
  } else for (i = 2; i <+ num2+1; i++){
    
    result += `--${num1*i}`
  }
  return result
}
console.log(getMathResult(5, 5));