'use strict';

/**
 * Возводит число x в степень n.
 * @param {number} x — основание степени.
 * @param {number} n — показатель степени (целое число).
 * @returns {number} Результат возведения x в степень n.
 */
function pow(x, n) {
  if (n === 0) return 1;
  if (n > 0) {
    let result = 1;
    for (let i = 0; i < n; i++) {
      result *= x;
    }
    return result;
  } else {
    let result = 1;
    for (let i = 0; i < -n; i++) {
      result /= x;
    }
    return result;
  }
}

/**
 * Вычисляет сумму чисел от 1 до n включительно с использованием new Function.
 * @param {number} n — натуральное число.
 * @returns {number} Сумма чисел от 1 до n.
 */
const sumTo = new Function('n', 'return (n * (n + 1)) / 2;');

/**
 * Проверяет год на високосность.
 * Год високосный, если он кратен 400 или одновременно кратен 4 и не кратен 100.
 * @param {number} year — год для проверки.
 * @returns {boolean} true, если год високосный, иначе false.
 */
function isLeapYear(year) {
  return (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
}

/**
 * Вычисляет факториал числа n с использованием рекурсии.
 * Возвращаемое значение имеет тип BigInt.
 * @param {number} n — число для вычисления факториала.
 * @returns {BigInt} Факториал числа n.
 */
function factorial(n) {
  if (n < 0) throw new Error('Факториал отрицательного числа не определён');
  if (n === 0 || n === 1) return 1n;
  return BigInt(n) * factorial(n - 1);
}

/**
 * Возвращает n‑е число Фибоначчи.
 * Использует итеративный подход для эффективности.
 * @param {number} n — порядковый номер числа Фибоначчи (неотрицательное число).
 * @returns {BigInt} n‑е число Фибоначчи.
 */
function fib(n) {
  if (n < 0) throw new Error('Номер числа Фибоначчи должен быть неотрицательным');
  if (n === 0) return 0n;
  if (n === 1) return 1n;

  let a = 0n, b = 1n;
  for (let i = 2; i <= n; i++) {
    [a, b] = [b, a + b];
  }
  return b;
}

/**
 * Создаёт функцию для сравнения числа y с заданным числом x.
 * @param {number} x — число, с которым будет сравниваться y.
 * @returns {function} Функция, принимающая число y и возвращающая:
 *   - true, если y > x,
 *   - false, если y < x,
 *   - null, если y === x.
 */
function compare(x) {
  return function(y) {
    if (y > x) return true;
    if (y < x) return false;
    return null;
  };
}

/**
 * Возвращает сумму всех переданных аргументов.
 * @param {...number} args — числа для суммирования.
 * @returns {number} Сумма всех аргументов.
 */
function sum(...args) {
  return args.reduce((acc, num) => acc + num, 0);
}

/**
 * Добавляет к объекту символьное свойство blackSpot=true из глобального реестра символов.
 * @param {object} obj — объект, к которому добавляется свойство.
 * @returns {object} Объект с добавленным свойством Symbol.for('blackSpot'): true.
 */
function addBlackSpot(obj) {
  const blackSpot = Symbol.for('blackSpot');
  obj[blackSpot] = true;
  return obj;
}
