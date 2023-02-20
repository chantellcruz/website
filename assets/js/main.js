/*========== ˗ˏˋ ✿ T H E M E  T O G G L E ✿ ´ˎ˗ ==========*/
const themeButton = document.getElementById('theme-button')

themeButton.onclick = () => {
    themeButton.classList.toggle('bxs-moon');
    document.body.classList.toggle('dark-theme')
    themeButton.classList.toggle('bxs-sun');
}