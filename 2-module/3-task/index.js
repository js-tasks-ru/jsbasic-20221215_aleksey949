let calculator = {
  read(first, second) {
    this.first = first;
    this.second = second;
  },
  sum() {
    return this.first + this.second;
  },
  mul() {
    return this.first * this.second;
  },
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
