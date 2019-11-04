import '../styles/reset.css';
import '../styles/main.scss';
import 'babel-polyfill';

const elementsToBind = document.querySelectorAll('[data-bind]');
const overlay = document.querySelector('.overlay');

const actionBinds = {
  toggleHambNav: (e) => {
    if (overlay.style.opacity === '') {
      overlay.style.opacity = 1;
      overlay.style.pointerEvents = 'auto';
    } else {
      overlay.style.opacity = '';
      overlay.style.pointerEvents = 'none';
    }
  },
};

elementsToBind.forEach((element) => {
  element.addEventListener('click', actionBinds[element.dataset.bind], false);
});
