//sections---
const homeSection = document.querySelector("#home");
const skillsSection = document.querySelector("#skills");
const projectsSection = document.querySelector("#projects");
const educationSection = document.querySelector("#education");
const contactSection = document.querySelector("#contact");

const headerNav = document.querySelector("header");
const toReveal = document.querySelectorAll("section:not(#home) .toReveal");
const homeToReveal = document.querySelectorAll("#home .toReveal");
const navToReveal = document.querySelectorAll("header .toReveal");

//!###########################
//revealing toggling
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("reveal");
      //   //making the elements only reveal once
      //   observer.unobserve(entry.target);
    } else {
      entry.target.classList.remove("reveal");
    }
  });
});
toReveal.forEach((el) => {
  observer.observe(el);
});
//!###########################
// scroll top
const scrollTop = document.querySelector(".scrollTop");
scrollTop.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

window.onscroll = () => {
  if (window.scrollY < skillsSection.offsetTop - 100) {
    activeNav(0);
  } else if (
    window.scrollY >= skillsSection.offsetTop - 100 &&
    window.scrollY < projectsSection.offsetTop - 100
  ) {
    activeNav(1);
  } else if (
    window.scrollY >= projectsSection.offsetTop - 100 &&
    window.scrollY < educationSection.offsetTop - 100
  ) {
    activeNav(2);
  } else if (
    window.scrollY >= educationSection.offsetTop - 100 &&
    window.scrollY < contactSection.offsetTop - 100
  ) {
    activeNav(3);
  } else if (window.scrollY >= contactSection.offsetTop - 100) {
    activeNav(4);
  }

  // showing the scroll top button
  if (window.scrollY >= skillsSection.offsetTop + 50) {
    scrollTop.classList.add("show");
  } else {
    scrollTop.classList.remove("show");
  }
};

function activeNav(j) {
  for (let i = 0; i < 5; i++) {
    let li = document.querySelector("header ul li:nth-child(" + (i + 1) + ")");
    if (i == j) li.classList.add("active");
    else li.classList.remove("active");
  }
}

//!--- revealing the home section's elements (not like the other elements) ---
const homeIcons = document.querySelectorAll("#home li");
const navIcons = document.querySelectorAll("header ul li");
setTimeout(() => {
  homeToReveal.forEach((li) => {
    li.classList.add("reveal");
  });
  navToReveal.forEach((li) => {
    li.classList.add("reveal");
  });
}, 1000);

//!=== hiding the header ---
const hideHeader = document.querySelector(".hide-header");
const showHeader = document.querySelector(".show-header");

hideHeader.addEventListener("click", () => {
  headerNav.classList.add("hide");
  showHeader.classList.add("show");
  hideHeader.classList.remove("show");
});
showHeader.addEventListener("click", () => {
  headerNav.classList.remove("hide");
  hideHeader.classList.add("show");
  showHeader.classList.remove("show");
});

//!--------- typing text ----------------
const hello = document.querySelector(".hello");
const job = document.querySelector(".job");

let HelloText = `Hello, I'm Jacer Chetoui`;

function typing(field, text) {
  field.textContent = "";
  let interval = setInterval(() => {
    if (field.textContent.length == text.length) {
      clearInterval(interval);
    } else {
      field.textContent += text[field.textContent.length];
    }
  }, 120);
}

setTimeout(() => {
  typing(hello, HelloText);
  job.classList.add("showText");
  document.querySelectorAll("li").forEach((li) => {
    li.style.transitionDelay = "0s";
  });
}, 4200);

// !== preloader ===

window.addEventListener("load", () => {
  document.querySelector(".preloader").style.display = "none";
});

//----------- switching projects -------------

const allBtn = document.querySelector(".all");
const normalBtn = document.querySelector(".normal" || ".react");
const fullBtn = document.querySelector(".full");

allBtn.addEventListener("click", () => {
  allBtn.classList.add("active");
  normalBtn.classList.remove("active");
  fullBtn.classList.remove("active");

  document.querySelectorAll(".project").forEach((li) => {
    li.classList.remove("hide");
  });
  document.querySelector(".more-react").classList.remove("show");
});
function normalAndReact() {
  normalBtn.classList.add("active");
  allBtn.classList.remove("active");
  fullBtn.classList.remove("active");

  document.querySelectorAll(".project").forEach((li) => {
    if (li.classList.contains("normal") || li.classList.contains("react")) {
      li.classList.remove("hide");
    } else {
      li.classList.add("hide");
    }
  });
  document.querySelector(".more-react").classList.add("show");
}
normalBtn.addEventListener("click", normalAndReact);

fullBtn.addEventListener("click", () => {
  fullBtn.classList.add("active");
  allBtn.classList.remove("active");
  normalBtn.classList.remove("active");
  document.querySelectorAll(".project").forEach((li) => {
    if (li.classList.contains("normal") || li.classList.contains("react")) {
      li.classList.add("hide");
    } else {
      li.classList.remove("hide");
    }
  });
  document.querySelector(".more-react").classList.remove("show");
});
