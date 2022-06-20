// hide and show mobile menu
const menuContent = document.querySelector('.mobile-menu');
const hamburger = document.querySelector('.menu-icon');

hamburger.addEventListener('click', () => {
  document.querySelector('.bi-list').classList.toggle('bi-x');
  menuContent.classList.toggle('menu-show');
});
