/*=================== toggle icon navbar ===================*/
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".collapse");
menuIcon.onclick = () => {
  menuIcon.classList.toggle("fa-bars");
  menuIcon.classList.toggle("fa-xmark");
  navbar.classList.toggle("active");
};

/*=================== scroll sections active link ===================*/
let sections = document.querySelectorAll("header, section");
let navLinks = document.querySelectorAll("nav .navbar-nav li a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");
    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("nav .navbar-nav li a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  /*=================== remove toggle icon navbar when click nabar link ===================*/
  menuIcon.classList.remove("fa-xmark");
  menuIcon.classList.add("fa-bars");
  navbar.classList.remove("active");
};
