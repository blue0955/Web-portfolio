

// Height Variable
function handleHeight() {
    let resizeTimeout;

    function setHeight() {
        const els = document.querySelectorAll("[data-height]");

        els.forEach( (el) => {
            const height = el.firstElementChild.clientHeight + "px";

            const targetSelector = el.getAttribute("data-height");

            if (targetSelector && targetSelector.trim() !== "") {
                const targetElement = document.querySelector(targetSelector);
                if (targetElement) {
                    targetElement.style.setProperty("--height", height);
                }
            } else {
                el.style.setProperty("--height", height);
            }
        }
        );
    }

    function throttledSetHeight() {
        if (!resizeTimeout) {
            resizeTimeout = setTimeout( () => {
                resizeTimeout = null;
                setHeight();
            }
            , 100);
        }
    }

    setHeight();
    window.addEventListener("resize", throttledSetHeight);
}

function handlePage() {
    const page = document.querySelector("[data-page]");
    let pageName = page ? page.getAttribute("data-page") : "Home";

    if (pageName.toLowerCase() === "home") {
        if (!document.body.classList.contains("dark")) {
            document.body.classList.add("dark");
        }
    } else {
        document.body.classList.remove("dark");
    }

    if (pageName.toLowerCase() === "the value") {
        document.body.classList.add("no-transition");
    } else {
        document.body.classList.remove("no-transition");
    }

    pageName = pageName.charAt(0).toUpperCase() + pageName.slice(1);

    const pageTitle = document.querySelector(".menu-title .text-p");
    if (pageTitle) {
        pageTitle.textContent = pageName;
    }
}

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
document.addEventListener("DOMContentLoaded", handleMenu);
