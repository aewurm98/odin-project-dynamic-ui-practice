// Import stylesheet
import './style.css';

// Import other Modules
import createMenu, { toggleMenu } from './dropdown.js';

// Gather useful global references
const body = document.querySelector('body');

// Load Setup for dropdown menu
const title1 = document.createElement('h1');
title1.textContent = 'Exercise 1';
title1.classList.add('exercise-title');

const exercise1 = document.createElement('div');
exercise1.classList.add('exercise-1');

const menuHeader = document.createElement('div');
menuHeader.classList.add('header');

const menuContainer = createMenu(['Home', 'Messages', 'Reports', 'Settings']);

menuHeader.appendChild(menuContainer);

exercise1.appendChild(menuHeader);

// Load Setup for mobile menu
const exercise2 = document.createElement('div');
exercise2.classList.add('exercise-2');

// Load Setup for image-slider
const exercise3 = document.createElement('div');
exercise3.classList.add('exercise-3');

// Add DOM Elements
body.appendChild(title1);
body.appendChild(exercise1);
