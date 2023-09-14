/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */

const landingContainer = document.querySelector(".landing__container");

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
const navList = document.querySelector("#navbar__list"); //select ul element

//select section headers and create li elements with inner text of header elements
const sectionHeader = document.querySelectorAll("h2");
for (let header of sectionHeader) {
  const navMenu = document.createElement("li"); //create li element
  navMenu.innerText = header.innerText; //add section text to li elements
  navList.appendChild(navMenu); //add li elements to ul as children
  navMenu.classList.add("menu__link");
}


// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
