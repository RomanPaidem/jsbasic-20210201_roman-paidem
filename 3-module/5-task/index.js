function getMinMax(str) {
  // ваш код...
  let arr = str.split(/[ ,]+/);
  arr = arr.filter((item) => item !== "" && isFinite(item));
  return { min: Math.min(...arr), max: Math.max(...arr) };
}