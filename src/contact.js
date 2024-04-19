import './styles/contact.css';

const contentDiv = document.querySelector('#content');
const address = createCard('Address:', `Manoj's Chinese Restaurant
123 Dragon Street, Chinatown
Lima, Peru`);
const phone = createCard('Phone:', '+51 123 456 789');
const email = createCard('Email:', 'info@manojschineserestaurant.com');
const hours = createCard('Hours of Operation:', 'Monday - Sunday: 11:00 AM - 10:00 PM');

function createCard(title, description) {
  const card = document.createElement('div');
  const titleDiv = document.createElement('div')
  const descriptionDiv = document.createElement('div');

  card.className = 'card';
  titleDiv.className = 'title';
  descriptionDiv.className = 'description';

  titleDiv.textContent = title;
  descriptionDiv.textContent = description;
  card.append(titleDiv, descriptionDiv);

  return card;
}

function loadContact() {
  contentDiv.append(address, phone, email, hours);
  contentDiv.classList.add('contact-page');
}

export default loadContact;