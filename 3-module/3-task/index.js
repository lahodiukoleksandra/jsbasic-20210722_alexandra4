function camelize(str) {
  // ваш код...
  let stringSplited = str.split('-');
    
  for (let i = 1; i < stringSplited.length; i++)
  {stringSplited[i] = stringSplited[i].charAt(0).toUpperCase() + stringSplited[i].slice(1);}
  let joined = stringSplited.join('');
  return joined;
}
