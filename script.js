const navbar = document.querySelector(".navbar");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
  searchForm.classList.remove("active");
  caerItem.classList.remove("active");
};

///////////////////////////////////////////////////////////

const searchForm = document.querySelector(".search-form");

document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.toggle("active");
  navbar.classList.remove("active");
  caerItem.classList.remove("active");
};

////////////////////////////////////////////////

const caerItem = document.querySelector(".cart-items-container");

document.querySelector("#cart-btn").onclick = () => {
  caerItem.classList.toggle("active");
  navbar.classList.remove("active");
  searchForm.classList.remove("active");
};

////////////////////////////////////////////////

window.onscroll = () => {
  navbar.classList.remove("active");
  searchForm.classList.remove("active");
  caerItem.classList.remove("active");
};










const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  // rese : true
});

sr.reveal(".content, .heading ");