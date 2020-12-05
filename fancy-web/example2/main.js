const toggle = document.getElementById("navbar-toggle");
const navbar = document.getElementById("navbar");
let navbarHeight = 0;
toggle.addEventListener("click", () => {
  const isExpanded = navbar.getAttribute("expanded") === "true";
  if (isExpanded) {
    navbar.setAttribute("expanded", "false");
    navbar.style.height = 0;
  } else {
    navbar.setAttribute("expanded", "true");
    if (navbarHeight === 0) {
      navbar.style.height = "auto";
      navbarHeight = navbar.clientHeight;
      console.log(navbarHeight);
      navbar.style.height = 0;
    }
    //浏览器的渲染优化机制
    setTimeout(() => {
      navbar.style.height = navbarHeight + "px";
    }, 0);
  }
});
