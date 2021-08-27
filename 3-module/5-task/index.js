function getMinMax(str) {
  // ваш код...
  const arr = [];
  for (let i of str.split(' ')) {
    if (isNaN(i)) {
      continue;
    }
    arr.push(Number.parseFloat(i));
  }
  return { min: Math.min.apply(null, arr), max: Math.max.apply(null, arr)};
}
