let calculator = {
  // ваш код
  read(first, second) {
    this.a = first;
    this.b = second;
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },

};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
