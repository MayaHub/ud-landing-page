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
const landingContainer = document.querySelector(".landing__container");

//select section headers and create li elements with inner text of header elements
const sectionHeader = document.querySelectorAll("h2");
for (let header of sectionHeader) {
  const navItem = document.createElement("li"); //create li element
  const link = document.createElement("a"); //create clickable link

  link.innerHTML = header.innerHTML; //add section HTML to li elements
  link.href = "#" + header.id; //add target for click event
  navList.append(navItem); //add li elements to ul as children
  navItem.append(link); //add links to the li elements

  // navItem.appendChild(navLink); //add link element to li
  navItem.classList.add("menu__link"); //add class to li element
}




document.addEventListener("click", function(event) {
  let button = document.querySelectorAll("a");
  alert("it works");
 });

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
