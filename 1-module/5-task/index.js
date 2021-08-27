function truncate(str, maxlength) {
  let string = str.length;
  let firstLetter = str.slice(0, maxlength - 1);
  if (string > maxlength)
  {return firstLetter + '…';}
  else
  {return str;}
}

