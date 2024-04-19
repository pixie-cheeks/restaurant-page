import restaurantJpeg from './images/restaurant.jpeg';

const contentDiv = document.querySelector('#content');
const headline = document.createElement('h1');
const description = document.createElement('p');
const image = new Image();

headline.textContent = 'Manoj\'s Chinese Restaurant';
image.src = restaurantJpeg;
description.textContent = "Welcome to Manoj's Chinese Restaurant, where the tantalizing flavors of China meet the vibrant spirit of Peru! Nestled in the heart of Lima, this culinary gem is the brainchild of the esteemed Indian chef, Manoj, whose passion for Chinese cuisine knows no bounds.";

function loadHome() {
  contentDiv.append(headline, image, description);
  contentDiv.classList.add('home-page');
}

export default loadHome;