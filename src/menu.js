import friedRice from './images/arroz-chaufa.jpg';

const contentDiv = document.querySelector('#content');
const headline = document.createElement('h1');
const description = document.createElement('p');
const image = new Image();


headline.textContent = 'Arroz Chaufa';
description.textContent = 'Arroz chaufa consists of a mix of fried rice with vegetables, usually including scallions, eggs, and chicken, quickly cooked at high heat, often in a wok with soy sauce and oil. It comes from the Chinese cuisine due to the influx of Chinese immigrants to Peru at the end of the 19th century.';
image.src = friedRice;

function loadMenu() {
  contentDiv.append(headline, description, image);
}

export default loadMenu;