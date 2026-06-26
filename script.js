alert("script loaded")

const cards = document.querySelectorAll(".info-content-container");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.2
});

cards.forEach(card => observer.observe(card));

document.getElementById("year").textContent = new Date().getFullYear();

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(faqQuestion => {
    faqQuestion.addEventListener("click", () => {

        const faqAnswer = faqQuestion.nextElementSibling;

        document.querySelectorAll(".faq-answer").forEach(answer => {
            if (answer !== faqAnswer) {
                answer.classList.remove("active");
            }
        });

        faqAnswer.classList.toggle("active");

    });
});

emailjs.init({
    publicKey: "LaGR7n9vy7UQrOeUS"
});

document
    .getElementById("contact-form")
    .addEventListener("submit", function(e) {

        e.preventDefault();

        emailjs.sendForm(
            "service_2dhksu9",
            "template_ay5leqs",
            this
        )
        .then(() => {
            const successMessage = document.getElementById("success-message");

            successMessage.style.display = "block";
            this.reset();

            setTimeout(() => {
                successMessage.style.display = "none";
            }, 5000);
        })
        .catch((error) => {
            console.error("EmailJS fout:", error);
            alert("Er ging iets mis.");
        });

    });

