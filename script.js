
const menuToggle = document.getElementById("menuToggle");
const navigation = document.getElementById("navigation");

// Mobile menu open/close
if (menuToggle && navigation) {
  menuToggle.addEventListener("click", () => {
    const opened = navigation.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", String(opened));
    menuToggle.setAttribute(
      "aria-label",
      opened ? "Close menu" : "Open menu"
    );
    menuToggle.textContent = opened ? "✕" : "☰";
  });

  // Close mobile menu after selecting a section
  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navigation.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open menu");
      menuToggle.textContent = "☰";
    });
  });
}

// Automatically update copyright year
const year = document.getElementById("year");
if (year) {
  year.textContent = new Date().getFullYear();
}
