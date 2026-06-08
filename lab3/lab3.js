'use strict';

import {
    fib
  } from './lab2.js';

/**
 * Возвращает дробную часть числа.
 * Для отрицательных чисел возвращает 1 - дробная часть модуля числа.
 * @param {number} num — число, из которого нужно извлечь дробную часть.
 * @returns {number} Дробная часть числа или 0, если число целое.
 */
export function getDecimal(num) {
  if (Number.isInteger(num)) return 0;
  const absNum = Math.abs(num);
  const fractional = absNum - Math.floor(absNum);
  const result = num < 0 ? 1 - fractional : fractional;
  return Number(result.toFixed(2));
}

/**
 * Делит числа с остатком.
 * @param {number} dividend — делимое.
 * @param {number} divisor — делитель.
 * @returns {Array<number>} Массив [частное, остаток]. 
 */
export function divmod(dividend, divisor) {
  if (divisor === 0) return [NaN, NaN];
  const quotient = Math.floor(dividend / divisor);
  const remainder = dividend % divisor;
  // Корректировка остатка для отрицательных чисел
  if (remainder < 0 && divisor > 0) {
    return [quotient + 1, remainder + divisor];
  } else if (remainder > 0 && divisor < 0) {
    return [quotient - 1, remainder + divisor];
  }
  return [quotient, remainder];
}

/**
 * Возвращает строку с заглавной первой буквой.
 * @param {string} str — исходная строка.
 * @returns {string} Строка с заглавным первым символом или пустая строка, если исходная пустая.
 */
export function ucFirst(str) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Нормализует URL, добавляя префикс https://, если его нет.
 * @param {string} url — исходный URL.
 * @returns {string} Нормализованный URL с префиксом https://.
 */
export function normalizeUrl(url) {
  if (url.startsWith('https://')) return url;
  if (url.startsWith('http://')) return 'https://' + url.slice(7);
  return 'https://' + url;
}

/**
 * Проверяет строку на наличие спам‑слов (viagra, XXX), нечувствительна к регистру.
 * @param {string} str — строка для проверки.
 * @returns {boolean} true, если строка содержит спам‑слова, иначе false.
 */
export function checkSpam(str) {
  const lowerStr = str.toLowerCase();
  return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}

/**
 * Усекает строку до заданной длины, добавляя многоточие, если необходимо.
 * @param {string} str — исходная строка.
 * @param {number} maxlength — максимальная длина строки.
 * @returns {string} Усечённая строка или исходная, если её длина меньше maxlength.
 */
export function truncate(str, maxlength) {
  if (str.length <= maxlength) return str;
  return str.slice(0, maxlength - 1) + '…';
}

/**
 * Преобразует строку из формата 'var-test-text' в 'varTestText'.
 * @param {string} str — исходная строка с дефисами.
 * @returns {string} Преобразованная строка в camelCase.
 */
export function camelize(str) {
  return str
    .split('-')
    .map((word, index) => index === 0 ? word : ucFirst(word))
    .join('');
}

/**
 * Импортирует функцию fib из lab2.js и возвращает массив чисел Фибоначчи до n-го элемента.
 * @param {number} n — количество чисел Фибоначчи для генерации.
 * @returns {BigInt[]} Массив чисел Фибоначчи.
 */

export function fibs(n) {
  const result = [];
  for (let i = 0; i < n; i++) {
    result.push(fib(i));
  }
  return result;
}

/**
 * Сортирует массив чисел по убыванию, не изменяя исходный массив.
 * @param {Array<number>} arr — исходный массив чисел.
 * @returns {Array<number>} Новый массив, отсортированный по убыванию.
 */
export function arrReverseSorted(arr) {
  return [...arr].sort((a, b) => b - a);
}

/**
 * Возвращает массив уникальных значений из исходного массива.
 * @param {Array} arr — исходный массив.
 * @returns {Array} Массив уникальных значений.
 */
export function unique(arr) {
  return [...new Set(arr)];
}
