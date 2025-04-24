const menuBtn = document.querySelector('.menu-btn');
const menuCloseItem = document.querySelector('.menu-close-item');
const menuList = document.querySelector('.menu-list');
const menuShadow = document.querySelector('.menu-close')

menuBtn.addEventListener('click', ()=> {
  menuList.classList.toggle('menu-list-open');
  menuShadow.classList.toggle('menu-open');
});

menuCloseItem.addEventListener('click', ()=> {
  menuList.classList.remove('menu-list-open');
  menuShadow.classList.remove('menu-open');
});