import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadContact from "./contact.js";

const contentDiv = document.querySelector('#content');
const nav = document.querySelector('nav');
let currentTab = 'home';

bindEvents();
loadHome();

function bindEvents() {
  nav.addEventListener('click', switchTabs);
}

function switchTabs(event) {
  if (currentTab === event.target.className) return;

  currentTab = event.target.className;
  render();
}

function render() {
  contentDiv.textContent = '';
  switch (currentTab) {
    case 'home':
      loadHome();
      break;
    case 'menu':
      loadMenu();
      break;
    case 'contact':
      loadContact();
      break;
  }
}