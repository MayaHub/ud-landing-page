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
  navItem.setAttribute("id", `#${section.id}`) //add id to li element
  navItem.appendChild(navLink); //add a elements to li's
  navList.appendChild(navItem); //add li elements to ul

  navLink.classList.add("menu__link"); //add class name to <a> element
  navItem.classList.add("navlist__item"); //add class name to list items
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

//determine if element is in viewport
function isTopVisible(section) {
  const sectionHeight = section.offsetHeight;
  const topEdge = section.getBoundingClientRect().top;
  return topEdge >=0 && topEdge <= (sectionHeight/2);
}


function activeSection() {
  sections.forEach(section => {
    section.classList.remove("your-active-class");
    const navItem = document.getElementById(`#${section.id}`);
    navItem.classList.remove("active");
    
    if(isTopVisible(section)) {
      section.classList.toggle("your-active-class"); // Set section as active
      navItem.classList.toggle("active");
    }
  });
}

// Add class 'active' to section when near top of viewport
window.addEventListener("scroll", activeSection);
 


