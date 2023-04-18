// Import stylesheet
import './style.css';

// Import assets
import Pizza from './assets/pizza-outline.svg';
import Drinks from './assets/beer-outline.svg';
import Burger from './assets/fast-food-outline.svg';
import Arrow from './assets/noun-arrow-2.svg';
import BackArrow from './assets/noun-arrow-back-2.svg';
import Photo1 from './assets/nature-photo-1.jpg';
import Photo2 from './assets/nature-photo-2.jpg';
import Photo3 from './assets/nature-photo-3.jpg';
import Photo4 from './assets/nature-photo-4.jpg';
import Photo5 from './assets/nature-photo-5.jpg';

// Import other Modules
import createMenu from './dropdown.js';
import { tabContents, allTabs } from './mobile-menu.js';
import {
  imageSlider,
  nextPhoto,
  prevPhoto,
  autoAdvance,
} from './image-slider.js';

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

const imgContainer = document.createElement('div');
imgContainer.classList.add('container');

const leftArrow = document.createElement('img');
leftArrow.classList.add('arrow');
leftArrow.src = BackArrow;
leftArrow.addEventListener('click', prevPhoto);

const carousel = document.createElement('div');
carousel.classList.add('carousel');

const slides = document.createElement('div');
slides.classList.add('slides');

const dots = document.createElement('div');
dots.classList.add('slide-nav');

carousel.appendChild(slides);
carousel.appendChild(dots);

const rightArrow = document.createElement('img');
rightArrow.classList.add('arrow');
rightArrow.src = Arrow;
rightArrow.addEventListener('click', nextPhoto);

imgContainer.appendChild(leftArrow);
imgContainer.appendChild(carousel);
imgContainer.appendChild(rightArrow);

exercise3.appendChild(imgContainer);

// Add DOM Elements
body.appendChild(title3);
body.appendChild(exercise3);

imageSlider.initialize([Photo1, Photo2, Photo3, Photo4, Photo5]);

autoAdvance();
