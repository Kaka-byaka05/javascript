'use strict';

/**
 * Возвращает n‑е число Фибоначчи.
 * Использует итеративный подход для эффективности.
 * @param {number} n — порядковый номер числа Фибоначчи (неотрицательное число).
 * @returns {BigInt} n‑е число Фибоначчи.
 */
export function fib(n) {
  if (n < 0) throw new Error('Номер числа Фибоначчи должен быть неотрицательным');
  if (n === 0) return 0n;
  if (n === 1) return 1n;

  let a = 0n, b = 1n;
  for (let i = 2; i <= n; i++) {
    [a, b] = [b, a + b];
  }
  return b;
}
