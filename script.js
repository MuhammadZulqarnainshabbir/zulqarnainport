const menuButton = document.getElementById("menuButton");
const navLinks = document.querySelector(".nav-links");


// Mobile navigation
menuButton.addEventListener("click", () => {

    navLinks.classList.toggle("open");

});


// Close menu when clicking a link
document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("open");

    });

});


// Highlight active navigation item
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });


    document
        .querySelectorAll(".nav-links a")
        .forEach(link => {

            link.classList.remove("active");

            if (
                link.getAttribute("href") ===
                `#${current}`
            ) {

                link.classList.add("active");

            }

        });

});