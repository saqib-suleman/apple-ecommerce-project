// document
//   .querySelector("meta[name=viewport]")
//   .setAttribute(
//     "content",
//     "width=device-width, initial-scale=" + 1 / window.devicePixelRatio
//   );

const slideshowDivs = (() => {
  for (let i = 1; i <= 5; i++) {
    const div = document.createElement("div");

    div.style.backgroundImage = `url(images/slideshow/section-1-bg-${i}.jpg)`;

    if (i === 1) {
      div.classList.add("change");
    }

    document.querySelector(".slideshow").appendChild(div);
  }
})();

const divs = document.querySelectorAll(".slideshow div");

let a = 1;

const slideshow = (() => {
  setInterval(() => {
    a++;
    const div = document.querySelector(".slideshow .change");

    div.classList.remove("change");

    if (a < divs.length) {
      div.nextElementSibling.classList.add("change");
    } else {
      divs[0].classList.add("change");
      a = 1;
    }
  }, 20000);
})();
