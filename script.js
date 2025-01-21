// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// Ketika jastip menu diklik
document.querySelector("#jastip-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};
//klik di luar sidebar untuk menghilangkan nav
const jastip = document.querySelector("#jastip-menu");
document.addEventListener("click", function (e) {
  if (!jastip.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
