function filterRange(arr, a, b) {
  // ваш код...
  let filtred = arr.filter(item => a <= item && item <= b);
  return filtred;
}
