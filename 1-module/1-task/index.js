function factorial(n) {
  if (n === 1 || n === 0) {
    return 1;
  } else {
    let result = 1;
    for (let i = 0; i < n - 1; i++) {
      result *= n - i;
    }
    return result;
  }
}
