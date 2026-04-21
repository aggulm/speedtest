const questionIcon = document.querySelector("#questionIcon");
const faqSection = document.querySelector(".faq-content");
const faqCloseLink = document.querySelector("#faqCloseLink");

function setFaqState(isOpen) {
  faqSection.classList.toggle("faq-section", isOpen);
  questionIcon.classList.toggle("iconQuestion", isOpen);
  faqSection.setAttribute("aria-hidden", String(!isOpen));
}

if (questionIcon && faqSection) {
  questionIcon.addEventListener("click", function (e) {
    e.preventDefault();
    setFaqState(true);
  });
  if (faqCloseLink) {
    faqCloseLink.addEventListener("click", function (e) {
      e.preventDefault();
      setFaqState(false);
    });
  }
}
