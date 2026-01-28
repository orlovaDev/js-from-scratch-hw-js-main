/*
 * Напишите функцию isNumeric, которая принимает строку и проверяет, представляет ли эта строка корректное числовое значение.
 * Если строка является числом, функция должна возвращать true, в противном случае - false.
 */

function isNumeric(str) {
  const newStr = str.trim();
  if (newStr === "" || newStr === "." || newStr === "-" || newStr === "e") {
    return false;
  }
  let hasDot = false;
  let hasE = false;
  for (let i = 0; i < newStr.length; i++) {
    const char = newStr[i];
    if (char >= "0" && char <= "9") {
      continue;
    } else if (char === "-" || char === "+") {
      if (i !== 0 && newStr[i - 1] !== "e") return false;
      if (i === newStr.length - 1) return false;
    } else if (char === "." && !hasDot && !hasE) {
      hasDot = true;
      if (newStr.length === 1) return false;
    } else if (char === "e" && !hasE && i !== 0 && i !== newStr.length - 1) {
      hasE = true;
    } else {
      return false;
    }
  }
  return true;
}
// console.log(isNumeric("123")) // Ожидаемый результат: true
// console.log(isNumeric("12.3")) // Ожидаемый результат: true
// console.log(isNumeric("123abc")) // Ожидаемый результат: false
// console.log(isNumeric("abc")) // Ожидаемый результат: false
// console.log(isNumeric(" ")) // Ожидаемый результат: false
