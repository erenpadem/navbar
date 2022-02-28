const navToggle = document.querySelector('.nav-toggle');
const link = document.querySelector('.nav-items');


navToggle.addEventListener('click',function(){
         link.classList.toggle('show-links');
});