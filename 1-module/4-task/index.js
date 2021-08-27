function checkSpam(str) {
  let lowerCased = str.toLowerCase();
  if (lowerCased.includes('xxx') || str.includes('1XbeT')) {
    return true;
  }
  return false;
}
