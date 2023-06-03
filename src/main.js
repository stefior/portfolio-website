"use strict";

import $ from "jquery";

/*
TODO:
- Little squares moving around in the bg MAYBE, might be too much
- make it so that the triangles also work when the state is :focus and not just :hover
- make navbar move with viewport as it scrolls
- make navbar look more interesting
*/

// make projects fade in as user scrolls down the first time
const projects = document.querySelectorAll(".project");

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add("fade-in");
      observer.unobserve(entry.target);
    });
  },
  { threshold: 0.4 }
);

projects.forEach((project) => {
  observer.observe(project);
});

// animate hand emoji waving

$(function () {
  // The animation on hover
  $(".hello-message").on("mouseenter", function () {
    let hand = $(this).find(".hand");
    hand.addClass("wave");

    hand.on("animationend", function () {
      $(this).removeClass("wave");
    });
  });

  // The animation on page load
  setTimeout(function () {
    let hand = $(".hello-message").find(".hand");
    hand.addClass("wave");

    hand.on("animationend", function () {
      $(this).removeClass("wave");
    });
  }, 500);
});

// animate triangles bubbling up on button hover
let intervalId;

const buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
  const triangleWrapper = button.querySelector('.triangle-wrapper');

  button.addEventListener("mouseover", () => {
    if (intervalId) return;

    intervalId = setInterval(() => {
      for (let i = 0; i < 2; i++) {
        const template = document.querySelector("#triangle-template");
        const triangle = template.cloneNode(true);
        triangle.style.display = "block";
        triangleWrapper.appendChild(triangle);

        const x = Math.random() * button.offsetWidth;
        const duration = Math.random() * 1.5 + 2.5;
        const rotation = Math.random() * 360;

        gsap.set(triangle, { rotation: rotation });

        gsap.fromTo(
          triangle,
          {
            x: x,
            y: 8,
            opacity: .5,
          },
          {
            y: -(triangleWrapper.offsetHeight + 5),
            opacity: 0,
            duration: duration,
            onComplete: () => {
              triangleWrapper.removeChild(triangle);
            },
          }
        );
      }
    }, 200);
  });

  button.addEventListener("mouseleave", () => {
    clearInterval(intervalId);
    intervalId = null;
  });
});
