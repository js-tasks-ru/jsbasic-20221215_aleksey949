/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  constructor(rows) {
    this.rows = rows;
    this.elem = document.createElement('table');
    this.elem.innerHTML = `<thead><tr><td>Имя</td><td>Возраст</td><td>Зарплата</td><td>Город</td><td></td></tr></thead>`;

    let tableInner = this.rows.map((row) =>
      // Необходимо перебрать каждый ряд и оттуда извлечь все значения
      `<tr>${Object.values(row).map((value) =>
        `<td>${value}</td>`
      ).join('')}<td><button>X</button></td></tr>`
    ).join('');
    this.elem.innerHTML += `<tbody>
${tableInner}
</tbody>`;
    this.elem.addEventListener('click', (event) => this.removeTd(event));
  }

  removeTd(event) {
    if (event.target.tagName === 'BUTTON') {
      let tr = event.target.closest('tr');
      tr.remove();
    }
  }
}
