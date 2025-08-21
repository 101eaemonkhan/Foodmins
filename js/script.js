document.addEventListener('DOMContentLoaded', () => {
  const navbar  = document.querySelector('.header .flex .navbar');
  const profile = document.querySelector('.header .flex .profile');
  const menuBtn = document.querySelector('#menu-btn');
  const userBtn = document.querySelector('#user-btn');
  const loaderEl = document.querySelector('.loader');

  const closeAll = () => {
    navbar?.classList.remove('active');
    profile?.classList.remove('active');
  };

  menuBtn?.addEventListener('click', () => {
    navbar?.classList.toggle('active');
    profile?.classList.remove('active');
  });

  userBtn?.addEventListener('click', () => {
    profile?.classList.toggle('active');
    navbar?.classList.remove('active');
  });

  window.addEventListener('scroll', closeAll);

  // Fade out loader once
  if (loaderEl) {
    setTimeout(() => {
      loaderEl.classList.add('is-fading');    // triggers CSS transition
      // optional: remove from flow after fade
      loaderEl.addEventListener('transitionend', () => loaderEl.remove(), { once: true });
    }, 1200);
  }
});
