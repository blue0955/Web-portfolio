// Variables
const html = document.documentElement;
let lenis;
let loadingAnimation;

// Menu
function handleMenu() {
  const menu = document.querySelector(".menu");

  if (!menu) return;

  const menuTrigger = menu.querySelector(".menu-trigger");
  const menuNav = menu.querySelector(".nav");

  menuTrigger.setAttribute("role", "button");
  menuTrigger.setAttribute("aria-controls", "nav");
  menuTrigger.setAttribute("aria-haspopup", "menu");
  menuTrigger.setAttribute("aria-expanded", "false");
  menuTrigger.setAttribute("aria-label", "Open menu");
  menuTrigger.setAttribute("aria-pressed", "false");
  menuNav.id = "nav";
  menuNav.setAttribute("aria-hidden", "true");
  menuNav.setAttribute("inert", "");

  menuTrigger.addEventListener("click", toggleMenu);
  menuTrigger.addEventListener("keydown", (event) => {
    if (event.key === " " || event.key === "Spacebar") {
      event.preventDefault();
      toggleMenu();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menu.classList.contains("open")) {
      toggleMenu();
    }
  });

  document.addEventListener("click", (event) => {
    if (menu.classList.contains("open") && !menu.contains(event.target)) {
      toggleMenu();
    }
  });

  menuNav.addEventListener("click", (event) => {
    if (event.target.matches("a.nav-link")) {
      const href = event.target.getAttribute("href");
      if (
        href === window.location.pathname &&
        menu.classList.contains("open")
      ) {
        event.preventDefault();
        toggleMenu();
      }
    }
  });

  function toggleMenu() {
    if (!menu.classList.contains("open")) {
      menu.classList.add("open");
      menuTrigger.setAttribute("aria-expanded", "true");
      menuTrigger.setAttribute("aria-label", "Close menu");
      menuTrigger.setAttribute("aria-pressed", "true");
      menuNav.setAttribute("aria-hidden", "false");
      menuNav.removeAttribute("inert");
    } else {
      menu.classList.remove("open");
      menuTrigger.setAttribute("aria-expanded", "false");
      menuTrigger.setAttribute("aria-label", "Open menu");
      menuTrigger.setAttribute("aria-pressed", "false");
      menuNav.setAttribute("aria-hidden", "true");
      menuNav.setAttribute("inert", "");
    }
  }
  window.toggleMenu = toggleMenu;
}

