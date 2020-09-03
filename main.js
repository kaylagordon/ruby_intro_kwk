document.querySelector('body').addEventListener('click', function() {
  let navBar = event.target.closest('nav');
  let collapseButton = event.target.closest('section').children[1];
  if (navBar && navBar.classList.contains('section-heading')) {
    collapseButton.classList.toggle('hidden');
    if (navBar.children[1].style.backgroundImage === 'url("resources/shrink.png")') {
      navBar.children[1].style.backgroundImage = 'url("resources/expand.png")';
    } else {
      navBar.children[1].style.backgroundImage = 'url("resources/shrink.png")';
    }
  }
});
