function truncate(str, maxlength) {
  let string = str.length
  let s = str.slice(0, maxlength-1)
    if ( string > maxlength)
      return s + '…';
    else
      return str
};

