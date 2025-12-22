// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.

function findLargest(a, b, c) {
  let max = a;
  if (max < b) {
    max = b;
  }
  if (max < c) {
    max = c;
    return max;
  }
}


