/*========== ˗ˏˋ ✿ T H E M E  T O G G L E ✿ ´ˎ˗ ==========*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bxs-sun'

// previously selected theme
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// otain current theme by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bxs-moon' : 'bx bxs-sun'

// validate if the user previously chose a theme
if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bx bxs-moon' ? 'add' : 'remove'](iconTheme)
}
// activate / deactivate the theme with the button
themeButton.addEventListener('click', () => {
    // add or remove the dark icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // save the theme and that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})



/*========== ˗ˏˋ ✿ P O R T F O L I O   F I L T E R ✿ ´ˎ˗ ==========*/
let filteredPortfolio = mixitup('.portfolio-container', {
  selectors: {
      target: '.project-card'
  },
  animation: {
      duration: 300
  }
});

/* Link active work */ 
const linkWork = document.querySelectorAll('.portfolio-item');

function activeFilter(){
  linkWork.forEach(l=> l.classList.remove('active-filter'));
  this.classList.add('active-filter');
}

linkWork.forEach(l=> l.addEventListener('click', activeFilter));