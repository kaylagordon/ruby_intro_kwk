var page = document.querySelector('body');

page.addEventListener('click', function() {
  if (event.target.closest('nav') && event.target.closest('nav').classList.contains('section-heading')) {
    event.target.closest('section').children[1].classList.toggle('hidden');
    if (event.target.closest('nav').children[1].style.backgroundImage === 'url("resources/shrink.png")') {
      event.target.closest('nav').children[1].style.backgroundImage = 'url("resources/expand.png")';
    } else {
      event.target.closest('nav').children[1].style.backgroundImage = 'url("resources/shrink.png")';
    }
  }
});
