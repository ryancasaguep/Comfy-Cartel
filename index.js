const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navBar = document.getElementsByClassName('navbar-link')[0]

toggleButton.addEventListener("click", () =>{
    navBar .classList.toggle('active')
})