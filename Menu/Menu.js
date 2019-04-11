
const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence. 
  let toggle = menu.classList.toggle('menu--open');
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');
// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');

// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click',toggleMenu);
window.addEventListener('click', (e) =>{
  if(e.target != menuButton && !menu.contains(e.target)){
    menu.classList.remove('menu--open');
  }
})