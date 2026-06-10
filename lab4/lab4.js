/**
 * Класс, представляющий книгу.
 */
class Book {
  /**
   * Приватное поле для хранения цены книги.
   * @private
   */
  #price;

  /**
   * Поле для хранения названия книги.
   * @private
   */
  #title;

  /**
   * Поле для хранения года издания книги.
   * @private
   */
  #pubYear;

  /**
   * Создаёт экземпляр книги.
   * @param {string} title - Название книги.
   * @param {number} pubYear - Год издания.
   * @param {number} price - Цена книги.
   */
  constructor(title, pubYear, price) {
    this.title = title;
    this.pubYear = pubYear;
    this.price = price;
  }

  /**
   * Геттер для получения названия книги.
   * @returns {string} Название книги.
   */
  get title() {
    return this.#title;
  }

  /**
   * Сеттер для установки названия книги.
   * @param {string} value - Новое название книги.
   * @throws {Error} Если название — пустая строка.
   */
  set title(value) {
    if (typeof value !== 'string' || value.trim() === '') {
      throw new Error('Название книги не может быть пустой строкой');
    }
    this.#title = value.trim();
  }

  /**
   * Геттер для получения года издания.
   * @returns {number} Год издания.
   */
  get pubYear() {
    return this.#pubYear;
  }

  /**
   * Сеттер для установки года издания.
   * @param {number} value - Новый год издания.
   * @throws {Error} Если год не является положительным целым числом.
   */
  set pubYear(value) {
    if (typeof value !== 'number' || value <= 0 || !Number.isInteger(value)) {
      throw new Error('Год издания должен быть положительным целым числом');
    }
    this.#pubYear = value;
  }

  /**
   * Геттер для получения цены книги.
   * @returns {number} Цена книги.
   */
  get price() {
    return this.#price;
  }

  /**
   * Сеттер для установки цены книги.
   * @param {number} value - Новая цена книги.
   * @throws {Error} Если цена не является положительным числом.
   */
  set price(value) {
    if (typeof value !== 'number' || value <= 0) {
      throw new Error('Цена должна быть положительным числом');
    }
    this.#price = value;
  }

  /**
   * Выводит в консоль название и цену книги, используя геттеры.
   */
  show() {
    console.log(`Название: ${this.title}, Цена: ${this.price}`);
  }

  /**
   * Статический метод для сравнения книг по году издания.
   * @param {Book} book1 - Первая книга.
   * @param {Book} book2 - Вторая книга.
   * @returns {number} Результат сравнения (отрицательное, ноль или положительное число).
   */
  static compare(book1, book2) {
    return book1.pubYear - book2.pubYear;
  }
}

/**
 * Проверяет, пуст ли объект (нет ни обычных, ни символьных свойств).
 * @param {Object} obj - Объект для проверки.
 * @returns {boolean} true, если объект пуст, false — если есть свойства.
 */
function isEmpty(obj) {
  const ownKeys = Reflect.ownKeys(obj);
  return ownKeys.length === 0;
}

/**
 * Возвращает количество секунд, прошедших с начала текущего дня.
 * @returns {number} Количество секунд.
 */
function getSecondsToday() {
  const now = new Date();
  const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  return Math.floor((now - startOfDay) / 1000);
}

/**
 * Форматирует дату в строку формата "дд.мм.гг".
 * @param {Date} date - Дата для форматирования.
 * @returns {string} Отформатированная строка даты.
 */
function formatDate(date) {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // getMonth() возвращает 0–11
  const year = String(date.getFullYear()).slice(-2); // последние две цифры года
  return `${day}.${month}.${year}`;
}

// Экспортируем все сущности для использования в тестах
export { Book, isEmpty, getSecondsToday, formatDate };
