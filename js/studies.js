function fib(n) {
  let res = [0, 1];
  if (n == 1) {
    return 0;
  } else if (n == 2) {
    return 1;
  }
  if (typeof n != "number" || n < 0 || !Number.isInteger(n)) {
    return "";
  }
  for (let i = 2; i < n; i++) {
    res[i] = res[i - 1] + res[i - 2];
  }
  return res.join(" ");
}
console.log(fib(7));
