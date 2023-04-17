// Import assets
import openMenu from './assets/menu-outline.svg';
import closeMenu from './assets/close-outline.svg';

export default function createMenu(stringArr) {
  const menuIcon = document.createElement('img');
  menuIcon.classList.add('menu-icon');
  menuIcon.src = openMenu;
  menuIcon.addEventListener('click', toggleMenu);

  const menuItems = document.createElement('ul');
  menuItems.classList.add('menu');

  for (let i = 0; i < stringArr.length; i++) {
    const item = document.createElement('li');
    item.classList.add('menu-item');
    item.textContent = stringArr[i];
    menuItems.appendChild(item);
  }

  const menuContainer = document.createElement('div');
  menuContainer.classList.add('menu-container');

  menuContainer.appendChild(menuIcon);
  menuContainer.appendChild(menuItems);

  return menuContainer;
}

export function toggleMenu(e) {
  if (e.target.classList.contains('active')) {
    // Set menu icon to menu closed state
    e.target.classList.remove('active');
    e.target.src = openMenu;

    // Set menu items to menu closed state
    const menuItems = e.target.parentElement.children[1];
    menuItems.classList.remove('active');
  } else {
    // Set menu icon to menu open state
    e.target.classList.add('active');
    e.target.src = closeMenu;

    // Set menu items to menu open state
    const menuItems = e.target.parentElement.children[1];
    menuItems.classList.add('active');
  }
}
