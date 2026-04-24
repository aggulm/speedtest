const questionIcon = document.querySelector("#questionIcon");
const faqSection = document.querySelector(".faq-content");
const faqCloseLink = document.querySelector("#faqCloseLink");
const privacyOpenLink = document.querySelector("#privacyOpenLink");
const privacyModal = document.querySelector("#privacyPolicy");
const privacyCloseLink = document.querySelector("#closeBtn");
const modalOverlay = document.querySelector("#modalOverlay");

function syncModalUI() {
  const isAnyModalOpen = !!document.querySelector(".faq-content.is-open, .privacyP.is-open");
  document.body.classList.toggle("no-scroll", isAnyModalOpen);
  if (modalOverlay) {
    modalOverlay.classList.toggle("is-active", isAnyModalOpen);
    modalOverlay.setAttribute("aria-hidden", String(!isAnyModalOpen));
  }
}

function setModalState(modal, isOpen) {
  if (!modal) return;
  modal.classList.toggle("is-open", isOpen);
  modal.setAttribute("aria-hidden", String(!isOpen));
  syncModalUI();
}

function setFaqState(isOpen) {
  setModalState(faqSection, isOpen);
  if (questionIcon) {
    questionIcon.classList.toggle("iconQuestion", isOpen);
  }
}

function setPrivacyState(isOpen) {
  setModalState(privacyModal, isOpen);
}

function closeAllModals() {
  setFaqState(false);
  setPrivacyState(false);
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

if (privacyOpenLink) {
  privacyOpenLink.addEventListener("click", function (e) {
    e.preventDefault();
    setPrivacyState(true);
  });
}

if (privacyCloseLink) {
  privacyCloseLink.addEventListener("click", function (e) {
    e.preventDefault();
    setPrivacyState(false);
  });
}

if (modalOverlay) {
  modalOverlay.addEventListener("click", function () {
    closeAllModals();
  });
}

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeAllModals();
  }
});
