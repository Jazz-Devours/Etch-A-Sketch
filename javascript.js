const container = document.querySelector('#container');

const grid = 16;

for (let y = 0; y < grid; y++) {
  const divx = document.createElement('div');
  divx.classList.add('boxX');
  container.appendChild(divx);
  for (let x = 0; x < grid; x++) {
  const divy = document.createElement('div');
  divy.classList.add('boxY');
    divx.appendChild(divy)
  }
}
