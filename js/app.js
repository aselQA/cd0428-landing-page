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
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
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

// Add class 'active' to section when near top of viewport

const sectionInViewPort = (section) => {
  return Math.floor(section.getBoundingClientRect().top);
};

// remove the active class
const removeActiveClass = (section) => {
  section.classList.remove("your-active-class");
  section.style.cssText =
    "background-color: linear-gradient(0deg, rgba(255,255,255,.1) 0%, rgba(255,255,255,.2) 100%)";
};

// adding the active class
const addActiveClass = (isTrue, section) => {
  if (isTrue) {
    section.classList.add("your-active-class");
    section.style.cssText = "background-color: rgba(111, 173, 132, 0.54)";
  }
};

//the function  add class 'active' to section
const activeSection = () => {
  sections.forEach((section) => {
    const elementInView = sectionInViewPort(section);

    inviewport = () => elementInView < 100 && elementInView >= -100;

    removeActiveClass(section);
    addActiveClass(inviewport(), section);
  });
};

window.addEventListener("scroll", activeSection);

// Scroll to anchor ID using scrollTO event
const scrollingSection = () => {
  const links = document.querySelectorAll(".menu__link");
  links.forEach((link) => {
    link.addEventListener("click", () => {
      for (i = 0; i < sections; i++) {
        sections[i].addEventListener("click", (e) => {
          e.preventDefault();
          link.scrollIntoView({
            behavior: "smooth",
          });
        });
      }
    });
  });
};
scrollingSection();

// for (const section of sections) {
//   const links = document.querySelectorAll(".menu__link");
//   for (let i = 0; i < links; i++) {
//     links[i].addEventListener("click", (e) => {
//       e.preventDefault();
//       section.scrollIntoView({
//         behavior: "smooth",
//       });
//     });
//   }
// }

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
