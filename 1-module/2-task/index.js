/**
 * Эту функцию трогать не нужно
 */
function print(text) {
  console.log(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 * @param {string | null} name
 * @returns {boolean}
 */
function isValid(name) {
  // ваш код...
  if (!name || name.includes(" ") || name.length < 4) {
    return false;
  } else {
    return true;
  }
}
/*
в идеале:
  return !!name && !name.includes(' ') && name.length >= 4;
}
*/
function sayHello() {
  let userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}
