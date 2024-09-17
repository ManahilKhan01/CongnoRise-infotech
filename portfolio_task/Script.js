let menuicon = document.querySelector(".bx-menu");
let navbar = document.querySelector(".navbar");

let sections = document.querySelectorAll("section");
let navlinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navlinks.forEach((link) => {
        link.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

menuicon.onclick = () => {
  menuicon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

 ScrollReveal().reveal('.home-content', {
  duration: 2000,
  origin: 'left',
  distance: '50px',
  delay: 300
});

ScrollReveal().reveal('.home-img', {
  duration: 2000,
  origin: 'right',
  distance: '50px',
  delay: 300
});

ScrollReveal().reveal('.education, .services, .testimonials, .contact , .testimonial-item', {
  duration: 3000,
  origin: 'bottom',
  distance: '30px',
  delay: 200,
  interval: 200
});
