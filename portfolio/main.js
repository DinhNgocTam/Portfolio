const navSlide = () => {
    const burger = document.querySelector(".hamburger");
    const nav = document.querySelector(".nav__list");
    const navLinks = document.querySelectorAll(".nav__item");
  
    burger.addEventListener("click", () => {
      //Toggle Nav
      nav.classList.toggle("nav-active");
  
      //Animate Links
      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = "";
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0
          }s`;
        }
      });
  
      //Burger Animation
      burger.classList.toggle("toggle");
    });
  };
  navSlide();