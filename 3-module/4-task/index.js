function showSalary(users, age) {
  // ваш код...
  let result = '';
  for (let user of users) {
    if (user.age <= age) {
      result += `${user.name}, ${user.balance}\n`;
    }
  }
  return result.trim();
}
