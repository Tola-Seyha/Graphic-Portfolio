// =============================
// Typing Animation
// =============================
const words = [
    "GRAPHIC DESIGNER",
    "UI/UX DESIGNER"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typingElement = document.querySelector(".typing");

function typingAnimation() {
    const currentWord = words[wordIndex];

    if (!deleting) {
        typingElement.textContent = currentWord.substring(0, charIndex++);
        if (charIndex > currentWord.length) {
            deleting = true;
            setTimeout(typingAnimation, 1500);
            return;
        }
    } else {
        typingElement.textContent = currentWord.substring(0, charIndex--);
        if (charIndex < 0) {
            deleting = false;
            wordIndex++;
            if (wordIndex >= words.length) {
                wordIndex = 0;
            }
        }
    }
    setTimeout(typingAnimation, deleting ? 60 : 120);
}

typingAnimation();

// =============================
// Scroll Reveal Animation
// =============================
const reveals = document.querySelectorAll(".reveal");

function revealAnimation() {
    const windowHeight = window.innerHeight;
    reveals.forEach(element => {
        const top = element.getBoundingClientRect().top;
        if (top < windowHeight - 100) {
            element.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealAnimation);
revealAnimation();

// =============================
// Navbar Scroll Effect
// =============================
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.style.background = "rgba(2,6,23,0.95)";
    } else {
        header.style.background = "rgba(2,6,23,0.7)";
    }
});

// =============================
// Smooth Mobile Menu Scroll
// =============================
const links = document.querySelectorAll("nav a");

links.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector(link.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// =============================
// Project & Skill Card 3D Tilt Effect
// =============================
const cards = document.querySelectorAll(".project-card, .skill-card");

cards.forEach(card => {
    card.addEventListener("mousemove", (e) => {
        if (window.innerWidth <= 950) return; // Disable on small touch screens
        
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.transform = `
            perspective(800px)
            rotateX(${-(y - rect.height / 2) / 20}deg)
            rotateY(${(x - rect.width / 2) / 20}deg)
            translateY(-10px)
        `;
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "";
    });
});

// =============================
// Contact Form Mailto
// =============================
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("nameInput").value.trim();
        const email = document.getElementById("emailInput").value.trim();
        const message = document.getElementById("messageInput").value.trim();

        const subject = encodeURIComponent(`Portfolio contact from ${name}`);
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);

        window.location.href = `mailto:tola.seyha07@gmail.com?subject=${subject}&body=${body}`;
        contactForm.reset();
    });
}