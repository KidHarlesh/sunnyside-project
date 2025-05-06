function toggle() {
  let hamIcon = document.getElementById("hamburger");
  let mobileNav = document.getElementById("mobilenavi");
  const navItems = document.querySelectorAll(".mobilenav li");
  hamIcon.addEventListener("click", function () {
    // Toggle a class or remove a specific class
    mobileNav.classList.toggle("active");
    // If "active" class exists, remove it; otherwise, add it

  });
    navItems.forEach((item) => {
      item.addEventListener("click", function () {
        mobileNav.classList.remove("active"); // Remove the active class to hide navigation
      });
    });mn
}
// Initialize the toggle function after the DOM loads
document.addEventListener("DOMContentLoaded", toggle);
// hi
// hi