function filterRange(arr, a, b) {
  // ваш код...
  return arr.filter(function (item) {
    return item >= a && item <= b;
  });
}