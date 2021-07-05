window.addEventListener('scroll', function(){
  var navbar = document.querySelector('nav');
  navbar.classList.toggle('sticky', window.scrollY > 10);
});

function toggleMenu(){
  burger = document.querySelector('.burger');
  manus = document.querySelector('.manus');
  nav = document.querySelector('nav');
  manus.classList.toggle('active');
  burger.classList.toggle('active');
  nav.classList.toggle('active');
}
