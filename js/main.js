document.querySelector('#language-click').addEventListener('click', () => {
  document.querySelector('#language-active').classList.toggle('language__items--active');
  document.querySelector('#language-click').classList.toggle('language-btn-0--active');
} )  


// video
document.querySelectorAll('.reviews__wrapper-video').forEach((btn) =>
  btn.querySelector('.reviews__block-video-0').addEventListener('click', () => {
    btn.querySelector('.reviews__block-video-0').classList.toggle('reviews__block-video-0--active');
    btn.querySelector('.reviews__video').classList.toggle('reviews__video--active');
  } )
);