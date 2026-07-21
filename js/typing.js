const roles = [
    "Python Full Stack Developer",
    "Flask Developer",
    "Backend Developer",
    "Open To Work"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

const typingElement = document.getElementById("typing");

function type() {

    const currentRole = roles[roleIndex];

    if (!deleting) {

        typingElement.textContent = currentRole.substring(0, charIndex++);
        
        if (charIndex > currentRole.length) {
            deleting = true;
            setTimeout(type, 1500);
            return;
        }

    } else {

        typingElement.textContent = currentRole.substring(0, charIndex--);

        if (charIndex < 0) {
            deleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
        }

    }

    setTimeout(type, deleting ? 40 : 90);
}

type();