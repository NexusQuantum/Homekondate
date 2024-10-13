'use stript';

node.textContent = 'value';

function add() {
  let time = prompt('時間を入力')
  let element = document.querySelector('h3');
  element.textContent = `${time}時`;
}