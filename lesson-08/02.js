/*
 * Напишите функцию isNumeric, которая принимает строку и проверяет, представляет ли эта строка корректное числовое значение.
 * Если строка является числом, функция должна возвращать true, в противном случае - false.
 */

function isNumeric(str) {
 const newStr = str.trim()
 if (newStr === "" || newStr === ".") {
return false
 }
 let hasDot = false;
 for (let i = 0; i < newStr.length; i++) {
   const char = newStr[i];
   if (char >= "0" && char <= "9") {
    continue
   } else if (char === "." && !hasDot) {
    hasDot = true
   } else {
    return false
   }
 }
 return true
}

// console.log(isNumeric("123")) // Ожидаемый результат: true
// console.log(isNumeric("12.3")) // Ожидаемый результат: true
// console.log(isNumeric("123abc")) // Ожидаемый результат: false
// console.log(isNumeric("abc")) // Ожидаемый результат: false
// console.log(isNumeric(" ")) // Ожидаемый результат: false
