const navLinks = document.querySelector(".nav-links");
const header = document.querySelector("header");
const slider = document.querySelector(".slider");
// photos
const photos = ["img/one.jpg", "img/two.jpg", "img/three.jpg"];

// finging element
const imgTag = document.getElementsByTagName("img")[0];

let count = 0;
// click handler
const prev = () => {
  count--;
  if (count < 0) {
    count = photos.length - 1;
    imgTag.src = photos[count];
  } else {
    imgTag.src = photos[count];
  }
};

const next = () => {
  count++;
  if (count == photos.length) {
    count = 0;
    imgTag.src = photos[count];
  } else {
    imgTag.src = photos[count];
  }
};

// Smooth scrolling
navLinks.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.classList.contains("nav-item")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

const navHeight = header.getBoundingClientRect().height;

function stickyNavbar(entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) {
    header.classList.add("myNavFixed");
    slider.classList.add(`mt-[${navHeight}px]`);
    console.log(header);
  } else {
    header.classList.remove("myNavFixed");
    slider.classList.remove(`mt-[${navHeight}px]`);
  }
}

const sliderObserver = new IntersectionObserver(stickyNavbar, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
sliderObserver.observe(slider);
