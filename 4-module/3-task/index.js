function highlight(table) {

  for (let row of table.lastElementChild.rows) {

    if (!row.cells[3].dataset.available) {
      row.hidden = true;
    } else {
      if (row.cells[3].dataset.available === "true") {
        row.classList.add('available');
      } else {
        row.classList.add('unavailable');
      }
    }

    if (row.cells[2].textContent === 'm') {
      row.classList.add('male');
    } else {
      row.classList.add('female');
    }

    if (+row.cells[1].textContent < 18) {
      row.style.textDecoration = 'line-through';
    }
  }
}
