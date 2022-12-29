function getMinMax(str) {
  let numbers = str.split(" ").filter(word => Number.isFinite(+word));
  return {
    min: Math.min(...numbers),
    max: Math.max(...numbers)
  };
}
