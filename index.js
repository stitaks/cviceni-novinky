const bodyElement = document.querySelector('body');
const newsElement = document.querySelector('.news');
const h1Element = document.querySelector('h1');
const zprava1Element = document.querySelector('#zprava1');
const posledniZprava = document.querySelector('#zprava3');

bodyElement.style.backgroundColor += '#e9e9e9';
newsElement.style.backgroundColor += 'white';
newsElement.style.width += '60rem';
h1Element.classList.add('news__title');
h1Element.textContent = 'Aktuální novinky';
zprava1Element.classList.add('post--main');
posledniZprava.querySelector('.post__picture').src = 'images/zprava3-novy.jpg';