const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const themeSwitchInput = document.querySelector('.theme-switch__toggle');
const bodyContainer = document.querySelector('body');
const themeStorageValue = localStorage.getItem('theme');
themeSwitchInput.addEventListener('change', themeSwitchHandler);

setLocalStorageTheme();

function themeSwitchHandler() {
  themeSwitchInput.checked ? darkTheme() : lightTheme();
}

function darkTheme() {
  themeSwitchInput.checked = true;
  bodyContainer.classList.add(Theme.DARK);
  bodyContainer.classList.remove(Theme.LIGHT);
  localStorage.setItem('theme', 'Theme.DARK');
}
function lightTheme() {
  bodyContainer.classList.add(Theme.LIGHT);
  bodyContainer.classList.remove(Theme.DARK);
  localStorage.setItem('theme', 'Theme.LIGHT');
}
function setLocalStorageTheme() {
  themeStorageValue === 'Theme.DARK' ? darkTheme() : lightTheme();
}
