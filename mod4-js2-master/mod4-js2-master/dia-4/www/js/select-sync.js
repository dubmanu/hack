const data = [
  {
    name: 'Lugo',
    cities: [
      'O Vicedo',
      'Viveiro',
      'Xove',
      'Burela',
      'Foz',
      'Ribadeo',
      'Monforte de Lemos'
    ]
  },
  {
    name: 'A Coruña',
    cities: [
      'A Coruña',
      'Betanzos',
      'Sada',
      'Ordes',
      'Meson do Vento',
      'Santiago de Compostela'
    ]
  },
  {
    name: 'Ourense',
    cities: [
      'Oursense',
      'Verín',
      'Bande',
      'Celanova',
      'Allariz',
      'Maceda',
      'Ribadavia',
      'Cartelle'
    ]
  },
  {
    name: 'Pontevedra',
    cities: [
      'Pontevedra',
      'Vigo',
      'Cangas',
      'Moaña',
      'Bueu',
      'Portonovo',
      'Marín'
    ]
  }
];

const form = document.forms.local;

const provinceInput = form.elements.provincia;
const cityInput = form.elements.cidade;

//Create option
function buildOption(name) {
  const option = document.createElement('option');
  option.textContent = name;
  option.setAttribute('value', name);

  return option;
}

//Populate select
function buildSelect(select, list) {
  const options = document.createDocumentFragment();

  for (const name of list) {
    options.appendChild(buildOption(name));
  }

  select.appendChild(options);
}

buildSelect(provinceInput, data.map(d => d.name));

provinceInput.addEventListener('input', function() {
  cityInput.innerHTML = '';
  cityInput.setAttribute('disabled', true);

  const selectedProvince = provinceInput.value;
  const selectedProvinceData = data.filter(d => d.name === selectedProvince);

  if (selectedProvinceData.length) {
    buildSelect(cityInput, selectedProvinceData[0].cities);
    cityInput.removeAttribute('disabled');
  }
});
