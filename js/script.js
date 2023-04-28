function toggleActive() {
   navbar.classList.toggle('active');
   profile.classList.remove('active');
 }
 
 let navbar = document.querySelector('.header .flex .navbar');
 let profile = document.querySelector('.header .flex .profile');
 let menuBtn = document.querySelector('#menu-btn');
 
 menuBtn.onclick = toggleActive;
 

 let userBtn = document.querySelector('#user-btn');

 userBtn.onclick = () => {
   profile.classList.toggle('active');
   navbar.classList.remove('active');
 };
 window.onscroll = () => {
   profile.classList.remove('active');
   navbar.classList.remove('active');
 };
 

 function loader() {
   document.querySelector('.loader').style.display = 'none';
 }
 function fadeOut() {
   setInterval(loader, 2000);
 }
 window.onload = fadeOut;
