document.querySelector('body').addEventListener('click', collapseContent);

function collapseContent() {
  let navBar = event.target.closest('nav');

  if (navBar && navBar.classList.contains('section-heading')) {
    let contentSection = event.target.closest('section').children[1];
    let collapseButton = event.target.closest('nav').children[1];
    contentSection.classList.toggle('hidden');
    if (collapseButton.style.backgroundImage === 'url("resources/shrink.png")') {
      collapseButton.style.backgroundImage = 'url("resources/expand.png")';
    } else {
      collapseButton.style.backgroundImage = 'url("resources/shrink.png")';
    }
  }
}

document.querySelector('.learning-goals').addEventListener('click', completeGoal);

function completeGoal() {
  if (event.target.classList.contains('goal-checkbox') && event.target.closest('div').children[1].classList.contains('complete')) {
    event.target.closest('div').children[1].classList.remove('complete');
  } else if (event.target.classList.contains('goal-checkbox')) {
    event.target.closest('div').children[1].classList.add('complete');
  }
}
