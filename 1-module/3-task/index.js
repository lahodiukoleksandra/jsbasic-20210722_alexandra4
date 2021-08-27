function ucFirst(str) {
  if (str === '')
  {return '';}

  let first = str[0];
  let firstB = first.toUpperCase();
  let word = str.slice(1);
  
  return firstB + word;
}
