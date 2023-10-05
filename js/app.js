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
const navList = document.querySelector("#navbar__list"); //select ul element
// const landingContainer = document.querySelector(".landing__container");
const sectionHeader = document.querySelectorAll("h2"); //select all h2 elements
const sections = document.querySelectorAll("section"); //select all section elements


/**
 * End Global Variables
 * Start Helper Functions
 *
 */

//add class name to section headers
sectionHeader.forEach(header => {
  header.classList.add("sec__hdr");
 });


/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav

 //select section headers and create li elements with inner text of header elements
sections.forEach(section => {
  const navItem = document.createElement("li"); //create li element
  const navLink = document.createElement("a"); //create link element
  navLink.innerText = section.dataset.nav; //use data-nav to find sections and add text
  navLink.href = `#${section.id}`; //make clickable link to section by data-nav
  navItem.appendChild(navLink); //add li elements to ul 
  navList.appendChild(navItem); //add link elements to li's

  navLink.classList.add("menu__link"); //add class name to li element
});



// Add class 'active' to section when near top of viewport

// function sectionInView(section) {
//   const inView = document.documentElement.clientHeight;
    // section.getBoundingClientRect();
//   return (
//     inView.top >= 0 && inView.left >= 0 &&
//     inView.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//     inView.right <= (window.innerWidth || document.documentElement.clientWidth)
//   );
// }

// function setActiveSection() {
//   sections.forEach(section => {
//     if (sectionInView(section)) {
//       section.classList.add("your-active-class");
//     } else {
//       section.classList.remove("your-active-class")
//     }
//   });
// }

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click


// Set sections as active


/** viewport research/practice */

const viewportHeight = document.documentElement.clientHeight;
const viewportWidth = document.documentElement.clientWidth;

const sectionOne = document.getElementById("section1");
const topEdge = sectionOne.getBoundingClientRect().top;
const bottomEdge = sectionOne.getBoundingClientRect().bottom;


//determine if element is in viewport
function isInView() {
    if (sectionOne.topEdge < viewportHeight && sectionOne.bottomEdge > 0) {
      sectionOne.style.backgroundColor = "green";
    }
  }

// document.addEventListener("scroll", function() {
//   sections.forEach(section => {
//     if(isInView(section)) {
//       section.style.backgroundColor = "green";
//     }
//   });
// }


  // when scrolling, how much of the element must be visible for the effect to take place?
  // What is a good percentage to use if more than one element is in the viewport? Highest one is highlighted?
  // while the top of the section or the bottom of the section comes into the viewport
    // ****use boolean function isInView(element) for while statement****
  // change state to active 
  // change background to highlight
