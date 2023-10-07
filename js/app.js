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

// build the nav

const navList = document.querySelector("#navbar__list"); //select ul element
const sections = document.querySelectorAll("section"); //select all section elements

//select section headers and create li elements with inner text of header elements
sections.forEach((section) => {
  const navItem = document.createElement("li"); //create li element
  const navLink = document.createElement("a"); //create link element
  navLink.innerText = section.dataset.nav; //use data-nav to find sections and add text
  navLink.href = `#${section.id}`; //make clickable link to section by data-nav
  navItem.appendChild(navLink); //add li elements to ul
  navList.appendChild(navItem); //add link elements to li's

  navLink.classList.add("menu__link"); //add class name to li element
});

// Scroll to anchor ID using scrollTO event
const links = document.querySelectorAll(".menu__link"); //get all of the a elements

//add the click event to each a element
links.forEach((link) => {
  link.addEventListener("click", smooth); //use smooth function for click event behavior
});

//function for the click event
function smooth(event) {
  event.preventDefault(); //stop the click from doing its standard behavior
  const href = this.getAttribute("href"); //find the href element tags

  document.querySelector(href).scrollIntoView({
    //set scroll behavior to smooth on each href
    behavior: "smooth",
  });
}

// Add class 'active' to section when near top of viewport

// Set sections as active

/** viewport research/practice */

const viewportHeight = document.documentElement.clientHeight;
const headers = document.querySelectorAll("h2");

//determine if element is in viewport
function isInView(section) {
  const bound = section.getBoundingClientRect();
  return bound.top < viewportHeight && bound.bottom > 0;
}

window.addEventListener("scroll", function (e) {
  sections.forEach((section) => {
    section.classList.remove("your-active-class");
    if(isInView(section)) {
      section.classList.add("your-active-class");
    }
  });
});


// when scrolling, how much of the element must be visible for the effect to take place?
// What is a good percentage to use if more than one element is in the viewport? Highest one is highlighted?
// while the top of the section or the bottom of the section comes into the viewport
// ****use boolean function isInView(element) for while statement****
// change state to active
// change background to highlight
