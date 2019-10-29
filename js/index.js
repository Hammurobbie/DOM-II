// Your code goes here

//Stops nav items from refreshing page
const navStop = document.querySelectorAll("a");
navStop.forEach(item =>
  item.addEventListener("click", event => {
    event.preventDefault();
  })
);

const logoChange = document.querySelector("img");
logoChange.addEventListener("mouseenter", () => {
  logoChange.style.transform = "scale(1.5)";
  logoChange.style.transition = "all 0.3s";
});

logoChange.addEventListener("mouseleave", () => {
  logoChange.style.transform = "scale(1)";
  logoChange.style.transition = "all 0.3s";
});

const contentSection = document.querySelector(".content-section");

contentSection.addEventListener("click", event => {
  contentSection.style.backgroundColor = "oldlace";
});

const imgCont = document.querySelector(".img-content");
imgCont.addEventListener("click", event => {
  imgCont.style.transform = "scale(1.03)";
  imgCont.style.trnasfrom = "all 0.3s";
  event.stopPropagation();
});
