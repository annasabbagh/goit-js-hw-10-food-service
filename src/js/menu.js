import menuTemplate from '../templates/menu.hbs';
import menu from '../menu.json';

const menuList = document.querySelector('.js-menu');
const menuMarkup = createMenuMarkup(menu);
menuList.insertAdjacentHTML('beforeend', menuMarkup);

function createMenuMarkup(menu) {
  return menuTemplate(menu);
}
