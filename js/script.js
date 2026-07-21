console.log("Portfolio Loaded Successfully!");

console.log("Script loaded");

console.log(document.getElementById("contact-form"));

const topBtn = document.getElementById("topBtn");

if (topBtn) {

    window.onscroll = function () {

        if (document.documentElement.scrollTop > 300) {
            topBtn.style.display = "block";
        } else {
            topBtn.style.display = "none";
        }

    };

    topBtn.onclick = function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    };

}


// -----Scroll------
ScrollReveal({

    distance: "60px",
    duration: 1800,
    delay: 200,
    reset: false

});

ScrollReveal().reveal(".hero-content", {
    origin: "left"
});

ScrollReveal().reveal(".hero-image", {
    origin: "right"
});

ScrollReveal().reveal(".about", {
    origin: "bottom"
});

ScrollReveal().reveal(".skills", {
    origin: "bottom"
});

ScrollReveal().reveal(".projects", {
    origin: "bottom"
});

ScrollReveal().reveal(".certifications", {
    origin: "bottom"
});

ScrollReveal().reveal(".education", {
    origin: "bottom"
});

ScrollReveal().reveal(".contact", {
    origin: "bottom"
});


// Active Navbar

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


// -------------Email JS----------------

const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");


if (form) {

    form.addEventListener("submit", async function (e) {

        e.preventDefault();


        const formData = new FormData(form);

        const button = form.querySelector("button");

        button.innerHTML = "Sending...";
        button.disabled = true


        status.innerHTML = "Sending...";


        try {

            const response = await fetch("https://formspree.io/f/mqerlgjr", {

                method: "POST",

                body: formData,

                headers: {
                    "Accept": "application/json"
                }

            });


            if (response.ok) {

                status.innerHTML = "✅ Message Sent Successfully!";

                form.reset();
                button.innerHTML = "Send Message";
                button.disabled = false;

            }
            else {

                status.innerHTML = "❌ Something went wrong. Try again.";

            }


        }
        catch (error) {

            status.innerHTML = "❌ Network error. Try again.";

            button.innerHTML = "Send Message";
            button.disabled = false;

        }


    });

}