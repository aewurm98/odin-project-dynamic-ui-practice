// Import stylesheet
import './style.css';

// Import assets
import Pizza from './assets/pizza-outline.svg';
import Drinks from './assets/beer-outline.svg';
import Burger from './assets/fast-food-outline.svg';

// Import other Modules
import createMenu, { toggleMenu } from './dropdown.js';
import tabList, {
  tabContents,
  createTabSection,
  toggleTab,
  allTabs,
} from './mobile-menu.js';

// Gather useful global references
const body = document.querySelector('body');

// Load Setup for dropdown menu
const title1 = document.createElement('h1');
title1.textContent = 'Exercise 1';
title1.classList.add('exercise-title');

const exercise1 = document.createElement('div');
exercise1.classList.add('exercise-body');

const menuHeader = document.createElement('div');
menuHeader.classList.add('sidebar');

const menuContainer = createMenu(['Home', 'Messages', 'Reports', 'Settings']);

menuHeader.appendChild(menuContainer);

exercise1.appendChild(menuHeader);

// Add DOM Elements
body.appendChild(title1);
body.appendChild(exercise1);

// Load Setup for mobile menu
const title2 = document.createElement('h1');
title2.textContent = 'Exercise 2';
title2.classList.add('exercise-title');

const exercise2 = document.createElement('div');
exercise2.classList.add('exercise-body');

const tabHeader = document.createElement('div');
tabHeader.classList.add('header');

const tabBody = document.createElement('div');
tabBody.classList.add('tab-body');

// Create Components for Tab Structure

const pizzaTab = new tabContents(
  'Pizza',
  'Try our world famous New York style slices!',
  Pizza
);
const drinksTab = new tabContents(
  'Drinks',
  'More than 30 beers on tap from around the world!',
  Drinks
);
const burgerTab = new tabContents(
  'Burgers',
  'Rated the best burger in Chicago 5-years running!',
  Burger
);

allTabs.addTab(pizzaTab);
allTabs.addTab(drinksTab);
allTabs.addTab(burgerTab);

const tabContainer = allTabs.createTabMenu();
tabHeader.appendChild(tabContainer);

exercise2.appendChild(tabHeader);
exercise2.appendChild(tabBody);

// Add DOM Elements
body.appendChild(title2);
body.appendChild(exercise2);

allTabs.initializeTabContent();

// Load Setup for image-slider
const title3 = document.createElement('h1');
title3.textContent = 'Exercise 3';
title3.classList.add('exercise-title');

const exercise3 = document.createElement('div');
exercise3.classList.add('exercise-body');

body.appendChild(title3);
body.appendChild(exercise3);
