export default function initFaq() {
    const faqs = document.querySelectorAll(".faq");

    faqs.forEach(faq => {
        faq.addEventListener("click", () => {
            if (faq.classList.contains("active")) {
                faq.classList.remove("active");
            } else {
                faqs.forEach(otherFaq => otherFaq.classList.remove("active"));
                faq.classList.add("active");
            }
        });
    });
}