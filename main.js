document.querySelector('body').addEventListener('click', collapseContent);

function collapseContent() {
  let navBar = event.target.closest('nav');
  let contentSection = event.target.closest('section').children[1];
  let collapseButton = event.target.closest('nav').children[1];
  if (navBar && navBar.classList.contains('section-heading')) {
    contentSection.classList.toggle('hidden');
    if (collapseButton.style.backgroundImage === 'url("resources/shrink.png")') {
      collapseButton.style.backgroundImage = 'url("resources/expand.png")';
    } else {
      collapseButton.style.backgroundImage = 'url("resources/shrink.png")';
    }
  }
}
