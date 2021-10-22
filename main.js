
const hamburgerMenu = document.querySelector('.hamburger-menu');
const btnshow = document.querySelector('.fas.fa-bars');
const btnhide = document.querySelector('.fas.fa-times')


btnshow.addEventListener('click',function(){
  hamburgerMenu.classList.add('active');
});
btnhide.addEventListener('click',function(){
  hamburgerMenu.classList.remove('active');
});