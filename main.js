
const el1 = document.getElementById('hamb-menu');
const btnshow = document.getElementById('hamb-show');
const btnhide = document.getElementById('humb-hide')


btnshow.addEventListener('click',function(){
  el1.classList.add('show');
});
btnhide.addEventListener('click',function(){
  el1.classList.add('hide');
});