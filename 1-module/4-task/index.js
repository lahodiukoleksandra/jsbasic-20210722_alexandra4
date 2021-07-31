function checkSpam(str) {
  if (str.includes('1xbet') || str.includes('1XbeT')) {
    return true;
  }
  if (str.includes('XXX') || str.includes('xxx')) {
  return true;
  }
    return false;
}