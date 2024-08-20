// particlesJS.load("particles-js", "assets/particles.json", function () {
//   console.log("callback - particles-js config loaded");
// });

const particlesContainer = document.getElementById("particles-js");
console.log(particlesContainer);

if (particlesContainer) {
  const customParticlesOptions = {
    particles: {
      number: {
        value: 150,
        density: {
          enable: true,
          value_area: 500,
        },
      },
      color: {
        value: "#09aff4",
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000",
        },
        polygon: {
          nb_sides: 5,
        },
        image: {
          src: "img/github.svg",
          width: 100,
          height: 100,
        },
      },
      opacity: {
        value: 0.5,
        random: true,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0,
          sync: false,
        },
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: true,
          speed: 5,
          size_min: 0.3,
          sync: false,
        },
      },
      line_linked: {
        enable: false,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 5,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: false,
          mode: "bubble",
        },
        onclick: {
          enable: false,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 250,
          size: 0,
          duration: 2,
          opacity: 0,
          speed: 3,
        },
        repulse: {
          distance: 400,
          duration: 0.4,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
  };

  // Initialize particles
  particlesJS("particles-js", customParticlesOptions);
}

var swiper = new Swiper(".mySwiper", {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 30,
  autoplay: {
    delay: 600,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper = new Swiper(".testmonials_slider", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  autoplay: {
    delay: 600,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const pageHeader = document.getElementById("page-header");
window.addEventListener("scroll", function () {
  if (window.scrollY > 50) {
    if (!pageHeader.classList.contains("is-sticky")) {
      pageHeader.classList.add("is-sticky");
    }
  } else {
    if (pageHeader.classList.contains("is-sticky")) {
      pageHeader.classList.remove("is-sticky");
    }
  }
});
