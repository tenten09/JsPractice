'use strict';

{
  function update() {
    document.querySelector('#target').textContent = 'changed';
    document.getElementById('target').textContent = 'changed';
  }
  setTimeout(update, 1000);
}
