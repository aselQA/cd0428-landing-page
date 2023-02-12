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
 */
const navigation = document.getElementById("navbar__list");
const sections = document.querySelectorAll("section");

/**
 * End Global Variables
 */

// building the navigation menu
sections.forEach((section) => {
  const navList = document.createElement("li");
  navigation.appendChild(navList);

  const sectionId = section.id;
  const sectionDataNav = section.dataset.nav;

  const navA = document.createElement("a");
  navA.innerHTML = sectionDataNav;
  navA.className = "menu__link";
  navA.setAttribute("href", `#${sectionId}`);
  navList.appendChild(navA);
});

//set variable all <a> links in navigation bar
const menuLink = document.querySelectorAll(".menu__link");
// Add class = 'active' in navigation link
menuLink.forEach((link) => {
  link.addEventListener("click", function () {
    // (1) remove all active class
    removeActiveClassInNavLink();
    // (2) add a active class
    if (link.className !== "active") {
      link.classList.add("active");
    }
  });
});

// function remove active class in navigation link
function removeActiveClassInNavLink() {
  for (let i = 0; i < menuLink.length; i++) {
    menuLink[i].classList.remove("active");
  }
}

// verify that section when near top of viewport
const isInViewPort = (section) => {
  return Math.floor(section.getBoundingClientRect().top);
};

// remove the active class in section
const removeActiveClass = (section) => {
  section.classList.remove("your-active-class");
  section.style.cssText =
    "background-color: linear-gradient(0deg, rgba(255,255,255,.1) 0%, rgba(255,255,255,.2) 100%)";
};

// adding the active class in section
const addActiveClass = (isTrue, section) => {
  if (isTrue) {
    section.classList.add("your-active-class");
    section.style.cssText = "background-color: rgba(111, 173, 132, 0.54)";
  }
};

//the function  add or remove class 'active' to section in viewport
const activeSection = () => {
  sections.forEach((section) => {
    const elementInView = isInViewPort(section);

    inView = () => elementInView < 100 && elementInView >= -100;

    removeActiveClass(section);
    addActiveClass(inView(), section);
  });
};
window.addEventListener("scroll", activeSection);

// move smoothly to each section when clik on navigation bar
for (let i = 0; i < menuLink.length; i++) {
  menuLink[i].addEventListener("click", function () {
    const eachSection = document.getElementById("section" + (i + 1));
    console.log(eachSection);
    if (isInViewPort(eachSection)) {
      eachSection.scrollIntoView({ behavior: "smooth" });
    }
  });
}

/**
 * End Main Functions
 * Begin Events
 *
 */
