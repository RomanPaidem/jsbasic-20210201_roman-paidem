function showSalary(users, age) {
  // ваш код...
  return users
    .filter((i) => i.age <= age)
    .map((i) => `${i.name}, ${i.balance}`)
    .join('\n');
}
