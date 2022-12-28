function camelize(str) {
  return str
    .split("-")
    .map((item, index) => index === 0 ? item : item[0].toUpperCase() + item.substring(1))
    .join("");
}
