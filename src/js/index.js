import menuTemplate from '../templates/menu.hbs';
import menu from '../menu.json';
// console.log(menuTemplate(menu[0]));

const menuList = document.querySelector('.js-menu');
const menuMarkup = createMenuMarkup(menu);
menuList.insertAdjacentHTML('beforeend', menuMarkup);

// const themeSwitchInput = document.querySelector('.theme - switch__toggle');
// themeSwitchInput.addEventListener()

function createMenuMarkup(menu) {
  //   return menu.map(menuTemplate).join('');
  return menuTemplate(menu);
}
console.log(menuMarkup);
