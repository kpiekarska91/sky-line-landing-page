// Load Styles
import '../scss/main.scss';

// Load Bootstrap init
import {initBootstrap} from "./bootstrap.js";

// Loading bootstrap with optional features
initBootstrap({
  tooltip: true,
  popover: true,
  toasts: true,
});

const navLinks = document.querySelectorAll('.navbar-nav>li>a');
const navbarToggler = document.querySelector('.navbar-toggler');

navLinks.forEach(navLink => {
  navLink.addEventListener('click', () => {

    if (document.querySelector(".navbar-collapse").classList.contains("show")) {
      navbarToggler.click();
    }

  });
});
