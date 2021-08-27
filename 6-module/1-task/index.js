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
class UserTable {
  createHeader() {
    const thead = document.createElement('thead');
    this.elem.appendChild(thead);

    const tr = document.createElement('tr');
    thead.appendChild(tr);

    const headers = ['Имя', 'Возраст', 'Зарплата', 'Город', ''];
    for (let header of headers) {
      const th = document.createElement('th');
      th.innerText = header;
      tr.appendChild(th);
    }
  }

  createBody() {
    const tbody = document.createElement('tbody');
    this.elem.appendChild(tbody);

    for (let i = 0; i < this.rows.length; i++) {
      const tr = document.createElement('tr');
      tr.id = `row_${i}`;
      tbody.appendChild(tr);

      const attributes = ['name', 'age', 'salary', 'city', 'button'];

      for (let attr of attributes) {
        const td = document.createElement('td');

        if (attr === 'button') {
          const btn = document.createElement('button');
          btn.innerText = 'X';
          btn.addEventListener('click', () => {
            const row = document.getElementById(tr.id);
            row.remove();
          });
          td.appendChild(btn);
        } else {
          td.innerText = this.rows[i][attr];
        }

        tr.appendChild(td);
      }
    }
  }

  constructor(rows) {
    this.rows = rows;
    this.elem = document.createElement('table');
    this.createHeader();
    this.createBody();
  }
}

export default UserTable;