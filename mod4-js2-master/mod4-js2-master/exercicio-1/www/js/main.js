/*
Exercicio DOM 1
☑ Cargar este arquivo de javascript dende un documento HTML sen 
  ningún contido.
☑ A partir dos datos do obxecto de abaixo crear unha <table> no
  body usando os métodos do DOM aprendidos ata agora.
☑ A <table> debe ter un caption, unha fila de <th> co nome das 
  columnas e 5 filas cos datos
☑ A táboa debe ter un CSS que diferencie visualmente a fila de 
  cabeceira e as filas de datos

☑ BONUS: detectar e destacar visualmente os valores maior e menores
  de cada fila.
☑ BONUS 2: Poñer un botón ao final da táboa que ao clicar engada 
  unha nova fila con valores aleatorios.
☑ BONUS 3: poñer outro botón ao final que ao clicar elimine a última 
  fila da táboa se esta non é a fila de cabeceira.
*/

const buildRow = (data, headerRow = false) => {
  const row = document.createElement('tr');
  let maxValue, minValue;

  if (!headerRow) {
    maxValue = Math.max(...data);
    minValue = Math.min(...data);
  }

  for (const columnData of data) {
    const column = document.createElement(headerRow ? 'th' : 'td');
    column.textContent = columnData;

    if (!headerRow) {
      columnData === maxValue && column.classList.add('max');
      columnData === minValue && column.classList.add('min');
    }
    row.appendChild(column);
  }

  return row;
};

const rand = max => Number((Math.random() * (max + 1)).toFixed(2));

const buildTable = ({ caption, columns, data }, parent) => {
  //Creamos table
  const table = document.createElement('table');

  //Creamos caption, asignamos texto e insertamos na table
  const tableCaption = document.createElement('caption');
  tableCaption.textContent = caption;
  table.appendChild(tableCaption);

  //Crear fila de cabeceira
  const headerRow = buildRow(columns, true);

  table.appendChild(headerRow);

  //Crear o resto das filas

  for (const rowData of data) {
    const row = buildRow(rowData);
    table.appendChild(row);
  }

  //Insertamos a table no seu parent
  parent.appendChild(table);

  //Insertamos botón de creación de nova fila
  const addButton = document.createElement('button');
  addButton.textContent = '+ Fila';

  addButton.addEventListener('click', function() {
    const row = buildRow([rand(40), rand(40), rand(40), rand(40), rand(40)]);
    table.appendChild(row);
  });

  parent.appendChild(addButton);

  //Insertamos botón de borrar última fila
  const deleteButton = document.createElement('button');
  deleteButton.textContent = '- Fila';

  deleteButton.addEventListener('click', function() {
    if (table.children.length > 2) {
      const lastRow = table.lastElementChild;
      lastRow.remove();
    }
  });

  parent.appendChild(deleteButton);
};

// Táboa datos

const table = {
  caption: 'Temperatura',
  columns: ['Luns', 'Martes', 'Mércores', 'Xoves', 'Venres'],
  data: [
    [10.3, 11, 10.8, 11.22, 21.3],
    [9.2, 3.1, 7.7, 2.56, 12.7],
    [7.4, 9.22, 5.61, 3.9, 44.25],
    [5.5, 11.12, 11.33, 14.16, 22.37],
    [11.3, 7.75, 15.78, 11.36, 8.02]
  ]
};

// Elemento parent
const section = document.querySelector('section.table');

// Executamos a función principal
buildTable(table, section);
