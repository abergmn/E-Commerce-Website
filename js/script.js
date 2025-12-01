// get/set year in footer
document.getElementById("year").innerText = new Date().getFullYear();

// mobile menu toggle
const nav = document.querySelector("nav ul");
const menuBtn = document.createElement("button");

menuBtn.textContent = "☰ Menu";
document.querySelector("nav").prepend(menuBtn);

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("open")
});

// smooth scroll
document.querySelectorAll("a[href^='#']").forEach((anchor) => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
    });
});
